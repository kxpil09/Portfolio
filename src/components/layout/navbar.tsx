"use client";

import { useState } from "react";
import Link from "next/link";
import { Command, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/constants/site";

export function Navbar() {
  const scrolled = useScroll(8);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-3 transition-all duration-300",
            scrolled
              ? "glass h-12 shadow-lg shadow-black/5"
              : "h-14 bg-transparent",
          )}
        >
          <Link
            href="/#home"
            className="pl-2 text-sm font-semibold tracking-tight"
          >
            {SITE.name}
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() =>
                document.dispatchEvent(
                  new KeyboardEvent("keydown", {
                    key: "k",
                    ctrlKey: true,
                    bubbles: true,
                  }),
                )
              }
              className="hidden items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
              aria-label="Open command palette"
            >
              <Command className="h-3 w-3" />
              <span>K</span>
            </button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-2xl p-2 md:hidden">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
