"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Command } from "cmdk";
import {
  ArrowRight,
  FileText,
  Github,
  Home,
  Linkedin,
  Mail,
  Moon,
  Send,
  Sun,
  User,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SITE, SOCIALS } from "@/constants/site";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const run = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  const external = (url: string) =>
    window.open(url, "_blank", "noopener,noreferrer");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent hideClose className="overflow-hidden p-0">
        <DialogTitle className="sr-only">Command palette</DialogTitle>
        <Command className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground">
          <Command.Input
            placeholder="Type a command or search…"
            className="w-full border-b border-border/60 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground"
          />
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation">
              <Item
                onSelect={() => run(() => router.push("/#home"))}
                icon={Home}
              >
                Home
              </Item>
              <Item
                onSelect={() => run(() => router.push("/#about"))}
                icon={User}
              >
                About
              </Item>
              <Item
                onSelect={() => run(() => router.push("/#projects"))}
                icon={ArrowRight}
              >
                Projects
              </Item>
              <Item
                onSelect={() => run(() => router.push("/signals"))}
                icon={Send}
              >
                Live Signals
              </Item>
              <Item
                onSelect={() => run(() => router.push("/resume"))}
                icon={FileText}
              >
                Resume
              </Item>
            </Command.Group>

            <Command.Group heading="Links">
              <Item
                onSelect={() => run(() => external(SOCIALS.github))}
                icon={Github}
              >
                GitHub
              </Item>
              <Item
                onSelect={() => run(() => external(SOCIALS.linkedin))}
                icon={Linkedin}
              >
                LinkedIn
              </Item>
              <Item
                onSelect={() => run(() => external(SOCIALS.telegram))}
                icon={Send}
              >
                Telegram
              </Item>
              <Item
                onSelect={() =>
                  run(() => (window.location.href = SOCIALS.email))
                }
                icon={Mail}
              >
                Email
              </Item>
            </Command.Group>

            <Command.Group heading="Theme">
              <Item
                onSelect={() =>
                  run(() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark"),
                  )
                }
                icon={resolvedTheme === "dark" ? Sun : Moon}
              >
                Toggle theme
              </Item>
              <Item
                onSelect={() => run(() => external(SITE.resumePath))}
                icon={FileText}
              >
                Download résumé
              </Item>
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function Item({
  children,
  onSelect,
  icon: Icon,
}: {
  children: React.ReactNode;
  onSelect: () => void;
  icon: typeof Home;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground"
    >
      <Icon className="h-4 w-4 text-muted-foreground" />
      {children}
    </Command.Item>
  );
}
