import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/auravital/Header";
import type { Role } from "@/components/auravital/RoleSelector";
import { PatientBooking } from "@/components/auravital/PatientBooking";
import { DoctorDashboard } from "@/components/auravital/DoctorDashboard";
import { AdminDashboard } from "@/components/auravital/AdminDashboard";

const title = "AuraVital — CRM Médico, Agenda y Salud Terapéutica";
const description =
  "Plataforma AuraVital: agenda citas médicas, gestiona historias clínicas, ganancias por consulta y la tienda de productos terapéuticos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [role, setRole] = useState<Role>("patient");

  return (
    <div className="min-h-screen bg-background">
      <Header role={role} onRoleChange={setRole} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {role === "patient" && <PatientBooking />}
        {role === "doctor" && <DoctorDashboard />}
        {role === "admin" && <AdminDashboard />}
      </main>
      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        AuraVital · Prototipo funcional con datos de demostración
      </footer>
    </div>
  );
}
