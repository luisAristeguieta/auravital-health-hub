import { useMemo, useState } from "react";
import {
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Edit2,
  Mail,
  MapPin,
  Phone,
  Plus,
  Power,
  Search,
  Stethoscope,
  Trash2,
  User,
  UserCheck,
  UserPlus,
  Users,
  X,
  XCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  currency,
  doctors as seedDoctors,
  initialPatients,
  initialTransfers,
  specialties,
  type Doctor,
  type Patient,
  type Transfer,
  type Vitals,
} from "@/data/auravital";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const allWeekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const defaultDoctorForm: Partial<Doctor> = {
  name: "",
  specialtyId: "cardio",
  email: "",
  phone: "+593 99 ",
  commission: 55,
  active: true,
  avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80",
  daysAvailable: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
  startTime: "08:00",
  endTime: "18:00",
  slotDuration: 30,
};

const defaultPatientForm: Partial<Patient> = {
  firstName: "",
  lastName: "",
  cedula: "",
  age: 30,
  phone: "+593 99 ",
  email: "",
  address: "Quito, Ecuador",
  active: true,
};

export function AdminFinancials() {
  const [docs, setDocs] = useState<Doctor[]>(seedDoctors);
  const [patientsList, setPatientsList] = useState<Patient[]>(initialPatients);
  const [transfers, setTransfers] = useState<Transfer[]>(initialTransfers);

  // Search queries
  const [doctorQuery, setDoctorQuery] = useState("");
  const [patientQuery, setPatientQuery] = useState("");

  // Doctor modal state
  const [openDocModal, setOpenDocModal] = useState(false);
  const [editingDocId, setEditingDocId] = useState<string | null>(null);
  const [docForm, setDocForm] = useState<Partial<Doctor>>(defaultDoctorForm);

  // Patient modal state
  const [openPatientModal, setOpenPatientModal] = useState(false);
  const [editingPatientId, setEditingPatientId] = useState<string | null>(null);
  const [patientForm, setPatientForm] = useState<Partial<Patient>>(defaultPatientForm);

  // Patient appointments view modal
  const [viewingPatientApts, setViewingPatientApts] = useState<Patient | null>(null);

  const specialtyName = (id: string) => specialties.find((s) => s.id === id)?.name ?? "—";

  // Filtered doctors
  const filteredDocs = useMemo(() => {
    const q = doctorQuery.trim().toLowerCase();
    if (!q) return docs;
    return docs.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.email.toLowerCase().includes(q) ||
        specialtyName(d.specialtyId).toLowerCase().includes(q)
    );
  }, [docs, doctorQuery]);

  // Filtered patients
  const filteredPatients = useMemo(() => {
    const q = patientQuery.trim().toLowerCase();
    if (!q) return patientsList;
    return patientsList.filter(
      (p) =>
        p.firstName.toLowerCase().includes(q) ||
        p.lastName.toLowerCase().includes(q) ||
        p.cedula.includes(q) ||
        p.record.toLowerCase().includes(q)
    );
  }, [patientsList, patientQuery]);

  // --- DOCTOR ACTIONS ---
  const handleOpenNewDoctor = () => {
    setEditingDocId(null);
    setDocForm(defaultDoctorForm);
    setOpenDocModal(true);
  };

  const handleEditDoctor = (doc: Doctor) => {
    setEditingDocId(doc.id);
    setDocForm({
      ...doc,
      daysAvailable: doc.daysAvailable || ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
      startTime: doc.startTime || "08:00",
      endTime: doc.endTime || "18:00",
      slotDuration: doc.slotDuration || 30,
      phone: doc.phone || "+593 99 876 5432",
    });
    setOpenDocModal(true);
  };

  const handleSaveDoctor = () => {
    if (!docForm.name?.trim() || !docForm.email?.trim()) {
      toast.error("El nombre y correo del médico son obligatorios");
      return;
    }

    if (editingDocId) {
      // Edit existing doctor
      setDocs((prev) =>
        prev.map((d) =>
          d.id === editingDocId
            ? ({
                ...d,
                ...docForm,
              } as Doctor)
            : d
        )
      );
      toast.success(`Datos y horarios de ${docForm.name} actualizados`);
    } else {
      // Create new doctor
      const initials = docForm.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

      const newDoc: Doctor = {
        id: `d-${crypto.randomUUID()}`,
        name: docForm.name.trim(),
        specialtyId: docForm.specialtyId || "cardio",
        initials: initials || "DR",
        rating: 5.0,
        years: Number(docForm.years) || 6,
        commission: Number(docForm.commission) || 55,
        active: docForm.active ?? true,
        email: docForm.email.trim(),
        phone: docForm.phone?.trim() || "+593 99 000 0000",
        avatarUrl: docForm.avatarUrl || "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80",
        daysAvailable: docForm.daysAvailable || ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
        startTime: docForm.startTime || "08:00",
        endTime: docForm.endTime || "18:00",
        slotDuration: docForm.slotDuration || 30,
      };

      setDocs((prev) => [newDoc, ...prev]);
      toast.success(`¡Doctor ${newDoc.name} registrado con éxito en el sistema!`);
    }

    setOpenDocModal(false);
  };

  const toggleDayAvailable = (day: string) => {
    const current = docForm.daysAvailable || [];
    if (current.includes(day)) {
      setDocForm({ ...docForm, daysAvailable: current.filter((d) => d !== day) });
    } else {
      setDocForm({ ...docForm, daysAvailable: [...current, day] });
    }
  };

  // --- PATIENT ACTIONS ---
  const handleOpenNewPatient = () => {
    setEditingPatientId(null);
    setPatientForm(defaultPatientForm);
    setOpenPatientModal(true);
  };

  const handleEditPatient = (pat: Patient) => {
    setEditingPatientId(pat.id);
    setPatientForm({
      ...pat,
      active: pat.active ?? true,
      email: pat.email || `${pat.firstName.toLowerCase()}@correo.com`,
      address: pat.address || "Quito, Ecuador",
    });
    setOpenPatientModal(true);
  };

  const handleSavePatient = () => {
    if (!patientForm.firstName?.trim() || !patientForm.lastName?.trim() || !patientForm.cedula?.trim()) {
      toast.error("Nombres, apellidos y cédula son obligatorios");
      return;
    }

    if (editingPatientId) {
      setPatientsList((prev) =>
        prev.map((p) =>
          p.id === editingPatientId
            ? ({
                ...p,
                ...patientForm,
              } as Patient)
            : p
        )
      );
      toast.success(`Datos de ${patientForm.firstName} ${patientForm.lastName} actualizados`);
    } else {
      const defaultVitals: Vitals = {
        height: 170,
        weight: 70,
        bloodPressure: "120/80",
        heartRate: 72,
        temperature: 36.5,
        oxygen: 98,
      };

      const newPat: Patient = {
        id: `p-${crypto.randomUUID()}`,
        firstName: patientForm.firstName.trim(),
        lastName: patientForm.lastName.trim(),
        cedula: patientForm.cedula.trim(),
        age: Number(patientForm.age) || 30,
        record: `HC-00${Math.floor(200 + Math.random() * 700)}`,
        phone: patientForm.phone?.trim() || "+593 99 000 0000",
        email: patientForm.email?.trim() || "",
        address: patientForm.address?.trim() || "Quito, Ecuador",
        active: patientForm.active ?? true,
        vitals: defaultVitals,
        notes: [],
        labResults: [],
        labOrders: [],
      };

      setPatientsList((prev) => [newPat, ...prev]);
      toast.success(`Paciente ${newPat.firstName} ${newPat.lastName} registrado en el CRM.`);
    }

    setOpenPatientModal(false);
  };

  const togglePatientActive = (id: string, current: boolean) => {
    setPatientsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: !current } : p))
    );
    toast.info(`Cuenta del paciente ${!current ? "activada" : "desactivada"}`);
  };

  // --- TRANSFERS ---
  const setStatus = (id: string, status: Transfer["status"]) => {
    setTransfers((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
    toast.success(status === "confirmed" ? "Pago por transferencia confirmado" : "Pago rechazado");
  };

  return (
    <div className="space-y-6">
      {/* 1. ADMINISTRACIÓN DE DOCTORES & HORARIOS */}
      <Card className="gap-0 p-0 overflow-hidden border shadow-sm bg-card">
        <div className="border-b p-5 bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-primary" /> Administración de Doctores & Disponibilidad
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Configura perfiles médicos, comisiones porcentuales y turnos de atención para agendamiento
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              onClick={handleOpenNewDoctor}
              className="bg-primary text-primary-foreground font-bold text-xs h-9 shadow-sm hover:bg-primary/90"
            >
              <Plus className="mr-1.5 h-4 w-4" /> Registrar Nuevo Doctor
            </Button>
          </div>
        </div>

        {/* Buscador de doctores */}
        <div className="p-4 border-b bg-card">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={doctorQuery}
              onChange={(e) => setDoctorQuery(e.target.value)}
              placeholder="Buscar doctor por nombre, especialidad o correo electrónico…"
              className="pl-9 text-xs h-9"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="text-xs">
                <TableHead>Especialista</TableHead>
                <TableHead>Especialidad</TableHead>
                <TableHead>Contacto</TableHead>
                <TableHead>Horario Habitual</TableHead>
                <TableHead className="w-32">Comisión (%)</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-xs">
              {filteredDocs.map((d) => (
                <TableRow key={d.id} className="hover:bg-muted/20">
                  <TableCell>
                    <div className="flex items-center gap-2.5">
                      <Avatar className="h-9 w-9 border overflow-hidden shrink-0">
                        {d.avatarUrl ? (
                          <img src={d.avatarUrl} alt={d.name} className="h-full w-full object-cover" />
                        ) : (
                          <AvatarFallback className="font-bold text-xs">{d.initials}</AvatarFallback>
                        )}
                      </Avatar>
                      <div className="min-w-0">
                        <p className="font-bold text-foreground truncate">{d.name}</p>
                        <p className="text-[11px] text-muted-foreground">{d.years} años de experiencia</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge variant="secondary" className="font-semibold text-[11px]">
                      {specialtyName(d.specialtyId)}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <div className="space-y-0.5 text-muted-foreground">
                      <p className="text-[11px] flex items-center gap-1">
                        <Mail className="h-3 w-3 text-primary" /> {d.email}
                      </p>
                      {d.phone && (
                        <p className="text-[11px] flex items-center gap-1">
                          <Phone className="h-3 w-3 text-emerald-600" /> {d.phone}
                        </p>
                      )}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="space-y-0.5 text-foreground font-medium">
                      <p className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-primary" /> {d.startTime || "08:00"} - {d.endTime || "18:00"}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {d.daysAvailable ? d.daysAvailable.join(", ") : "Lun - Vie"}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Input
                        className="h-8 w-18 text-xs font-bold"
                        inputMode="numeric"
                        value={d.commission}
                        onChange={(e) =>
                          setDocs((prev) =>
                            prev.map((x) => (x.id === d.id ? { ...x, commission: Number(e.target.value) || 0 } : x)),
                          )
                        }
                      />
                      <span className="text-xs font-bold text-muted-foreground">%</span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={d.active}
                        aria-label={`Activar ${d.name}`}
                        onCheckedChange={(v) =>
                          setDocs((prev) => prev.map((x) => (x.id === d.id ? { ...x, active: v } : x)))
                        }
                      />
                      <span className={cn("text-[11px] font-semibold", d.active ? "text-emerald-600" : "text-muted-foreground")}>
                        {d.active ? "Activo" : "Inactivo"}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEditDoctor(d)}
                      className="h-8 text-xs font-semibold hover:border-primary hover:text-primary gap-1"
                    >
                      <Edit2 className="h-3.5 w-3.5" /> Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

              {filteredDocs.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="py-8 text-center text-muted-foreground">
                    No se encontraron doctores con el criterio “{doctorQuery}”.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* 2. ADMINISTRACIÓN DE PACIENTES */}
      <Card className="gap-0 p-0 overflow-hidden border shadow-sm bg-card">
        <div className="border-b p-5 bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" /> Administración de Pacientes
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Control de expedientes, estados de cuenta y citas agendadas por paciente
            </p>
          </div>

          <Button
            onClick={handleOpenNewPatient}
            className="bg-primary text-primary-foreground font-bold text-xs h-9 shadow-sm hover:bg-primary/90"
          >
            <UserPlus className="mr-1.5 h-4 w-4" /> Registrar Nuevo Paciente
          </Button>
        </div>

        {/* Buscador de pacientes */}
        <div className="p-4 border-b bg-card">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={patientQuery}
              onChange={(e) => setPatientQuery(e.target.value)}
              placeholder="Buscar paciente por cédula, nombre, apellido o N.º de historia clínica…"
              className="pl-9 text-xs h-9"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="text-xs">
                <TableHead>Paciente</TableHead>
                <TableHead>Cédula</TableHead>
                <TableHead>Historia Clínica</TableHead>
                <TableHead>Contacto</TableHead>
                <TableHead>Dirección</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-xs">
              {filteredPatients.map((p) => (
                <TableRow key={p.id} className="hover:bg-muted/20">
                  <TableCell className="font-bold text-foreground">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs">
                        {p.firstName[0]}{p.lastName[0]}
                      </div>
                      <span>{p.firstName} {p.lastName}</span>
                    </div>
                  </TableCell>

                  <TableCell className="font-mono">{p.cedula}</TableCell>

                  <TableCell>
                    <Badge variant="secondary" className="font-mono text-xs font-bold text-primary">
                      {p.record}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <div className="space-y-0.5 text-muted-foreground text-[11px]">
                      <p className="flex items-center gap-1 font-medium text-foreground">
                        <Phone className="h-3 w-3 text-emerald-600" /> {p.phone}
                      </p>
                      {p.email && (
                        <p className="flex items-center gap-1">
                          <Mail className="h-3 w-3" /> {p.email}
                        </p>
                      )}
                    </div>
                  </TableCell>

                  <TableCell className="text-muted-foreground text-[11px]">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-primary" /> {p.address || "Quito, Ecuador"}
                    </span>
                  </TableCell>

                  <TableCell>
                    <Badge
                      className={cn(
                        "text-[10px] font-bold px-2 py-0.5",
                        p.active !== false
                          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {p.active !== false ? "Activo" : "Inactivo"}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditPatient(p)}
                        className="h-8 text-xs font-semibold gap-1"
                        title="Editar datos"
                      >
                        <Edit2 className="h-3 w-3" /> Editar
                      </Button>

                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setViewingPatientApts(p)}
                        className="h-8 text-xs font-semibold gap-1 text-primary"
                        title="Ver citas agendadas"
                      >
                        <Calendar className="h-3 w-3" /> Citas
                      </Button>

                      <Button
                        size="sm"
                        variant={p.active !== false ? "ghost" : "outline"}
                        onClick={() => togglePatientActive(p.id, p.active !== false)}
                        className={cn(
                          "h-8 text-xs font-semibold",
                          p.active !== false ? "text-destructive hover:bg-destructive/10" : "text-emerald-600"
                        )}
                        title={p.active !== false ? "Desactivar cuenta" : "Activar cuenta"}
                      >
                        <Power className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              {filteredPatients.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="py-8 text-center text-muted-foreground">
                    No se encontraron pacientes con el criterio “{patientQuery}”.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* 3. VERIFICACIÓN DE PAGOS POR TRANSFERENCIA */}
      <Card className="gap-0 p-0 overflow-hidden border shadow-sm bg-card">
        <div className="border-b p-5 bg-muted/20">
          <p className="text-sm font-bold text-foreground">Verificación de Pagos por Transferencia</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Confirma o rechaza comprobantes bancarios subidos por los pacientes
          </p>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="text-xs">
                <TableHead>Paciente</TableHead>
                <TableHead>Concepto</TableHead>
                <TableHead>Banco</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead className="text-right">Monto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-xs">
              {transfers.map((t) => (
                <TableRow key={t.id} className="hover:bg-muted/20">
                  <TableCell className="font-bold text-foreground">{t.patient}</TableCell>
                  <TableCell>{t.concept}</TableCell>
                  <TableCell className="text-muted-foreground">{t.bank}</TableCell>
                  <TableCell className="text-muted-foreground">{t.date}</TableCell>
                  <TableCell className="text-right font-bold">{currency(t.amount)}</TableCell>
                  <TableCell>
                    {t.status === "pending" && (
                      <Badge className="bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-[10px]">
                        Pendiente
                      </Badge>
                    )}
                    {t.status === "confirmed" && (
                      <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-[10px]">
                        Confirmado
                      </Badge>
                    )}
                    {t.status === "rejected" && (
                      <Badge variant="destructive" className="text-[10px]">
                        Rechazado
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        disabled={t.status === "confirmed"}
                        onClick={() => setStatus(t.id, "confirmed")}
                        className="h-8 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white gap-1"
                      >
                        <Check className="h-3.5 w-3.5" /> Confirmar
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={t.status === "rejected"}
                        onClick={() => setStatus(t.id, "rejected")}
                        className="h-8 text-xs text-destructive hover:bg-destructive/10 gap-1"
                      >
                        <X className="h-3.5 w-3.5" /> Rechazar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* --- MODAL DOCTOR: CREAR / EDITAR & ASIGNAR HORARIOS --- */}
      <Dialog open={openDocModal} onOpenChange={setOpenDocModal}>
        <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-2xl bg-card border shadow-2xl space-y-4">
          <DialogHeader className="border-b pb-3">
            <DialogTitle className="text-xl font-bold flex items-center gap-2 text-foreground">
              <Stethoscope className="h-5 w-5 text-primary" />
              {editingDocId ? "Editar Datos & Horarios del Doctor" : "Registrar Nuevo Doctor"}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Configura la información profesional y los turnos de atención para agendamiento.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList className="grid grid-cols-2 w-full h-10 p-1 bg-muted rounded-xl">
              <TabsTrigger value="profile" className="rounded-lg text-xs font-bold">
                1. Datos Profesionales
              </TabsTrigger>
              <TabsTrigger value="schedule" className="rounded-lg text-xs font-bold">
                2. 📅 Horarios & Turnos
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: DATOS PROFESIONALES */}
            <TabsContent value="profile" className="space-y-4 mt-0">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <Label htmlFor="doc-name" className="text-xs font-semibold">
                    Nombre Completo del Médico <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="doc-name"
                    value={docForm.name || ""}
                    onChange={(e) => setDocForm({ ...docForm, name: e.target.value })}
                    placeholder="Ej. Dr. Andrés Carrión"
                    className="h-9 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="doc-spec" className="text-xs font-semibold">
                    Especialidad Médica <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={docForm.specialtyId || ""}
                    onValueChange={(v) => setDocForm({ ...docForm, specialtyId: v })}
                  >
                    <SelectTrigger id="doc-spec" className="h-9 text-xs">
                      <SelectValue placeholder="Selecciona especialidad" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((s) => (
                        <SelectItem key={s.id} value={s.id} className="text-xs">
                          {s.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="doc-email" className="text-xs font-semibold">
                    Correo Electrónico <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="doc-email"
                    type="email"
                    value={docForm.email || ""}
                    onChange={(e) => setDocForm({ ...docForm, email: e.target.value })}
                    placeholder="doctor@auravital.com"
                    className="h-9 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="doc-phone" className="text-xs font-semibold">Teléfono / WhatsApp</Label>
                  <Input
                    id="doc-phone"
                    value={docForm.phone || ""}
                    onChange={(e) => setDocForm({ ...docForm, phone: e.target.value })}
                    placeholder="+593 99 876 5432"
                    className="h-9 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="doc-comm" className="text-xs font-semibold">Porcentaje de Comisión (%)</Label>
                  <Input
                    id="doc-comm"
                    type="number"
                    value={docForm.commission || 50}
                    onChange={(e) => setDocForm({ ...docForm, commission: Number(e.target.value) || 0 })}
                    className="h-9 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="doc-years" className="text-xs font-semibold">Años de Experiencia Clínica</Label>
                  <Input
                    id="doc-years"
                    type="number"
                    value={docForm.years || 5}
                    onChange={(e) => setDocForm({ ...docForm, years: Number(e.target.value) || 0 })}
                    className="h-9 text-xs"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <Label htmlFor="doc-avatar" className="text-xs font-semibold">URL de Foto de Perfil</Label>
                  <Input
                    id="doc-avatar"
                    value={docForm.avatarUrl || ""}
                    onChange={(e) => setDocForm({ ...docForm, avatarUrl: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="h-9 text-xs"
                  />
                </div>
              </div>
            </TabsContent>

            {/* TAB 2: HORARIOS Y TURNOS */}
            <TabsContent value="schedule" className="space-y-4 mt-0">
              <div className="p-4 bg-muted/30 border rounded-2xl space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-foreground">
                    Días de Atención Disponibles:
                  </Label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {allWeekDays.map((day) => {
                      const isSelected = (docForm.daysAvailable || []).includes(day);
                      return (
                        <Button
                          key={day}
                          type="button"
                          size="sm"
                          variant={isSelected ? "default" : "outline"}
                          onClick={() => toggleDayAvailable(day)}
                          className={cn(
                            "h-9 text-xs font-bold",
                            isSelected && "bg-primary text-primary-foreground"
                          )}
                        >
                          {day.slice(0, 3)}
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 pt-1">
                  <div className="space-y-1">
                    <Label htmlFor="doc-start" className="text-xs font-semibold">Hora de Inicio</Label>
                    <Input
                      id="doc-start"
                      value={docForm.startTime || "08:00"}
                      onChange={(e) => setDocForm({ ...docForm, startTime: e.target.value })}
                      placeholder="08:00"
                      className="h-9 text-xs font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="doc-end" className="text-xs font-semibold">Hora de Finalización</Label>
                    <Input
                      id="doc-end"
                      value={docForm.endTime || "18:00"}
                      onChange={(e) => setDocForm({ ...docForm, endTime: e.target.value })}
                      placeholder="18:00"
                      className="h-9 text-xs font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="doc-duration" className="text-xs font-semibold">Duración de Cita</Label>
                    <Select
                      value={String(docForm.slotDuration || 30)}
                      onValueChange={(v) => setDocForm({ ...docForm, slotDuration: Number(v) })}
                    >
                      <SelectTrigger id="doc-duration" className="h-9 text-xs">
                        <SelectValue placeholder="30 min" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 Minutos</SelectItem>
                        <SelectItem value="45">45 Minutos</SelectItem>
                        <SelectItem value="60">60 Minutos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-xl bg-card p-3 border text-xs text-muted-foreground space-y-1">
                  <p className="font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Sincronización Automática con Portal de Pacientes
                  </p>
                  <p>
                    Al guardar, los turnos calculados estarán disponibles en el paso 2 del módulo de agendamiento para los pacientes interesados en {specialtyName(docForm.specialtyId || "")}.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter className="pt-2 border-t">
            <Button variant="outline" onClick={() => setOpenDocModal(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSaveDoctor} className="bg-primary text-primary-foreground font-bold">
              Guardar Doctor & Disponibilidad
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* --- MODAL PACIENTE: CREAR / EDITAR --- */}
      <Dialog open={openPatientModal} onOpenChange={setOpenPatientModal}>
        <DialogContent className="sm:max-w-lg bg-card border shadow-2xl space-y-4">
          <DialogHeader className="border-b pb-3">
            <DialogTitle className="text-xl font-bold flex items-center gap-2 text-foreground">
              <User className="h-5 w-5 text-primary" />
              {editingPatientId ? "Editar Ficha del Paciente" : "Registrar Nuevo Paciente"}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Administración de datos filiatorios y contacto para el CRM clínico.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-3 sm:grid-cols-2 py-1">
            <div className="space-y-1">
              <Label htmlFor="pat-fn" className="text-xs font-semibold">Nombres *</Label>
              <Input
                id="pat-fn"
                value={patientForm.firstName || ""}
                onChange={(e) => setPatientForm({ ...patientForm, firstName: e.target.value })}
                placeholder="Juan"
                className="h-9 text-xs"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="pat-ln" className="text-xs font-semibold">Apellidos *</Label>
              <Input
                id="pat-ln"
                value={patientForm.lastName || ""}
                onChange={(e) => setPatientForm({ ...patientForm, lastName: e.target.value })}
                placeholder="Pérez"
                className="h-9 text-xs"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="pat-cd" className="text-xs font-semibold">Cédula / ID *</Label>
              <Input
                id="pat-cd"
                value={patientForm.cedula || ""}
                onChange={(e) => setPatientForm({ ...patientForm, cedula: e.target.value })}
                placeholder="1712345678"
                className="h-9 text-xs"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="pat-age" className="text-xs font-semibold">Edad (años)</Label>
              <Input
                id="pat-age"
                type="number"
                value={patientForm.age || 30}
                onChange={(e) => setPatientForm({ ...patientForm, age: Number(e.target.value) || 0 })}
                className="h-9 text-xs"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="pat-phone" className="text-xs font-semibold">Teléfono / WhatsApp</Label>
              <Input
                id="pat-phone"
                value={patientForm.phone || ""}
                onChange={(e) => setPatientForm({ ...patientForm, phone: e.target.value })}
                placeholder="+593 99 123 4567"
                className="h-9 text-xs"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="pat-email" className="text-xs font-semibold">Correo Electrónico</Label>
              <Input
                id="pat-email"
                type="email"
                value={patientForm.email || ""}
                onChange={(e) => setPatientForm({ ...patientForm, email: e.target.value })}
                placeholder="paciente@correo.com"
                className="h-9 text-xs"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <Label htmlFor="pat-addr" className="text-xs font-semibold">Dirección Domiciliaria</Label>
              <Input
                id="pat-addr"
                value={patientForm.address || ""}
                onChange={(e) => setPatientForm({ ...patientForm, address: e.target.value })}
                placeholder="Av. 10 de Agosto y Mariana de Jesús, Quito"
                className="h-9 text-xs"
              />
            </div>
          </div>

          <DialogFooter className="pt-2 border-t">
            <Button variant="outline" onClick={() => setOpenPatientModal(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSavePatient} className="bg-primary text-primary-foreground font-bold">
              Guardar Paciente
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* --- MODAL VER CITAS AGENDADAS DEL PACIENTE --- */}
      <Dialog open={!!viewingPatientApts} onOpenChange={(open) => !open && setViewingPatientApts(null)}>
        <DialogContent className="sm:max-w-lg bg-card border shadow-2xl space-y-4">
          <DialogHeader className="border-b pb-3">
            <DialogTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              Citas de {viewingPatientApts?.firstName} {viewingPatientApts?.lastName}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Historia: {viewingPatientApts?.record} · Cédula: {viewingPatientApts?.cedula}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2.5">
            <div className="rounded-xl border p-3 bg-muted/40 space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="font-bold text-foreground">Consulta de Cardiología</span>
                <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-[10px]">
                  Confirmada / Pago Aprobado
                </Badge>
              </div>
              <p className="text-muted-foreground">Fecha: 15 de Agosto, 2026 · 10:00 AM</p>
              <p className="text-muted-foreground">Especialista: Dra. Valeria Ríos</p>
            </div>

            <div className="rounded-xl border p-3 bg-muted/40 space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="font-bold text-foreground">Fisioterapia & Camilla Térmica</span>
                <Badge variant="outline" className="text-[10px]">
                  Atendida / Finalizada
                </Badge>
              </div>
              <p className="text-muted-foreground">Fecha: 28 de Julio, 2026 · 09:30 AM</p>
              <p className="text-muted-foreground">Especialista: Lcdo. Diego Suárez</p>
            </div>
          </div>

          <DialogFooter className="pt-2 border-t">
            <Button onClick={() => setViewingPatientApts(null)} className="w-full">
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
