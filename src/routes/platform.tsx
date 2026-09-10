import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MarketingLayout, PageHero } from "@/components/marketing/marketing-layout";
import { PLATFORM_FEATURES } from "@/lib/catalog";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform Overview — Skylume Automation Cloud" },
      {
        name: "description",
        content:
          "How Skylume Automation Cloud is structured: organizations, workspaces, apps, integrations, roles and audit trails.",
      },
      { property: "og:title", content: "Platform Overview — Skylume Automation Cloud" },
      {
        property: "og:description",
        content: "Organizations, workspaces, apps, integrations, roles and audit trails in one platform.",
      },
    ],
  }),
  component: Platform,
});

const LAYERS = [
  { title: "Platform", detail: "Shared infrastructure, security model and module registry." },
  { title: "Organization", detail: "Your company entity — owns workspaces and billing relationships." },
  { title: "Workspace", detail: "An isolated environment holding apps, integrations, members and logs." },
  { title: "Users", detail: "People with a role that determines exactly what they can do." },
];

function Platform() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Platform"
        title="One architecture, from first app to enterprise rollout"
        description="Skylume is built as a layered platform so new modules can be enabled for your workspace without migrating or rebuilding anything you already run."
      >
        <Button asChild size="lg">
          <Link to="/auth" search={{ mode: "sign-up" }}>
            Start Building <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold">Hierarchy</h2>
        <ol className="mt-8 space-y-3">
          {LAYERS.map((layer, i) => (
            <li key={layer.title} className="panel flex items-start gap-4 p-5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/12 font-mono text-sm text-primary">
                {i + 1}
              </span>
              <div>
                <h3 className="text-sm font-semibold">{layer.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{layer.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold">Module status</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {PLATFORM_FEATURES.map((feature) => (
              <article key={feature.title} className="panel flex items-start justify-between gap-4 p-5">
                <div>
                  <h3 className="text-sm font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
                <Badge variant={feature.phase === "phase-1" ? "secondary" : "outline"}>
                  {feature.phase === "phase-1" ? "Available" : "Phase 2"}
                </Badge>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
