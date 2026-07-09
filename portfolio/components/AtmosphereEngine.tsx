"use client";

/**
 * AtmosphereEngine
 *
 * A single root-mounted, canvas-backed atmosphere system. The DOM handles the
 * slowest large-field light movement; canvas handles grain, dust, signal dots,
 * telemetry traces, pointer parallax, and scroll progression without adding
 * dozens of animated DOM nodes. Sections publish scene ids through the shared
 * scroll timeline; this engine owns the ambient response.
 */

import { useEffect, useRef } from "react";
import { motion, useMotionValueEvent } from "motion/react";
import { useScrollTimeline } from "@/components/ScrollTimelineProvider";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  ATMOSPHERE_DEFAULT_TOKENS,
  type AtmosphereColorTemperature,
  type AtmosphereTokens,
  resolveAtmosphereTokens,
} from "@/lib/atmosphere";
import {
  DURATION_BACKGROUND_EVOLUTION,
  DURATION_LIGHT_BLOOM,
  DURATION_TELEMETRY_SCAN,
  EASE_SIGNAL_DRIFT,
  EASE_TRACE,
} from "@/lib/motion";

type Rgb = readonly [number, number, number];

type Palette = {
  steel: Rgb;
  gold: Rgb;
  rust: Rgb;
  dust: Rgb;
  grain: Rgb;
  alphaScale: number;
  grainScale: number;
};

type DustParticle = {
  x: number;
  y: number;
  z: number;
  radius: number;
  alpha: number;
  drift: number;
  speed: number;
  phase: number;
};

type SignalParticle = {
  x: number;
  y: number;
  z: number;
  radius: number;
  alpha: number;
  drift: number;
  speed: number;
  phase: number;
  color: "steel" | "gold" | "rust";
};

type Trace = {
  y: number;
  length: number;
  speed: number;
  phase: number;
  alpha: number;
  color: "steel" | "gold" | "rust";
};

const TAU = Math.PI * 2;
const DPR_CAP = 1;
const GRAIN_WIDTH = 360;
const GRAIN_HEIGHT = 220;

const FIELD_CYCLE = DURATION_BACKGROUND_EVOLUTION;
const BLOOM_CYCLE = DURATION_LIGHT_BLOOM;
const SCAN_CYCLE = DURATION_TELEMETRY_SCAN;

const FIELD_TRANSITION = {
  duration: FIELD_CYCLE,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: EASE_SIGNAL_DRIFT,
};

const BLOOM_TRANSITION = {
  duration: BLOOM_CYCLE,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: EASE_SIGNAL_DRIFT,
};

const SCAN_TRANSITION = {
  duration: SCAN_CYCLE,
  repeat: Infinity,
  repeatType: "loop" as const,
  ease: EASE_TRACE,
};

const FALLBACK_STEEL: Rgb = [92, 122, 153];
const FALLBACK_GOLD: Rgb = [201, 169, 97];
const FALLBACK_RUST: Rgb = [191, 91, 61];
const FALLBACK_DARK_INK: Rgb = [237, 230, 218];
const FALLBACK_LIGHT_INK: Rgb = [24, 20, 16];

type SceneRangeMap = Record<string, { start: number; end: number }>;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function rgba(color: Rgb, alpha: number) {
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha.toFixed(4)})`;
}

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function parseCssColor(value: string, fallback: Rgb): Rgb {
  const normalized = value.trim();

  if (normalized.startsWith("#")) {
    const hex = normalized.slice(1);
    if (hex.length === 6) {
      return [
        Number.parseInt(hex.slice(0, 2), 16),
        Number.parseInt(hex.slice(2, 4), 16),
        Number.parseInt(hex.slice(4, 6), 16),
      ];
    }
  }

  const rgbMatch = normalized.match(
    /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i,
  );

  if (rgbMatch) {
    return [
      Number.parseFloat(rgbMatch[1]),
      Number.parseFloat(rgbMatch[2]),
      Number.parseFloat(rgbMatch[3]),
    ];
  }

  return fallback;
}

function readPalette(): Palette {
  const root = document.documentElement;
  const style = getComputedStyle(root);
  const isLightbox = root.getAttribute("data-theme") === "light";

  return {
    steel: parseCssColor(
      style.getPropertyValue("--color-signal-steel"),
      FALLBACK_STEEL,
    ),
    gold: parseCssColor(
      style.getPropertyValue("--color-signal-gold"),
      FALLBACK_GOLD,
    ),
    rust: parseCssColor(
      style.getPropertyValue("--color-signal-rust"),
      FALLBACK_RUST,
    ),
    dust: isLightbox ? FALLBACK_LIGHT_INK : FALLBACK_DARK_INK,
    grain: isLightbox ? FALLBACK_LIGHT_INK : FALLBACK_DARK_INK,
    alphaScale: isLightbox ? 0.34 : 0.72,
    grainScale: isLightbox ? 0.18 : 0.28,
  };
}

function createGrainTexture(palette: Palette) {
  const texture = document.createElement("canvas");
  const textureCtx = texture.getContext("2d", { alpha: true });

  texture.width = GRAIN_WIDTH;
  texture.height = GRAIN_HEIGHT;

  if (!textureCtx) return texture;

  const random = mulberry32(0x7b2d6f);
  const image = textureCtx.createImageData(texture.width, texture.height);
  const data = image.data;

  for (let index = 0; index < data.length; index += 4) {
    const alpha = (random() > 0.82 ? 2 + random() * 6 : random() * 1.5) *
      palette.grainScale;

    data[index] = palette.grain[0];
    data[index + 1] = palette.grain[1];
    data[index + 2] = palette.grain[2];
    data[index + 3] = alpha;
  }

  textureCtx.putImageData(image, 0, 0);
  return texture;
}

function buildDust(width: number, height: number): DustParticle[] {
  const areaScale = clamp((width * height) / (1440 * 900), 0.45, 1);
  const baseCount = width < 768 ? 12 : 22;
  const count = Math.round(baseCount * areaScale);
  const random = mulberry32(0x4a7c15 + Math.round(width) * 17 + Math.round(height));

  return Array.from({ length: count }, () => {
    const z = 0.2 + random() * 0.8;

    return {
      x: random() * width,
      y: random() * height,
      z,
      radius: 0.35 + random() * 0.85 * z,
      alpha: 0.01 + random() * 0.026,
      drift: 4 + random() * 18 * z,
      speed: 0.014 + random() * 0.032,
      phase: random() * TAU,
    };
  });
}

function buildSignals(width: number, height: number): SignalParticle[] {
  const areaScale = clamp((width * height) / (1440 * 900), 0.45, 1);
  const baseCount = width < 768 ? 5 : 10;
  const count = Math.round(baseCount * areaScale);
  const random = mulberry32(0x91e6b7 + Math.round(width) * 31 + Math.round(height));
  const colors: SignalParticle["color"][] = ["steel", "gold", "rust"];

  return Array.from({ length: count }, (_, index) => {
    const z = 0.35 + random() * 0.65;

    return {
      x: random() * width,
      y: random() * height,
      z,
      radius: 0.7 + random() * 1.15 * z,
      alpha: 0.025 + random() * 0.055,
      drift: 7 + random() * 20 * z,
      speed: 0.018 + random() * 0.038,
      phase: random() * TAU,
      color: colors[(index + Math.floor(random() * colors.length)) % colors.length],
    };
  });
}

function buildTraces(width: number): Trace[] {
  const random = mulberry32(0x2f8d41 + Math.round(width) * 13);
  const count = width < 768 ? 1 : 2;
  const colors: Trace["color"][] = ["steel", "gold", "rust"];

  return Array.from({ length: count }, (_, index) => ({
    y: 0.16 + random() * 0.72,
    length: 80 + random() * 180,
    speed: 2.2 + random() * 5.8,
    phase: random() * 900,
    alpha: 0.006 + random() * 0.01,
    color: colors[index % colors.length],
  }));
}

function colorFromPalette(palette: Palette, color: Trace["color"]): Rgb {
  if (color === "gold") return palette.gold;
  if (color === "rust") return palette.rust;
  return palette.steel;
}

function sceneIdFromProgress(progress: number, ranges: SceneRangeMap) {
  const entries = Object.entries(ranges);
  let selected = "hero";
  let selectedStart = -1;

  for (const [sceneId, range] of entries) {
    if (progress >= range.start - 0.02 && progress <= range.end + 0.08) {
      if (range.start >= selectedStart) {
        selected = sceneId;
        selectedStart = range.start;
      }

      continue;
    }

    if (progress >= range.start && range.start >= selectedStart) {
      selected = sceneId;
      selectedStart = range.start;
    }
  }

  return selected;
}

function glowColorForTemperature(temperature: AtmosphereColorTemperature) {
  if (temperature === "cool") return "var(--color-signal-steel)";
  if (temperature === "warm") return "var(--color-signal-gold)";
  if (temperature === "output") return "var(--color-signal-rust)";

  return "color-mix(in srgb, var(--color-signal-steel) 52%, var(--color-signal-gold) 48%)";
}

function applyAtmosphereTokens(
  element: HTMLDivElement,
  tokens: AtmosphereTokens,
) {
  element.style.setProperty("--atmosphere-haze-opacity", String(tokens.hazeOpacity));
  element.style.setProperty(
    "--atmosphere-glow-color",
    glowColorForTemperature(tokens.colorTemperature),
  );
  element.style.setProperty("--atmosphere-glow-core", `${tokens.glowIntensity}%`);
  element.style.setProperty(
    "--atmosphere-glow-halo",
    `${tokens.glowIntensity * 0.36}%`,
  );
  element.style.setProperty(
    "--atmosphere-glow-fill",
    `${tokens.glowIntensity * 0.12}%`,
  );
  element.style.setProperty("--atmosphere-glow-size", tokens.glowSize);
  element.style.setProperty("--atmosphere-glow-x", tokens.glowX);
  element.style.setProperty("--atmosphere-glow-y", tokens.glowY);
  element.style.setProperty("--atmosphere-scan-opacity", String(tokens.scanOpacity));
  element.style.setProperty("--atmosphere-motion-speed", String(tokens.motionSpeed));
}

export function AtmosphereEngine() {
  const engineRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const scrollProgressRef = useRef(0);
  const sceneRangesRef = useRef<SceneRangeMap>({});
  const atmosphereTokensRef = useRef<AtmosphereTokens>(
    ATMOSPHERE_DEFAULT_TOKENS,
  );
  const { sceneRanges, smoothScrollYProgress } = useScrollTimeline();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    sceneRangesRef.current = sceneRanges;
    const sceneId = sceneIdFromProgress(scrollProgressRef.current, sceneRanges);
    const tokens = resolveAtmosphereTokens(sceneId);
    atmosphereTokensRef.current = tokens;

    if (engineRef.current) {
      applyAtmosphereTokens(engineRef.current, tokens);
    }
  }, [sceneRanges]);

  useEffect(() => {
    if (engineRef.current) {
      applyAtmosphereTokens(engineRef.current, atmosphereTokensRef.current);
    }
  }, []);

  useMotionValueEvent(smoothScrollYProgress, "change", (latest) => {
    scrollProgressRef.current = latest;

    const sceneId = sceneIdFromProgress(latest, sceneRangesRef.current);
    const tokens = resolveAtmosphereTokens(sceneId);
    atmosphereTokensRef.current = tokens;

    if (engineRef.current) {
      applyAtmosphereTokens(engineRef.current, tokens);
    }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx) return;

    const state = {
      width: 0,
      height: 0,
      dpr: 1,
      dust: [] as DustParticle[],
      signals: [] as SignalParticle[],
      traces: [] as Trace[],
      palette: readPalette(),
      grainTexture: null as HTMLCanvasElement | null,
      pointerX: 0,
      pointerY: 0,
      targetPointerX: 0,
      targetPointerY: 0,
      isVisible: document.visibilityState === "visible",
    };

    const paint = (timestamp: number) => {
      if (!shouldReduceMotion && !state.isVisible) {
        frameRef.current = null;
        return;
      }

      const atmosphere = atmosphereTokensRef.current;
      const time = shouldReduceMotion
        ? 0.2
        : (timestamp / 1000) * atmosphere.motionSpeed;
      const { width, height, dpr, palette } = state;
      const density = clamp(atmosphere.particleDensity, 0.24, 1);
      const dustLimit = Math.max(1, Math.round(state.dust.length * density));
      const traceLimit = Math.max(
        1,
        Math.round(state.traces.length * clamp(density + 0.1, 0.35, 1)),
      );
      const signalLimit = Math.max(1, Math.round(state.signals.length * density));

      state.pointerX += (state.targetPointerX - state.pointerX) * 0.045;
      state.pointerY += (state.targetPointerY - state.pointerY) * 0.045;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const scrollProgress = scrollProgressRef.current;
      const scrollShift = (scrollProgress - 0.5) * 24;
      const parallaxX = state.pointerX * 4.5;
      const parallaxY = state.pointerY * 3.5;

      ctx.globalCompositeOperation = "source-over";

      for (let index = 0; index < dustLimit; index += 1) {
        const particle = state.dust[index];
        const driftA = shouldReduceMotion
          ? 0
          : Math.sin(time * particle.speed + particle.phase) * particle.drift;
        const driftB = shouldReduceMotion
          ? 0
          : Math.cos(time * particle.speed * 0.72 + particle.phase) *
            particle.drift *
            0.48;
        const alphaPulse = shouldReduceMotion
          ? 0.82
          : 0.62 + Math.sin(time * particle.speed * 1.7 + particle.phase) * 0.18;
        const x =
          particle.x +
          driftA +
          parallaxX * particle.z +
          scrollShift * (particle.z - 0.5);
        const y =
          particle.y +
          driftB +
          parallaxY * particle.z +
          scrollShift * particle.z * 0.34;

        ctx.fillStyle = rgba(
          palette.dust,
          particle.alpha * alphaPulse * palette.alphaScale,
        );
        ctx.beginPath();
        ctx.arc(x, y, particle.radius, 0, TAU);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "screen";

      for (let index = 0; index < traceLimit; index += 1) {
        const trace = state.traces[index];
        const color = colorFromPalette(palette, trace.color);
        const travel = (time * trace.speed + trace.phase) % (width + 360);
        const x = travel - 180 + parallaxX * 0.55;
        const y =
          trace.y * height +
          Math.sin(time * 0.035 + trace.phase) * 16 +
          scrollShift * 0.5;
        const pulse = shouldReduceMotion
          ? 0.52
          : Math.max(0, Math.sin(time * 0.09 + trace.phase)) ** 2;

        ctx.strokeStyle = rgba(
          color,
          trace.alpha * (0.28 + pulse) * palette.alphaScale,
        );
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + trace.length, y);
        ctx.stroke();
      }

      const scanY =
        shouldReduceMotion
          ? height * 0.46
          : ((time * 2.4 + scrollProgress * height * 0.18) %
              (height + 220)) -
            110;
      ctx.strokeStyle = rgba(
        palette.steel,
        atmosphere.scanOpacity * 0.075 * palette.alphaScale,
      );
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY + height * 0.025);
      ctx.stroke();

      for (let index = 0; index < signalLimit; index += 1) {
        const particle = state.signals[index];
        const color = colorFromPalette(palette, particle.color);
        const driftA = shouldReduceMotion
          ? 0
          : Math.sin(time * particle.speed + particle.phase) * particle.drift;
        const driftB = shouldReduceMotion
          ? 0
          : Math.cos(time * particle.speed * 0.9 + particle.phase) *
            particle.drift *
            0.46;
        const pulse = shouldReduceMotion
          ? 0.62
          : 0.44 + Math.sin(time * particle.speed * 3 + particle.phase) * 0.32;
        const x =
          particle.x +
          driftA +
          parallaxX * particle.z * 1.4 +
          scrollShift * (particle.z - 0.35);
        const y =
          particle.y +
          driftB +
          parallaxY * particle.z * 1.2 +
          scrollShift * particle.z * 0.48;

        ctx.fillStyle = rgba(
          color,
          particle.alpha * pulse * palette.alphaScale,
        );
        ctx.beginPath();
        ctx.arc(x, y, particle.radius, 0, TAU);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";

      if (state.grainTexture) {
        ctx.save();
        ctx.globalAlpha = palette.grainScale * 0.32;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(state.grainTexture, 0, 0, width, height);
        ctx.restore();
      }

      if (!shouldReduceMotion && state.isVisible) {
        frameRef.current = requestAnimationFrame(paint);
      } else {
        frameRef.current = null;
      }
    };

    const renderStaticFrame = () => paint(200);

    const resize = () => {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
      state.dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);

      canvas.width = Math.round(state.width * state.dpr);
      canvas.height = Math.round(state.height * state.dpr);

      state.dust = buildDust(state.width, state.height);
      state.signals = buildSignals(state.width, state.height);
      state.traces = buildTraces(state.width);
      state.grainTexture = createGrainTexture(state.palette);

      if (shouldReduceMotion) renderStaticFrame();
    };

    const handlePointerMove = (event: PointerEvent) => {
      state.targetPointerX = clamp(
        (event.clientX / window.innerWidth - 0.5) * 2,
        -1,
        1,
      );
      state.targetPointerY = clamp(
        (event.clientY / window.innerHeight - 0.5) * 2,
        -1,
        1,
      );
    };

    const handlePointerLeave = () => {
      state.targetPointerX = 0;
      state.targetPointerY = 0;
    };

    const themeObserver = new MutationObserver(() => {
      state.palette = readPalette();
      state.grainTexture = createGrainTexture(state.palette);
      if (shouldReduceMotion) renderStaticFrame();
    });

    const handleVisibilityChange = () => {
      state.isVisible = document.visibilityState === "visible";

      if (state.isVisible && !shouldReduceMotion && frameRef.current === null) {
        frameRef.current = requestAnimationFrame(paint);
      }
    };

    resize();
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (!shouldReduceMotion) {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("pointerleave", handlePointerLeave, {
        passive: true,
      });
      frameRef.current = requestAnimationFrame(paint);
    } else {
      renderStaticFrame();
    }

    return () => {
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [shouldReduceMotion]);

  return (
    <div
      ref={engineRef}
      aria-hidden="true"
      className="atmosphere-engine"
      data-atmosphere-engine=""
      data-reduced-motion={shouldReduceMotion ? "true" : undefined}
    >
      <motion.div
        className="atmosphere-engine__gradient"
        initial={{ x: "-1.2%", y: "-0.6%", scale: 1, opacity: 0.78 }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["-1.2%", "1.4%", "-0.5%"],
                y: ["-0.6%", "1.1%", "-0.2%"],
                scale: [1, 1.018, 1.006],
                opacity: [0.78, 0.9, 0.82],
              }
        }
        transition={FIELD_TRANSITION}
      />
      <motion.div
        className="atmosphere-engine__haze"
        initial={{ x: "-0.8%", y: "0.4%", opacity: 0.72 }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["-0.8%", "0.9%", "-0.2%"],
                y: ["0.4%", "-0.7%", "0.5%"],
                opacity: [0.72, 0.92, 0.76],
              }
        }
        transition={FIELD_TRANSITION}
      />
      <div className="atmosphere-engine__section-glow" />
      <motion.div
        className="atmosphere-engine__bloom"
        initial={{ x: "1.1%", y: "0.8%", scale: 1, opacity: 0.58 }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["1.1%", "-0.8%", "0.4%"],
                y: ["0.8%", "-1.2%", "0.2%"],
                scale: [1, 1.025, 1.01],
                opacity: [0.58, 0.76, 0.64],
              }
        }
        transition={BLOOM_TRANSITION}
      />
      <motion.div
        className="atmosphere-engine__scan"
        initial={{ y: "-7%", opacity: 0.2 }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: ["-7%", "7%"],
                opacity: [0.2, 0.36, 0.22],
              }
        }
        transition={SCAN_TRANSITION}
      />
      <canvas
        ref={canvasRef}
        className="atmosphere-engine__canvas"
        data-atmosphere-engine-canvas=""
      />
      <div className="atmosphere-engine__vignette" />
    </div>
  );
}
