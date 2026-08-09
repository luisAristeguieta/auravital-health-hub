import { useMemo, useState } from "react";
import {
  Activity,
  HeartPulse,
  Save,
  Thermometer,
  User,
  UserPlus,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { bmi, bmiLabel, type Patient, type Vitals } from "@/data/auravital";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface QuickPatientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPatientCreated: (newPatient: Patient, reason: string) => void;
}

const initialForm = {
  firstName: "",
  lastName: "",
  cedula: "",
  age: "",
  phone: "",
  reason: "Consulta general / Triage inicial",
  height: 170,
  weight: 70,
  bloodPressure: "120/80",
  heartRate: 72,
  temperature: 36.5,
  oxygen: 98,
};

export function QuickPatientModal({
  open,
  onOpenChange,
  onPatientCreated,
}: QuickPatientModalProps) {
  const [form, setForm] = useState(initialForm);

  // Real-time IMC calculation
  const calculatedImc = useMemo(() => {
    const w = Number(form.weight) || 70;
    const h = Number(form.height) || 170;
    return bmi(w, h);
  }, [form.weight, form.height]);

  const imcStatus = useMemo(() => {
    return bmiLabel(calculatedImc);
  }, [calculatedImc]);

  const handleSave = () => {
    if (!form.firstName.trim() || !form.lastName.trim() || !form.cedula.trim()) {
      toast.error("Nombres, apellidos y cédula son campos obligatorios");
      return;
    }

    const vitals: Vitals = {
      height: Number(form.height) || 170,
      weight: Number(form.weight) || 70,
      bloodPressure: form.bloodPressure.trim() || "120/80",
      heartRate: Number(form.heartRate) || 72,
      temperature: Number(form.temperature) || 36.5,
      oxygen: Number(form.oxygen) || 98,
    };

    const newPatient: Patient = {
      id: crypto.randomUUID(),
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      cedula: form.cedula.trim(),
      age: Number(form.age) || 30,
      record: `HC-00${Math.floor(140 + Math.random() * 800)}`,
      phone: form.phone.trim() || "+593 99 000 0000",
      vitals,
      notes: [
        {
          id: crypto.randomUUID(),
          date: new Date().toISOString().slice(0, 10),
          text: `Ingreso por Triage / Registro rápido. Motivo: ${form.reason.trim() || "Consulta médica"}. Signos vitales iniciales tomados en recepción.`,
          doctorName: "Dra. Valeria Ríos",
          doctorSpecialty: "Cardiología",
        },
      ],
      labResults: [],
      labOrders: [],
    };

    onPatientCreated(newPatient, form.reason.trim() || "Consulta médica");
    setForm(initialForm);
    onOpenChange(false);
    toast.success(`Paciente ${newPatient.firstName} ${newPatient.lastName} registrado con triage y agregado a la Agenda`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-2xl bg-card border shadow-2xl space-y-4">
        <DialogHeader className="border-b pb-3">
          <DialogTitle className="text-xl font-bold flex items-center gap-2 text-foreground">
            <UserPlus className="h-5 w-5 text-primary" /> Registro Rápido & Triage de Paciente
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Ingreso de datos filiatorios y toma de signos vitales iniciales para atención en consultorio.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 py-1">
          {/* SECCIÓN 1: DATOS PERSONALES */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 border-b pb-1.5">
              <User className="h-4 w-4 text-primary" /> 1. Datos Personales del Paciente
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="q-fn" className="text-xs font-semibold">
                  Nombres <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="q-fn"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  placeholder="Ej. Carlos"
                  className="h-9 text-xs"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="q-ln" className="text-xs font-semibold">
                  Apellidos <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="q-ln"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  placeholder="Ej. Mendoza"
                  className="h-9 text-xs"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="q-cd" className="text-xs font-semibold">
                  Cédula / Documento <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="q-cd"
                  value={form.cedula}
                  onChange={(e) => setForm({ ...form, cedula: e.target.value })}
                  placeholder="1712345678"
                  className="h-9 text-xs"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="q-ag" className="text-xs font-semibold">Edad (años)</Label>
                <Input
                  id="q-ag"
                  inputMode="numeric"
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  placeholder="38"
                  className="h-9 text-xs"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <Label htmlFor="q-ph" className="text-xs font-semibold">Teléfono / WhatsApp</Label>
                <Input
                  id="q-ph"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+593 99 123 4567"
                  className="h-9 text-xs"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <Label htmlFor="q-rs" className="text-xs font-semibold">Motivo de Consulta / Síntomas</Label>
                <Input
                  id="q-rs"
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  placeholder="Ej. Chequeo de presión arterial y dolor precordial leve…"
                  className="h-9 text-xs"
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* SECCIÓN 2: SIGNOS VITALES INICIALES (TRIAGE) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b pb-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                <HeartPulse className="h-4 w-4 text-rose-500" /> 2. Signos Vitales Iniciales (Triage de Recepción)
              </h4>
              <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-[10px]">
                Enfermería / Triage
              </Badge>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {/* Altura */}
              <div className="space-y-1">
                <Label htmlFor="q-ht" className="text-xs font-semibold">Altura (cm)</Label>
                <Input
                  id="q-ht"
                  type="number"
                  value={form.height}
                  onChange={(e) => setForm({ ...form, height: Number(e.target.value) || 0 })}
                  className="h-9 text-xs"
                />
              </div>

              {/* Peso */}
              <div className="space-y-1">
                <Label htmlFor="q-wt" className="text-xs font-semibold">Peso (kg)</Label>
                <Input
                  id="q-wt"
                  type="number"
                  value={form.weight}
                  onChange={(e) => setForm({ ...form, weight: Number(e.target.value) || 0 })}
                  className="h-9 text-xs"
                />
              </div>

              {/* Presión Arterial */}
              <div className="space-y-1">
                <Label htmlFor="q-bp" className="text-xs font-semibold">Presión Arterial (mmHg)</Label>
                <Input
                  id="q-bp"
                  value={form.bloodPressure}
                  onChange={(e) => setForm({ ...form, bloodPressure: e.target.value })}
                  placeholder="120/80"
                  className="h-9 text-xs font-mono font-semibold"
                />
              </div>

              {/* Frecuencia Cardíaca */}
              <div className="space-y-1">
                <Label htmlFor="q-hr" className="text-xs font-semibold flex items-center gap-1">
                  <Activity className="h-3 w-3 text-rose-500" /> Frec. Cardíaca (lpm)
                </Label>
                <Input
                  id="q-hr"
                  type="number"
                  value={form.heartRate}
                  onChange={(e) => setForm({ ...form, heartRate: Number(e.target.value) || 0 })}
                  className="h-9 text-xs"
                />
              </div>

              {/* Temperatura */}
              <div className="space-y-1">
                <Label htmlFor="q-tp" className="text-xs font-semibold flex items-center gap-1">
                  <Thermometer className="h-3 w-3 text-amber-500" /> Temperatura (°C)
                </Label>
                <Input
                  id="q-tp"
                  type="number"
                  step="0.1"
                  value={form.temperature}
                  onChange={(e) => setForm({ ...form, temperature: Number(e.target.value) || 0 })}
                  className="h-9 text-xs"
                />
              </div>

              {/* Saturación Oxígeno */}
              <div className="space-y-1">
                <Label htmlFor="q-ox" className="text-xs font-semibold flex items-center gap-1">
                  <Wind className="h-3 w-3 text-sky-500" /> Saturación O₂ (SpO2 %)
                </Label>
                <Input
                  id="q-ox"
                  type="number"
                  value={form.oxygen}
                  onChange={(e) => setForm({ ...form, oxygen: Number(e.target.value) || 0 })}
                  className="h-9 text-xs"
                />
              </div>
            </div>

            {/* CÁLCULO DE IMC EN TIEMPO REAL */}
            <div className="flex items-center justify-between rounded-xl bg-muted/60 p-3 border">
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">
                  Índice de Masa Corporal (IMC) Calculado en Tiempo Real:
                </p>
                <p className="text-xl font-black text-foreground">{calculatedImc}</p>
              </div>
              <Badge
                className={cn(
                  "font-bold text-xs px-3 py-1",
                  imcStatus === "Normal" && "bg-emerald-600 text-white",
                  imcStatus === "Sobrepeso" && "bg-amber-500 text-white",
                  imcStatus === "Obesidad" && "bg-[#D00B2B] text-white",
                  imcStatus === "Bajo peso" && "bg-blue-600 text-white"
                )}
              >
                {imcStatus}
              </Badge>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0 pt-2 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="text-xs">
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            className="bg-primary text-primary-foreground font-bold text-xs shadow-md hover:bg-primary/90"
          >
            <Save className="mr-1.5 h-3.5 w-3.5" /> Guardar Paciente & Enviar a Consulta
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
