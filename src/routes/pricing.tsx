import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MarketingLayout, PageHero } from "@/components/marketing/marketing-layout";
import { PLANS } from "@/lib/catalog";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Skylume Automation Cloud" },
      {
        name: "description",
        content:
          "Free, Starter, Professional, Business and Enterprise plans with clear limits on members, apps, AI usage, API calls and storage.",
      },
      { property: "og:title", content: "Pricing — Skylume Automation Cloud" },
      {
        property: "og:description",
        content: "Five plans with transparent limits on members, apps, AI usage, API calls and storage.",
      },
    ],
  }),
  component: Pricing,
});

const LIMIT_ROWS: { key: keyof (typeof PLANS)[number]["limits"]; label: string }[] = [
  { key: "members", label: "Team members" },
  { key: "apps", label: "Apps" },
  { key: "workflows", label: "Workflows" },
  { key: "ai", label: "AI usage" },
  { key: "api", label: "API usage" },
  { key: "storage", label: "Storage" },
];

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Pricing"
        title="Plans that scale with your operations"
        description="Payment processing is not connected yet — during Phase 1 our team activates plans manually, and your workspace already stores its plan, cycle, usage and limits."
      >
        <div className="flex items-center gap-3">
          <Label htmlFor="billing-cycle" className="text-sm text-muted-foreground">
            Monthly
          </Label>
          <Switch id="billing-cycle" checked={annual} onCheckedChange={setAnnual} />
          <Label htmlFor="billing-cycle" className="text-sm">
            Annual <span className="text-primary">(2 months free)</span>
          </Label>
        </div>
      </PageHero>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-5">
          {PLANS.map((plan) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <article
                key={plan.id}
                className={`panel flex flex-col p-5 ${plan.highlight ? "glow-ring border-primary/40" : ""}`}
              >
                {plan.highlight && (
                  <Badge className="mb-3 w-fit">Most popular</Badge>
                )}
                <h2 className="text-lg font-semibold">{plan.name}</h2>
                <p className="mt-1 text-xs text-muted-foreground">{plan.tagline}</p>
                <p className="mt-5 font-display text-3xl font-semibold">
                  {price === null ? "Custom" : price === 0 ? "$0" : `$${price}`}
                  {price !== null && price > 0 && (
                    <span className="text-sm font-normal text-muted-foreground">
                      /{annual ? "yr" : "mo"}
                    </span>
                  )}
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6" variant={plan.highlight ? "default" : "outline"}>
                  <Link to="/auth" search={{ mode: "sign-up" }}>
                    {plan.id === "enterprise" ? "Talk to us" : "Get started"}
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold">Usage limits</h2>
          <div className="panel mt-6 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-40">Limit</TableHead>
                  {PLANS.map((plan) => (
                    <TableHead key={plan.id}>{plan.name}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {LIMIT_ROWS.map((row) => (
                  <TableRow key={row.key}>
                    <TableCell className="font-medium">{row.label}</TableCell>
                    {PLANS.map((plan) => (
                      <TableCell key={plan.id} className="text-muted-foreground">
                        {plan.limits[row.key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
