import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  muted?: boolean;
  children: React.ReactNode;
}

export function Section({ id, className, muted, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-28",
        muted &&
          "border-y border-border/40 bg-secondary/20 bg-dots [background-blend-mode:overlay]",
        className,
      )}
    >
      {muted && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      )}
      <div className="container relative">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
