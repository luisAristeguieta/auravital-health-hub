import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { doctors, timeSlots, unavailableSlots, type Doctor } from "@/data/auravital";
import { cn } from "@/lib/utils";

const DAY_LABELS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

function nextDays(count: number) {
  const base = new Date();
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    return d;
  });
}

export function CalendarBooking({
  specialtyId,
  doctorId,
  date,
  time,
  onDoctor,
  onDate,
  onTime,
}: {
  specialtyId: string;
  doctorId?: string;
  date?: string;
  time?: string;
  onDoctor: (d: Doctor) => void;
  onDate: (iso: string) => void;
  onTime: (t: string) => void;
}) {
  const list = doctors.filter((d) => d.specialtyId === specialtyId && d.active);
  const days = nextDays(14);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
      <Card className="gap-3 p-5">
        <p className="text-sm font-semibold">Doctores disponibles</p>
        <div className="space-y-2">
          {list.map((d) => {
            const active = doctorId === d.id;
            return (
              <button
                key={d.id}
                onClick={() => onDoctor(d)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-colors",
                  active ? "border-primary bg-primary/5" : "hover:bg-surface",
                )}
              >
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarFallback className="bg-surface text-xs font-semibold text-primary">
                    {d.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{d.name}</p>
                  <p className="text-xs text-muted-foreground">{d.years} años de experiencia</p>
                </div>
                <Badge variant="secondary" className="shrink-0 gap-1">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  {d.rating}
                </Badge>
              </button>
            );
          })}
        </div>
      </Card>

      <Card className="gap-5 p-5">
        <div>
          <p className="text-sm font-semibold">Selecciona la fecha</p>
          <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
            {days.map((d) => {
              const iso = d.toISOString().slice(0, 10);
              const weekend = d.getDay() === 0;
              const active = date === iso;
              return (
                <button
                  key={iso}
                  disabled={weekend}
                  onClick={() => onDate(iso)}
                  className={cn(
                    "rounded-md border px-1 py-2 text-center transition-colors",
                    weekend && "cursor-not-allowed opacity-40",
                    active ? "border-primary bg-primary text-primary-foreground" : "hover:bg-surface",
                  )}
                >
                  <span className="block text-[10px] uppercase">{DAY_LABELS[d.getDay()]}</span>
                  <span className="block text-sm font-semibold">{d.getDate()}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Horarios disponibles</p>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {timeSlots.map((t) => {
              const taken = unavailableSlots.includes(t);
              const active = time === t;
              return (
                <button
                  key={t}
                  disabled={taken || !date}
                  onClick={() => onTime(t)}
                  className={cn(
                    "rounded-md border px-2 py-2 text-sm transition-colors",
                    (taken || !date) && "cursor-not-allowed opacity-40 line-through",
                    active ? "border-primary bg-primary text-primary-foreground" : "hover:bg-surface",
                  )}
                >
                  {t}
                </button>
              );
            })}
          </div>
          {!date ? (
            <p className="mt-2 text-xs text-muted-foreground">Selecciona una fecha para ver los horarios.</p>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
