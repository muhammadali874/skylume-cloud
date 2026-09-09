import { cn } from "@/lib/utils";

export function SkylumeMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary glow-ring",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2.5 4.5 7v10L12 21.5 19.5 17V7L12 2.5Z" strokeLinejoin="round" />
        <path d="M8 14.5 12 9l4 5.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function SkylumeLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <SkylumeMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[13px] font-semibold tracking-[0.16em]">SKYLUME</span>
        {!compact && (
          <span className="text-[10px] font-medium tracking-[0.22em] text-muted-foreground">
            AUTOMATION CLOUD
          </span>
        )}
      </span>
    </span>
  );
}
