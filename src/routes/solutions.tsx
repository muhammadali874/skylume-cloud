import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MarketingLayout, PageHero } from "@/components/marketing/marketing-layout";
import { USE_CASES } from "@/lib/catalog";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Skylume Automation Cloud" },
      {
        name: "description",
        content:
          "CRM, ERP, accounting, sales, support, projects, inventory, HR, finance, e-commerce and construction operations built on Skylume.",
      },
      { property: "og:title", content: "Solutions — Skylume Automation Cloud" },
      {
        property: "og:description",
        content: "Operational solutions from CRM and ERP to inventory, HR, finance and construction.",
      },
    ],
  }),
  component: Solutions,
});

function Solutions() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Solutions"
        title="Start from the operation you need to run"
        description="Skylume is domain-agnostic. These are the operations teams most often build first — each one starts as an app with pages, data and access rules."
      >
        <Button asChild size="lg">
          <Link to="/auth" search={{ mode: "sign-up" }}>
            Build your first app
          </Link>
        </Button>
      </PageHero>
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <article
              key={useCase.title}
              className="panel p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <h2 className="text-base font-semibold">{useCase.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{useCase.description}</p>
            </article>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}
