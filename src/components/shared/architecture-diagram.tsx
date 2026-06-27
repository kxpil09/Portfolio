import { ArrowDown } from "lucide-react";

export function ArchitectureDiagram({ nodes }: { nodes: string[] }) {
  return (
    <div className="flex flex-col items-center gap-0 rounded-xl border border-border/60 bg-card/50 p-6 font-mono text-sm">
      {nodes.map((node, i) => (
        <div key={node} className="flex flex-col items-center">
          <div className="rounded-lg border border-border bg-secondary px-4 py-2 text-center text-foreground shadow-sm">
            {node}
          </div>
          {i < nodes.length - 1 && (
            <ArrowDown className="my-1.5 h-4 w-4 text-primary/70" aria-hidden />
          )}
        </div>
      ))}
    </div>
  );
}
