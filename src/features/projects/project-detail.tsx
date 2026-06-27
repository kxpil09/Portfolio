import Link from "next/link";
import {
  ArrowLeft,
  Boxes,
  ExternalLink,
  Github,
  Rocket,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArchitectureDiagram } from "@/components/shared/architecture-diagram";
import { ChallengeBlock } from "@/features/projects/challenge-block";
import { ProjectMockup } from "@/features/projects/project-mockup";
import type { Project } from "@/types";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Block({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: typeof Boxes;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="flex items-center gap-2.5 text-2xl font-semibold tracking-tight">
        <Icon className="h-5 w-5 text-primary" />
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="container max-w-4xl py-28">
      <Button variant="ghost" size="sm" asChild className="-ml-2 mb-8">
        <Link href="/#projects">
          <ArrowLeft /> All projects
        </Link>
      </Button>

      <header>
        <p className="text-sm font-medium text-primary">{project.tagline}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.github && (
            <Button asChild>
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github /> View Code
              </Link>
            </Button>
          )}
          {project.links.demo && (
            <Button variant="outline" asChild>
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink /> Live Demo
              </Link>
            </Button>
          )}
          {project.links.telegram && (
            <Button variant="outline" asChild>
              <Link
                href={project.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send /> Telegram
              </Link>
            </Button>
          )}
        </div>
      </header>

      <div className="relative mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.16),transparent_60%)]" />
        <ProjectMockup slug={project.slug} className="relative mx-auto max-w-2xl" />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {project.highlights.map((h) => (
          <div
            key={h}
            className="rounded-xl border border-border/60 bg-card p-4 text-sm text-muted-foreground"
          >
            {h}
          </div>
        ))}
      </div>

      <div className="mt-14 space-y-14">
        <Block id="overview" icon={Sparkles} title="Overview">
          <p className="leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </Block>

        <Block id="architecture" icon={Boxes} title="Architecture">
          <ArchitectureDiagram nodes={project.architecture} />
        </Block>

        <Block id="features" icon={Sparkles} title="Features">
          <BulletList items={project.features} />
        </Block>

        <Block id="challenges" icon={Zap} title="Engineering Challenges">
          <div className="space-y-5">
            {project.challenges.map((c, i) => (
              <ChallengeBlock key={c.problem} challenge={c} index={i} />
            ))}
          </div>
        </Block>

        <Block id="performance" icon={Zap} title="Performance Optimizations">
          <BulletList items={project.performance} />
        </Block>

        <Block id="deployment" icon={Rocket} title="Deployment">
          <BulletList items={project.deployment} />
        </Block>

        <Block id="roadmap" icon={Rocket} title="Future Roadmap">
          <BulletList items={project.roadmap} />
        </Block>
      </div>
    </article>
  );
}
