import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function LegalPageLayout({ eyebrow, title, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <SiteHeader />
      <main className="max-w-2xl mx-auto px-6 py-16 md:py-20">
        <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
          {eyebrow}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-10 text-balance">{title}</h1>
        <div className="prose-legal text-ink/80">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
