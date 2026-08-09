import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { DoctorDashboard } from "@/components/auravital/DoctorDashboard";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Lock, Stethoscope, Sparkles } from "lucide-react";

export const Route = createFileRoute("/doctor")({
  head: () => ({
    meta: [
      { title: "Panel Médico — AuraVital" },
      {
        name: "description",
        content: "Gestión clínica, agenda del día, historias de pacientes y comisiones médicas de AuraVital.",
      },
      { property: "og:title", content: "Panel Médico — AuraVital" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DoctorRoute,
});

function DoctorRoute() {
  const navigate = useNavigate();
  const { user, quickLogin } = useAuth();

  const handleQuickDoctor = () => {
    quickLogin("doctor");
    navigate({ to: "/doctor" });
  };

  if (!user || user.role !== "doctor") {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border bg-card p-8 sm:p-12 text-center max-w-xl mx-auto space-y-5 shadow-lg my-8 animate-in fade-in duration-300">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 mx-auto">
            <Stethoscope className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Acceso al Portal Médico</h2>
            <p className="text-sm text-muted-foreground">
              Esta área está reservada exclusivamente para el cuerpo médico de AuraVital. Inicia sesión con tus credenciales de especialista para gestionar la agenda, historias clínicas y liquidación de honorarios.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              onClick={handleQuickDoctor}
              className="w-full sm:w-auto rounded-xl bg-primary text-primary-foreground font-bold px-6 h-10 shadow-md hover:bg-primary/90"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Entrar como Dra. Valeria Ríos (Demo)
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate({ to: "/login", search: { tab: "login", role: "doctor" } })}
              className="w-full sm:w-auto rounded-xl font-semibold px-5 h-10 cursor-pointer"
            >
              <Lock className="mr-2 h-4 w-4" />
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 animate-in fade-in duration-300">
      <DoctorDashboard />
    </div>
  );
}
