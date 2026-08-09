import {
  Activity,
  Apple,
  Baby,
  Bone,
  Brain,
  Eye,
  Flower2,
  HeartPulse,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { currency, specialties, type Specialty } from "@/data/auravital";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  HeartPulse,
  Baby,
  Sparkles,
  Bone,
  Brain,
  Flower2,
  Stethoscope,
  Eye,
  Activity,
  Apple,
};

export function SpecialtyGrid({
  selectedId,
  onSelect,
}: {
  selectedId?: string | undefined;
  onSelect: (s: Specialty) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {specialties.map((s) => {
        const Icon = icons[s.icon] ?? Stethoscope;
        const active = selectedId === s.id;
        return (
          <Card
            key={s.id}
            role="button"
            tabIndex={0}
            onClick={() => onSelect(s)}
            onKeyDown={(e) => e.key === "Enter" && onSelect(s)}
            className={cn(
              "cursor-pointer gap-0 p-4 transition-all hover:-translate-y-0.5 hover:shadow-card",
              active && "border-primary ring-1 ring-primary",
            )}
          >
            <span
              className={cn(
                "grid h-10 w-10 place-items-center rounded-md",
                active ? "bg-primary text-primary-foreground" : "bg-surface text-primary",
              )}
            >
              <Icon className="h-5 w-5" />
            </span>
            <p className="mt-3 text-sm font-semibold leading-snug">{s.name}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{s.description}</p>
            <p className="mt-2 text-xs font-medium text-primary">{currency(s.price)}</p>
          </Card>
        );
      })}
    </div>
  );
}
