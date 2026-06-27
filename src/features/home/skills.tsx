import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/constants/skills";

export function Skills() {
  return (
    <Section id="skills" muted>
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          description="A focused stack for backend services, AI-powered features, and cloud-native deployment."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.05}>
            <Card className="card-glow h-full bg-card/60 p-6 backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/20">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
