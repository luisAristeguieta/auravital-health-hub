import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { CatalogPage } from "@/components/auravital/CatalogPage";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo de Equipos Terapéuticos — AuraVital" },
      {
        name: "description",
        content:
          "Catálogo oficial de equipos terapéuticos AuraVital: camillas de jade, masajeadores espinales, cinturones EMS y cojines térmicos cerámicos.",
      },
      { property: "og:title", content: "Catálogo de Equipos Terapéuticos — AuraVital" },
      {
        property: "og:description",
        content:
          "Catálogo oficial de equipos terapéuticos AuraVital: camillas de jade, masajeadores espinales, cinturones EMS y cojines térmicos cerámicos.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CatalogoRoute,
});

function CatalogoRoute() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <CatalogPage
        onGoToBooking={(specialtyId) => {
          navigate({
            to: "/paciente",
            search: specialtyId ? { specialty: specialtyId } : {},
          });
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
