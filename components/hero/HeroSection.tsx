import { HeroTitle } from "@/components/hero/HeroTitle";
import { HeroSubtitle } from "@/components/hero/HeroSubtitle";
import { CTAGroup } from "@/components/hero/CTAGroup";
import { SocialLinks } from "@/components/hero/SocialLinks";
import { HeroVisual } from "@/components/hero/HeroVisual";

export function HeroSection() {
  return (
    <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
      <div className="flex max-w-reading flex-col gap-8">
        <div className="flex flex-col gap-6">
          <HeroTitle />
          <HeroSubtitle />
        </div>
        <div className="flex flex-col gap-6">
          <CTAGroup />
          <SocialLinks />
        </div>
      </div>
      <HeroVisual />
    </div>
  );
}
