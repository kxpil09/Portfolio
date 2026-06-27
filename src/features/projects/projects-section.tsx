import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { ProjectCard } from "@/features/projects/project-card";
import { FEATURED_PROJECTS } from "@/constants/projects";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Production-grade systems with real engineering trade-offs — not just feature lists."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {FEATURED_PROJECTS.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
