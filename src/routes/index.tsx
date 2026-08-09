import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { LandingHome } from "@/components/auravital/LandingHome";
import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AuraVital — CRM Médico, Agenda y Salud Terapéutica" },
      {
        name: "description",
        content:
          "Plataforma AuraVital: agenda citas médicas, gestión de salud terapéutica con calor de jade, catálogo de equipos, historias clínicas y tienda médica.",
      },
      { property: "og:title", content: "AuraVital — CRM Médico, Agenda y Salud Terapéutica" },
      {
        property: "og:description",
        content:
          "Plataforma AuraVital: agenda citas médicas, gestión de salud terapéutica con calor de jade, catálogo de equipos, historias clínicas y tienda médica.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleBooking = (specialtyId?: string) => {
    if (!user) {
      navigate({
        to: "/login",
        search: { tab: "login", role: "patient" },
      });
    } else {
      navigate({
        to: "/paciente",
        search: specialtyId ? { specialty: specialtyId } : {},
      });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <LandingHome
      onGoToBooking={handleBooking}
      onGoToCatalog={() => {
        navigate({ to: "/catalogo" });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      onGoToDoctor={() => {
        if (user?.role === "doctor") {
          navigate({ to: "/doctor" });
        } else {
          navigate({ to: "/login", search: { tab: "login", role: "doctor" } });
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      onGoToAdmin={() => {
        if (user?.role === "admin") {
          navigate({ to: "/admin" });
        } else {
          navigate({ to: "/login", search: { tab: "login", role: "admin" } });
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    />
  );
}
