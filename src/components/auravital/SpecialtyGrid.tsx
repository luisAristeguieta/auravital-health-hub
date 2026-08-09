import { Check } from "lucide-react";
import { currency, specialties, type Specialty } from "@/data/auravital";
import { cn } from "@/lib/utils";

const specialtyImages: Record<string, string> = {
  cardio: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80",
  pediatria: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
  derma: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
  trauma: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80",
  neuro: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80",
  gineco: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
  general: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=600&q=80",
  oftalmo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  fisio: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
  nutri: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
};

export function SpecialtyGrid({
  selected,
  selectedId,
  onSelect,
}: {
  selected?: Specialty | undefined;
  selectedId?: string | undefined;
  onSelect: (s: Specialty) => void;
}) {
  const currentSelectedId = selectedId || selected?.id;

  return (
    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-5">
      {specialties.map((s) => {
        const active = currentSelectedId === s.id;
        const imgUrl =
          specialtyImages[s.id] ||
          "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=600&q=80";

        return (
          <div
            key={s.id}
            role="button"
            tabIndex={0}
            onClick={() => onSelect(s)}
            onKeyDown={(e) => e.key === "Enter" && onSelect(s)}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-2xl border text-left transition-all duration-300 cursor-pointer bg-card shadow-sm select-none",
              active
                ? "border-primary ring-2 ring-primary/40 shadow-lg scale-[1.02] bg-primary/[0.03]"
                : "border-border/80 hover:-translate-y-1 hover:border-primary/80 hover:shadow-md"
            )}
          >
            {/* Top: Representative Medical Image + Price Tag */}
            <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={imgUrl}
                alt={s.name}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

              {/* Floating Price Tag */}
              <div className="absolute top-2.5 left-2.5 rounded-lg bg-background/95 px-2 py-0.5 text-xs font-black text-primary shadow-md backdrop-blur-md border border-border/60">
                {currency(s.price)}
              </div>

              {/* Active Selection Checkmark Badge */}
              {active && (
                <div className="absolute top-2.5 right-2.5 grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground shadow-md animate-in zoom-in-75 duration-200">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
              )}
            </div>

            {/* Bottom: Title, Description & Price */}
            <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-4">
              <div>
                <h4
                  className={cn(
                    "text-xs sm:text-sm font-bold transition-colors line-clamp-1",
                    active ? "text-primary font-extrabold" : "text-foreground group-hover:text-primary"
                  )}
                >
                  {s.name}
                </h4>
                <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2.5">
                <span className="text-xs font-extrabold text-primary">
                  {currency(s.price)}
                </span>

                {active ? (
                  <span className="text-[11px] font-bold text-primary flex items-center gap-1">
                    ✓ Elegido
                  </span>
                ) : (
                  <span className="text-[11px] font-semibold text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-0.5">
                    Seleccionar →
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
