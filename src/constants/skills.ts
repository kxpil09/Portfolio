import { Boxes, Cloud, Code2, Sparkles } from "lucide-react";
import type { SkillCategory } from "@/types";

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "Java", "C++", "SQL"],
  },
  {
    title: "Backend",
    icon: Boxes,
    skills: ["FastAPI", "REST APIs", "WebSocket", "PostgreSQL", "SQLite"],
  },
  {
    title: "AI",
    icon: Sparkles,
    skills: [
      "LLMs",
      "Agentic AI",
      "RAG",
      "MCP",
      "Prompt Engineering",
      "AI Integration",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "GCP", "Linux", "Git", "CI/CD", "DevSecOps"],
  },
];
