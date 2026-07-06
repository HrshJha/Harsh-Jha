import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/navigation/Logo";
import { DesktopNavbar } from "@/components/navigation/DesktopNavbar";
import { MobileNavbar } from "@/components/navigation/MobileNavbar";

export function NavigationLayout() {
  return (
    <header>
      <Container className="flex items-center justify-between">
        <Logo />
        <DesktopNavbar />
        <MobileNavbar />
      </Container>
    </header>
  );
}
