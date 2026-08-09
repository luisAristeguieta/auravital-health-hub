import { useMemo, useState } from "react";
import { CalendarDays, CheckCircle2, Clock, Search, UserPlus, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
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
import {
  bmi,
  initialAppointments,
  initialPatients,
  type Appointment,
  type Patient,
  type Vitals,
} from "@/data/auravital";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const emptyForm = { firstName: "", lastName: "", cedula: "", age: "", phone: "" };

export function DoctorDashboard() {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
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

  const counts = {
    total: appointments.length,
    attended: appointments.filter((a) => a.status === "attended").length,
    absent: appointments.filter((a) => a.status === "absent").length,
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

  const registerPatient = () => {
    if (!form.firstName || !form.lastName || !form.cedula) {
      toast.error("Nombres, apellidos y cédula son obligatorios");
      return;
    }
    setPatients((prev) => [
      {
        id: crypto.randomUUID(),
        firstName: form.firstName,
        lastName: form.lastName,
        cedula: form.cedula,
        age: Number(form.age) || 0,
        record: `HC-00${127 + prev.length}`,
        phone: form.phone,
        vitals: { height: 170, weight: 70, bloodPressure: "120/80", heartRate: 72, temperature: 36.5, oxygen: 98 },
        notes: [],
      },
      ...prev,
    ]);
    setForm(emptyForm);
    setOpenNew(false);
    toast.success("Paciente registrado");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-semibold sm:text-3xl">Panel del Doctor</h1>
          <p className="text-sm text-muted-foreground">Dra. Valeria Ríos · Cardiología</p>
        </div>
        <Dialog open={openNew} onOpenChange={setOpenNew}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="h-4 w-4" /> Registro rápido
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Registro rápido de paciente</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fn">Nombres</Label>
                <Input id="fn" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ln">Apellidos</Label>
                <Input id="ln" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cd">Cédula</Label>
                <Input id="cd" value={form.cedula} onChange={(e) => setForm({ ...form, cedula: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ag">Edad</Label>
                <Input id="ag" inputMode="numeric" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="ph">Teléfono / WhatsApp</Label>
                <Input id="ph" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpenNew(false)}>Cancelar</Button>
              <Button onClick={registerPatient}>Guardar paciente</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="earnings">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="earnings">Mis Ganancias</TabsTrigger>
          <TabsTrigger value="records">Historias Clínicas</TabsTrigger>
          <TabsTrigger value="agenda">Agenda del día</TabsTrigger>
        </TabsList>

        <TabsContent value="earnings" className="mt-5">
          <DoctorEarnings />
        </TabsContent>

        <TabsContent value="records" className="mt-5 space-y-5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por cédula, nombre, apellido o N.º de historia clínica"
              className="pl-9"
            />
          </div>
          <Card className="gap-0 overflow-x-auto p-0">
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
                    <TableCell className="font-medium">{p.firstName} {p.lastName}</TableCell>
                    <TableCell>{p.cedula}</TableCell>
                    <TableCell>{p.age}</TableCell>
                    <TableCell>{p.record}</TableCell>
                    <TableCell>{bmi(p.vitals.weight, p.vitals.height)}</TableCell>
                    <TableCell>{p.vitals.bloodPressure}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelected(p);
                          setOpenHistory(true);
                        }}
                      >
                        Ver expediente
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

        <TabsContent value="agenda" className="mt-5 space-y-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard label="Citas agendadas hoy" value={String(counts.total)} icon={CalendarDays} accent />
            <StatCard label="Pacientes atendidos" value={String(counts.attended)} icon={CheckCircle2} />
            <StatCard label="Ausentes / cancelados" value={String(counts.absent)} icon={XCircle} />
          </div>
          <Card className="gap-0 p-0">
            <div className="border-b p-5">
              <p className="text-sm font-semibold">Agenda diaria</p>
              <p className="text-xs text-muted-foreground">Domingo 9 de agosto, 2026</p>
            </div>
            <ul className="divide-y">
              {appointments.map((a) => (
                <li key={a.id} className="grid gap-3 p-4 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center">
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <Clock className="h-4 w-4 text-primary" /> {a.time}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{a.patient}</p>
                    <p className="truncate text-xs text-muted-foreground">{a.reason}</p>
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
                        className={cn(a.status === value && value === "absent" && "bg-foreground text-background")}
                        onClick={() =>
                          setAppointments((prev) =>
                            prev.map((x) => (x.id === a.id ? { ...x, status: value } : x)),
                          )
                        }
                      >
                        {label}
                      </Button>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Total: {counts.total}</Badge>
            <Badge className="bg-success text-success-foreground">Atendidos: {counts.attended}</Badge>
            <Badge className="bg-warning text-warning-foreground">Ausentes: {counts.absent}</Badge>
          </div>
        </TabsContent>
      </Tabs>

      <PatientHistoryModal
        patient={selected}
        open={openHistory}
        onOpenChange={setOpenHistory}
        onSave={saveHistory}
      />
    </div>
  );
}
