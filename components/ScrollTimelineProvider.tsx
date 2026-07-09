"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_SIGNAL_DRIFT } from "@/lib/motion";

type SceneRange = {
  start: number;
  end: number;
};

type ScrollTimelineContextValue = {
  sceneRanges: Record<string, SceneRange>;
  scrollYProgress: MotionValue<number>;
  shouldReduceMotion: boolean;
  smoothScrollYProgress: MotionValue<number>;
};

const ScrollTimelineContext = createContext<ScrollTimelineContextValue | null>(
  null,
);

const DEFAULT_RANGE: SceneRange = { start: 0, end: 1 };
const RANGE_EPSILON = 0.0005;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function rangesEqual(
  previous: Record<string, SceneRange>,
  next: Record<string, SceneRange>,
) {
  const previousKeys = Object.keys(previous);
  const nextKeys = Object.keys(next);

  if (previousKeys.length !== nextKeys.length) return false;

  return nextKeys.every((key) => {
    const previousRange = previous[key];
    const nextRange = next[key];

    if (!previousRange || !nextRange) return false;

    return (
      Math.abs(previousRange.start - nextRange.start) < RANGE_EPSILON &&
      Math.abs(previousRange.end - nextRange.end) < RANGE_EPSILON
    );
  });
}

export function ScrollTimelineProvider({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 36,
    mass: 0.12,
    restDelta: 0.00001,
    restSpeed: 0.00001,
    velocity: 0,
  });
  const [sceneRanges, setSceneRanges] = useState<Record<string, SceneRange>>({});

  useEffect(() => {
    let frame = 0;

    const measureScenes = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const next: Record<string, SceneRange> = {};

      document
        .querySelectorAll<HTMLElement>("[data-scroll-scene]")
        .forEach((element) => {
          const sceneId = element.dataset.scrollScene;
          if (!sceneId) return;

          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = top + rect.height;
          const blendEnd = Math.min(bottom, top + rect.height * 0.72);
          const start = clamp((top - window.innerHeight * 0.9) / maxScroll, 0, 1);
          const end = clamp(
            (blendEnd - window.innerHeight * 0.12) / maxScroll,
            0,
            1,
          );

          next[sceneId] = {
            start,
            end: Math.max(end, start + 0.001),
          };
        });

      setSceneRanges((previous) => (rangesEqual(previous, next) ? previous : next));
    };

    const scheduleMeasure = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(measureScenes);
    };

    const resizeObserver = new ResizeObserver(scheduleMeasure);
    resizeObserver.observe(document.documentElement);
    resizeObserver.observe(document.body);

    scheduleMeasure();
    window.addEventListener("resize", scheduleMeasure, { passive: true });
    window.addEventListener("load", scheduleMeasure, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
      window.removeEventListener("load", scheduleMeasure);
    };
  }, []);

  const value = useMemo(
    () => ({
      sceneRanges,
      scrollYProgress,
      shouldReduceMotion,
      smoothScrollYProgress,
    }),
    [sceneRanges, scrollYProgress, shouldReduceMotion, smoothScrollYProgress],
  );

  return (
    <ScrollTimelineContext.Provider value={value}>
      {children}
    </ScrollTimelineContext.Provider>
  );
}

export function useScrollTimeline() {
  const context = useContext(ScrollTimelineContext);

  if (!context) {
    throw new Error("useScrollTimeline must be used within ScrollTimelineProvider");
  }

  return context;
}

export function useSceneProgress(sceneId: string, phase = 0) {
  const { sceneRanges, shouldReduceMotion, smoothScrollYProgress } =
    useScrollTimeline();
  const range = sceneRanges[sceneId] ?? DEFAULT_RANGE;
  const rawProgress = useTransform(
    smoothScrollYProgress,
    [range.start, range.end],
    [0, 1],
    { clamp: true },
  );
  const phasedProgress = useTransform(rawProgress, (value) => {
    const normalizedPhase = clamp(phase, 0, 0.85);
    return clamp((value - normalizedPhase) / (1 - normalizedPhase), 0, 1);
  });

  return {
    progress: phasedProgress,
    shouldReduceMotion,
  };
}

export const SCROLL_TIMELINE_EASE = EASE_SIGNAL_DRIFT;
