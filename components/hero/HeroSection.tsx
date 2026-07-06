import { HeroTitle } from "@/components/hero/HeroTitle";
import { HeroSubtitle } from "@/components/hero/HeroSubtitle";
import { CTAGroup } from "@/components/hero/CTAGroup";
import { HeroTrustRow } from "@/components/hero/HeroTrustRow";
import { SocialLinks } from "@/components/hero/SocialLinks";
import { HeroVisual } from "@/components/hero/HeroVisual";

export function HeroSection() {
  return (
    <div className="hero-shell">
      <div className="hero-depth" aria-hidden="true" />
      <div className="hero-layout">
        <div className="hero-copy">
          <HeroTitle />
          <HeroSubtitle />
          <CTAGroup />
          <HeroTrustRow />
          <SocialLinks />
        </div>
        <HeroVisual />
      </div>
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>Scroll to explore</span>
        <span>↓</span>
      </div>
    </div>
  );
}
