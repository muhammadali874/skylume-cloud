import { Link } from "@tanstack/react-router";
import { SkylumeLogo } from "@/components/brand";
import { BRAND } from "@/lib/catalog";

const GROUPS = [
  {
    title: "Platform",
    links: [
      { label: "Overview", to: "/platform" },
      { label: "Features", to: "/features" },
      { label: "Integrations", to: "/integrations" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Use cases", to: "/solutions" },
      { label: "Resources", to: "/resources" },
      { label: "Documentation", to: "/docs" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign in", to: "/auth" },
      { label: "Get started", to: "/auth" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <SkylumeLogo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{BRAND.tagline}</p>
        </div>
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {BRAND.company}. All rights reserved.
          </p>
          <p>Phase 1 — Production SaaS Foundation</p>
        </div>
      </div>
    </footer>
  );
}
