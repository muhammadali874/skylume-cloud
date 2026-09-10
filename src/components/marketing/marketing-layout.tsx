import type { ReactNode } from "react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="aurora border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
