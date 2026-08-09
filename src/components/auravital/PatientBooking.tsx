import { useState } from "react";
import {
  Building2,
  Calendar,
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  CreditCard,
  Download,
  Eye,
  FileCheck,
  FileText,
  FileUp,
  Landmark,
  Plus,
  RefreshCcw,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Trash2,
  User,
  X,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SpecialtyGrid } from "./SpecialtyGrid";
import { CalendarBooking } from "./CalendarBooking";
import { bankAccounts, currency, doctors, specialties, type Doctor, type Specialty } from "@/data/auravital";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export interface PatientAppointment {
  id: string;
  specialtyId: string;
  specialtyName: string;
  doctorName: string;
  doctorInitials: string;
  date: string;
  time: string;
  status: "confirmed" | "pending_transfer" | "attended" | "cancelled";
  paymentMethod: "Tarjeta" | "Transferencia";
  amount: number;
  location: string;
  transferDetails?: {
    bank: string;
    reference: string;
    receiptFileName: string;
  } | undefined;
  summary?: {
    diagnosis: string;
    notes: string;
    vitals: { bp: string; hr: number; temp: number; weight: number };
    indications: string[];
  } | undefined;
}

const initialMockAppointments: PatientAppointment[] = [
  {
    id: "apt-1",
    specialtyId: "fisio",
    specialtyName: "Fisioterapia / Salud Integral",
    doctorName: "Lcdo. Diego Suárez",
    doctorInitials: "DS",
    date: "15 de Agosto, 2026",
    time: "10:00 AM",
    status: "confirmed",
    paymentMethod: "Tarjeta",
    amount: 40,
    location: "Sede Norte · Sala Terapéutica 2 (Camilla de Jade)",
  },
  {
    id: "apt-2",
    specialtyId: "trauma",
    specialtyName: "Traumatología & Columna",
    doctorName: "Dr. Mateo Villacís",
    doctorInitials: "MV",
    date: "18 de Agosto, 2026",
    time: "15:30 PM",
    status: "pending_transfer",
    paymentMethod: "Transferencia",
    amount: 55,
    location: "Sede Centro · Consultorio 204",
    transferDetails: {
      bank: "Banco Pichincha",
      reference: "TRANS-8849201",
      receiptFileName: "comprobante_transferencia_pichincha_55usd.pdf",
    },
  },
  {
    id: "apt-3",
    specialtyId: "general",
    specialtyName: "Medicina General",
    doctorName: "Dr. Jorge Molina",
    doctorInitials: "JM",
    date: "10 de Julio, 2026",
    time: "09:00 AM",
    status: "attended",
    paymentMethod: "Tarjeta",
    amount: 30,
    location: "Sede Norte · Consultorio 102",
    summary: {
      diagnosis: "Control preventivo general. Lumbalgia postural leve por postura en escritorio.",
      notes: "Paciente refiere molestias lumbares ocasionales. Sin antecedentes quirúrgicos. Se recomienda higiene postural y terapia física.",
      vitals: { bp: "120/80 mmHg", hr: 72, temp: 36.5, weight: 84 },
      indications: [
        "Realizar pausas activas cada 2 horas de trabajo.",
        "Se deriva a sesión de termomasaje de jade en Fisioterapia.",
        "Control en 6 meses o en caso de dolor persistente.",
      ],
    },
  },
  {
    id: "apt-4",
    specialtyId: "cardio",
    specialtyName: "Cardiología",
    doctorName: "Dra. Valeria Ríos",
    doctorInitials: "VR",
    date: "25 de Junio, 2026",
    time: "11:00 AM",
    status: "attended",
    paymentMethod: "Tarjeta",
    amount: 60,
    location: "Sede Principal · Unidad de Cardiología",
    summary: {
      diagnosis: "Chequeo cardiológico rutinario. Presión arterial controlada.",
      notes: "Evolución favorable. Auscultación sin soplos. Ritmo sinusal normal.",
      vitals: { bp: "125/82 mmHg", hr: 68, temp: 36.4, weight: 85 },
      indications: [
        "Continuar plan de alimentación hiposódico.",
        "Caminatas de 30 minutos al menos 4 veces por semana.",
      ],
    },
  },
  {
    id: "apt-5",
    specialtyId: "derma",
    specialtyName: "Dermatología",
    doctorName: "Dr. Iván Peralta",
    doctorInitials: "IP",
    date: "02 de Julio, 2026",
    time: "14:00 PM",
    status: "cancelled",
    paymentMethod: "Tarjeta",
    amount: 50,
    location: "Sede Centro · Consultorio 301",
  },
];

const wizardSteps = ["Especialidad", "Doctor y horario", "Datos", "Pago", "Confirmación"];

export function PatientBooking({ initialSpecialtyId }: { initialSpecialtyId?: string | undefined }) {
  const { user } = useAuth();

  // Tab state: if initialSpecialtyId was passed from home, start on "booking", otherwise "history"
  const [activeTab, setActiveTab] = useState<"history" | "booking">(
    initialSpecialtyId ? "booking" : "history"
  );

  // Appointments state
  const [appointments, setAppointments] = useState<PatientAppointment[]>(initialMockAppointments);
  const [showCancelled, setShowCancelled] = useState(false);

  // Modals state
  const [cancelModalApt, setCancelModalApt] = useState<PatientAppointment | null>(null);
  const [receiptModalApt, setReceiptModalApt] = useState<PatientAppointment | null>(null);
  const [summaryModalApt, setSummaryModalApt] = useState<PatientAppointment | null>(null);

  // Wizard state for new booking
  const initialSpec = initialSpecialtyId ? specialties.find((s) => s.id === initialSpecialtyId) : undefined;
  const initialDoctor = initialSpec ? doctors.find((d) => d.specialtyId === initialSpec.id && d.active) : undefined;
  const [step, setStep] = useState(initialSpec ? 1 : 0);
  const [specialty, setSpecialty] = useState<Specialty | undefined>(initialSpec);
  const [doctor, setDoctor] = useState<Doctor | undefined>(initialDoctor);
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const [form, setForm] = useState({
    name: user?.name || "Juan Pérez",
    cedula: user?.cedula || "1712345678",
    email: user?.email || "paciente@auravital.com",
    whatsapp: user?.phone || "+593 99 812 4455",
  });
  const [gcal, setGcal] = useState(true);
  const [method, setMethod] = useState<"card" | "transfer">("card");
  const [card, setCard] = useState({ number: "", holder: "", expiry: "", cvv: "" });
  const [receipt, setReceipt] = useState<string>();
  const [paid, setPaid] = useState<"approved" | "pending">();

  // Filter appointments
  const upcomingApts = appointments.filter(
    (a) => a.status === "confirmed" || a.status === "pending_transfer"
  );
  const pastApts = appointments.filter((a) => a.status === "attended");
  const cancelledApts = appointments.filter((a) => a.status === "cancelled");

  // Handlers
  const handleCancelAppointment = () => {
    if (!cancelModalApt) return;
    setAppointments((prev) =>
      prev.map((a) => (a.id === cancelModalApt.id ? { ...a, status: "cancelled" } : a))
    );
    toast.success("Cita médica cancelada correctamente.");
    setCancelModalApt(null);
  };

  const handleSyncGCal = (apt: PatientAppointment) => {
    toast.success(`Cita con ${apt.doctorName} sincronizada con Google Calendar.`);
  };

  const handleSelectSpecialty = (s: Specialty) => {
    setSpecialty(s);
    const foundDoc = doctors.find((d) => d.specialtyId === s.id && d.active);
    if (foundDoc) {
      setDoctor(foundDoc);
    }
  };

  const handleRebook = (specId: string) => {
    const foundSpec = specialties.find((s) => s.id === specId);
    setSpecialty(foundSpec);
    const foundDoc = doctors.find((d) => d.specialtyId === specId && d.active);
    setDoctor(foundDoc);
    setDate(undefined);
    setTime(undefined);
    setStep(1);
    setActiveTab("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Booking Wizard Validation
  const canNext =
    (step === 0 && !!specialty) ||
    (step === 1 && !!doctor && !!date && !!time) ||
    (step === 2 && form.name && form.cedula && form.email && form.whatsapp) ||
    step === 3;

  const confirmBooking = () => {
    if (method === "card") {
      if (!card.number || !card.holder || !card.expiry || !card.cvv) {
        toast.error("Completa los datos de la tarjeta");
        return;
      }
      setPaid("approved");
      toast.success("Pago aprobado con éxito");
    } else {
      if (!receipt) {
        toast.error("Adjunta el comprobante de transferencia");
        return;
      }
      setPaid("pending");
      toast.success("Comprobante enviado. Pendiente de verificación");
    }

    // Add to appointments list
    const newApt: PatientAppointment = {
      id: `apt-${Date.now()}`,
      specialtyId: specialty?.id || "general",
      specialtyName: specialty?.name || "Consulta Médica",
      doctorName: doctor?.name || "Doctor AuraVital",
      doctorInitials: doctor?.initials || "DR",
      date: date ? `${date}` : "Próxima Fecha",
      time: time || "09:00 AM",
      status: method === "card" ? "confirmed" : "pending_transfer",
      paymentMethod: method === "card" ? "Tarjeta" : "Transferencia",
      amount: specialty?.price || 40,
      location: "Sede Principal AuraVital · Consultorio Central",
      ...(method === "transfer"
        ? {
            transferDetails: {
              bank: "Banco Pichincha",
              reference: `TRANS-${Math.floor(100000 + Math.random() * 900000)}`,
              receiptFileName: receipt || "comprobante_transferencia.pdf",
            },
          }
        : {}),
    };

    setAppointments((prev) => [newApt, ...prev]);
    setStep(4);
  };

  const resetWizard = () => {
    setStep(0);
    setSpecialty(undefined);
    setDoctor(undefined);
    setDate(undefined);
    setTime(undefined);
    setPaid(undefined);
    setReceipt(undefined);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* HEADER BIENVENIDA DEL PACIENTE */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Portal del Paciente
            </h1>
            <Badge className="bg-primary/20 text-primary border border-primary/30 text-xs font-semibold">
              Juan Pérez
            </Badge>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Gestiona tus citas programadas, historial de consultas médicas y agendamiento en línea.
          </p>
        </div>

        <Button
          onClick={() => {
            resetWizard();
            setActiveTab("booking");
          }}
          className="rounded-xl bg-primary px-6 font-bold shadow-md hover:bg-primary/90 text-white self-start sm:self-auto"
        >
          <Plus className="mr-2 h-4 w-4" /> Agendar Nueva Cita
        </Button>
      </div>

      {/* TABS PRINCIPALES */}
      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as "history" | "booking")}
        className="w-full space-y-6"
      >
        <TabsList className="grid w-full max-w-md grid-cols-2 h-11 p-1 bg-muted rounded-xl">
          <TabsTrigger
            value="history"
            className="rounded-lg text-xs sm:text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Mis Citas & Historial ({upcomingApts.length})
          </TabsTrigger>
          <TabsTrigger
            value="booking"
            className="rounded-lg text-xs sm:text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm"
          >
            <Plus className="mr-2 h-4 w-4" />
            Agendar Nueva Cita
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: MIS CITAS & HISTORIAL */}
        <TabsContent value="history" className="space-y-8 mt-0">
          {/* A) CITAS PRÓXIMAS / EN PROCESO */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> Citas Próximas y en Proceso
              </h2>
              <Badge variant="outline" className="text-xs">
                {upcomingApts.length} {upcomingApts.length === 1 ? "cita activa" : "citas activas"}
              </Badge>
            </div>

            {upcomingApts.length === 0 ? (
              <Card className="p-8 text-center bg-muted/20 border-dashed">
                <p className="text-sm text-muted-foreground">No tienes citas médicas próximas agendadas.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    resetWizard();
                    setActiveTab("booking");
                  }}
                  className="mt-4 text-xs font-semibold"
                >
                  <Plus className="mr-1.5 h-3.5 w-3.5" /> Reservar Turno Ahora
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingApts.map((apt) => (
                  <Card
                    key={apt.id}
                    className="overflow-hidden border-border/80 bg-card shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="p-5 space-y-4">
                      {/* Estado y Especialidad */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Badge variant="secondary" className="text-[11px] font-semibold text-primary mb-1">
                            {apt.specialtyName}
                          </Badge>
                          <h3 className="text-base font-bold text-foreground">{apt.doctorName}</h3>
                        </div>

                        {apt.status === "confirmed" ? (
                          <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 text-xs font-semibold">
                            <CheckCircle2 className="mr-1 h-3.5 w-3.5" /> Confirmada / Pagada
                          </Badge>
                        ) : (
                          <Badge className="bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30 text-xs font-semibold">
                            <Clock className="mr-1 h-3.5 w-3.5" /> Verificación Pendiente
                          </Badge>
                        )}
                      </div>

                      {/* Fecha, Hora y Sede */}
                      <div className="space-y-1.5 rounded-xl bg-muted/50 p-3 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">📅 Fecha y Hora:</span>
                          <span className="font-semibold text-foreground">
                            {apt.date} · {apt.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">📍 Ubicación:</span>
                          <span className="font-medium text-foreground">{apt.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">💳 Pago ({apt.paymentMethod}):</span>
                          <span className="font-bold text-primary">{currency(apt.amount)}</span>
                        </div>
                      </div>

                      {/* Botones de acción según estado */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSyncGCal(apt)}
                          className="text-xs h-8 hover:border-primary"
                        >
                          <CalendarCheck className="mr-1.5 h-3.5 w-3.5 text-primary" /> Sincronizar Calendar
                        </Button>

                        {apt.status === "pending_transfer" && (
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => setReceiptModalApt(apt)}
                            className="text-xs h-8"
                          >
                            <FileCheck className="mr-1.5 h-3.5 w-3.5" /> Ver Comprobante
                          </Button>
                        )}

                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setCancelModalApt(apt)}
                          className="text-xs h-8 text-destructive hover:bg-destructive/10 hover:text-destructive ml-auto"
                        >
                          <X className="mr-1 h-3.5 w-3.5" /> Cancelar Cita
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* B) HISTORIAL DE CITAS PASADAS */}
          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-600 dark:text-emerald-400" /> Historial de Consultas Atendidas
              </h2>
              <Badge variant="outline" className="text-xs">
                {pastApts.length} consultas pasadas
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pastApts.map((apt) => (
                <Card key={apt.id} className="border-border/80 bg-card p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="text-[10px] text-muted-foreground mb-1">
                        {apt.specialtyName}
                      </Badge>
                      <h3 className="text-base font-bold text-foreground">{apt.doctorName}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Atendido el {apt.date}</p>
                    </div>
                    <Badge className="bg-muted text-foreground text-xs">
                      <Check className="mr-1 h-3 w-3 text-emerald-500" /> Atendido
                    </Badge>
                  </div>

                  {apt.summary && (
                    <div className="rounded-xl bg-muted/40 p-3 text-xs space-y-1">
                      <p className="font-semibold text-foreground">Diagnóstico:</p>
                      <p className="text-muted-foreground line-clamp-2">{apt.summary.diagnosis}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSummaryModalApt(apt)}
                      className="text-xs h-8"
                    >
                      <Eye className="mr-1.5 h-3.5 w-3.5 text-primary" /> Ver Resumen Médico
                    </Button>

                    <Button
                      size="sm"
                      onClick={() => handleRebook(apt.specialtyId)}
                      className="text-xs h-8 bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
                    >
                      <RefreshCcw className="mr-1.5 h-3.5 w-3.5" /> Volver a Agendar
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* C) CITAS CANCELADAS (COLAPSABLE) */}
          <div className="space-y-3 pt-4 border-t">
            <button
              onClick={() => setShowCancelled(!showCancelled)}
              className="flex items-center justify-between w-full p-3 rounded-xl bg-muted/40 hover:bg-muted/70 transition-colors text-left"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <XCircle className="h-4 w-4 text-destructive" />
                <span>Citas Canceladas ({cancelledApts.length})</span>
              </div>
              <ChevronDown
                className={cn("h-4 w-4 text-muted-foreground transition-transform", showCancelled && "rotate-180")}
              />
            </button>

            {showCancelled && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {cancelledApts.length === 0 ? (
                  <p className="text-xs text-muted-foreground p-3">No tienes citas canceladas.</p>
                ) : (
                  cancelledApts.map((apt) => (
                    <Card key={apt.id} className="p-4 border-dashed bg-muted/20 opacity-80">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs font-bold text-foreground">{apt.specialtyName}</p>
                          <p className="text-xs text-muted-foreground">{apt.doctorName} · {apt.date}</p>
                        </div>
                        <Badge variant="destructive" className="text-[10px]">Cancelada</Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleRebook(apt.specialtyId)}
                        className="mt-2 text-xs h-7 text-primary hover:bg-primary/10"
                      >
                        Reagendar consulta →
                      </Button>
                    </Card>
                  ))
                )}
              </div>
            )}
          </div>
        </TabsContent>

        {/* TAB 2: AGENDAR NUEVA CITA (WIZARD DE 5 PASOS) */}
        <TabsContent value="booking" className="space-y-6 mt-0">
          {/* Progress Indicator */}
          <div className="grid grid-cols-5 gap-2 border-b pb-4 text-xs font-medium">
            {wizardSteps.map((label, idx) => (
              <div
                key={label}
                className={cn(
                  "flex items-center gap-2 border-b-2 pb-2 transition-colors",
                  step === idx && "border-primary text-primary font-bold",
                  step > idx && "border-emerald-500 text-emerald-600 dark:text-emerald-400",
                  step < idx && "border-transparent text-muted-foreground"
                )}
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-surface text-[10px]">
                  {step > idx ? <Check className="h-3 w-3" /> : idx + 1}
                </span>
                <span className="hidden sm:inline truncate">{label}</span>
              </div>
            ))}
          </div>

          {/* PASO 0: SELECCIÓN DE ESPECIALIDAD */}
          {step === 0 && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-foreground">1. Selecciona la Especialidad Médica</h2>
                <p className="text-xs text-muted-foreground">
                  Elige la rama médica en la que deseas recibir atención especializada.
                </p>
              </div>
              <SpecialtyGrid selected={specialty} onSelect={handleSelectSpecialty} />
            </div>
          )}

          {/* PASO 1: DOCTOR, FECHA Y HORARIO */}
          {step === 1 && specialty && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-foreground">2. Selecciona Doctor y Horario</h2>
                <p className="text-xs text-muted-foreground">
                  Especialidad elegida: <strong className="text-primary">{specialty.name}</strong>
                </p>
              </div>
              <CalendarBooking
                specialtyId={specialty.id}
                selectedDoctor={doctor}
                onSelectDoctor={setDoctor}
                selectedDate={date}
                onSelectDate={setDate}
                selectedTime={time}
                onSelectTime={setTime}
              />
            </div>
          )}

          {/* PASO 2: DATOS DEL PACIENTE Y GOOGLE CALENDAR */}
          {step === 2 && (
            <div className="max-w-xl mx-auto space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">3. Datos de Contacto del Paciente</h2>
                <p className="text-xs text-muted-foreground">
                  Recibirás la confirmación de la cita y recordatorio por WhatsApp.
                </p>
              </div>

              <Card className="p-6 space-y-4 bg-card">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-semibold">Nombres y Apellidos</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="cedula" className="text-xs font-semibold">Cédula de Identidad</Label>
                    <Input
                      id="cedula"
                      value={form.cedula}
                      onChange={(e) => setForm({ ...form, cedula: e.target.value })}
                      placeholder="1712345678"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="whatsapp" className="text-xs font-semibold">Número de WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="+593 99 812 4455"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-semibold">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="paciente@auravital.com"
                  />
                </div>

                <div className="flex items-center justify-between rounded-xl bg-muted/60 p-4 pt-3">
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-foreground">Sincronizar con Google Calendar</p>
                    <p className="text-[11px] text-muted-foreground">
                      Agrega el evento automáticamente con recordatorio a tu calendario.
                    </p>
                  </div>
                  <Switch checked={gcal} onCheckedChange={setGcal} />
                </div>
              </Card>
            </div>
          )}

          {/* PASO 3: MÓDULO DE PAGO */}
          {step === 3 && specialty && (
            <div className="max-w-xl mx-auto space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">4. Método de Pago</h2>
                <p className="text-xs text-muted-foreground">
                  Valor a cancelar: <strong className="text-primary">{currency(specialty.price)}</strong>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMethod("card")}
                  className={cn(
                    "flex flex-col items-center rounded-2xl border p-4 text-center transition-all",
                    method === "card"
                      ? "border-primary bg-primary/5 text-primary font-bold shadow-sm"
                      : "bg-card text-muted-foreground hover:bg-muted"
                  )}
                >
                  <CreditCard className="h-6 w-6 mb-2" />
                  <span className="text-xs">Tarjeta de Crédito / Débito</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMethod("transfer")}
                  className={cn(
                    "flex flex-col items-center rounded-2xl border p-4 text-center transition-all",
                    method === "transfer"
                      ? "border-primary bg-primary/5 text-primary font-bold shadow-sm"
                      : "bg-card text-muted-foreground hover:bg-muted"
                  )}
                >
                  <Landmark className="h-6 w-6 mb-2" />
                  <span className="text-xs">Transferencia Bancaria</span>
                </button>
              </div>

              {method === "card" ? (
                <Card className="p-6 space-y-4 bg-card">
                  <div className="space-y-1.5">
                    <Label className="text-xs">Número de Tarjeta</Label>
                    <Input
                      placeholder="4500 0000 0000 0000"
                      value={card.number}
                      onChange={(e) => setCard({ ...card, number: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs">Titular de la Tarjeta</Label>
                    <Input
                      placeholder="NOMBRE COMO FIGURA EN LA TARJETA"
                      value={card.holder}
                      onChange={(e) => setCard({ ...card, holder: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs">Caducidad</Label>
                      <Input
                        placeholder="MM/AA"
                        value={card.expiry}
                        onChange={(e) => setCard({ ...card, expiry: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs">CVV</Label>
                      <Input
                        placeholder="123"
                        value={card.cvv}
                        onChange={(e) => setCard({ ...card, cvv: e.target.value })}
                      />
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="p-6 space-y-4 bg-card">
                  <div className="rounded-xl bg-muted/60 p-4 space-y-2 text-xs">
                    <p className="font-bold text-foreground">Datos para Transferencia Bancaria:</p>
                    {bankAccounts.map((b) => (
                      <div key={b.number} className="border-t pt-2 space-y-0.5">
                        <p className="font-semibold text-primary">{b.bank} · {b.type}</p>
                        <p className="text-muted-foreground">Cuenta: {b.number} | RUC: {b.ruc}</p>
                        <p className="text-muted-foreground">Titular: {b.holder}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2">
                    <Label className="text-xs font-semibold">Adjuntar Comprobante de Transferencia</Label>
                    <div className="flex items-center gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setReceipt("comprobante_banco_pichincha_40usd.pdf")}
                        className="text-xs"
                      >
                        <FileUp className="mr-1.5 h-4 w-4" /> Simular Subida de Archivo
                      </Button>
                      {receipt && (
                        <Badge className="bg-emerald-500/15 text-emerald-700 text-xs">
                          {receipt}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              )}
            </div>
          )}

          {/* PASO 4: CONFIRMACIÓN FINAL */}
          {step === 4 && (
            <Card className="max-w-xl mx-auto p-8 text-center space-y-5 bg-card shadow-xl">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/20 text-emerald-600 mx-auto">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">¡Cita Médica Registrada!</h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {paid === "approved"
                    ? "Tu pago con tarjeta ha sido aprobado. Recibirás el recordatorio por WhatsApp."
                    : "Tu comprobante de transferencia fue recibido. Está pendiente de verificación por administración."}
                </p>
              </div>

              <div className="rounded-2xl bg-muted/60 p-4 text-xs space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Especialidad:</span>
                  <span className="font-bold text-foreground">{specialty?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Doctor:</span>
                  <span className="font-semibold text-foreground">{doctor?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fecha y Hora:</span>
                  <span className="font-semibold text-foreground">{date} · {time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Paciente:</span>
                  <span className="font-semibold text-foreground">{form.name}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-muted-foreground">Estado del Pago:</span>
                  <Badge variant={paid === "approved" ? "default" : "secondary"}>
                    {paid === "approved" ? "Aprobado (Tarjeta)" : "Pendiente de verificación (Transferencia)"}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  onClick={() => {
                    resetWizard();
                    setActiveTab("history");
                  }}
                  className="flex-1 rounded-xl bg-primary text-primary-foreground font-bold"
                >
                  <Calendar className="mr-2 h-4 w-4" /> Ver Mis Citas & Historial
                </Button>
                <Button
                  variant="outline"
                  onClick={resetWizard}
                  className="flex-1 rounded-xl text-xs"
                >
                  <RotateCcw className="mr-2 h-4 w-4" /> Agendar Otra Cita
                </Button>
              </div>
            </Card>
          )}

          {/* NAVEGACIÓN INFERIOR DEL WIZARD */}
          {step < 4 && (
            <div className="flex items-center justify-between pt-6 border-t">
              <Button
                variant="outline"
                disabled={step === 0}
                onClick={() => setStep((s) => s - 1)}
                className="rounded-xl text-xs"
              >
                Atrás
              </Button>

              {step < 3 ? (
                <Button
                  disabled={!canNext}
                  onClick={() => setStep((s) => s + 1)}
                  className="rounded-xl bg-primary text-primary-foreground font-bold px-8"
                >
                  Continuar <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={confirmBooking}
                  className="rounded-xl bg-primary text-primary-foreground font-bold px-8 shadow-md hover:bg-primary/90"
                >
                  Confirmar y Reservar Cita
                </Button>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* MODAL: CANCELAR CITA */}
      <Dialog open={!!cancelModalApt} onOpenChange={(open) => !open && setCancelModalApt(null)}>
        <DialogContent className="sm:max-w-md bg-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-destructive">
              <ShieldAlert className="h-5 w-5" /> Cancelar Cita Médica
            </DialogTitle>
            <DialogDescription className="text-xs">
              ¿Estás seguro de que deseas cancelar tu cita de <strong>{cancelModalApt?.specialtyName}</strong> programada para el{" "}
              <strong>{cancelModalApt?.date} a las {cancelModalApt?.time}</strong> con {cancelModalApt?.doctorName}?
            </DialogDescription>
          </DialogHeader>
          <p className="text-xs text-muted-foreground">
            Esta acción liberará el horario para otros pacientes. Puedes volver a agendar en cualquier momento.
          </p>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setCancelModalApt(null)}>
              Mantener Cita
            </Button>
            <Button variant="destructive" onClick={handleCancelAppointment}>
              Sí, Cancelar Cita
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* MODAL: VER COMPROBANTE SUBIDO */}
      <Dialog open={!!receiptModalApt} onOpenChange={(open) => !open && setReceiptModalApt(null)}>
        <DialogContent className="sm:max-w-md bg-card space-y-4">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-primary">
              <FileCheck className="h-5 w-5" /> Comprobante de Transferencia
            </DialogTitle>
            <DialogDescription className="text-xs">
              Detalle del pago enviado para la cita de {receiptModalApt?.specialtyName}.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-2xl border bg-muted/40 p-4 space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Banco Emisor:</span>
              <span className="font-semibold text-foreground">{receiptModalApt?.transferDetails?.bank}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Referencia / Transacción:</span>
              <span className="font-mono font-bold text-foreground">{receiptModalApt?.transferDetails?.reference}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Valor Transferido:</span>
              <span className="font-bold text-primary">{currency(receiptModalApt?.amount || 0)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Archivo Adjunto:</span>
              <span className="font-medium text-slate-600 dark:text-slate-300 truncate max-w-[200px]">
                {receiptModalApt?.transferDetails?.receiptFileName}
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-700 dark:text-amber-300">
            ⏳ Comprobante en proceso de validación por el departamento de tesorería y administración de AuraVital.
          </div>

          <DialogFooter>
            <Button onClick={() => setReceiptModalApt(null)} className="w-full">
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* MODAL: RESUMEN MÉDICO DE CONSULTA ATENDIDA */}
      <Dialog open={!!summaryModalApt} onOpenChange={(open) => !open && setSummaryModalApt(null)}>
        <DialogContent className="sm:max-w-lg bg-card space-y-4">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <FileText className="h-5 w-5" /> Resumen de Consulta Médica
            </DialogTitle>
            <DialogDescription className="text-xs">
              {summaryModalApt?.specialtyName} · {summaryModalApt?.doctorName} · {summaryModalApt?.date}
            </DialogDescription>
          </DialogHeader>

          {summaryModalApt?.summary && (
            <div className="space-y-4 text-xs">
              <div className="rounded-xl bg-muted/50 p-3.5 space-y-1">
                <span className="font-bold text-foreground">Diagnóstico Clínico:</span>
                <p className="text-muted-foreground leading-relaxed">{summaryModalApt.summary.diagnosis}</p>
              </div>

              <div className="rounded-xl border p-3.5 space-y-2">
                <span className="font-bold text-foreground">Signos Vitales Registrados:</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] pt-1">
                  <div className="bg-muted/40 p-2 rounded-lg text-center">
                    <p className="text-muted-foreground">Presión Art.</p>
                    <p className="font-bold">{summaryModalApt.summary.vitals.bp}</p>
                  </div>
                  <div className="bg-muted/40 p-2 rounded-lg text-center">
                    <p className="text-muted-foreground">Frecuencia C.</p>
                    <p className="font-bold">{summaryModalApt.summary.vitals.hr} lpm</p>
                  </div>
                  <div className="bg-muted/40 p-2 rounded-lg text-center">
                    <p className="text-muted-foreground">Temperatura</p>
                    <p className="font-bold">{summaryModalApt.summary.vitals.temp} °C</p>
                  </div>
                  <div className="bg-muted/40 p-2 rounded-lg text-center">
                    <p className="text-muted-foreground">Peso</p>
                    <p className="font-bold">{summaryModalApt.summary.vitals.weight} kg</p>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="font-bold text-foreground">Indicaciones & Recomendaciones Médicas:</span>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-1">
                  {summaryModalApt.summary.indications.map((ind, i) => (
                    <li key={i}>{ind}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setSummaryModalApt(null)}>
              Cerrar
            </Button>
            <Button
              onClick={() => {
                const specId = summaryModalApt?.specialtyId;
                setSummaryModalApt(null);
                if (specId) handleRebook(specId);
              }}
              className="bg-primary text-primary-foreground font-bold"
            >
              <RefreshCcw className="mr-1.5 h-3.5 w-3.5" /> Volver a Agendar Consulta
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
