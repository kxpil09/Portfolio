"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CandlestickChart,
  Download,
  Github,
  Linkedin,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, SOCIALS } from "@/constants/site";

const FOCUS = ["Backend", "AI", "Full-Stack"];

const INTERESTS = [
  { label: "Day Trading", icon: CandlestickChart },
  { label: "Long-term investing", icon: TrendingUp },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 35 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <HeroBackground glow={glow} />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-rise mb-6 flex justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/60 to-indigo-500/60 opacity-70 blur-md"
              />
              <Image
                src="/images/kapil.jpg"
                alt={SITE.name}
                width={96}
                height={96}
                priority
                sizes="96px"
                className="relative rounded-full border border-border/60 object-cover shadow-xl"
              />
              <span className="absolute bottom-1.5 right-1.5 flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-background bg-green-500" />
              </span>
            </div>
          </div>

          <div
            className="animate-rise mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to backend, AI &amp; full-stack roles
          </div>

          <h1
            className="animate-rise bg-gradient-to-br from-foreground via-foreground to-primary/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            {SITE.name}
          </h1>

          <p
            className="animate-rise mt-4 text-xl font-medium text-muted-foreground sm:text-2xl"
            style={{ animationDelay: "0.15s" }}
          >
            Software Engineer
          </p>

          <div
            className="animate-rise mt-5 flex flex-wrap items-center justify-center gap-2"
            style={{ animationDelay: "0.2s" }}
          >
            {FOCUS.map((f) => (
              <span
                key={f}
                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {f}
              </span>
            ))}
          </div>

          <p
            className="animate-rise mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "0.25s" }}
          >
            Building scalable backends, AI-powered applications, and
            cloud-native software.
          </p>

          <div
            className="animate-rise mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" asChild>
              <Link href="/#projects">
                View Projects <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={SITE.resumePath} download>
                <Download /> Download Resume
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <Link
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <Link
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </Link>
            </Button>
          </div>

          <div
            className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-muted-foreground/70">Also into</span>
            {INTERESTS.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/50 px-2.5 py-1"
              >
                <Icon className="h-3.5 w-3.5 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroBackground({ glow }: { glow: { x: number; y: number } }) {
  return (
    <>
      {/* base gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20"
      />
      {/* grid with radial fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:46px_46px] opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
      />
      {/* large conic aurora behind the name */}
      <div
        aria-hidden
        className="animate-aurora pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[110px] [background:conic-gradient(from_180deg_at_50%_50%,hsl(217_91%_60%/0.7),hsl(243_75%_59%/0.6),hsl(190_90%_55%/0.5),hsl(217_91%_60%/0.7))]"
      />
      {/* drifting blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-[26rem] w-[26rem] rounded-full bg-primary/20 opacity-50 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-1/4 h-[22rem] w-[22rem] rounded-full bg-indigo-500/20 opacity-50 blur-[120px]"
      />
      {/* mouse-follow spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(560px circle at ${glow.x}% ${glow.y}%, hsl(var(--primary) / 0.13), transparent 42%)`,
        }}
      />
      {/* bottom fade into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background"
      />
    </>
  );
}
