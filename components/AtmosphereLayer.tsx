import { AtmosphereEngine } from "@/components/AtmosphereEngine";

/**
 * Backward-compatible alias for earlier atmosphere imports.
 * New code should import AtmosphereEngine directly.
 */
export function AtmosphereLayer() {
  return <AtmosphereEngine />;
}
