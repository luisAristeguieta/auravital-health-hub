import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  CreditCard,
  Download,
  FileSpreadsheet,
  FileText,
  Filter,
  Package,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatCard } from "./StatCard";
import { AdminFinancials } from "./AdminFinancials";
import { AdminStore } from "./AdminStore";
import {
  currency,
  doctors,
  earnings,
  initialPatients,
  initialProducts,
} from "@/data/auravital";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface ConsultSale {
  id: string;
  datetime: string;
  patientName: string;
  patientCedula: string;
  doctorName: string;
  specialty: string;
  amount: number;
  doctorShare: number;
  clinicShare: number;
  method: "Tarjeta" | "Transferencia";
  status: "Aprobado" | "Liquidado";
}

interface ProductSale {
  id: string;
  date: string;
  invoice: string;
  customer: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  status: "Entregado" | "En Despacho" | "En Tránsito";
}

const consultSalesData: ConsultSale[] = [
  {
    id: "cs-1",
    datetime: "09 Ago 2026 · 08:30",
    patientName: "Juan Pérez",
    patientCedula: "1712345678",
    doctorName: "Dra. Valeria Ríos",
    specialty: "Cardiología",
    amount: 60,
    doctorShare: 36,
    clinicShare: 24,
    method: "Tarjeta",
    status: "Aprobado",
  },
  {
    id: "cs-2",
    datetime: "09 Ago 2026 · 09:00",
    patientName: "María López",
    patientCedula: "0923456781",
    doctorName: "Lcdo. Diego Suárez",
    specialty: "Fisioterapia",
    amount: 45,
    doctorShare: 24.75,
    clinicShare: 20.25,
    method: "Transferencia",
    status: "Aprobado",
  },
  {
    id: "cs-3",
    datetime: "08 Ago 2026 · 10:00",
    patientName: "Carlos Mendoza",
    patientCedula: "1103456789",
    doctorName: "Dra. Valeria Ríos",
    specialty: "Cardiología",
    amount: 60,
    doctorShare: 36,
    clinicShare: 24,
    method: "Tarjeta",
    status: "Aprobado",
  },
  {
    id: "cs-4",
    datetime: "08 Ago 2026 · 11:30",
    patientName: "Sofía Ramírez",
    patientCedula: "1720984532",
    doctorName: "Dr. Andrés Cabrera",
    specialty: "Cardiología",
    amount: 70,
    doctorShare: 42,
    clinicShare: 28,
    method: "Tarjeta",
    status: "Aprobado",
  },
  {
    id: "cs-5",
    datetime: "07 Ago 2026 · 15:00",
    patientName: "Elena Cruz",
    patientCedula: "1709845123",
    doctorName: "Dr. Roberto Silva",
    specialty: "Cardiología",
    amount: 50,
    doctorShare: 30,
    clinicShare: 20,
    method: "Transferencia",
    status: "Liquidado",
  },
  {
    id: "cs-6",
    datetime: "07 Ago 2026 · 16:30",
    patientName: "Roberto Noboa",
    patientCedula: "1711442233",
    doctorName: "Lcda. Karla Salazar",
    specialty: "Fisioterapia",
    amount: 45,
    doctorShare: 22.5,
    clinicShare: 22.5,
    method: "Tarjeta",
    status: "Liquidado",
  },
  {
    id: "cs-7",
    datetime: "06 Ago 2026 · 09:30",
    patientName: "Patricia Díaz",
    patientCedula: "0912445566",
    doctorName: "Dr. Mateo Benítez",
    specialty: "Nutrición",
    amount: 45,
    doctorShare: 24.75,
    clinicShare: 20.25,
    method: "Tarjeta",
    status: "Liquidado",
  },
  {
    id: "cs-8",
    datetime: "05 Ago 2026 · 11:00",
    patientName: "Fernando Vega",
    patientCedula: "1802334455",
    doctorName: "Lcda. Ana Terán",
    specialty: "Nutrición",
    amount: 40,
    doctorShare: 20,
    clinicShare: 20,
    method: "Transferencia",
    status: "Liquidado",
  },
  {
    id: "cs-9",
    datetime: "05 Ago 2026 · 14:00",
    patientName: "Diana Ortiz",
    patientCedula: "1723445566",
    doctorName: "Dr. Gabriel Paz",
    specialty: "Traumatología",
    amount: 65,
    doctorShare: 39,
    clinicShare: 26,
    method: "Tarjeta",
    status: "Liquidado",
  },
  {
    id: "cs-10",
    datetime: "04 Ago 2026 · 10:30",
    patientName: "Carmen Salazar",
    patientCedula: "1104556677",
    doctorName: "Dra. Sofía Morales",
    specialty: "Nutrición",
    amount: 45,
    doctorShare: 22.5,
    clinicShare: 22.5,
    method: "Tarjeta",
    status: "Liquidado",
  },
];

const productSalesData: ProductSale[] = [
  {
    id: "ps-1",
    date: "09 Ago 2026",
    invoice: "FAC-00891",
    customer: "Andrés Vaca",
    productName: "Camilla Terapéutica Térmica de Jade",
    quantity: 1,
    unitPrice: 1450,
    totalPrice: 1450,
    status: "Entregado",
  },
  {
    id: "ps-2",
    date: "08 Ago 2026",
    invoice: "FAC-00890",
    customer: "Dra. Mariana Cárdenas",
    productName: "Camilla Terapéutica Térmica de Jade",
    quantity: 2,
    unitPrice: 1450,
    totalPrice: 2900,
    status: "Entregado",
  },
  {
    id: "ps-3",
    date: "07 Ago 2026",
    invoice: "FAC-00889",
    customer: "Clínica San Rafael",
    productName: "Camilla Terapéutica Térmica de Jade",
    quantity: 3,
    unitPrice: 1450,
    totalPrice: 4350,
    status: "Entregado",
  },
  {
    id: "ps-4",
    date: "07 Ago 2026",
    invoice: "FAC-00888",
    customer: "Nadia Ríos",
    productName: "Cinturón de Electroestimulación EMS",
    quantity: 4,
    unitPrice: 120,
    totalPrice: 480,
    status: "Entregado",
  },
  {
    id: "ps-5",
    date: "06 Ago 2026",
    invoice: "FAC-00887",
    customer: "Centro Fisioterapia & Bienestar",
    productName: "Masajeador Térmico Espinal",
    quantity: 5,
    unitPrice: 210,
    totalPrice: 1050,
    status: "En Despacho",
  },
  {
    id: "ps-6",
    date: "05 Ago 2026",
    invoice: "FAC-00886",
    customer: "Juan Carlos Noboa",
    productName: "Cojín Térmico Cerámico Tourmalina",
    quantity: 8,
    unitPrice: 89,
    totalPrice: 712,
    status: "Entregado",
  },
  {
    id: "ps-7",
    date: "04 Ago 2026",
    invoice: "FAC-00885",
    customer: "Centro Kinesio Norte",
    productName: "Camilla Terapéutica Térmica de Jade",
    quantity: 2,
    unitPrice: 1450,
    totalPrice: 2900,
    status: "Entregado",
  },
  {
    id: "ps-8",
    date: "03 Ago 2026",
    invoice: "FAC-00884",
    customer: "Paulina Echeverría",
    productName: "Cinturón de Electroestimulación EMS",
    quantity: 10,
    unitPrice: 120,
    totalPrice: 1200,
    status: "Entregado",
  },
];

export function AdminDashboard() {
  const consultRevenue = earnings.reduce((a, e) => a + e.amount, 0) * 4;
  const productRevenue = initialProducts.reduce((a, p) => a + p.price * p.sold, 0);
  const activeDoctors = doctors.filter((d) => d.active).length;

  // Modal states
  const [openConsultModal, setOpenConsultModal] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);

  // Search queries inside modals
  const [consultQuery, setConsultQuery] = useState("");
  const [productQuery, setProductQuery] = useState("");

  // Filtered consults
  const filteredConsults = useMemo(() => {
    const q = consultQuery.trim().toLowerCase();
    if (!q) return consultSalesData;
    return consultSalesData.filter(
      (c) =>
        c.patientName.toLowerCase().includes(q) ||
        c.patientCedula.includes(q) ||
        c.doctorName.toLowerCase().includes(q) ||
        c.specialty.toLowerCase().includes(q)
    );
  }, [consultQuery]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    const q = productQuery.trim().toLowerCase();
    if (!q) return productSalesData;
    return productSalesData.filter(
      (p) =>
        p.customer.toLowerCase().includes(q) ||
        p.productName.toLowerCase().includes(q) ||
        p.invoice.toLowerCase().includes(q)
    );
  }, [productQuery]);

  const handleExport = (reportType: "consultas" | "productos") => {
    toast.success(`¡Reporte financiero de ${reportType} exportado exitosamente a Excel / PDF!`);
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold sm:text-3xl text-foreground">
              Control General
            </h1>
            <Badge className="bg-primary/20 text-primary border border-primary/30 text-xs font-semibold">
              Super Administrador
            </Badge>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Visión ejecutiva de operaciones clínicas, finanzas, comisiones y tienda terapéutica.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleExport("consultas")}
            className="h-9 text-xs font-semibold gap-1.5"
          >
            <Download className="h-3.5 w-3.5" /> Descargar Consolidado
          </Button>
        </div>
      </div>

      {/* TARJETAS KPI (LAS 2 PRIMERAS SON INTERACTIVAS CON MODALES) */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* KPI 1: Ingresos por Citas (Clicable) */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setOpenConsultModal(true)}
          className="cursor-pointer group transition-all duration-200 hover:scale-[1.02]"
        >
          <StatCard
            label="Ingresos por citas"
            value={currency(consultRevenue)}
            hint="Haz clic para ver desglose detallado ↗"
            icon={TrendingUp}
            accent
          />
        </div>

        {/* KPI 2: Ventas de Productos (Clicable) */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setOpenProductModal(true)}
          className="cursor-pointer group transition-all duration-200 hover:scale-[1.02]"
        >
          <StatCard
            label="Ventas de productos"
            value={currency(productRevenue)}
            hint="Haz clic para ver reporte de ventas ↗"
            icon={Package}
          />
        </div>

        {/* KPI 3: Pacientes registrados */}
        <StatCard
          label="Pacientes registrados"
          value={String(initialPatients.length + 128)}
          hint="Base activa en CRM"
          icon={Users}
        />

        {/* KPI 4: Doctores activos */}
        <StatCard
          label="Doctores activos"
          value={`${activeDoctors} / ${doctors.length}`}
          hint="Personal médico en servicio"
          icon={Stethoscope}
        />
      </div>

      {/* PESTAÑAS PRINCIPALES DEL ADMIN */}
      <Tabs defaultValue="finance" className="space-y-6">
        <TabsList className="w-full justify-start overflow-x-auto h-11 p-1 bg-muted rounded-xl">
          <TabsTrigger value="finance" className="rounded-lg text-xs sm:text-sm font-semibold">
            Finanzas y Gestión Operativa
          </TabsTrigger>
          <TabsTrigger value="store" className="rounded-lg text-xs sm:text-sm font-semibold">
            Tienda Terapéutica & Stock
          </TabsTrigger>
        </TabsList>

        <TabsContent value="finance" className="mt-0">
          <AdminFinancials />
        </TabsContent>

        <TabsContent value="store" className="mt-0">
          <AdminStore />
        </TabsContent>
      </Tabs>

      {/* --- MODAL DETALLE 1: INGRESOS POR CITAS MÉDICAS --- */}
      <Dialog open={openConsultModal} onOpenChange={setOpenConsultModal}>
        <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-4xl bg-card border shadow-2xl space-y-4">
          <DialogHeader className="border-b pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <DialogTitle className="text-xl font-bold flex items-center gap-2 text-foreground">
                  <TrendingUp className="h-5 w-5 text-primary" /> Desglose Financiero de Consultas Médicas
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-0.5">
                  Liquidación de citas, división de comisiones profesionales e ingresos brutos de la clínica.
                </DialogDescription>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handleExport("consultas")}
                className="h-8 text-xs font-bold gap-1.5 border-primary/40 text-primary hover:bg-primary/10 self-start sm:self-auto shrink-0"
              >
                <FileSpreadsheet className="h-3.5 w-3.5" /> 📄 Exportar Reporte
              </Button>
            </div>
          </DialogHeader>

          {/* Tarjetas de resumen en el modal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl border bg-muted/40 space-y-1">
              <span className="text-[11px] uppercase font-bold text-muted-foreground">Total Cobrado (Bruto)</span>
              <p className="text-xl font-black text-foreground">{currency(consultRevenue)}</p>
            </div>

            <div className="p-3.5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 space-y-1">
              <span className="text-[11px] uppercase font-bold text-emerald-800 dark:text-emerald-300">
                Honorarios Doctores (Liquidables)
              </span>
              <p className="text-xl font-black text-emerald-700 dark:text-emerald-300">
                {currency(consultRevenue * 0.58)}
              </p>
            </div>

            <div className="p-3.5 rounded-xl border bg-primary/10 border-primary/30 space-y-1">
              <span className="text-[11px] uppercase font-bold text-primary">
                Margen Neto AuraVital (42%)
              </span>
              <p className="text-xl font-black text-primary">
                {currency(consultRevenue * 0.42)}
              </p>
            </div>
          </div>

          {/* Barra de búsqueda */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={consultQuery}
              onChange={(e) => setConsultQuery(e.target.value)}
              placeholder="Buscar por paciente, cédula, médico o especialidad…"
              className="pl-9 text-xs h-9"
            />
          </div>

          {/* Tabla de desglose de consultas */}
          <Card className="gap-0 p-0 overflow-hidden border shadow-sm">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="text-xs bg-muted/40">
                    <TableHead>Fecha y Hora</TableHead>
                    <TableHead>Paciente</TableHead>
                    <TableHead>Doctor / Rama</TableHead>
                    <TableHead className="text-right">Monto Total</TableHead>
                    <TableHead>Comisión (Doctor / Clínica)</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead className="text-center">Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-xs">
                  {filteredConsults.map((c) => (
                    <TableRow key={c.id} className="hover:bg-muted/20">
                      <TableCell className="font-mono text-muted-foreground text-[11px]">
                        {c.datetime}
                      </TableCell>
                      <TableCell>
                        <p className="font-bold text-foreground">{c.patientName}</p>
                        <p className="text-[10px] text-muted-foreground font-mono">{c.patientCedula}</p>
                      </TableCell>
                      <TableCell>
                        <p className="font-semibold text-foreground">{c.doctorName}</p>
                        <Badge variant="outline" className="text-[10px] px-1 py-0">
                          {c.specialty}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-black text-foreground">
                        {currency(c.amount)}
                      </TableCell>
                      <TableCell>
                        <div className="text-[11px] font-medium space-y-0.5">
                          <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            Dr: {currency(c.doctorShare)}
                          </p>
                          <p className="text-primary">
                            Clínica: {currency(c.clinicShare)}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-[10px] font-medium">
                          {c.method}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-[10px]">
                          ✓ {c.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          <DialogFooter className="pt-2 border-t flex items-center justify-between sm:justify-between">
            <p className="text-xs text-muted-foreground font-medium">
              Mostrando {filteredConsults.length} transacciones registradas
            </p>
            <Button onClick={() => setOpenConsultModal(false)} className="text-xs">
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* --- MODAL DETALLE 2: VENTAS DE PRODUCTOS TERAPÉUTICOS --- */}
      <Dialog open={openProductModal} onOpenChange={setOpenProductModal}>
        <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-4xl bg-card border shadow-2xl space-y-4">
          <DialogHeader className="border-b pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <DialogTitle className="text-xl font-bold flex items-center gap-2 text-foreground">
                  <Package className="h-5 w-5 text-primary" /> Reporte Detallado de Ventas de Equipos
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-0.5">
                  Registro de facturación, despachos y ventas de tecnología terapéutica (Camillas de Jade, EMS, etc.).
                </DialogDescription>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handleExport("productos")}
                className="h-8 text-xs font-bold gap-1.5 border-primary/40 text-primary hover:bg-primary/10 self-start sm:self-auto shrink-0"
              >
                <FileSpreadsheet className="h-3.5 w-3.5" /> 📄 Exportar Reporte
              </Button>
            </div>
          </DialogHeader>

          {/* Resumen del reporte */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl border bg-muted/40 space-y-1">
              <span className="text-[11px] uppercase font-bold text-muted-foreground">Facturación Total Tienda</span>
              <p className="text-xl font-black text-foreground">{currency(productRevenue)}</p>
            </div>

            <div className="p-3.5 rounded-xl border bg-primary/10 border-primary/30 space-y-1">
              <span className="text-[11px] uppercase font-bold text-primary">Unidades Despachadas</span>
              <p className="text-xl font-black text-primary">
                {productSalesData.reduce((a, b) => a + b.quantity, 0)} unidades
              </p>
            </div>

            <div className="p-3.5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 space-y-1">
              <span className="text-[11px] uppercase font-bold text-emerald-800 dark:text-emerald-300">
                Camillas de Jade Vendidas
              </span>
              <p className="text-xl font-black text-emerald-700 dark:text-emerald-300">9 Camillas</p>
            </div>
          </div>

          {/* Barra de búsqueda */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={productQuery}
              onChange={(e) => setProductQuery(e.target.value)}
              placeholder="Buscar por comprador, producto o N.º de factura…"
              className="pl-9 text-xs h-9"
            />
          </div>

          {/* Tabla de ventas de productos */}
          <Card className="gap-0 p-0 overflow-hidden border shadow-sm">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="text-xs bg-muted/40">
                    <TableHead>Fecha / Factura</TableHead>
                    <TableHead>Cliente / Comprador</TableHead>
                    <TableHead>Producto Adquirido</TableHead>
                    <TableHead className="text-center">Cant.</TableHead>
                    <TableHead className="text-right">P. Unitario</TableHead>
                    <TableHead className="text-right">Total Facturado</TableHead>
                    <TableHead className="text-center">Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-xs">
                  {filteredProducts.map((p) => (
                    <TableRow key={p.id} className="hover:bg-muted/20">
                      <TableCell>
                        <p className="font-mono font-bold text-foreground">{p.invoice}</p>
                        <p className="text-[10px] text-muted-foreground">{p.date}</p>
                      </TableCell>
                      <TableCell className="font-semibold text-foreground">
                        {p.customer}
                      </TableCell>
                      <TableCell>
                        <p className="font-bold text-primary truncate max-w-[200px]">{p.productName}</p>
                      </TableCell>
                      <TableCell className="text-center font-bold">
                        {p.quantity}
                      </TableCell>
                      <TableCell className="text-right font-mono text-muted-foreground">
                        {currency(p.unitPrice)}
                      </TableCell>
                      <TableCell className="text-right font-black text-foreground">
                        {currency(p.totalPrice)}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          className={cn(
                            "text-[10px] font-semibold gap-1",
                            p.status === "Entregado"
                              ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
                              : "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"
                          )}
                        >
                          <Truck className="h-3 w-3" /> {p.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          <DialogFooter className="pt-2 border-t flex items-center justify-between sm:justify-between">
            <p className="text-xs text-muted-foreground font-medium">
              Mostrando {filteredProducts.length} ventas de equipos registradas
            </p>
            <Button onClick={() => setOpenProductModal(false)} className="text-xs">
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
