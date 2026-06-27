"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold tracking-tight">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        An unexpected error occurred. Try again, and if it persists, reach out.
      </p>
      <Button onClick={reset} className="mt-6">
        <RotateCcw /> Try again
      </Button>
    </div>
  );
}
