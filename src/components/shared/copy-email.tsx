"use client";

import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/hooks/use-copy";
import { cn } from "@/lib/utils";
import { SITE } from "@/constants/site";

export function CopyEmail({ className }: { className?: string }) {
  const { copied, copy } = useCopy();

  return (
    <Button
      variant="outline"
      onClick={() => copy(SITE.email)}
      className={cn("font-mono text-sm", className)}
      aria-label="Copy email address"
    >
      {copied ? <Check className="text-primary" /> : <Copy />}
      {copied ? "Copied!" : SITE.email}
    </Button>
  );
}
