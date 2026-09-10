import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MarketingLayout, PageHero } from "@/components/marketing/marketing-layout";
import { INTEGRATIONS, INTEGRATION_CATEGORIES } from "@/lib/catalog";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — Skylume Automation Cloud" },
      {
        name: "description",
        content:
          "Register custom REST APIs and webhooks today, and follow the rollout of managed connectors for communication, email, CRM, payments, AI and storage.",
      },
      { property: "og:title", content: "Integrations — Skylume Automation Cloud" },
      {
        property: "og:description",
        content: "Custom REST APIs and webhooks today; managed connectors rolling out by provider.",
      },
    ],
  }),
  component: Integrations,
});

function Integrations() {
  const [category, setCategory] = useState<string>("All");
  const visible =
    category === "All" ? INTEGRATIONS : INTEGRATIONS.filter((i) => i.category === category);

  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Integrations"
        title="Connect the tools your business already runs on"
        description="Custom REST endpoints and webhooks can be registered in your workspace today. Managed connectors are marked Coming Soon until they are genuinely live — we never ship a connector that does nothing."
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {["All", ...INTEGRATION_CATEGORIES].map((item) => (
            <Button
              key={item}
              size="sm"
              variant={category === item ? "default" : "outline"}
              onClick={() => setCategory(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((integration) => (
            <article key={integration.provider} className="panel flex flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-secondary font-display text-xs font-semibold">
                  {integration.name.slice(0, 2).toUpperCase()}
                </span>
                <Badge variant={integration.status === "available" ? "secondary" : "outline"}>
                  {integration.status === "available" ? "Available" : "Coming soon"}
                </Badge>
              </div>
              <div>
                <h2 className="text-sm font-semibold">{integration.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {integration.category}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{integration.description}</p>
            </article>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}
