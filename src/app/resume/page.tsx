import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, Download, GraduationCap, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
} from "@/constants/experience";
import { SKILLS } from "@/constants/skills";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${SITE.name} — ${SITE.role}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <div className="container max-w-4xl py-28">
      <Button variant="ghost" size="sm" asChild className="-ml-2 mb-8">
        <Link href="/">
          <ArrowLeft /> Home
        </Link>
      </Button>

      <Reveal>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
            <p className="mt-2 text-muted-foreground">
              {SITE.role} · {SITE.location}
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <a href={SITE.resumePath} download>
                <Download /> Download
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={SITE.resumePath}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye /> View PDF
              </a>
            </Button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <Card className="mt-8 overflow-hidden">
          <object
            data={SITE.resumePath}
            type="application/pdf"
            className="h-[80vh] w-full"
            aria-label="Resume PDF"
          >
            <div className="flex flex-col items-center gap-3 p-12 text-center">
              <p className="text-sm text-muted-foreground">
                Your browser can&apos;t display the embedded PDF.
              </p>
              <Button asChild>
                <a href={SITE.resumePath} download>
                  <Download /> Download Resume
                </a>
              </Button>
            </div>
          </object>
        </Card>
      </Reveal>

      <div className="mt-14 space-y-12">
        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight">
              Experience
            </h2>
            {EXPERIENCE.map((job) => (
              <Card key={job.company} className="mt-5 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {job.role} · {job.company}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {job.summary}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {SKILLS.map((cat) => (
                <Card key={cat.title} className="p-5">
                  <h3 className="text-sm font-semibold">{cat.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <Badge key={s} variant="secondary">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
                <GraduationCap className="h-5 w-5 text-primary" /> Education
              </h2>
              <Card className="mt-5 p-6">
                <h3 className="font-semibold">{EDUCATION.school}</h3>
                <p className="text-sm text-muted-foreground">
                  {EDUCATION.degree}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  CGPA: {EDUCATION.cgpa} · {EDUCATION.location}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {EDUCATION.period}
                </p>
              </Card>
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
                <Award className="h-5 w-5 text-primary" /> Highlights
              </h2>
              <Card className="mt-5 space-y-4 p-6">
                <div>
                  <p className="text-sm font-medium">Certifications</p>
                  {CERTIFICATIONS.map((c) => (
                    <a
                      key={c.name}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                    >
                      {c.name} — {c.issuer}
                    </a>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium">Achievements</p>
                  {ACHIEVEMENTS.map((a) => (
                    <p
                      key={a.name}
                      className="mt-1 text-sm text-muted-foreground"
                    >
                      {a.name} · {a.date}
                    </p>
                  ))}
                </div>
              </Card>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
