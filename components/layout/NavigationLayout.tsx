import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/navigation/Logo";
import { DesktopNavbar } from "@/components/navigation/DesktopNavbar";
import { MobileNavbar } from "@/components/navigation/MobileNavbar";

export function NavigationLayout() {
  return (
    <header className="sticky top-0 z-20 border-b border-border-subtle/80 bg-background-page">
      <Container className="flex h-16 items-center justify-between gap-8">
        <Logo />
        <DesktopNavbar />
        <MobileNavbar />
      </Container>
    </header>
  );
}
