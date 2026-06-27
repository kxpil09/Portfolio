import type { LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface ProjectLink {
  github?: string;
  demo?: string;
  telegram?: string;
}

export interface ProjectChallenge {
  problem: string;
  difficulty: string;
  solution: string;
  tradeoff: string;
  outcome: string;
}

export interface ProjectSection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  summary: string;
  period: string;
  featured: boolean;
  stack: string[];
  highlights: string[];
  architecture: string[];
  features: string[];
  challenges: ProjectChallenge[];
  performance: string[];
  deployment: string[];
  roadmap: string[];
  links: ProjectLink;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
}
