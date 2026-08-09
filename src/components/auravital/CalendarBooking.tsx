import { useEffect } from "react";
import { Check, Clock, Star, UserCheck } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { doctors, timeSlots, unavailableSlots, type Doctor } from "@/data/auravital";
import { cn } from "@/lib/utils";

const DAY_LABELS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MONTH_NAMES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function nextDays(count: number) {
  const base = new Date();
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    return d;
  });
}

export interface CalendarBookingProps {
  specialtyId: string;
  selectedDoctor?: Doctor | undefined;
  doctorId?: string | undefined;
  onSelectDoctor?: (d: Doctor) => void;
  onDoctor?: (d: Doctor) => void;

  selectedDate?: string | undefined;
  date?: string | undefined;
  onSelectDate?: (iso: string) => void;
  onDate?: (iso: string) => void;

  selectedTime?: string | undefined;
  time?: string | undefined;
  onSelectTime?: (t: string) => void;
  onTime?: (t: string) => void;
}

export function CalendarBooking({
  specialtyId,
  selectedDoctor,
  doctorId,
  onSelectDoctor,
  onDoctor,
  selectedDate,
  date,
  onSelectDate,
  onDate,
  selectedTime,
  time,
  onSelectTime,
  onTime,
}: CalendarBookingProps) {
  const list = doctors.filter((d) => d.specialtyId === specialtyId && d.active);
  const days = nextDays(14);

  // Normalize callbacks and active values
  const handleDoctorChange = (d: Doctor) => {
    if (onSelectDoctor) onSelectDoctor(d);
    if (onDoctor) onDoctor(d);
  };

  const handleDateChange = (iso: string) => {
    if (onSelectDate) onSelectDate(iso);
    if (onDate) onDate(iso);
  };

  const handleTimeChange = (t: string) => {
    if (onSelectTime) onSelectTime(t);
    if (onTime) onTime(t);
  };

  const currentDoctor = selectedDoctor || list.find((d) => d.id === doctorId);
  const currentDate = selectedDate || date;
  const currentTime = selectedTime || time;

  // Auto-select the first doctor if none is currently selected
  useEffect(() => {
    if (!currentDoctor && list.length > 0 && list[0]) {
      handleDoctorChange(list[0]);
    }
  }, [specialtyId, currentDoctor, list]);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]">
      {/* 1. SELECCIÓN DE DOCTOR */}
      <Card className="p-5 space-y-4 bg-card border shadow-sm">
        <div className="flex items-center justify-between border-b pb-3">
          <div>
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-primary" /> Especialistas Disponibles
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Haz clic en el médico para asignarlo a tu consulta
            </p>
          </div>
          <Badge variant="secondary" className="text-[11px] font-semibold">
            {list.length} {list.length === 1 ? "doctor" : "doctores"}
          </Badge>
        </div>

        <div className="space-y-2.5">
          {list.map((d) => {
            const active = currentDoctor?.id === d.id;
            return (
              <div
                key={d.id}
                role="button"
                tabIndex={0}
                onClick={() => handleDoctorChange(d)}
                onKeyDown={(e) => e.key === "Enter" && handleDoctorChange(d)}
                className={cn(
                  "relative flex w-full items-center gap-3.5 rounded-2xl border p-3.5 text-left transition-all duration-200 cursor-pointer select-none",
                  active
                    ? "border-primary bg-[#FFF5F5] dark:bg-rose-950/25 ring-2 ring-primary/30 shadow-md scale-[1.01]"
                    : "border-border/80 bg-card hover:border-primary/60 hover:bg-muted/40 hover:shadow-sm"
                )}
              >
                <Avatar className="h-12 w-12 shrink-0 border-2 border-primary/30 bg-primary/10 overflow-hidden shadow-sm">
                  {d.avatarUrl ? (
                    <img
                      src={d.avatarUrl}
                      alt={d.name}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  ) : null}
                  <AvatarFallback className="text-xs font-bold text-primary">
                    {d.initials}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <p className={cn("truncate text-sm font-bold", active ? "text-primary" : "text-foreground")}>
                      {d.name}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">{d.years} años de experiencia clínica</p>
                </div>

                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <Badge variant="secondary" className="gap-1 text-[11px] font-semibold px-2 py-0.5 bg-card border">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-500" />
                    {d.rating}
                  </Badge>

                  {active && (
                    <div className="flex items-center gap-1 text-[11px] font-extrabold text-primary animate-in zoom-in-50 duration-200">
                      <div className="grid h-4 w-4 place-items-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span>Elegido</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* 2. CALENDARIO & HORARIOS */}
      <Card className="p-5 space-y-5 bg-card border shadow-sm">
        {/* SELECCIÓN DE DÍA */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-sm font-bold text-foreground">
              📅 1. Selecciona el Día de Consulta
            </h3>
            {currentDate && (
              <Badge className="bg-primary/15 text-primary border-primary/30 text-xs font-semibold">
                Día seleccionado: {currentDate}
              </Badge>
            )}
          </div>

          <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
            {days.map((d) => {
              const iso = d.toISOString().slice(0, 10);
              const isSunday = d.getDay() === 0;
              const active = currentDate === iso;

              return (
                <button
                  key={iso}
                  type="button"
                  disabled={isSunday}
                  onClick={() => handleDateChange(iso)}
                  className={cn(
                    "flex flex-col items-center justify-center rounded-xl border p-2 text-center transition-all duration-200 select-none",
                    isSunday
                      ? "cursor-not-allowed opacity-30 bg-muted/40 text-muted-foreground"
                      : "cursor-pointer",
                    active
                      ? "border-primary bg-primary text-primary-foreground font-bold shadow-md ring-2 ring-primary/40 scale-105"
                      : isSunday
                      ? ""
                      : "border-border/80 bg-card hover:border-primary/80 hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <span className={cn("text-[10px] uppercase font-semibold", active ? "text-primary-foreground/90" : "text-muted-foreground")}>
                    {DAY_LABELS[d.getDay()]}
                  </span>
                  <span className="text-base font-extrabold mt-0.5 leading-none">
                    {d.getDate()}
                  </span>
                  <span className={cn("text-[9px] mt-1", active ? "text-primary-foreground/80" : "text-muted-foreground/70")}>
                    {MONTH_NAMES[d.getMonth()]?.slice(0, 3)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SELECCIÓN DE HORARIOS DISPONIBLES */}
        <div className="space-y-3 border-t pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" /> 2. Horarios Disponibles
            </h3>
            {currentTime && (
              <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 text-xs font-semibold">
                Hora: {currentTime}
              </Badge>
            )}
          </div>

          {!currentDate ? (
            <div className="rounded-xl border border-dashed bg-muted/40 p-4 text-center">
              <p className="text-xs text-muted-foreground font-medium">
                👈 Selecciona un día arriba para habilitar y ver los turnos disponibles.
              </p>
            </div>
          ) : (
            <div className="space-y-2 animate-in fade-in duration-300">
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {timeSlots.map((t) => {
                  const taken = unavailableSlots.includes(t);
                  const active = currentTime === t;

                  return (
                    <button
                      key={t}
                      type="button"
                      disabled={taken}
                      onClick={() => handleTimeChange(t)}
                      className={cn(
                        "rounded-xl border py-2.5 px-2 text-xs font-bold transition-all duration-200 select-none",
                        taken
                          ? "cursor-not-allowed opacity-30 line-through bg-muted text-muted-foreground border-transparent"
                          : "cursor-pointer",
                        active
                          ? "border-primary bg-primary text-primary-foreground font-extrabold shadow-md ring-2 ring-primary/40 scale-105"
                          : taken
                          ? ""
                          : "border-border/80 bg-card hover:border-primary hover:bg-primary/10 hover:text-primary"
                      )}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-muted-foreground pt-1">
                Turnos médicos de 30 a 45 minutos. Confirmación inmediata.
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
