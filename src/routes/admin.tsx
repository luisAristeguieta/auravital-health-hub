import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AdminDashboard } from "@/components/auravital/AdminDashboard";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Lock, ShieldAlert, Sparkles } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Control Administrativo & Finanzas — AuraVital" },
      {
        name: "description",
        content: "Panel de administración general, validación de transferencias bancarias, catálogo y métricas financieras de AuraVital.",
      },
      { property: "og:title", content: "Control Administrativo & Finanzas — AuraVital" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AdminRoute,
});

function AdminRoute() {
  const navigate = useNavigate();
  const { user, quickLogin } = useAuth();

  const handleQuickAdmin = () => {
    quickLogin("admin");
    navigate({ to: "/admin" });
  };

  if (!user || user.role !== "admin") {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border bg-card p-8 sm:p-12 text-center max-w-xl mx-auto space-y-5 shadow-lg my-8 animate-in fade-in duration-300">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-500/10 text-amber-600 mx-auto">
            <ShieldAlert className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Control Administrativo Protegido</h2>
            <p className="text-sm text-muted-foreground">
              Área confidencial para la dirección y finanzas de AuraVital. Autentícate como administrador para verificar transferencias bancarias, gestionar médicos y liquidación de honorarios.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              onClick={handleQuickAdmin}
              className="w-full sm:w-auto rounded-xl bg-primary text-primary-foreground font-bold px-6 h-10 shadow-md hover:bg-primary/90"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Entrar como Lic. Roberto Noboa (Admin)
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate({ to: "/login", search: { tab: "login", role: "admin" } })}
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
      <AdminDashboard />
    </div>
  );
}
