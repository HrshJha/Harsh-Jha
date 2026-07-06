import type { ReactNode } from "react";

interface MainLayoutProps {
  readonly children: ReactNode;
}

// Owns the page's single `main` landmark (COMPONENT_SPEC.md §2).
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      {children}
    </main>
  );
}
