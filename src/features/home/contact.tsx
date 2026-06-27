import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { CopyEmail } from "@/components/shared/copy-email";
import { SITE, SOCIALS } from "@/constants/site";

const CHANNELS = [
  { label: "GitHub", value: "kxpil09", href: SOCIALS.github, icon: Github },
  {
    label: "LinkedIn",
    value: "kapil-kukreja",
    href: SOCIALS.linkedin,
    icon: Linkedin,
  },
  {
    label: "Telegram",
    value: SOCIALS.telegramHandle,
    href: SOCIALS.telegram,
    icon: Send,
  },
  {
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <div className="rounded-3xl border border-border/60 bg-card/50 p-8 sm:p-12">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something"
            description="Open to backend, AI, and full-stack engineering roles. The fastest way to reach me is email."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href={SOCIALS.email}>
                <Mail /> Email me
              </a>
            </Button>
            <CopyEmail />
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {SITE.location}
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map(({ label, value, href, icon: Icon }, i) => (
            <Reveal key={label} delay={0.1 + i * 0.05}>
              <Link
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-background p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="truncate text-sm font-medium">{value}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
