import { useEffect, useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { bmi, bmiLabel, type Patient, type Vitals } from "@/data/auravital";
import { toast } from "sonner";

export function PatientHistoryModal({
  patient,
  open,
  onOpenChange,
  onSave,
}: {
  patient: Patient | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSave: (id: string, vitals: Vitals, note: string) => void;
}) {
  const [vitals, setVitals] = useState<Vitals | null>(patient?.vitals ?? null);
  const [note, setNote] = useState("");

  useEffect(() => {
    setVitals(patient?.vitals ?? null);
    setNote("");
  }, [patient]);

  if (!patient || !vitals) return null;

  const imc = bmi(vitals.weight, vitals.height);

  const field = (key: keyof Vitals, label: string, suffix?: string) => (
    <div className="space-y-2">
      <Label htmlFor={key}>
        {label} {suffix ? <span className="text-muted-foreground">({suffix})</span> : null}
      </Label>
      <Input
        id={key}
        value={String(vitals[key])}
        onChange={(e) =>
          setVitals({
            ...vitals,
            [key]: key === "bloodPressure" ? e.target.value : Number(e.target.value) || 0,
          })
        }
      />
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {patient.firstName} {patient.lastName}
          </DialogTitle>
          <DialogDescription>
            Cédula {patient.cedula} · {patient.age} años · Historia {patient.record}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 sm:grid-cols-2">
          {field("height", "Altura", "cm")}
          {field("weight", "Peso", "kg")}
          {field("bloodPressure", "Presión arterial", "mmHg")}
          {field("heartRate", "Frecuencia cardíaca", "lpm")}
          {field("temperature", "Temperatura", "°C")}
          {field("oxygen", "Saturación O₂", "%")}
        </div>

        <div className="flex items-center justify-between rounded-lg bg-surface p-4">
          <div>
            <p className="text-xs uppercase text-muted-foreground">IMC calculado</p>
            <p className="text-2xl font-semibold">{imc}</p>
          </div>
          <Badge variant="secondary">{bmiLabel(imc)}</Badge>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label htmlFor="note">Observaciones médicas / Evolución</Label>
          <Textarea
            id="note"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Escribe la evolución de la consulta actual…"
          />
        </div>

        {patient.notes.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-semibold">Historial de notas</p>
            {patient.notes.map((n) => (
              <div key={n.id} className="rounded-md bg-surface p-3 text-sm">
                <p className="text-xs text-muted-foreground">{n.date}</p>
                <p>{n.text}</p>
              </div>
            ))}
          </div>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button
            onClick={() => {
              onSave(patient.id, vitals, note.trim());
              toast.success("Historia clínica actualizada");
              onOpenChange(false);
            }}
          >
            Guardar cambios
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
