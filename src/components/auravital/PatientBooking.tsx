import { useState } from "react";
import {
  Building2,
  CalendarCheck,
  Check,
  CreditCard,
  FileUp,
  Landmark,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { SpecialtyGrid } from "./SpecialtyGrid";
import { CalendarBooking } from "./CalendarBooking";
import { bankAccounts, currency, type Doctor, type Specialty } from "@/data/auravital";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const steps = ["Especialidad", "Doctor y horario", "Datos", "Pago", "Confirmación"];

export function PatientBooking() {
  const [step, setStep] = useState(0);
  const [specialty, setSpecialty] = useState<Specialty>();
  const [doctor, setDoctor] = useState<Doctor>();
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const [form, setForm] = useState({ name: "", cedula: "", email: "", whatsapp: "" });
  const [gcal, setGcal] = useState(true);
  const [method, setMethod] = useState<"card" | "transfer">("card");
  const [card, setCard] = useState({ number: "", holder: "", expiry: "", cvv: "" });
  const [receipt, setReceipt] = useState<string>();
  const [paid, setPaid] = useState<"approved" | "pending">();

  const canNext =
    (step === 0 && !!specialty) ||
    (step === 1 && !!doctor && !!date && !!time) ||
    (step === 2 && form.name && form.cedula && form.email && form.whatsapp) ||
    step === 3;

  const confirm = () => {
    if (method === "card") {
      if (!card.number || !card.holder || !card.expiry || !card.cvv) {
        toast.error("Completa los datos de la tarjeta");
        return;
      }
      setPaid("approved");
      toast.success("Pago aprobado");
    } else {
      if (!receipt) {
        toast.error("Adjunta el comprobante de transferencia");
        return;
      }
      setPaid("pending");
      toast.success("Comprobante enviado. Pendiente de verificación");
    }
    setStep(4);
  };

  const reset = () => {
    setStep(0);
    setSpecialty(undefined);
    setDoctor(undefined);
    setDate(undefined);
    setTime(undefined);
    setForm({ name: "", cedula: "", email: "", whatsapp: "" });
    setCard({ number: "", holder: "", expiry: "", cvv: "" });
    setReceipt(undefined);
    setPaid(undefined);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold sm:text-3xl">Agenda tu cita médica</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Atención especializada con confirmación inmediata y recordatorios por WhatsApp.
        </p>
      </div>

      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {steps.map((label, i) => (
          <li
            key={label}
            className={cn(
              "flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium",
              i === step && "border-primary bg-primary/5 text-primary",
              i < step && "text-muted-foreground",
            )}
          >
            <span
              className={cn(
                "grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px]",
                i <= step ? "bg-primary text-primary-foreground" : "bg-surface text-muted-foreground",
              )}
            >
              {i < step ? <Check className="h-3 w-3" /> : i + 1}
            </span>
            <span className="truncate">{label}</span>
          </li>
        ))}
      </ol>

      {step === 0 && (
        <SpecialtyGrid
          selectedId={specialty?.id}
          onSelect={(s) => {
            setSpecialty(s);
            setDoctor(undefined);
          }}
        />
      )}

      {step === 1 && specialty && (
        <CalendarBooking
          specialtyId={specialty.id}
          doctorId={doctor?.id}
          date={date}
          time={time}
          onDoctor={setDoctor}
          onDate={setDate}
          onTime={setTime}
        />
      )}

      {step === 2 && (
        <Card className="gap-5 p-6">
          <p className="text-sm font-semibold">Datos de contacto</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ana Torres" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cedula">Cédula</Label>
              <Input id="cedula" value={form.cedula} onChange={(e) => setForm({ ...form, cedula: e.target.value })} placeholder="1712345678" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="ana@correo.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wa">Número de WhatsApp</Label>
              <Input id="wa" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="+593 99 000 0000" />
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between gap-4 rounded-lg bg-surface p-4">
            <div className="min-w-0">
              <p className="text-sm font-medium">Sincronizar cita automáticamente con Google Calendar</p>
              <p className="text-xs text-muted-foreground">Recibirás un recordatorio 1 hora antes.</p>
            </div>
            <Switch checked={gcal} onCheckedChange={setGcal} aria-label="Sincronizar con Google Calendar" />
          </div>
        </Card>
      )}

      {step === 3 && (
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <Card className="gap-5 p-6">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setMethod("card")}
                className={cn(
                  "flex items-center gap-2 rounded-lg border p-3 text-sm font-medium transition-colors",
                  method === "card" ? "border-primary bg-primary/5 text-primary" : "hover:bg-surface",
                )}
              >
                <CreditCard className="h-4 w-4" /> Pago en línea
              </button>
              <button
                onClick={() => setMethod("transfer")}
                className={cn(
                  "flex items-center gap-2 rounded-lg border p-3 text-sm font-medium transition-colors",
                  method === "transfer" ? "border-primary bg-primary/5 text-primary" : "hover:bg-surface",
                )}
              >
                <Landmark className="h-4 w-4" /> Transferencia
              </button>
            </div>

            {method === "card" ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="cnum">Número de tarjeta</Label>
                  <Input id="cnum" inputMode="numeric" value={card.number} onChange={(e) => setCard({ ...card, number: e.target.value })} placeholder="4111 1111 1111 1111" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="cname">Titular</Label>
                  <Input id="cname" value={card.holder} onChange={(e) => setCard({ ...card, holder: e.target.value })} placeholder="ANA TORRES" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cexp">Vencimiento</Label>
                  <Input id="cexp" value={card.expiry} onChange={(e) => setCard({ ...card, expiry: e.target.value })} placeholder="09/29" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ccvv">CVV</Label>
                  <Input id="ccvv" value={card.cvv} onChange={(e) => setCard({ ...card, cvv: e.target.value })} placeholder="123" />
                </div>
                <p className="flex items-center gap-2 text-xs text-muted-foreground sm:col-span-2">
                  <ShieldCheck className="h-4 w-4 text-primary" /> Simulación segura, no se procesan cobros reales.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {bankAccounts.map((b) => (
                  <div key={b.bank} className="rounded-lg bg-surface p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <Building2 className="h-4 w-4 text-primary" /> {b.bank}
                    </p>
                    <dl className="mt-2 grid grid-cols-2 gap-y-1 text-xs text-muted-foreground">
                      <dt>Tipo</dt><dd className="text-foreground">{b.type}</dd>
                      <dt>Número</dt><dd className="text-foreground">{b.number}</dd>
                      <dt>Titular</dt><dd className="text-foreground">{b.holder}</dd>
                      <dt>RUC</dt><dd className="text-foreground">{b.ruc}</dd>
                    </dl>
                  </div>
                ))}
                <div className="rounded-lg border border-dashed p-6 text-center">
                  <FileUp className="mx-auto h-6 w-6 text-primary" />
                  <p className="mt-2 text-sm font-medium">Adjunta tu comprobante</p>
                  <p className="text-xs text-muted-foreground">JPG, PNG o PDF hasta 5 MB</p>
                  <Button
                    variant="outline"
                    className="mt-3"
                    onClick={() => setReceipt("comprobante_transferencia.pdf")}
                  >
                    Simular subida
                  </Button>
                  {receipt ? (
                    <p className="mt-2 text-xs text-primary">Archivo cargado: {receipt}</p>
                  ) : null}
                </div>
              </div>
            )}
          </Card>

          <Card className="h-fit gap-3 p-6">
            <p className="text-sm font-semibold">Resumen de la cita</p>
            <dl className="grid grid-cols-2 gap-y-2 text-sm">
              <dt className="text-muted-foreground">Especialidad</dt><dd className="text-right">{specialty?.name}</dd>
              <dt className="text-muted-foreground">Doctor</dt><dd className="text-right">{doctor?.name}</dd>
              <dt className="text-muted-foreground">Fecha</dt><dd className="text-right">{date}</dd>
              <dt className="text-muted-foreground">Hora</dt><dd className="text-right">{time}</dd>
              <dt className="text-muted-foreground">Paciente</dt><dd className="truncate text-right">{form.name}</dd>
            </dl>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="text-xl font-semibold">{currency(specialty?.price ?? 0)}</span>
            </div>
            <Button className="mt-2 w-full" onClick={confirm}>
              Confirmar y pagar
            </Button>
          </Card>
        </div>
      )}

      {step === 4 && (
        <Card className="mx-auto max-w-xl gap-4 p-8 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
            <CalendarCheck className="h-7 w-7" />
          </span>
          <h2 className="text-xl font-semibold">¡Cita agendada!</h2>
          <p className="text-sm text-muted-foreground">
            {specialty?.name} con {doctor?.name} · {date} a las {time}
          </p>
          <div className="flex justify-center">
            {paid === "approved" ? (
              <Badge className="bg-success text-success-foreground">Pago aprobado</Badge>
            ) : (
              <Badge className="bg-warning text-warning-foreground">Pendiente de verificación</Badge>
            )}
          </div>
          <div className="rounded-lg bg-surface p-4 text-left text-sm">
            <p><span className="text-muted-foreground">Paciente:</span> {form.name}</p>
            <p><span className="text-muted-foreground">Cédula:</span> {form.cedula}</p>
            <p><span className="text-muted-foreground">WhatsApp:</span> {form.whatsapp}</p>
            <p><span className="text-muted-foreground">Google Calendar:</span> {gcal ? "Sincronizado" : "No sincronizado"}</p>
          </div>
          <Button variant="outline" onClick={reset} className="mx-auto">
            <RotateCcw className="h-4 w-4" /> Agendar otra cita
          </Button>
        </Card>
      )}

      {step < 4 && (
        <div className="flex items-center justify-between gap-3">
          <Button variant="outline" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
            Atrás
          </Button>
          {step < 3 ? (
            <Button disabled={!canNext} onClick={() => setStep((s) => s + 1)}>
              Continuar
            </Button>
          ) : null}
        </div>
      )}
    </div>
  );
}
