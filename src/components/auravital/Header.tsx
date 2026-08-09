import { Activity } from "lucide-react";
import { RoleSelector, type Role } from "./RoleSelector";

export function Header({ role, onRoleChange }: { role: Role; onRoleChange: (r: Role) => void }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-card/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Activity className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-lg font-semibold leading-tight">AuraVital</p>
            <p className="truncate text-xs text-muted-foreground">
              CRM Médico · Agenda · Salud Terapéutica
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <RoleSelector role={role} onChange={onRoleChange} />
        </div>
      </div>
      <div className="border-t px-4 py-2 md:hidden">
        <RoleSelector role={role} onChange={onRoleChange} />
      </div>
    </header>
  );
}
