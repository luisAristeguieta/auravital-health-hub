import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/pages/LoginPage";
import { type UserRole } from "@/context/AuthContext";

interface LoginSearch {
  tab?: "login" | "register" | undefined;
  role?: UserRole | undefined;
}

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>): LoginSearch => {
    return {
      tab: search["tab"] === "register" ? "register" : "login",
      role: (search["role"] as UserRole) || undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Iniciar Sesión o Registro — AuraVital" },
      {
        name: "description",
        content: "Ingresa a tu cuenta de paciente, médico o administrador en la plataforma médica AuraVital.",
      },
      { property: "og:title", content: "Iniciar Sesión o Registro — AuraVital" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LoginRoute,
});

function LoginRoute() {
  const { tab, role } = Route.useSearch();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <LoginPage initialTab={tab} initialRole={role} />
    </div>
  );
}
