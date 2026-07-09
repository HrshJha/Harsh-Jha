/**
 * lib/motion.ts — Cinematic Signal motion tokens.
 *
 * AUTHORITATIVE SOURCE: MOTION_SYSTEM.md Section 2.
 * Every animation in the codebase imports from this file.
 * Zero inline duration/easing values in any component.
 *
 * This file implements the exact locked values from MOTION_SYSTEM.md,
 * which itself is the implementation of tech.md §4 and rules.md §2.
 *
 * WHY tokens live here (not in globals.css alone):
 *   Motion's `transition` prop accepts JS numbers and arrays, not CSS custom
 *   properties. CSS properties are defined in globals.css alongside color tokens
 *   for any CSS-only transitions (toggle pill, nav hovers, card hover-lift).
 *   This file is the JS mirror — same values, one source of truth.
 */

/* ═══════════════════════════════════════════════════════════════════════════
   DURATION (seconds — Motion API convention)
   ═══════════════════════════════════════════════════════════════════════════ */

/** 150ms — direct-input feedback: button press, focus ring, checkbox.
 *  Deliberately below the 400ms floor — see MOTION_SYSTEM.md §1 flagged exception. */
export const DURATION_FEEDBACK = 0.15;

/** 400ms — default state changes: link trace, nav item, card hover.
 *  The floor rules.md sets for ambient motion. */
export const DURATION_BASE = 0.4;

/** 600ms — content entering the viewport: cards, section blocks, list items.
 *  Long enough to read as deliberate, short enough to not feel like a wait. */
export const DURATION_REVEAL = 0.6;

/** 900ms — photography-coded reveals: images, hero composition settling.
 *  Most deliberate timing — reserved for the literal photography metaphor. */
export const DURATION_DEVELOP = 0.9;

/** 500ms — Darkroom/Lightbox surface cross-fade.
 *  A room's lights changing, not a UI theme snap. */
export const DURATION_TOGGLE = 0.5;

/** 2800ms base — Signal Core node pulse, connector trace cycle.
 *  Slow enough to read as a live process, not a spinner.
 *  Per-node jitter: add nodeIndex * 137ms (see JITTER_OFFSET_MS). */
export const DURATION_AMBIENT_LOOP = 2.8;

/** 50.4s — ultra-slow base field evolution for the root atmosphere. */
export const DURATION_BACKGROUND_EVOLUTION = DURATION_AMBIENT_LOOP * 18;

/** 58.8s — slow bloom/light-breath cycle, offset from the base field. */
export const DURATION_LIGHT_BLOOM = DURATION_AMBIENT_LOOP * 21;

/** 44.8s — faint telemetry scan cycle, intentionally not synchronized. */
export const DURATION_TELEMETRY_SCAN = DURATION_AMBIENT_LOOP * 16;

/* ═══════════════════════════════════════════════════════════════════════════
   EASING (cubic-bezier arrays for Motion API)
   ═══════════════════════════════════════════════════════════════════════════ */

/** Quick, confident, zero overshoot. Pairs with DURATION_FEEDBACK.
 *  cubic-bezier(0.2, 0, 0, 1) */
export const EASE_FEEDBACK: [number, number, number, number] = [0.2, 0, 0, 1];

/** Symmetric slow-in/slow-out. Default for ambient/background motion.
 *  cubic-bezier(0.45, 0, 0.15, 1) */
export const EASE_SIGNAL_DRIFT: [number, number, number, number] = [0.45, 0, 0.15, 1];

/** Fast start, long gentle decel — like an image resolving into focus.
 *  Pairs with DURATION_REVEAL / DURATION_DEVELOP.
 *  cubic-bezier(0.16, 1, 0.3, 1) */
export const EASE_DEVELOP: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Constant-rate travel for stroke-dashoffset signal traces.
 *  Deliberately NOT eased — real signal transmission doesn't accelerate. */
export const EASE_TRACE = "linear" as const;

/** Keyframe-based pulse easing for Signal Core node glow only.
 *  NOTE: --ease-pulse cannot be expressed as a single cubic-bezier token,
 *  so this named Motion value is the JS-side equivalent of MOTION_SYSTEM.md §2. */
export const EASE_PULSE = "easeInOut" as const;

/* BANNED OUTRIGHT (MOTION_SYSTEM.md §5, rules.md §2):
   No spring, bounce, or elastic easing — any easing with overshoot.
   Not "just this once for delight." */

/* ═══════════════════════════════════════════════════════════════════════════
   CINEMATIC TIMING SCALE (507d74e0 prompt, implementation layer)
   ═══════════════════════════════════════════════════════════════════════════ */

/** Named timing families for audit/docs and reusable primitives.
 *  Durations are seconds because Motion uses seconds. */
export const TIMING_TOKENS = {
  micro: {
    duration: DURATION_FEEDBACK,
    delay: 0,
    ease: EASE_FEEDBACK,
    purpose: "Confirm a direct user action immediately.",
    examples: ["button press", "focus ring", "control acknowledgement"],
  },
  small: {
    duration: DURATION_BASE,
    delay: 0,
    ease: EASE_FEEDBACK,
    purpose: "Make a hover or small state change feel decisive.",
    examples: ["link trace", "card hover", "chip surface shift"],
  },
  medium: {
    duration: DURATION_REVEAL,
    delay: 0,
    ease: EASE_DEVELOP,
    purpose: "Resolve discrete content into view without hurry.",
    examples: ["section header", "project card", "timeline block"],
  },
  large: {
    duration: DURATION_DEVELOP,
    delay: 0,
    ease: EASE_DEVELOP,
    purpose: "Let hero and case-study scenes settle with editorial weight.",
    examples: ["hero headline", "project detail hero", "major scene entry"],
  },
  ambient: {
    duration: DURATION_AMBIENT_LOOP,
    delay: 0,
    ease: EASE_SIGNAL_DRIFT,
    purpose: "Keep signal instrumentation quietly alive.",
    examples: ["node pulse", "low-amplitude glow breathing"],
  },
  idle: {
    duration: DURATION_AMBIENT_LOOP,
    delay: 0,
    ease: EASE_PULSE,
    purpose: "Low-frequency state presence, never decorative attention seeking.",
    examples: ["Signal Core node breathing", "active nav presence"],
  },
  hover: {
    duration: DURATION_BASE,
    delay: 0,
    ease: EASE_FEEDBACK,
    purpose: "React to user attention while preserving surface weight.",
    examples: ["project card lift", "premium action link"],
  },
  reveal: {
    duration: DURATION_REVEAL,
    delay: 0,
    ease: EASE_DEVELOP,
    purpose: "Introduce content as if it is resolving from atmosphere.",
    examples: ["scroll reveal", "line reveal", "card grid stagger"],
  },
  transition: {
    duration: DURATION_TOGGLE,
    delay: 0,
    ease: EASE_SIGNAL_DRIFT,
    purpose: "Cross-fade surfaces and room-light changes.",
    examples: ["Darkroom/Lightbox", "surface tone shift"],
  },
  sceneChange: {
    duration: DURATION_REVEAL,
    delay: 0,
    ease: EASE_DEVELOP,
    purpose: "Bridge from one route/scene to another without feeling abrupt.",
    examples: ["Read More handoff", "project detail arrival"],
  },
  backgroundEvolution: {
    duration: DURATION_BACKGROUND_EVOLUTION,
    delay: 0,
    ease: EASE_SIGNAL_DRIFT,
    purpose: "Evolve the site's atmosphere below conscious attention.",
    examples: ["root gradient field", "section lighting progression"],
  },
} as const;

/* ═══════════════════════════════════════════════════════════════════════════
   DISTANCE / SCALE (pixels or ratio)
   ═══════════════════════════════════════════════════════════════════════════ */

/** 12px translateY — line-level text reveals */
export const REVEAL_SM = 12;

/** 24px translateY — default for cards/blocks entering viewport */
export const REVEAL_MD = 24;

/** 40px translateY — major section wrappers only, used sparingly */
export const REVEAL_LG = 40;

/** -4px translateY — card/interactive-element hover lift */
export const HOVER_LIFT = -4;

/** 0.97 scale — button press feedback. A press yields, never pops. */
export const PRESS_SCALE = 0.97;

/** 16px translateY — editorial inertia reveal from the Denis-motion brief.
 *  Smaller than the default card reveal so content feels like it settles,
 *  not like it slides in. */
export const REVEAL_EDITORIAL = 16;

/** 8px blur — clarity reveal amount for premium editorial entrances.
 *  Used only during entrance/scroll reveals, never as a resting filter. */
export const CLARITY_BLUR = 8;

/** Blur levels allowed by the cinematic system. Resting UI must use `none`. */
export const BLUR_TOKENS = {
  none: 0,
  verySmall: 2,
  small: 4,
  medium: CLARITY_BLUR,
  large: 12,
  atmospheric: 18,
  maximum: 24,
} as const;

/** Glow intensity/radius scale. Use only with existing steel/gold/rust tokens. */
export const GLOW_TOKENS = {
  neutral: { opacity: 0.055, radius: 320, purpose: "subordinate section presence" },
  warm: { opacity: 0.095, radius: 380, purpose: "contact/output warmth" },
  cold: { opacity: 0.1, radius: 380, purpose: "input/research atmosphere" },
  interactive: { opacity: 0.13, radius: 220, purpose: "hover/focus surface response" },
  ambient: { opacity: 0.06, radius: 520, purpose: "large-field atmosphere" },
} as const;

/** Z-index/depth language. Content remains above background by default. */
export const DEPTH_TOKENS = {
  farBackground: -20,
  atmosphere: -10,
  background: 0,
  content: 10,
  interactive: 20,
  floating: 30,
  foreground: 40,
} as const;

/** Opacity roles. Permanent partial opacity is allowed only for hierarchy/atmosphere. */
export const OPACITY_TOKENS = {
  hidden: 0,
  mutedText: 0.55,
  secondaryText: 0.68,
  label: 0.72,
  idle: 0.82,
  hover: 0.95,
  reveal: 1,
  particles: 0.045,
  background: 0.08,
  fog: 0.06,
} as const;

/** Animation distance scale. Never invent an untracked translate distance. */
export const DISTANCE_TOKENS = {
  micro: 4,
  small: REVEAL_SM,
  medium: REVEAL_EDITORIAL,
  large: REVEAL_MD,
  massive: REVEAL_LG,
} as const;

/** Spacing rhythm tokens for documentation and future layout work.
 *  Existing Tailwind classes may remain where already verified; new spacing
 *  decisions should map back to this scale. */
export const SPACING_RHYTHM = {
  micro: 4,
  tight: 8,
  compact: 12,
  base: 16,
  relaxed: 24,
  sectionCompact: 56,
  section: 72,
  sectionLarge: 96,
  cardInset: 20,
  grid: 16,
} as const;

/* ═══════════════════════════════════════════════════════════════════════════
   STAGGER (seconds — delays between sequential elements)
   ═══════════════════════════════════════════════════════════════════════════ */

/** 60ms — characters/words in text reveal, icon rows, list bullets within one block */
export const STAGGER_TIGHT = 0.06;

/** 90ms — cards in a grid, list items across a section */
export const STAGGER_BASE = 0.09;

/** 140ms — major children of the Hero (headline → statement → CTAs → socials) */
export const STAGGER_LOOSE = 0.14;

/* ═══════════════════════════════════════════════════════════════════════════
   SIGNAL CORE SPECIFIC (§4.1)
   ═══════════════════════════════════════════════════════════════════════════ */

/** 137ms deterministic per-node jitter offset.
 *  nodeIndex * JITTER_OFFSET_MS gives each node a unique phase so the six
 *  never breathe in unison. Deterministic — a reload looks identical.
 *  Not Math.random() — that's slot-machine-random (MOTION_SYSTEM.md §4.1). */
export const JITTER_OFFSET = 0.137;

/** 3200ms — connector trace full cycle. Intentionally offset from the node
 *  pulse timing (2800ms) so the two never lock into a visible synchronized pattern. */
export const CONNECTOR_CYCLE = 3.2;

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

/** MotionConfig reduced-motion policy. One wrapper owns the OS preference
 *  behavior, matching tech.md §4 and MOTION_SYSTEM.md §3. */
export const REDUCED_MOTION_POLICY = "user" as const;

/** Token-based stagger helper so components never restate index * raw seconds. */
export function stagger(index: number, interval = STAGGER_BASE): number {
  return index * interval;
}

/** Signal Core node pulse duration with deterministic jitter.
 *  The varying duration prevents the six ambient pulses from synchronizing. */
export function nodePulseDuration(index: number): number {
  return DURATION_AMBIENT_LOOP + index * JITTER_OFFSET;
}

/** Signal Core node pulse phase offset.
 *  Deterministic, not random, so reloads preserve the same instrument rhythm. */
export function nodePulseDelay(index: number): number {
  return index * JITTER_OFFSET;
}

/** Shared blur-to-sharp reveal state for editorial/scene transitions. */
export function clarityReveal(distance = REVEAL_EDITORIAL) {
  return {
    hidden: {
      opacity: 0,
      y: distance,
      filter: `blur(${CLARITY_BLUR}px)`,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  } as const;
}

/** Tokenized transition helper for reveal sequences with optional delay. */
export function developTransition(delay = 0, duration = DURATION_DEVELOP) {
  return {
    duration,
    delay,
    ease: EASE_DEVELOP,
  } as const;
}

/** Reduced-motion variants resolve directly to the resting state.
 *  Components use this when a Motion variant shape is still required. */
export const reducedMotionVariants = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1 },
} as const;

/* ═══════════════════════════════════════════════════════════════════════════
   CSS CUSTOM PROPERTY STRINGS (for inline style fallbacks where needed)
   ═══════════════════════════════════════════════════════════════════════════ */

export const CSS_DURATION = {
  feedback: "var(--motion-feedback)",
  base: "var(--motion-base)",
  reveal: "var(--motion-reveal)",
  develop: "var(--motion-develop)",
  toggle: "var(--motion-toggle)",
  ambientLoop: "var(--motion-ambient-loop)",
} as const;

export const CSS_EASE = {
  feedback: "var(--ease-feedback)",
  signalDrift: "var(--ease-signal-drift)",
  develop: "var(--ease-develop)",
  trace: "var(--ease-trace)",
} as const;
