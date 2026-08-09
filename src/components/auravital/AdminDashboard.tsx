import { Package, Stethoscope, TrendingUp, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "./StatCard";
import { AdminFinancials } from "./AdminFinancials";
import { AdminStore } from "./AdminStore";
import { currency, doctors, earnings, initialPatients, initialProducts } from "@/data/auravital";

export function AdminDashboard() {
  const consultRevenue = earnings.reduce((a, e) => a + e.amount, 0) * 4;
  const productRevenue = initialProducts.reduce((a, p) => a + p.price * p.sold, 0);
  const activeDoctors = doctors.filter((d) => d.active).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold sm:text-3xl">Control General</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Visión ejecutiva de operaciones clínicas, finanzas y tienda terapéutica.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Ingresos por citas" value={currency(consultRevenue)} hint="Acumulado del mes" icon={TrendingUp} accent />
        <StatCard label="Ventas de productos" value={currency(productRevenue)} hint="Catálogo terapéutico" icon={Package} />
        <StatCard label="Pacientes registrados" value={String(initialPatients.length + 128)} hint="Base activa" icon={Users} />
        <StatCard label="Doctores activos" value={`${activeDoctors} / ${doctors.length}`} hint="Personal habilitado" icon={Stethoscope} />
      </div>

      <Tabs defaultValue="finance">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="finance">Finanzas y Gestión</TabsTrigger>
          <TabsTrigger value="store">Tienda Terapéutica</TabsTrigger>
        </TabsList>
        <TabsContent value="finance" className="mt-5">
          <AdminFinancials />
        </TabsContent>
        <TabsContent value="store" className="mt-5">
          <AdminStore />
        </TabsContent>
      </Tabs>
    </div>
  );
}
