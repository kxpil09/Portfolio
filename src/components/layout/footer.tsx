import Link from "next/link";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { SITE, SOCIALS } from "@/constants/site";

const links = [
  { href: SOCIALS.github, label: "GitHub", icon: Github, external: true },
  { href: SOCIALS.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
  { href: SOCIALS.telegram, label: "Telegram", icon: Send, external: true },
  { href: SOCIALS.email, label: "Email", icon: Mail, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium">{SITE.name}</p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript, Tailwind CSS, and Vercel.
          </p>
        </div>

        <div className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon, external }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Icon className="h-[1.1rem] w-[1.1rem]" />
            </Link>
          ))}
        </div>
      </div>
      <div className="container pb-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
