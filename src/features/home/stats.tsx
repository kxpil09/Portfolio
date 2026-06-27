import { Reveal } from "@/components/shared/reveal";

const STATS = [
  { value: "1,000+", label: "Enterprise users served" },
  { value: "250+", label: "Stocks processed in real time" },
  { value: "2", label: "Production systems shipped" },
  { value: "50+", label: "Security findings resolved" },
];

export function Stats() {
  return (
    <section className="border-y border-border/40 bg-secondary/20">
      <div className="container">
        <dl className="grid grid-cols-2 divide-x divide-y divide-border/40 sm:grid-cols-4 sm:divide-y-0">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div className="flex flex-col items-center px-4 py-8 text-center sm:py-10">
                <dt className="bg-gradient-to-br from-foreground to-primary/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
