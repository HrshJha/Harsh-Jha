import { HeroTitle } from "@/components/hero/HeroTitle";
import { HeroSubtitle } from "@/components/hero/HeroSubtitle";
import { CTAGroup } from "@/components/hero/CTAGroup";
import { SocialLinks } from "@/components/hero/SocialLinks";

export function HeroSection() {
  return (
    <div className="flex flex-col gap-8">
      <HeroTitle />
      <HeroSubtitle />
      <CTAGroup />
      <SocialLinks />
    </div>
  );
}
