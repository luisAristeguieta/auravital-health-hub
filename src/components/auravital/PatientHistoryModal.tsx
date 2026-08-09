import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
  Clock,
  FilePlus2,
  FileText,
  FlaskConical,
  HeartPulse,
  Mail,
  MessageSquare,
  Save,
  Send,
  Stethoscope,
  UserCheck,
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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { bmi, bmiLabel, type LabOrder, type LabResult, type Patient, type Vitals } from "@/data/auravital";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const availableLabTests = [
  "Biometría Hemática Completa",
  "Química Sanguínea (Glucosa, Urea, Creatinina)",
  "Perfil Lipídico (Colesterol Total, HDL, LDL, Triglicéridos)",
  "Electrólitos Séricos (Sodio, Potasio, Cloro)",
  "Pruebas de Función Hepática (TGO, TGP, FA)",
  "Perfil Tiroideo TSH & T4 Libre",
  "Electrocardiograma de 12 Derivaciones",
  "Hemoglobina Glicosilada (HbA1c)",
];

export function PatientHistoryModal({
  patient,
  open,
  onOpenChange,
  onSave,
  onReturnToAgenda,
}: {
  patient: Patient | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSave: (id: string, vitals: Vitals, note: string) => void;
  onReturnToAgenda?: () => void;
}) {
  const [vitals, setVitals] = useState<Vitals | null>(patient?.vitals ?? null);
  const [note, setNote] = useState("");
  const [activeTab, setActiveTab] = useState<"clinical" | "labs">("clinical");

  // State for new lab order
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [labJustification, setLabJustification] = useState("");
  const [labOrders, setLabOrders] = useState<LabOrder[]>(patient?.labOrders ?? []);

  useEffect(() => {
    setVitals(patient?.vitals ?? null);
    setNote("");
    setSelectedTests([]);
    setLabJustification("");
    setLabOrders(patient?.labOrders ?? []);
  }, [patient]);

  if (!patient || !vitals) return null;

  const imc = bmi(vitals.weight, vitals.height);

  const toggleTest = (test: string) => {
    setSelectedTests((prev) =>
      prev.includes(test) ? prev.filter((t) => t !== test) : [...prev, test]
    );
  };

  const handleSendLabOrder = () => {
    if (selectedTests.length === 0) {
      toast.error("Selecciona al menos un examen de laboratorio para prescribir");
      return;
    }

    const newOrder: LabOrder = {
      id: crypto.randomUUID(),
      date: new Date().toISOString().slice(0, 10),
      doctor: "Dra. Valeria Ríos (Cardiología)",
      tests: selectedTests,
      notes: labJustification.trim() || "Exámenes complementarios para control clínico.",
      status: "sent",
    };

    setLabOrders((prev) => [newOrder, ...prev]);
    setSelectedTests([]);
    setLabJustification("");
    toast.success("¡Orden de laboratorio prescrita y enviada al WhatsApp y correo del paciente!");
  };

  const field = (key: keyof Vitals & string, label: string, suffix?: string) => (
    <div className="space-y-1.5">
      <Label htmlFor={key} className="text-xs font-semibold">
        {label} {suffix ? <span className="text-muted-foreground font-normal">({suffix})</span> : null}
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
        className="h-9 text-sm"
      />
    </div>
  );

  const handleReturn = () => {
    onOpenChange(false);
    if (onReturnToAgenda) {
      onReturnToAgenda();
    }
  };

  const labResults: LabResult[] = patient.labResults || [
    { id: "lr-d1", testName: "Biometría Hemática", result: "Leucocitos 6.5 x10³/µL", reference: "4.5 - 11.0", status: "normal", date: "2026-07-15" },
    { id: "lr-d2", testName: "Glucosa en Ayunas", result: "95 mg/dL", reference: "70 - 100 mg/dL", status: "normal", date: "2026-07-15" },
    { id: "lr-d3", testName: "Colesterol Total", result: "235 mg/dL (ELEVADO)", reference: "< 200 mg/dL", status: "abnormal", date: "2026-07-15" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-3xl bg-card border shadow-2xl space-y-4">
        {/* CABECERA */}
        <DialogHeader className="border-b pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <DialogTitle className="text-xl font-bold flex items-center gap-2 text-foreground">
                <FileText className="h-5 w-5 text-primary" /> {patient.firstName} {patient.lastName}
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground mt-1">
                Cédula {patient.cedula} · {patient.age} años · Historia Clínica <strong className="text-primary">{patient.record}</strong> · Tel: {patient.phone}
              </DialogDescription>
            </div>

            {onReturnToAgenda && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReturn}
                className="self-start sm:self-auto h-8 text-xs font-semibold hover:border-primary hover:text-primary shrink-0"
              >
                <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Volver a la Agenda del Día
              </Button>
            )}
          </div>
        </DialogHeader>

        {/* TABS INTERNOS DE LA HISTORIA CLÍNICA */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "clinical" | "labs")} className="space-y-4">
          <TabsList className="grid grid-cols-2 w-full h-10 p-1 bg-muted rounded-xl">
            <TabsTrigger value="clinical" className="rounded-lg text-xs font-bold flex items-center justify-center gap-1.5">
              <HeartPulse className="h-4 w-4 text-rose-500" /> Signos Vitales & Consulta
            </TabsTrigger>
            <TabsTrigger value="labs" className="rounded-lg text-xs font-bold flex items-center justify-center gap-1.5">
              <FlaskConical className="h-4 w-4 text-primary" /> Exámenes de Laboratorio ({labResults.length})
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: SIGNOS VITALES & NOTAS CLÍNICAS */}
          <TabsContent value="clinical" className="space-y-4 mt-0">
            {/* SIGNOS VITALES */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Stethoscope className="h-4 w-4 text-primary" /> Registro de Signos Vitales
              </h4>
              <div className="grid gap-3 sm:grid-cols-3">
                {field("height", "Altura", "cm")}
                {field("weight", "Peso", "kg")}
                {field("bloodPressure", "Presión arterial", "mmHg")}
                {field("heartRate", "Frecuencia cardíaca", "lpm")}
                {field("temperature", "Temperatura", "°C")}
                {field("oxygen", "Saturación O₂", "%")}
              </div>
            </div>

            {/* IMC RESULT */}
            <div className="flex items-center justify-between rounded-xl bg-muted/60 p-3.5 border">
              <div>
                <p className="text-[11px] uppercase font-bold text-muted-foreground">IMC Calculado Automáticamente</p>
                <p className="text-2xl font-black text-foreground">{imc}</p>
              </div>
              <Badge className="bg-primary text-primary-foreground font-bold text-xs px-3 py-1">
                {bmiLabel(imc)}
              </Badge>
            </div>

            <Separator />

            {/* OBSERVACIONES MÉDICAS / EVOLUCIÓN */}
            <div className="space-y-2">
              <Label htmlFor="note" className="text-xs font-bold text-foreground">
                Observaciones Médicas / Evolución de la Consulta Actual (Dra. Valeria Ríos)
              </Label>
              <Textarea
                id="note"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Escribe el diagnóstico, notas de evolución o prescripción para la consulta de hoy…"
                className="text-sm rounded-xl"
              />
            </div>

            {/* HISTORIAL PREVIO DE NOTAS CON MÉDICO TRATANTE */}
            {patient.notes.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" /> Historial de Consultas Previas & Médicos Tratantes
                </p>
                <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                  {patient.notes.map((n) => (
                    <div
                      key={n.id}
                      className="rounded-xl border border-primary/20 bg-muted/40 p-3 text-xs space-y-1.5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] text-muted-foreground border-b pb-1">
                        <span className="font-semibold text-foreground">{n.date}</span>
                        <span className="text-primary font-bold flex items-center gap-1">
                          <UserCheck className="h-3.5 w-3.5" />
                          Atendido por: {n.doctorName || "Dra. Valeria Ríos"} ({n.doctorSpecialty || "Cardiología"})
                        </span>
                      </div>
                      <p className="text-foreground/90 leading-relaxed">{n.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* TAB 2: EXÁMENES DE LABORATORIO */}
          <TabsContent value="labs" className="space-y-5 mt-0">
            {/* 1. RESULTADOS PREVIOS DE LABORATORIO */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                  <FlaskConical className="h-4 w-4 text-primary" /> 🧪 Resultados de Laboratorio Clínico
                </h4>
                <Badge variant="outline" className="text-[11px]">
                  Última actualización: Julio / Agosto 2026
                </Badge>
              </div>

              <Card className="p-0 overflow-hidden border shadow-sm">
                <Table>
                  <TableHeader>
                    <tr className="border-b bg-muted/50 text-[11px]">
                      <TableHead className="font-bold">Examen</TableHead>
                      <TableHead className="font-bold">Resultado</TableHead>
                      <TableHead className="font-bold">Valor de Referencia</TableHead>
                      <TableHead className="font-bold text-center">Estado</TableHead>
                    </tr>
                  </TableHeader>
                  <TableBody className="text-xs">
                    {labResults.map((lr) => {
                      const isAbnormal = lr.status === "abnormal";
                      return (
                        <TableRow key={lr.id} className={cn(isAbnormal && "bg-destructive/5")}>
                          <TableCell className="font-semibold text-foreground">{lr.testName}</TableCell>
                          <TableCell className={cn("font-bold", isAbnormal ? "text-destructive" : "text-foreground")}>
                            {lr.result}
                          </TableCell>
                          <TableCell className="text-muted-foreground font-mono text-[11px]">{lr.reference}</TableCell>
                          <TableCell className="text-center">
                            {isAbnormal ? (
                              <Badge variant="destructive" className="text-[10px] font-bold px-2 py-0.5 gap-1 bg-[#D00B2B] text-white">
                                <AlertTriangle className="h-3 w-3" /> Alterado / Elevado
                              </Badge>
                            ) : (
                              <Badge className="text-[10px] font-semibold px-2 py-0.5 gap-1 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                                <CheckCircle className="h-3 w-3" /> En Rango / Normal
                              </Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Card>
            </div>

            {/* 2. MÓDULO PARA PRESCRIBIR / ORDENAR NUEVOS EXÁMENES */}
            <Card className="p-4 bg-muted/30 border border-primary/20 rounded-2xl space-y-3.5 shadow-sm">
              <div className="flex items-center justify-between border-b pb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                  <FilePlus2 className="h-4 w-4 text-primary" /> 📋 Prescribir Nueva Orden de Laboratorio
                </h4>
                <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px]">
                  Firma Digital Dra. Valeria Ríos
                </Badge>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold text-foreground">
                  Selecciona los análisis solicitados:
                </Label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {availableLabTests.map((test) => {
                    const isChecked = selectedTests.includes(test);
                    return (
                      <div
                        key={test}
                        role="button"
                        tabIndex={0}
                        onClick={() => toggleTest(test)}
                        className={cn(
                          "flex items-center gap-2.5 p-2 rounded-xl border text-xs cursor-pointer select-none transition-all",
                          isChecked
                            ? "bg-primary/10 border-primary text-primary font-bold shadow-xs"
                            : "bg-card border-border hover:border-primary/50 text-foreground"
                        )}
                      >
                        <div
                          className={cn(
                            "h-4 w-4 rounded flex items-center justify-center border text-[10px]",
                            isChecked
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-muted-foreground/50 bg-card"
                          )}
                        >
                          {isChecked ? "✓" : ""}
                        </div>
                        <span className="truncate">{test}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="justification" className="text-xs font-bold text-foreground">
                  Indicaciones / Justificación Médica
                </Label>
                <Input
                  id="justification"
                  value={labJustification}
                  onChange={(e) => setLabJustification(e.target.value)}
                  placeholder="Ej. Control de perfil lipídico y monitoreo de función renal en ayunas…"
                  className="text-xs h-9 bg-card"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Se enviará notificación automática por WhatsApp y Correo</span>
                </div>

                <Button
                  onClick={handleSendLabOrder}
                  className="bg-primary text-primary-foreground font-bold text-xs shadow-md hover:bg-primary/90 h-9"
                >
                  <Send className="mr-1.5 h-3.5 w-3.5" /> Generar y Enviar Orden al Paciente
                </Button>
              </div>
            </Card>

            {/* HISTORIAL DE ÓRDENES PREVIAS DE LABORATORIO */}
            {labOrders.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-bold text-foreground">Órdenes de Laboratorio Emitidas Previamente</p>
                <div className="space-y-2">
                  {labOrders.map((ord) => (
                    <div key={ord.id} className="rounded-xl border bg-card p-3 text-xs space-y-1 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">{ord.date} · {ord.doctor}</span>
                        <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-[10px]">
                          ✓ Emitida y Notificada
                        </Badge>
                      </div>
                      <p className="text-foreground font-medium">Análisis: {ord.tests.join(", ")}</p>
                      {ord.notes && <p className="text-muted-foreground text-[11px] italic">“{ord.notes}”</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* PIE DE DIALOG */}
        <DialogFooter className="gap-2 sm:gap-0 pt-2 border-t">
          {onReturnToAgenda && (
            <Button variant="ghost" size="sm" onClick={handleReturn} className="text-xs mr-auto">
              <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Volver a Agenda
            </Button>
          )}

          <Button variant="outline" onClick={() => onOpenChange(false)} className="text-xs">
            Cerrar
          </Button>

          <Button
            onClick={() => {
              onSave(patient.id, vitals, note.trim());
              toast.success("Historia clínica y evolución actualizadas con éxito.");
              onOpenChange(false);
            }}
            className="bg-primary text-primary-foreground font-bold text-xs"
          >
            <Save className="mr-1.5 h-3.5 w-3.5" /> Guardar Cambios en Expediente
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
