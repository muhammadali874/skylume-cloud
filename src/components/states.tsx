import type { ReactNode } from "react";
import { Loader2, Inbox, TriangleAlert, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function LoadingState({ label = "Loading…", rows = 3 }: { label?: string; rows?: number }) {
  return (
    <div className="space-y-3" role="status" aria-live="polite">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="size-4 animate-spin" aria-hidden />
        {label}
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-16 w-full rounded-xl" />
      ))}
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
  icon,
}: {
  title: string;
  description: string;
  action?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="panel flex flex-col items-center gap-3 px-6 py-14 text-center">
      <div className="flex size-11 items-center justify-center rounded-full bg-secondary text-muted-foreground">
        {icon ?? <Inbox className="size-5" aria-hidden />}
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="max-w-md text-sm text-muted-foreground">{description}</p>
      {action}
    </div>
  );
}

export function ErrorState({
  description = "We couldn't load this right now. Please try again.",
  onRetry,
}: {
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="panel flex flex-col items-center gap-3 px-6 py-12 text-center">
      <div className="flex size-11 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <TriangleAlert className="size-5" aria-hidden />
      </div>
      <h3 className="text-base font-semibold">Something went wrong</h3>
      <p className="max-w-md text-sm text-muted-foreground">{description}</p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}

export function ComingSoon({
  title,
  description,
  phase = "Phase 2",
  capabilities,
}: {
  title: string;
  description: string;
  phase?: string;
  capabilities?: string[];
}) {
  return (
    <div className="panel mx-auto max-w-2xl px-6 py-12">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Clock className="size-5" aria-hidden />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{phase}</p>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{description}</p>
      {capabilities && (
        <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          {capabilities.map((c) => (
            <li key={c} className="rounded-lg border border-border bg-surface px-3 py-2">
              {c}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-6 text-xs text-muted-foreground">
        Nothing here is active yet — this module is reserved so it can be enabled without rebuilding your
        workspace.
      </p>
    </div>
  );
}
