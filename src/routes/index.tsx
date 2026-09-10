import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  Bot,
  Database,
  Plug,
  Sparkles,
  Zap,
  ShieldCheck,
  Workflow,
  BarChart3,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MarketingLayout } from "@/components/marketing/marketing-layout";
import { BRAND, PLATFORM_FEATURES, USE_CASES, INTEGRATIONS } from "@/lib/catalog";

const ICONS: Record<string, typeof Zap> = {
  Sparkles,
  Workflow,
  Plug,
  Bot,
  Database,
  Code2,
  BarChart3,
  ShieldCheck,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skylume Automation Cloud — Build Apps. Connect Anything. Automate Everything." },
      {
        name: "description",
        content:
          "Skylume Automation Cloud lets teams build business applications, connect their tools and automate operations on one enterprise platform.",
      },
      {
        property: "og:title",
        content: "Skylume Automation Cloud — Build Apps. Connect Anything. Automate Everything.",
      },
      {
        property: "og:description",
        content:
          "Build business applications, connect your tools and automate operations on one enterprise platform.",
      },
    ],
  }),
  component: Home,
});

const FLOW = [
  { label: "Trigger", detail: "Form, schedule or event", icon: Zap },
  { label: "AI", detail: "Reason and decide", icon: Sparkles },
  { label: "Database", detail: "Read and write records", icon: Database },
  { label: "Integration", detail: "Call your tools", icon: Plug },
  { label: "Notification", detail: "Reach your team", icon: Bell },
];

function HeroVisual() {
  return (
    <div className="panel relative overflow-hidden p-5 sm:p-7" aria-hidden>
      <div className="absolute inset-0 grid-backdrop opacity-[0.18]" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Automation blueprint
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Illustrative
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {FLOW.map((step, i) => (
            <div key={step.label} className="relative">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/70 px-4 py-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <step.icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{step.label}</p>
                  <p className="truncate text-xs text-muted-foreground">{step.detail}</p>
                </div>
                <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              {i < FLOW.length - 1 && (
                <div className="ml-8 h-3 w-px bg-gradient-to-b from-primary/60 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <MarketingLayout>
      <section className="aurora relative overflow-hidden">
        <div className="absolute inset-0 grid-backdrop opacity-[0.12]" aria-hidden />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <Badge variant="outline" className="border-primary/30 text-primary">
              Phase 1 — Production foundation
            </Badge>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-6xl">
              <span className="text-gradient">{BRAND.tagline}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              {BRAND.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/auth" search={{ mode: "sign-up" }}>
                  Start Building
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/platform">Explore Platform</Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6 text-sm">
              {[
                ["Workspace isolation", "Enforced in the database"],
                ["Role-based access", "Five built-in roles"],
                ["Audit trail", "On every key action"],
              ].map(([term, detail]) => (
                <div key={term}>
                  <dt className="font-medium">{term}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Platform capabilities</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Everything marked available is live today. Everything else is architected and reserved for a
            later phase — no placeholders pretending to work.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORM_FEATURES.map((feature) => {
              const Icon = ICONS[feature.icon] ?? Zap;
              return (
                <article
                  key={feature.title}
                  className="panel group p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/12 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                  <Badge
                    variant={feature.phase === "phase-1" ? "secondary" : "outline"}
                    className="mt-4 text-[10px] uppercase tracking-wider"
                  >
                    {feature.phase === "phase-1" ? "Available" : "Phase 2"}
                  </Badge>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Built for real business operations</h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                Start from the operation you need to run, not from an empty canvas.
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link to="/solutions">
                All solutions <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.slice(0, 8).map((useCase) => (
              <article key={useCase.title} className="panel p-5">
                <h3 className="text-sm font-semibold">{useCase.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{useCase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Integration marketplace</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Register your own REST endpoints and webhooks today. Managed connectors are being rolled out
            provider by provider.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INTEGRATIONS.slice(0, 9).map((integration) => (
              <article key={integration.provider} className="panel flex items-start gap-3 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary font-display text-xs font-semibold">
                  {integration.name.slice(0, 2).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-sm font-semibold">{integration.name}</h3>
                    <Badge
                      variant={integration.status === "available" ? "secondary" : "outline"}
                      className="text-[10px] uppercase"
                    >
                      {integration.status === "available" ? "Available" : "Coming soon"}
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{integration.description}</p>
                </div>
              </article>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/integrations">Browse all integrations</Link>
          </Button>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-2xl font-semibold sm:text-4xl">Start with a workspace, grow into a platform</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Create your organization, invite your team and build your first application in minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/auth" search={{ mode: "sign-up" }}>
                Create your account
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">Compare plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
