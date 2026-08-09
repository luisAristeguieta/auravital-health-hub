import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PatientBooking } from "@/components/auravital/PatientBooking";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, LogIn, Sparkles } from "lucide-react";

interface PacienteSearch {
  specialty?: string | undefined;
}

export const Route = createFileRoute("/paciente")({
  validateSearch: (search: Record<string, unknown>): PacienteSearch => {
    const spec = search["specialty"];
    return {
      specialty: typeof spec === "string" ? spec : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Portal del Paciente — AuraVital" },
      {
        name: "description",
        content: "Agenda tus consultas médicas y revisa tu historial de atenciones en AuraVital.",
      },
      { property: "og:title", content: "Portal del Paciente — AuraVital" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PacienteRoute,
});

function PacienteRoute() {
  const navigate = useNavigate();
  const { specialty } = Route.useSearch();
  const { user, quickLogin } = useAuth();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="space-y-6 animate-in fade-in duration-300">
        {!user && (
          <Card className="p-4 sm:p-5 border-primary/20 bg-gradient-to-r from-primary/10 via-card to-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl shadow-xs">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">¿Tienes cuenta de Paciente AuraVital?</p>
                <p className="text-xs text-muted-foreground">
                  Inicia sesión para sincronizar automáticamente tus citas agendadas y tu historial clínico.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                size="sm"
                variant="outline"
                onClick={() => quickLogin("patient")}
                className="text-xs font-semibold h-8 rounded-lg"
              >
                <Sparkles className="mr-1.5 h-3.5 w-3.5 text-amber-500" />
                Demo Paciente
              </Button>
              <Button
                size="sm"
                onClick={() => navigate({ to: "/login", search: { tab: "login", role: "patient" } })}
                className="text-xs font-bold h-8 rounded-lg bg-primary text-primary-foreground cursor-pointer"
              >
                <LogIn className="mr-1.5 h-3.5 w-3.5" />
                Iniciar Sesión
              </Button>
            </div>
          </Card>
        )}

        <PatientBooking
          key={`${specialty ?? "default"}-${user?.id || "anon"}`}
          initialSpecialtyId={specialty}
        />
      </div>
    </div>
  );
}
