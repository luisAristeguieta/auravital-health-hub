import { useMemo, useState } from "react";
import {
  Calendar as CalendarIcon,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  FileText,
  Grid,
  List,
  Search,
  User,
  UserPlus,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { DoctorEarnings } from "./DoctorEarnings";
import { PatientHistoryModal } from "./PatientHistoryModal";
import { QuickPatientModal } from "@/components/doctor/QuickPatientModal";
import {
  bmi,
  initialPatients,
  type Patient,
  type Vitals,
} from "@/data/auravital";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export interface DoctorCalendarAppointment {
  id: string;
  patient: string;
  dayIndex: number; // 0: Lun, 1: Mar, 2: Mié, 3: Jue, 4: Vie, 5: Sáb
  dayDate: number;  // 10, 11, 12, etc.
  dayMonthName: string;
  time: string;     // e.g. "08:30"
  timeHour: string; // "08:00", "09:00", etc.
  reason: string;
  specialty: string;
  status: "attended" | "waiting" | "absent";
  phone: string;
  record: string;
}

const initialWeekAppointments: DoctorCalendarAppointment[] = [
  // LUNES 10
  {
    id: "apt-w1",
    patient: "Juan Pérez",
    dayIndex: 0,
    dayDate: 10,
    dayMonthName: "Ago",
    time: "08:30",
    timeHour: "08:00",
    reason: "Control cardiológico",
    specialty: "Cardiología",
    status: "attended",
    phone: "+593 99 812 4455",
    record: "HC-00124",
  },
  {
    id: "apt-w2",
    patient: "Carlos Mendoza",
    dayIndex: 0,
    dayDate: 10,
    dayMonthName: "Ago",
    time: "10:00",
    timeHour: "10:00",
    reason: "Presión arterial y fatiga",
    specialty: "Cardiología",
    status: "waiting",
    phone: "+593 96 220 7781",
    record: "HC-00126",
  },
  {
    id: "apt-w3",
    patient: "Elena Cruz",
    dayIndex: 0,
    dayDate: 10,
    dayMonthName: "Ago",
    time: "14:30",
    timeHour: "14:00",
    reason: "Seguimiento post tratamiento",
    specialty: "Cardiología",
    status: "waiting",
    phone: "+593 99 443 2210",
    record: "HC-00129",
  },

  // MARTES 11
  {
    id: "apt-w4",
    patient: "María López",
    dayIndex: 1,
    dayDate: 11,
    dayMonthName: "Ago",
    time: "09:00",
    timeHour: "09:00",
    reason: "Chequeo preventivo anual",
    specialty: "Cardiología",
    status: "attended",
    phone: "+593 98 445 1120",
    record: "HC-00125",
  },
  {
    id: "apt-w5",
    patient: "Sofía Ramírez",
    dayIndex: 1,
    dayDate: 11,
    dayMonthName: "Ago",
    time: "11:00",
    timeHour: "11:00",
    reason: "Primera consulta - Palpitaciones",
    specialty: "Cardiología",
    status: "waiting",
    phone: "+593 97 112 3344",
    record: "HC-00127",
  },

  // MIÉRCOLES 12
  {
    id: "apt-w6",
    patient: "Roberto Noboa",
    dayIndex: 2,
    dayDate: 12,
    dayMonthName: "Ago",
    time: "10:30",
    timeHour: "10:00",
    reason: "Electrocardiograma de esfuerzo",
    specialty: "Cardiología",
    status: "waiting",
    phone: "+593 99 900 1122",
    record: "HC-00130",
  },
  {
    id: "apt-w7",
    patient: "Patricia Díaz",
    dayIndex: 2,
    dayDate: 12,
    dayMonthName: "Ago",
    time: "15:00",
    timeHour: "15:00",
    reason: "Control de arritmia",
    specialty: "Cardiología",
    status: "attended",
    phone: "+593 98 776 5544",
    record: "HC-00131",
  },

  // JUEVES 13
  {
    id: "apt-w8",
    patient: "Fernando Vega",
    dayIndex: 3,
    dayDate: 13,
    dayMonthName: "Ago",
    time: "08:30",
    timeHour: "08:00",
    reason: "Auscultación y ecocardiograma",
    specialty: "Cardiología",
    status: "waiting",
    phone: "+593 99 123 9988",
    record: "HC-00132",
  },
  {
    id: "apt-w9",
    patient: "Diana Ortiz",
    dayIndex: 3,
    dayDate: 13,
    dayMonthName: "Ago",
    time: "16:00",
    timeHour: "16:00",
    reason: "Revisión de mapa de presión",
    specialty: "Cardiología",
    status: "waiting",
    phone: "+593 95 334 2211",
    record: "HC-00133",
  },

  // VIERNES 14
  {
    id: "apt-w10",
    patient: "Gabriel Castillo",
    dayIndex: 4,
    dayDate: 14,
    dayMonthName: "Ago",
    time: "09:30",
    timeHour: "09:00",
    reason: "Valoración prequirúrgica",
    specialty: "Cardiología",
    status: "absent",
    phone: "+593 97 889 0011",
    record: "HC-00134",
  },
  {
    id: "apt-w11",
    patient: "Carmen Salazar",
    dayIndex: 4,
    dayDate: 14,
    dayMonthName: "Ago",
    time: "11:00",
    timeHour: "11:00",
    reason: "Control de medicación",
    specialty: "Cardiología",
    status: "attended",
    phone: "+593 98 221 4455",
    record: "HC-00135",
  },

  // SÁBADO 15
  {
    id: "apt-w12",
    patient: "Jorge Molina",
    dayIndex: 5,
    dayDate: 15,
    dayMonthName: "Ago",
    time: "10:00",
    timeHour: "10:00",
    reason: "Revisión interconsulta",
    specialty: "Cardiología",
    status: "waiting",
    phone: "+593 99 554 3322",
    record: "HC-00136",
  },
];

const weekDays = [
  { label: "Lun", date: 10, full: "Lunes 10 de Agosto" },
  { label: "Mar", date: 11, full: "Martes 11 de Agosto" },
  { label: "Mié", date: 12, full: "Miércoles 12 de Agosto" },
  { label: "Jue", date: 13, full: "Jueves 13 de Agosto" },
  { label: "Vie", date: 14, full: "Viernes 14 de Agosto" },
  { label: "Sáb", date: 15, full: "Sábado 15 de Agosto" },
];

const timeGridHours = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const emptyForm = { firstName: "", lastName: "", cedula: "", age: "", phone: "" };

export function DoctorDashboard() {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [appointments, setAppointments] = useState<DoctorCalendarAppointment[]>(initialWeekAppointments);
  
  // Tabs state: "agenda" | "records" | "earnings"
  const [activeTab, setActiveTab] = useState<"agenda" | "records" | "earnings">("agenda");

  // Agenda view state: "day" | "week" | "month"
  const [agendaMode, setAgendaMode] = useState<"day" | "week" | "month">("week");
  const [selectedDayIndex, setSelectedDayIndex] = useState(0); // 0 = Lunes 10

  // Active appointment for modal details
  const [detailApt, setDetailApt] = useState<DoctorCalendarAppointment | null>(null);

  // Search & Modals state
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Patient | null>(null);
  const [openHistory, setOpenHistory] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return patients;
    return patients.filter((p) =>
      [p.firstName, p.lastName, p.cedula, p.record].some((v) => v.toLowerCase().includes(q)),
    );
  }, [patients, query]);

  // Dynamic KPI counts based on all appointments in doctor's current agenda
  const counts = {
    total: appointments.length,
    attended: appointments.filter((a) => a.status === "attended").length,
    waiting: appointments.filter((a) => a.status === "waiting").length,
    absent: appointments.filter((a) => a.status === "absent").length,
  };

  const updateStatus = (id: string, newStatus: "attended" | "waiting" | "absent") => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
    if (detailApt && detailApt.id === id) {
      setDetailApt({ ...detailApt, status: newStatus });
    }
    const label = newStatus === "attended" ? "Atendido" : newStatus === "absent" ? "No asistió" : "En espera";
    toast.success(`Estado de la cita actualizado a "${label}"`);
  };

  // Open clinical record directly from agenda
  const handleOpenPatientRecord = (patientNameOrRecord: string) => {
    const clean = patientNameOrRecord.trim().toLowerCase();
    const found = patients.find(
      (p) =>
        (p.firstName + " " + p.lastName).toLowerCase().includes(clean) ||
        p.record.toLowerCase() === clean ||
        p.cedula === clean ||
        clean.includes(p.firstName.toLowerCase())
    );

    if (found) {
      setSelected(found);
      setQuery(found.firstName);
      setActiveTab("records");
      setOpenHistory(true);
      setDetailApt(null);
      toast.info(`Abriendo historia clínica de ${found.firstName} ${found.lastName}`);
    } else {
      // Fallback search
      setQuery(patientNameOrRecord);
      setActiveTab("records");
      toast.info(`Buscando expediente para ${patientNameOrRecord}`);
    }
  };

  const saveHistory = (id: string, vitals: Vitals, note: string) => {
    setPatients((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              vitals,
              notes: note
                ? [{ id: crypto.randomUUID(), date: new Date().toISOString().slice(0, 10), text: note }, ...p.notes]
                : p.notes,
            }
          : p,
      ),
    );
  };

  const handlePatientCreated = (newPatient: Patient, reason: string) => {
    // 1. Agregar a la lista general de historias clínicas
    setPatients((prev) => [newPatient, ...prev]);

    // 2. Agregar como cita para hoy en la agenda del día
    const newApt: DoctorCalendarAppointment = {
      id: `apt-${crypto.randomUUID()}`,
      patient: `${newPatient.firstName} ${newPatient.lastName}`,
      dayIndex: 0, // Lunes 10 (Hoy)
      dayDate: 10,
      dayMonthName: "Ago",
      time: "11:30",
      timeHour: "11:00",
      reason: reason || "Consulta médica / Triage de recepción",
      specialty: "Cardiología",
      status: "waiting",
      phone: newPatient.phone,
      record: newPatient.record,
    };
    setAppointments((prev) => [newApt, ...prev]);
    setActiveTab("agenda");
  };

  // Day appointments for "day" view
  const currentDayApts = appointments.filter((a) => a.dayIndex === selectedDayIndex);

  return (
    <div className="space-y-6 pb-12">
      {/* CABECERA DEL DOCTOR */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-2xl font-extrabold sm:text-3xl text-foreground">
              Panel del Doctor
            </h1>
            <Badge className="bg-primary/20 text-primary border border-primary/30 text-xs font-semibold">
              En Servicio
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Dra. Valeria Ríos · Especialista en Cardiología & CRM Clínico
          </p>
        </div>

        <Button
          onClick={() => setOpenNew(true)}
          className="rounded-xl bg-primary text-primary-foreground font-bold shadow-sm hover:bg-primary/90"
        >
          <UserPlus className="mr-2 h-4 w-4" /> Registro Rápido de Paciente
        </Button>

        <QuickPatientModal
          open={openNew}
          onOpenChange={setOpenNew}
          onPatientCreated={handlePatientCreated}
        />
      </div>

      {/* PESTAÑAS PRINCIPALES (TABS) */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "agenda" | "records" | "earnings")} className="space-y-6">
        <TabsList className="w-full justify-start overflow-x-auto h-11 p-1 bg-muted rounded-xl">
          <TabsTrigger value="agenda" className="rounded-lg text-xs sm:text-sm font-semibold">
            <CalendarDays className="mr-2 h-4 w-4" /> Agenda del día
          </TabsTrigger>
          <TabsTrigger value="records" className="rounded-lg text-xs sm:text-sm font-semibold">
            <FileText className="mr-2 h-4 w-4" /> Historias Clínicas
          </TabsTrigger>
          <TabsTrigger value="earnings" className="rounded-lg text-xs sm:text-sm font-semibold">
            Mis Ganancias
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: AGENDA DEL DÍA (CON VISTA DÍA / SEMANA / MES) */}
        <TabsContent value="agenda" className="space-y-6 mt-0">
          {/* TARJETAS KPI SUPERIORES */}
          <div className="grid gap-4 sm:grid-cols-4">
            <StatCard label="Citas agendadas en total" value={String(counts.total)} icon={CalendarDays} accent />
            <StatCard label="Pacientes atendidos" value={String(counts.attended)} icon={CheckCircle2} />
            <StatCard label="En espera de atención" value={String(counts.waiting)} icon={Clock} />
            <StatCard label="Ausentes / cancelados" value={String(counts.absent)} icon={XCircle} />
          </div>

          {/* BARRA DE CONTROL DEL CALENDARIO: SELECTOR DÍA/SEMANA/MES Y NAVEGACIÓN */}
          <Card className="p-4 bg-card border shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Navegación por fechas */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
              <div className="flex items-center gap-1 border rounded-lg p-1 bg-muted/30">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (agendaMode === "day") {
                      setSelectedDayIndex((prev) => (prev > 0 ? prev - 1 : weekDays.length - 1));
                    } else {
                      toast.info("Navegando a la semana previa.");
                    }
                  }}
                  className="h-8 w-8 p-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (agendaMode === "day") {
                      setSelectedDayIndex((prev) => (prev < weekDays.length - 1 ? prev + 1 : 0));
                    } else {
                      toast.info("Navegando a la siguiente semana.");
                    }
                  }}
                  className="h-8 w-8 p-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold text-foreground">
                  {agendaMode === "day"
                    ? weekDays[selectedDayIndex]?.full ?? ""
                    : agendaMode === "week"
                    ? "Semana del 10 al 15 de Agosto, 2026"
                    : "Agosto 2026"}
                </span>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedDayIndex(0);
                  toast.success("Mostrando agenda actual");
                }}
                className="h-8 text-xs font-semibold"
              >
                Hoy
              </Button>
            </div>

            {/* Selector de modo: [Día] [Semana] [Mes] */}
            <div className="flex items-center gap-1 p-1 bg-muted rounded-xl border self-end md:self-auto">
              <button
                onClick={() => setAgendaMode("day")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                  agendaMode === "day"
                    ? "bg-card text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <List className="h-3.5 w-3.5" /> Día
              </button>

              <button
                onClick={() => setAgendaMode("week")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                  agendaMode === "week"
                    ? "bg-card text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Grid className="h-3.5 w-3.5" /> Semana
              </button>

              <button
                onClick={() => setAgendaMode("month")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                  agendaMode === "month"
                    ? "bg-card text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <CalendarDays className="h-3.5 w-3.5" /> Mes
              </button>
            </div>
          </Card>

          {/* VISTA 1: SEMANA (PARRILLA DE HORARIOS POR DÍA) */}
          {agendaMode === "week" && (
            <Card className="p-0 overflow-hidden border shadow-md bg-card">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs">
                  {/* Encabezado de Días */}
                  <thead>
                    <tr className="border-b bg-muted/60 text-muted-foreground">
                      <th className="p-3 text-left w-20 font-bold border-r">Horario</th>
                      {weekDays.map((d, idx) => (
                        <th key={d.label} className="p-3 text-center min-w-[150px] border-r last:border-r-0">
                          <span className="block text-[11px] uppercase font-bold text-muted-foreground">
                            {d.label}
                          </span>
                          <span className={cn(
                            "inline-block text-sm font-extrabold mt-0.5 rounded-full px-2 py-0.5",
                            idx === 0 ? "bg-primary text-primary-foreground" : "text-foreground"
                          )}>
                            {d.date}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  {/* Filas de Horas */}
                  <tbody className="divide-y">
                    {timeGridHours.map((hour) => (
                      <tr key={hour} className="hover:bg-muted/10 transition-colors">
                        {/* Columna de Hora */}
                        <td className="p-3 font-mono font-bold text-muted-foreground border-r bg-muted/20 align-top">
                          {hour}
                        </td>

                        {/* Columnas por día */}
                        {weekDays.map((_, dayIdx) => {
                          const slotApts = appointments.filter(
                            (a) => a.dayIndex === dayIdx && a.timeHour === hour
                          );

                          return (
                            <td
                              key={dayIdx}
                              className="p-1.5 border-r last:border-r-0 align-top min-h-[70px] h-20"
                            >
                              {slotApts.map((apt) => {
                                const isAttended = apt.status === "attended";
                                const isAbsent = apt.status === "absent";
                                const isWaiting = apt.status === "waiting";

                                return (
                                  <div
                                    key={apt.id}
                                    className={cn(
                                      "group relative rounded-xl p-2 mb-1.5 text-left border shadow-sm transition-all duration-200 cursor-pointer select-none",
                                      isAttended && "bg-emerald-500/15 border-emerald-500/30 text-emerald-800 dark:text-emerald-300 hover:border-emerald-500 hover:shadow-md",
                                      isWaiting && "bg-rose-500/15 border-primary/40 text-foreground hover:border-primary hover:shadow-md hover:scale-[1.02]",
                                      isAbsent && "bg-slate-500/15 border-slate-400/30 text-muted-foreground opacity-60 line-through"
                                    )}
                                  >
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="font-mono text-[10px] font-bold text-primary flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> {apt.time}
                                      </span>
                                      <Badge
                                        variant="outline"
                                        className={cn(
                                          "text-[9px] px-1 py-0 border-transparent",
                                          isAttended && "bg-emerald-600 text-white",
                                          isWaiting && "bg-primary text-white",
                                          isAbsent && "bg-muted text-muted-foreground"
                                        )}
                                      >
                                        {isAttended ? "Atendido" : isWaiting ? "En espera" : "No asistió"}
                                      </Badge>
                                    </div>

                                    {/* Link directo a Historia Clínica */}
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleOpenPatientRecord(apt.patient);
                                      }}
                                      className="font-bold text-xs mt-1 truncate hover:text-primary hover:underline transition-colors block text-left w-full"
                                      title="Ver Historia Clínica"
                                    >
                                      {apt.patient}
                                    </button>

                                    <div className="flex items-center justify-between mt-0.5">
                                      <p className="text-[10px] text-muted-foreground truncate">
                                        {apt.reason}
                                      </p>
                                      <button
                                        onClick={() => setDetailApt(apt)}
                                        className="text-[9px] text-primary font-bold hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
                                      >
                                        Detalle
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* VISTA 2: DÍA (LISTA DETALLADA) */}
          {agendaMode === "day" && (
            <Card className="p-0 overflow-hidden border shadow-sm bg-card">
              <div className="border-b p-4 bg-muted/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-base font-bold text-foreground">
                    Consultas del {weekDays[selectedDayIndex]?.full ?? ""}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {currentDayApts.length} pacientes programados · Haz clic en el nombre para abrir su historia clínica
                  </p>
                </div>
                <div className="flex items-center gap-1 overflow-x-auto">
                  {weekDays.map((d, i) => (
                    <Button
                      key={d.label}
                      size="sm"
                      variant={selectedDayIndex === i ? "default" : "outline"}
                      onClick={() => setSelectedDayIndex(i)}
                      className="h-8 text-xs font-bold shrink-0"
                    >
                      {d.label} {d.date}
                    </Button>
                  ))}
                </div>
              </div>

              {currentDayApts.length === 0 ? (
                <div className="p-10 text-center text-muted-foreground text-xs">
                  No hay citas agendadas para este día.
                </div>
              ) : (
                <ul className="divide-y">
                  {currentDayApts.map((a) => (
                    <li key={a.id} className="grid gap-3 p-4 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center hover:bg-muted/20 transition-colors">
                      <span className="flex items-center gap-2 text-sm font-bold text-primary">
                        <Clock className="h-4 w-4" /> {a.time}
                      </span>
                      <div className="min-w-0 space-y-1">
                        <div className="flex items-center gap-2">
                          {/* NOMBRE CLICABLE HACIA HISTORIA CLÍNICA */}
                          <button
                            onClick={() => handleOpenPatientRecord(a.patient)}
                            className="group flex items-center gap-1 text-sm font-bold text-foreground hover:text-primary hover:underline transition-colors text-left"
                            title="Abrir Historia Clínica de este paciente"
                          >
                            <span>{a.patient}</span>
                            <ExternalLink className="h-3.5 w-3.5 text-primary opacity-70 group-hover:opacity-100" />
                          </button>

                          <Badge
                            role="button"
                            onClick={() => handleOpenPatientRecord(a.record)}
                            variant="outline"
                            className="text-[10px] px-1.5 py-0 cursor-pointer hover:border-primary hover:text-primary"
                            title="Ver expediente"
                          >
                            {a.record}
                          </Badge>

                          <Badge
                            variant={a.status === "attended" ? "default" : a.status === "absent" ? "destructive" : "secondary"}
                            className="text-[10px] px-1.5 py-0"
                          >
                            {a.status === "attended" ? "Atendido" : a.status === "absent" ? "No asistió" : "En espera"}
                          </Badge>
                        </div>
                        <p className="truncate text-xs text-muted-foreground">{a.reason} · Tel: {a.phone}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {([
                          ["attended", "Atendido"],
                          ["absent", "No asistió"],
                          ["waiting", "En espera"],
                        ] as const).map(([value, label]) => (
                          <Button
                            key={value}
                            size="sm"
                            variant={a.status === value ? "default" : "outline"}
                            className={cn(
                              "h-8 text-xs font-semibold rounded-lg",
                              a.status === value && value === "attended" && "bg-emerald-600 hover:bg-emerald-700 text-white",
                              a.status === value && value === "absent" && "bg-destructive text-destructive-foreground",
                              a.status === value && value === "waiting" && "bg-primary text-primary-foreground font-bold"
                            )}
                            onClick={() => updateStatus(a.id, value)}
                          >
                            {label}
                          </Button>
                        ))}

                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => handleOpenPatientRecord(a.patient)}
                          className="h-8 text-xs font-semibold hover:border-primary"
                          title="Abrir expediente"
                        >
                          <FileText className="h-3.5 w-3.5 mr-1 text-primary" /> Historia
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          )}

          {/* VISTA 3: MES (CALENDARIO DE BLOQUES 7X5) */}
          {agendaMode === "month" && (
            <Card className="p-4 border shadow-sm bg-card space-y-3">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-sm font-bold text-foreground">Calendario General · Agosto 2026</span>
                <span className="text-xs text-muted-foreground">31 Días</span>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center font-bold text-xs text-muted-foreground pb-1">
                <span>Dom</span>
                <span>Lun</span>
                <span>Mar</span>
                <span>Mié</span>
                <span>Jue</span>
                <span>Vie</span>
                <span>Sáb</span>
              </div>

              {/* 35 días en cuadrícula */}
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, idx) => {
                  const dayNum = idx - 5; // Offset to align Aug 1 to Saturday
                  const isValidDay = dayNum >= 1 && dayNum <= 31;
                  const dayApts = isValidDay ? appointments.filter((a) => a.dayDate === dayNum) : [];

                  return (
                    <div
                      key={idx}
                      className={cn(
                        "min-h-[90px] rounded-xl border p-2 text-left flex flex-col justify-between transition-all",
                        isValidDay ? "bg-card hover:border-primary hover:shadow-sm" : "bg-muted/20 opacity-30 pointer-events-none",
                        dayNum === 10 && "border-primary bg-primary/[0.02] ring-1 ring-primary/40"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className={cn("text-xs font-bold", dayNum === 10 ? "text-primary font-black" : "text-foreground")}>
                          {isValidDay ? dayNum : ""}
                        </span>
                        {dayApts.length > 0 && (
                          <Badge variant="secondary" className="text-[9px] px-1 py-0 font-extrabold text-primary">
                            {dayApts.length} {dayApts.length === 1 ? "cita" : "citas"}
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-1 mt-1">
                        {dayApts.slice(0, 2).map((apt) => (
                          <button
                            key={apt.id}
                            onClick={() => handleOpenPatientRecord(apt.patient)}
                            className="w-full text-left truncate text-[10px] rounded bg-muted/60 p-1 font-medium hover:text-primary hover:bg-primary/10 transition-colors block"
                            title="Abrir historia clínica"
                          >
                            <span className="font-bold text-primary">{apt.time}</span> {apt.patient.split(" ")[0]}
                          </button>
                        ))}
                        {dayApts.length > 2 && (
                          <p className="text-[9px] text-muted-foreground font-semibold">+{dayApts.length - 2} más</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}
        </TabsContent>

        {/* TAB 2: HISTORIAS CLÍNICAS */}
        <TabsContent value="records" className="space-y-5 mt-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por cédula, nombre, apellido o N.º de historia clínica..."
                className="pl-9"
              />
            </div>

            <Button
              variant="outline"
              onClick={() => {
                setActiveTab("agenda");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xs font-semibold shrink-0"
            >
              ← Volver a la Agenda del Día
            </Button>
          </div>

          <Card className="gap-0 overflow-x-auto p-0 border shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Paciente</TableHead>
                  <TableHead>Cédula</TableHead>
                  <TableHead>Edad</TableHead>
                  <TableHead>Historia</TableHead>
                  <TableHead>IMC</TableHead>
                  <TableHead>P. Arterial</TableHead>
                  <TableHead className="text-right">Acción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-bold text-foreground">{p.firstName} {p.lastName}</TableCell>
                    <TableCell>{p.cedula}</TableCell>
                    <TableCell>{p.age} años</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-mono text-xs font-bold text-primary">
                        {p.record}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold">{bmi(p.vitals.weight, p.vitals.height)}</TableCell>
                    <TableCell className="font-mono">{p.vitals.bloodPressure}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-primary text-primary-foreground font-semibold text-xs h-8"
                        onClick={() => {
                          setSelected(p);
                          setOpenHistory(true);
                        }}
                      >
                        <FileText className="mr-1.5 h-3.5 w-3.5" /> Ver Expediente
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="py-8 text-center text-muted-foreground">
                      Sin resultados para “{query}”.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        {/* TAB 3: MIS GANANCIAS */}
        <TabsContent value="earnings" className="mt-0">
          <DoctorEarnings />
        </TabsContent>
      </Tabs>

      {/* MODAL DETALLES DE CITA RÁPIDA DESDE EL CALENDARIO */}
      <Dialog open={!!detailApt} onOpenChange={(open) => !open && setDetailApt(null)}>
        <DialogContent className="sm:max-w-md bg-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> Ficha de Cita Médica
            </DialogTitle>
            <DialogDescription className="text-xs">
              Detalle y gestión rápida de estado para la consulta médica.
            </DialogDescription>
          </DialogHeader>

          {detailApt && (
            <div className="space-y-4 text-xs pt-1">
              <div className="rounded-2xl border bg-muted/40 p-4 space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Paciente:</span>
                  <button
                    onClick={() => handleOpenPatientRecord(detailApt.patient)}
                    className="font-bold text-sm text-primary hover:underline text-right"
                  >
                    {detailApt.patient} ↗
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Historia Clínica:</span>
                  <span className="font-mono font-semibold">{detailApt.record}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Teléfono / WhatsApp:</span>
                  <span className="font-semibold text-primary">{detailApt.phone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Horario Asignado:</span>
                  <span className="font-bold">{detailApt.dayDate} de {detailApt.dayMonthName} · {detailApt.time}</span>
                </div>
                <div className="flex justify-between items-center border-t pt-2">
                  <span className="text-muted-foreground">Motivo de Consulta:</span>
                  <span className="font-medium text-foreground">{detailApt.reason}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Estado Actual:</span>
                  <Badge
                    variant={detailApt.status === "attended" ? "default" : detailApt.status === "absent" ? "destructive" : "secondary"}
                    className="text-xs font-bold"
                  >
                    {detailApt.status === "attended" ? "Atendido" : detailApt.status === "absent" ? "No asistió" : "En espera"}
                  </Badge>
                </div>
              </div>

              {/* Botón para saltar directamente al expediente */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleOpenPatientRecord(detailApt.patient)}
                className="w-full h-9 font-bold text-primary hover:bg-primary/10 border-primary/40"
              >
                <FileText className="mr-2 h-4 w-4" /> Abrir Historia Clínica & Signos Vitales
              </Button>

              <div className="space-y-2 pt-1">
                <p className="font-bold text-foreground text-xs">Cambiar Estado de Atención:</p>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    size="sm"
                    variant={detailApt.status === "attended" ? "default" : "outline"}
                    className={cn(detailApt.status === "attended" && "bg-emerald-600 hover:bg-emerald-700 text-white font-bold")}
                    onClick={() => updateStatus(detailApt.id, "attended")}
                  >
                    <CheckCircle2 className="mr-1 h-3.5 w-3.5" /> Atendido
                  </Button>

                  <Button
                    size="sm"
                    variant={detailApt.status === "waiting" ? "default" : "outline"}
                    className={cn(detailApt.status === "waiting" && "bg-primary text-primary-foreground font-bold")}
                    onClick={() => updateStatus(detailApt.id, "waiting")}
                  >
                    <Clock className="mr-1 h-3.5 w-3.5" /> En espera
                  </Button>

                  <Button
                    size="sm"
                    variant={detailApt.status === "absent" ? "default" : "outline"}
                    className={cn(detailApt.status === "absent" && "bg-destructive text-white font-bold")}
                    onClick={() => updateStatus(detailApt.id, "absent")}
                  >
                    <XCircle className="mr-1 h-3.5 w-3.5" /> No asistió
                  </Button>
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="pt-2">
            <Button onClick={() => setDetailApt(null)} className="w-full">
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* MODAL DE HISTORIA CLÍNICA CON RETORNO A LA AGENDA */}
      <PatientHistoryModal
        patient={selected}
        open={openHistory}
        onOpenChange={setOpenHistory}
        onSave={saveHistory}
        onReturnToAgenda={() => setActiveTab("agenda")}
      />
    </div>
  );
}
