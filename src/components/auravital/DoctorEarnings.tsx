import { Banknote, CalendarRange, Percent, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "./StatCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { currency, earnings } from "@/data/auravital";

export function DoctorEarnings() {
  const day = earnings.filter((e) => e.datetime.startsWith("09 Ago"));
  const commission = (e: (typeof earnings)[number]) => (e.amount * e.commissionPct) / 100;
  const sum = (rows: typeof earnings) => rows.reduce((a, e) => a + commission(e), 0);
  const week = earnings.slice(0, 5);

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Ganancias del día" value={currency(sum(day))} hint={`${day.length} consultas hoy`} icon={Wallet} accent />
        <StatCard label="Ganancias de la semana" value={currency(sum(week))} hint={`${week.length} consultas`} icon={CalendarRange} />
        <StatCard label="Ganancias del mes" value={currency(sum(earnings))} hint={`${earnings.length} consultas`} icon={Banknote} />
        <StatCard label="Comisión por consulta" value="60%" hint="Tarifa negociada vigente" icon={Percent} />
      </div>

      <Card className="gap-0 p-0">
        <div className="border-b p-5">
          <p className="text-sm font-semibold">Desglose de ingresos</p>
          <p className="text-xs text-muted-foreground">Historial de pacientes atendidos y comisiones</p>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Paciente</TableHead>
                <TableHead>Fecha / Hora</TableHead>
                <TableHead className="text-right">Valor consulta</TableHead>
                <TableHead className="text-right">Comisión</TableHead>
                <TableHead>Método</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {earnings.map((e) => (
                <TableRow key={e.id}>
                  <TableCell className="font-medium">{e.patient}</TableCell>
                  <TableCell className="text-muted-foreground">{e.datetime}</TableCell>
                  <TableCell className="text-right">{currency(e.amount)}</TableCell>
                  <TableCell className="text-right">
                    {currency(commission(e))}{" "}
                    <span className="text-xs text-muted-foreground">({e.commissionPct}%)</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{e.method}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        e.status === "Aprobado"
                          ? "bg-success text-success-foreground"
                          : "bg-warning text-warning-foreground"
                      }
                    >
                      {e.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
