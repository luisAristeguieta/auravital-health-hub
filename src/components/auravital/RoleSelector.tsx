import { Stethoscope, ShieldCheck, User } from "lucide-react";
import { cn } from "@/lib/utils";

export type Role = "patient" | "doctor" | "admin";

const roles: { id: Role; label: string; icon: typeof User }[] = [
  { id: "patient", label: "Vista Paciente", icon: User },
  { id: "doctor", label: "Vista Doctor", icon: Stethoscope },
  { id: "admin", label: "Vista Súper Admin", icon: ShieldCheck },
];

export function RoleSelector({ role, onChange }: { role: Role; onChange: (r: Role) => void }) {
  return (
    <div className="flex w-full items-center gap-1 rounded-lg bg-surface p-1">
      {roles.map((r) => {
        const Icon = r.icon;
        const active = role === r.id;
        return (
          <button
            key={r.id}
            onClick={() => onChange(r.id)}
            aria-pressed={active}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-xs font-medium transition-colors sm:text-sm",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-card hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span className="truncate">{r.label}</span>
          </button>
        );
      })}
    </div>
  );
}
