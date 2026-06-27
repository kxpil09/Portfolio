import type { ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Infor",
    role: "Associate Software Engineer",
    location: "Hyderabad, India",
    period: "Oct 2024 — Present",
    summary:
      "Infor builds industry-focused cloud solutions. I contribute to enterprise payroll and HCM enhancements within an Agile, secure-SDLC team.",
    bullets: [
      "Delivered payroll and workflow enhancements in a Java/JSP HCM platform, enabling Canadian Federal and Provincial tax processing and improving transaction access for 1,000+ enterprise users.",
      "Engineered secure conditional deep-linking with role-based authorization and transaction-state validation, eliminating unauthorized-access scenarios found during UAT.",
      "Integrated application logic with IBM i-backed payroll systems using SQL validations across 10+ payroll fields (Federal, Provincial, Quebec) with zero post-release data issues.",
      "Resolved 50+ OWASP-aligned security findings from HCL AppScan and contributed to CI/CD pipelines via SBOM generation and API-based validation reporting.",
      "Supported enterprise QA cycles through defect triage, regression testing, root-cause analysis, and Python-based validation scripts.",
    ],
  },
];

export const EDUCATION = {
  school: "Chandigarh University",
  degree: "B.E. Computer Science and Engineering",
  period: "Aug 2020 — May 2024",
  location: "Mohali, Punjab",
  cgpa: "8.18",
};

export const CERTIFICATIONS = [
  {
    name: "Prompt Engineering for Everyone",
    issuer: "IBM Skills Network",
    url: "https://courses.cognitiveclass.ai/certificates/1bf368f61d9d48c6916724bb7f0b5348",
  },
];

export const ACHIEVEMENTS = [
  { name: "Spot Award Q4 2025 — Infor, Hyderabad", date: "Dec 2025" },
  { name: "3rd Prize — SPECATHON National Hackathon", date: "Sep 2023" },
];
