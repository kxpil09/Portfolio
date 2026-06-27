import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">
          <ArrowLeft /> Back home
        </Link>
      </Button>
    </div>
  );
}
