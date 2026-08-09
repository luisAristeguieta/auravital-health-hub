import { Stethoscope, ShieldCheck, User, Home, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

export type Role = "home" | "catalog" | "patient" | "doctor" | "admin";

const roles: { id: Role; label: string; icon: typeof User }[] = [
  { id: "home", label: "Inicio", icon: Home },
  { id: "catalog", label: "Catálogo", icon: ShoppingBag },
  { id: "patient", label: "Soy Cliente", icon: User },
  { id: "doctor", label: "Soy Doctor", icon: Stethoscope },
  { id: "admin", label: "Administrador", icon: ShieldCheck },
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
