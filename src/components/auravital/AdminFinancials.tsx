import { useState } from "react";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  currency,
  doctors as seedDoctors,
  initialPatients,
  initialTransfers,
  specialties,
  type Doctor,
  type Transfer,
} from "@/data/auravital";
import { toast } from "sonner";

export function AdminFinancials() {
  const [docs, setDocs] = useState<Doctor[]>(seedDoctors);
  const [transfers, setTransfers] = useState<Transfer[]>(initialTransfers);

  const specialtyName = (id: string) => specialties.find((s) => s.id === id)?.name ?? "—";

  const setStatus = (id: string, status: Transfer["status"]) => {
    setTransfers((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
    toast.success(status === "confirmed" ? "Pago confirmado" : "Pago rechazado");
  };

  return (
    <div className="space-y-5">
      <Card className="gap-0 p-0">
        <div className="border-b p-5">
          <p className="text-sm font-semibold">Verificación de pagos por transferencia</p>
          <p className="text-xs text-muted-foreground">Confirma o rechaza comprobantes recibidos</p>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Paciente</TableHead>
                <TableHead>Concepto</TableHead>
                <TableHead>Banco</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead className="text-right">Monto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transfers.map((t) => (
                <TableRow key={t.id}>
                  <TableCell className="font-medium">{t.patient}</TableCell>
                  <TableCell>{t.concept}</TableCell>
                  <TableCell className="text-muted-foreground">{t.bank}</TableCell>
                  <TableCell className="text-muted-foreground">{t.date}</TableCell>
                  <TableCell className="text-right">{currency(t.amount)}</TableCell>
                  <TableCell>
                    {t.status === "pending" && <Badge className="bg-warning text-warning-foreground">Pendiente</Badge>}
                    {t.status === "confirmed" && <Badge className="bg-success text-success-foreground">Confirmado</Badge>}
                    {t.status === "rejected" && <Badge variant="destructive">Rechazado</Badge>}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" disabled={t.status === "confirmed"} onClick={() => setStatus(t.id, "confirmed")}>
                        <Check className="h-4 w-4" /> Confirmar
                      </Button>
                      <Button size="sm" variant="outline" disabled={t.status === "rejected"} onClick={() => setStatus(t.id, "rejected")}>
                        <X className="h-4 w-4" /> Rechazar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Card className="gap-0 p-0">
        <div className="border-b p-5">
          <p className="text-sm font-semibold">Administración de doctores</p>
          <p className="text-xs text-muted-foreground">Activa o desactiva perfiles y ajusta comisiones</p>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Especialidad</TableHead>
                <TableHead>Correo</TableHead>
                <TableHead className="w-40">Comisión (%)</TableHead>
                <TableHead>Activo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {docs.map((d) => (
                <TableRow key={d.id}>
                  <TableCell className="font-medium">{d.name}</TableCell>
                  <TableCell>{specialtyName(d.specialtyId)}</TableCell>
                  <TableCell className="text-muted-foreground">{d.email}</TableCell>
                  <TableCell>
                    <Input
                      className="h-9 w-24"
                      inputMode="numeric"
                      value={d.commission}
                      onChange={(e) =>
                        setDocs((prev) =>
                          prev.map((x) => (x.id === d.id ? { ...x, commission: Number(e.target.value) || 0 } : x)),
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={d.active}
                      aria-label={`Activar ${d.name}`}
                      onCheckedChange={(v) =>
                        setDocs((prev) => prev.map((x) => (x.id === d.id ? { ...x, active: v } : x)))
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Card className="gap-0 p-0">
        <div className="border-b p-5">
          <p className="text-sm font-semibold">Pacientes registrados</p>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Paciente</TableHead>
                <TableHead>Cédula</TableHead>
                <TableHead>Edad</TableHead>
                <TableHead>Historia</TableHead>
                <TableHead>Contacto</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {initialPatients.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.firstName} {p.lastName}</TableCell>
                  <TableCell>{p.cedula}</TableCell>
                  <TableCell>{p.age}</TableCell>
                  <TableCell>{p.record}</TableCell>
                  <TableCell className="text-muted-foreground">{p.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
