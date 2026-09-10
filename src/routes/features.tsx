import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Bot,
  Code2,
  Database,
  Plug,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MarketingLayout, PageHero } from "@/components/marketing/marketing-layout";
import { PLATFORM_FEATURES } from "@/lib/catalog";

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

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Skylume Automation Cloud" },
      {
        name: "description",
        content:
          "App building, integrations, structured data, roles, permissions and audit logging — with a clear status for every capability.",
      },
      { property: "og:title", content: "Features — Skylume Automation Cloud" },
      {
        property: "og:description",
        content: "App building, integrations, structured data, roles, permissions and audit logging.",
      },
    ],
  }),
  component: Features,
});

function Features() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Features"
        title="Capabilities, with honest status"
        description="Every capability below states whether it is live today or reserved for a later phase, so you always know what you are buying."
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-2">
          {PLATFORM_FEATURES.map((feature) => {
            const Icon = ICONS[feature.icon] ?? Zap;
            return (
              <article key={feature.title} className="panel p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <Badge variant={feature.phase === "phase-1" ? "secondary" : "outline"}>
                    {feature.phase === "phase-1" ? "Available" : "Phase 2"}
                  </Badge>
                </div>
                <h2 className="mt-4 text-lg font-semibold">{feature.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </MarketingLayout>
  );
}
