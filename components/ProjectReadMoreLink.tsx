"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  DURATION_BASE,
  DURATION_FEEDBACK,
  DURATION_REVEAL,
  EASE_DEVELOP,
  EASE_FEEDBACK,
  EASE_SIGNAL_DRIFT,
  EASE_TRACE,
} from "@/lib/motion";

const NAVIGATION_DELAY_MS = DURATION_REVEAL * 1000;

type ProjectReadMoreLinkProps = {
  href: string;
  projectName: string;
  accentColor: string;
  id?: string;
};

function shouldUseNativeNavigation(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey ||
    (event.currentTarget.target !== "" && event.currentTarget.target !== "_self")
  );
}

export function ProjectReadMoreLink({
  href,
  projectName,
  accentColor,
  id,
}: ProjectReadMoreLinkProps) {
  const router = useRouter();
  const shouldReduce = useReducedMotion();
  const [isNavigating, setIsNavigating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function prefetchProject() {
    router.prefetch(href);
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (shouldUseNativeNavigation(event)) return;

    event.preventDefault();

    if (shouldReduce) {
      router.push(href);
      return;
    }

    if (isNavigating) return;

    setIsNavigating(true);
    prefetchProject();

    timeoutRef.current = window.setTimeout(() => {
      router.push(href);
    }, NAVIGATION_DELAY_MS);
  }

  return (
    <>
      <a
        href={href}
        id={id}
        aria-label={`Read more about ${projectName}`}
        aria-busy={isNavigating}
        onClick={handleClick}
        onFocus={prefetchProject}
        onMouseEnter={prefetchProject}
        className="
          group/readmore relative inline-flex items-center gap-1.5
          rounded-sm text-xs font-medium
          transition-all motion-feedback-transition
          hover:opacity-100 focus-visible:opacity-100
        "
        style={
          {
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            color: accentColor,
            opacity: isNavigating ? 1 : 0.85,
          } as CSSProperties
        }
      >
        <motion.span
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-px w-full origin-left rounded-full"
          initial={false}
          animate={{ scaleX: isNavigating ? 1 : 0 }}
          whileHover={shouldReduce ? undefined : { scaleX: 1 }}
          transition={{ duration: DURATION_BASE, ease: EASE_SIGNAL_DRIFT }}
          style={{ backgroundColor: accentColor, opacity: 0.58 }}
        />

        <AnimatePresence>
          {isNavigating && (
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 -z-10 origin-left rounded-sm"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.14, scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: DURATION_BASE, ease: EASE_SIGNAL_DRIFT }}
              style={{ backgroundColor: accentColor }}
            />
          )}
        </AnimatePresence>

        <span className="relative z-10">Read More</span>
        <motion.span
          aria-hidden="true"
          className="relative z-10 inline-flex"
          initial={false}
          animate={isNavigating ? { x: [0, 5, 14], opacity: [1, 1, 0.35] } : { x: 0, opacity: 1 }}
          transition={{ duration: DURATION_BASE, ease: EASE_DEVELOP }}
        >
          <ArrowRight size={13} />
        </motion.span>
      </a>

      <AnimatePresence>
        {isNavigating && !shouldReduce && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION_FEEDBACK, ease: EASE_FEEDBACK }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.64] }}
              transition={{ duration: DURATION_REVEAL, ease: EASE_DEVELOP }}
              style={{
                background: `radial-gradient(ellipse at center, color-mix(in srgb, ${accentColor} 10%, transparent) 0%, transparent 62%)`,
              }}
            />
            <motion.div
              className="absolute left-0 right-0 top-1/2 h-px origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: DURATION_REVEAL, ease: EASE_TRACE }}
              style={{
                background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
              }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: [0, 1, 0], scale: [0.7, 1, 1.45] }}
              transition={{ duration: DURATION_REVEAL, ease: EASE_DEVELOP }}
              style={{ backgroundColor: accentColor }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
