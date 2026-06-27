import { Cloud, Gauge, Layers, Network, Server, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { EXPERIENCE } from "@/constants/experience";

const INTERESTS = [
  { label: "Backend Engineering", icon: Server },
  { label: "Agentic AI & LLM Apps", icon: Sparkles },
  { label: "Full-Stack Development", icon: Layers },
  { label: "Distributed Systems", icon: Network },
  { label: "Cloud Computing", icon: Cloud },
  { label: "Performance Engineering", icon: Gauge },
];

export function About() {
  const current = EXPERIENCE[0];

  return (
    <Section id="about">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Engineer focused on systems that scale"
        />
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3" delay={0.05}>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m an{" "}
              <span className="font-medium text-foreground">
                {current?.role}
              </span>{" "}
              at{" "}
              <span className="font-medium text-foreground">
                {current?.company}
              </span>
              , where I build enterprise payroll and HCM features inside a
              secure, Agile SDLC — shipping work that reaches 1,000+ enterprise
              users with zero post-release data issues.
            </p>
            <p>
              Outside of work, I design and build production-grade systems —
              from AI-powered, real-time platforms to distributed
              infrastructure monitoring. I&apos;m especially drawn to{" "}
              <span className="font-medium text-foreground">
                backend, AI, and full-stack
              </span>{" "}
              engineering: clean architecture, measurable performance, and
              making non-trivial systems run on modest hardware.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {INTERESTS.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card px-3 py-1.5 text-sm"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={0.1}>
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <p className="text-sm font-medium text-primary">Currently</p>
            <h3 className="mt-1 text-lg font-semibold">{current?.role}</h3>
            <p className="text-sm text-muted-foreground">
              {current?.company} · {current?.location}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {current?.period}
            </p>
            <ul className="mt-4 space-y-2.5">
              {current?.bullets.slice(0, 3).map((b) => (
                <li
                  key={b}
                  className="flex gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
