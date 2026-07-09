export type AtmosphereColorTemperature = "cool" | "neutral" | "warm" | "output";

export type AtmosphereTokens = {
  colorTemperature: AtmosphereColorTemperature;
  glowIntensity: number;
  glowSize: string;
  glowX: string;
  glowY: string;
  hazeOpacity: number;
  motionSpeed: number;
  particleDensity: number;
  scanOpacity: number;
};

export const ATMOSPHERE_DEFAULT_TOKENS: AtmosphereTokens = {
  colorTemperature: "neutral",
  glowIntensity: 3.6,
  glowSize: "min(84vw, 760px)",
  glowX: "50%",
  glowY: "48%",
  hazeOpacity: 0.026,
  motionSpeed: 1,
  particleDensity: 0.7,
  scanOpacity: 0.16,
};

export const ATMOSPHERE_SCENE_TOKENS = {
  hero: {
    colorTemperature: "cool",
    glowIntensity: 5.2,
    glowSize: "min(104vw, 1020px)",
    glowX: "46%",
    glowY: "32%",
    hazeOpacity: 0.032,
    motionSpeed: 0.88,
    particleDensity: 0.74,
    scanOpacity: 0.18,
  },
  projects: {
    colorTemperature: "neutral",
    glowIntensity: 3.4,
    glowSize: "min(92vw, 860px)",
    glowX: "54%",
    glowY: "42%",
    hazeOpacity: 0.024,
    motionSpeed: 0.96,
    particleDensity: 0.68,
    scanOpacity: 0.14,
  },
  experience: {
    colorTemperature: "output",
    glowIntensity: 4.2,
    glowSize: "min(92vw, 900px)",
    glowX: "62%",
    glowY: "46%",
    hazeOpacity: 0.026,
    motionSpeed: 1.02,
    particleDensity: 0.66,
    scanOpacity: 0.16,
  },
  about: {
    colorTemperature: "neutral",
    glowIntensity: 2.8,
    glowSize: "min(86vw, 780px)",
    glowX: "58%",
    glowY: "44%",
    hazeOpacity: 0.02,
    motionSpeed: 0.92,
    particleDensity: 0.58,
    scanOpacity: 0.12,
  },
  skills: {
    colorTemperature: "cool",
    glowIntensity: 2.7,
    glowSize: "min(78vw, 720px)",
    glowX: "52%",
    glowY: "42%",
    hazeOpacity: 0.018,
    motionSpeed: 0.9,
    particleDensity: 0.52,
    scanOpacity: 0.1,
  },
  education: {
    colorTemperature: "neutral",
    glowIntensity: 2.5,
    glowSize: "min(74vw, 680px)",
    glowX: "51%",
    glowY: "45%",
    hazeOpacity: 0.017,
    motionSpeed: 0.86,
    particleDensity: 0.48,
    scanOpacity: 0.09,
  },
  contact: {
    colorTemperature: "warm",
    glowIntensity: 4,
    glowSize: "min(80vw, 740px)",
    glowX: "58%",
    glowY: "46%",
    hazeOpacity: 0.024,
    motionSpeed: 0.82,
    particleDensity: 0.56,
    scanOpacity: 0.1,
  },
  "project-case-grid": {
    colorTemperature: "neutral",
    glowIntensity: 3,
    glowSize: "min(82vw, 760px)",
    glowX: "52%",
    glowY: "48%",
    hazeOpacity: 0.021,
    motionSpeed: 0.9,
    particleDensity: 0.56,
    scanOpacity: 0.11,
  },
} satisfies Record<string, AtmosphereTokens>;

export type AtmosphereSceneId = keyof typeof ATMOSPHERE_SCENE_TOKENS;

export function resolveAtmosphereTokens(sceneId?: string): AtmosphereTokens {
  if (sceneId && sceneId in ATMOSPHERE_SCENE_TOKENS) {
    return ATMOSPHERE_SCENE_TOKENS[sceneId as AtmosphereSceneId];
  }

  return ATMOSPHERE_DEFAULT_TOKENS;
}
