import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProjectMockup } from "@/features/projects/project-mockup";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="card-glow group flex h-full flex-col overflow-hidden bg-card/60 backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block overflow-hidden border-b border-border/60"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,hsl(var(--primary)/0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,hsl(243_75%_59%/0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />

        <div className="relative p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-sm">
                <project.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-primary">
                  {project.tagline}
                </p>
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.name}
                </h3>
              </div>
            </div>
            {project.featured && (
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                Featured
              </span>
            )}
          </div>

          <ProjectMockup
            slug={project.slug}
            className="transition-transform duration-500 group-hover:-translate-y-1"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {project.highlights.slice(0, 4).map((h) => (
            <div
              key={h}
              className="rounded-lg border border-border/50 bg-secondary/40 px-3 py-2 text-xs text-muted-foreground"
            >
              {h}
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 6).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Case study <ArrowUpRight className="h-4 w-4" />
          </Link>
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" /> Code
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
