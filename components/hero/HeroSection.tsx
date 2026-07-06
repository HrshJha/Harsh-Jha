import { HeroTitle } from "@/components/hero/HeroTitle";
import { HeroSubtitle } from "@/components/hero/HeroSubtitle";
import { CTAGroup } from "@/components/hero/CTAGroup";
import { SocialLinks } from "@/components/hero/SocialLinks";
import { HeroVisual } from "@/components/hero/HeroVisual";

export function HeroSection() {
  return (
    <div className="grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(22rem,0.88fr)] lg:gap-16">
      <div className="flex max-w-3xl flex-col gap-9">
        <div className="flex flex-col gap-7">
          <HeroTitle />
          <HeroSubtitle />
        </div>
        <div className="flex flex-col gap-7">
          <CTAGroup />
          <SocialLinks />
        </div>
      </div>
      <HeroVisual />
    </div>
  );
}
