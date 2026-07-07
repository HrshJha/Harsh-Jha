import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/navigation/Logo";
import { DesktopNavbar } from "@/components/navigation/DesktopNavbar";
import { MobileNavbar } from "@/components/navigation/MobileNavbar";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function NavigationLayout() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/86 backdrop-blur-md">
      <Container
        size="hero"
        className="flex min-h-12 items-center justify-between gap-8 px-6 md:px-8"
      >
        <Logo />
        <div className="flex items-center gap-3">
          <DesktopNavbar />
          <ThemeToggle />
          <MobileNavbar />
        </div>
      </Container>
    </header>
  );
}
