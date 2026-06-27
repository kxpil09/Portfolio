import {
  CheckCircle2,
  GitCompareArrows,
  Lightbulb,
  Target,
} from "lucide-react";
import type { ProjectChallenge } from "@/types";

const ROWS = [
  { key: "problem", label: "Problem", icon: Target },
  { key: "difficulty", label: "Why it was hard", icon: GitCompareArrows },
  { key: "solution", label: "Solution", icon: Lightbulb },
  { key: "tradeoff", label: "Trade-off", icon: GitCompareArrows },
  { key: "outcome", label: "Outcome", icon: CheckCircle2 },
] as const;

export function ChallengeBlock({
  challenge,
  index,
}: {
  challenge: ProjectChallenge;
  index: number;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {index + 1}
        </span>
        <h4 className="font-medium">{challenge.problem}</h4>
      </div>
      <dl className="space-y-3">
        {ROWS.map(({ key, label, icon: Icon }) => (
          <div key={key} className="flex gap-3">
            <dt className="flex w-36 shrink-0 items-start gap-2 text-sm font-medium text-foreground">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {label}
            </dt>
            <dd className="text-sm leading-relaxed text-muted-foreground">
              {challenge[key]}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
