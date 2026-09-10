import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import { MarketingLayout, PageHero } from "@/components/marketing/marketing-layout";
import { DOC_SECTIONS } from "@/lib/catalog";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Skylume Automation Cloud" },
      {
        name: "description",
        content:
          "Documentation, security posture and phased roadmap for teams evaluating Skylume Automation Cloud.",
      },
      { property: "og:title", content: "Resources — Skylume Automation Cloud" },
      { property: "og:description", content: "Documentation, security posture and the phased roadmap." },
    ],
  }),
  component: Resources;
});

function Resources() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Resources"
        title="Everything you need to evaluate the platform"
        description="Read the documentation, understand the security model and see exactly what ships in each phase."
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Link to="/docs" className="panel group p-6">
            <BookOpen className="size-5 text-primary" aria-hidden />
            <h2 className="mt-4 text-base font-semibold">Documentation</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Getting started, platform concepts, apps, integrations, API and security.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
              Open docs <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link to="/docs/$section" params={{ section: "security" }} className="panel group p-6">
            <ShieldCheck className="size-5 text-primary" aria-hidden />
            <h2 className="mt-4 text-base font-semibold">Security</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Authentication, workspace isolation, row-level rules and audit logging.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
              Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link to="/platform" className="panel group p-6">
            <Sparkles className="size-5 text-primary" aria-hidden />
            <h2 className="mt-4 text-base font-semibold">Roadmap</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              What is live in Phase 1 and what is reserved for later phases.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
              View platform <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

        <h2 className="mt-14 text-xl font-semibold">Documentation sections</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DOC_SECTIONS.map((section) => (
            <Link
              key={section.slug}
              to="/docs/$section"
              params={{ section: section.slug }}
              className="panel p-5 transition-transform hover:-translate-y-1"
            >
              <h3 className="text-sm font-semibold">{section.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{section.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}
