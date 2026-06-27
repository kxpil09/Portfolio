import { Hero } from "@/features/home/hero";
import { Stats } from "@/features/home/stats";
import { About } from "@/features/home/about";
import { Skills } from "@/features/home/skills";
import { ProjectsSection } from "@/features/projects/projects-section";
import { Contact } from "@/features/home/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <ProjectsSection />
      <Contact />
    </>
  );
}
