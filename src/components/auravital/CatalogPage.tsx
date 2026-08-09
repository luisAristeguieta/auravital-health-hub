import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Check,
  Flame,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { initialProducts, currency } from "@/data/auravital";
import { useCart } from "@/context/CartContext";

interface CatalogPageProps {
  onGoToBooking: (specialtyId?: string) => void;
}

export function CatalogPage({ onGoToBooking }: CatalogPageProps) {
  const { addToCart } = useCart();

  return (
    <div className="space-y-16 pb-16 animate-in fade-in duration-300">
      {/* 1. HERO HEADER DEL CATÁLOGO */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-neutral-900 to-rose-950 p-8 sm:p-12 text-white shadow-2xl">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <Badge className="bg-primary/30 border border-primary/50 text-rose-200">
            <ShoppingBag className="mr-1.5 h-3.5 w-3.5" /> Equipamiento Médico y Salud Postural
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Catálogo Oficial de Equipos Terapéuticos AuraVital
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tecnología médica certificada para el cuidado de la columna vertebral, termoterapia con calor infrarrojo
            lejano y alivio duradero de dolores musculares y articulares.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-rose-400" />
              <span>Garantía Oficial 1 Año</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-amber-400" />
              <span>Envíos a todo Ecuador</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-rose-400" />
              <span>Piedras de Jade Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-emerald-400" />
              <span>Asesoría Médica</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHOWCASE DETALLADO: CAMILLA TERAPÉUTICA TÉRMICA DE JADE */}
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-r from-white via-slate-50/90 to-slate-100/80 dark:from-card dark:via-card dark:to-muted/30 shadow-md">
        {/* Imagen en perspectiva de la camilla clínica en el fondo */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-contain bg-right bg-no-repeat opacity-25 lg:opacity-35 dark:opacity-20 pointer-events-none transition-all duration-700"
          style={{
            backgroundImage: `url('/products/showcase-jade-bed.png')`,
          }}
        />

        {/* Gradiente sutil para garantizar lectura perfecta */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent dark:from-background dark:via-background/90 dark:to-transparent lg:w-3/5 pointer-events-none" />

        {/* Contenido principal del showcase */}
        <div className="relative z-10 p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1 text-xs">
                Equipo Médico Insignia
              </Badge>

              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl leading-tight">
                Camilla Terapéutica Térmica de Jade
              </h2>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                El dispositivo médico terapéutico más completo para el alivio y alineación de la columna vertebral.
                Combina masaje guiado por rieles anatómicos, calor de piedras de jade y extensión progresiva
                para liberar la presión en los discos intervertebrales.
              </p>

              <div className="space-y-3">
                {[
                  "Escaneo automático de columna con 6 niveles de intensidad personalizables",
                  "12 programas terapéuticos: relajación, estiramiento, modo lumbar y sueño",
                  "Proyector externo de 9 esferas de jade para abdomen, hombros y articulaciones",
                  "Rango térmico de 30°C a 65°C con emisión de calor infrarrojo profundo",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <div className="space-y-0.5">
                  <span className="text-xs text-muted-foreground font-medium">Precio el Equipo Completo:</span>
                  <p className="text-2xl sm:text-3xl font-extrabold text-foreground">{currency(1450)}</p>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      const firstProduct = initialProducts[0];
                      if (firstProduct) addToCart(firstProduct);
                    }}
                    className="rounded-xl bg-primary px-5 py-5 font-bold shadow-md hover:bg-primary/90 text-white text-xs sm:text-sm"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Añadir al Carrito
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => onGoToBooking("fisio")}
                    className="rounded-xl px-5 py-5 font-semibold text-xs sm:text-sm bg-white/80 dark:bg-card/80 hover:bg-white"
                  >
                    Probar en Consulta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Mapa de Puntos de Presión */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl border bg-white/95 dark:bg-card/95 backdrop-blur-md p-6 shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h4 className="font-bold text-foreground text-sm sm:text-base">Mapa de Puntos de Presión</h4>
                    <p className="text-xs text-muted-foreground">Distribución de rodillos térmicos de jade</p>
                  </div>
                  <Badge variant="outline" className="border-emerald-500 text-emerald-600 dark:text-emerald-400 text-xs font-semibold bg-emerald-50/50 dark:bg-emerald-950/30">
                    Alineación Vértebra por Vértebra
                  </Badge>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-muted/60 p-3 text-xs border border-border/40">
                    <span className="font-semibold text-foreground">1. Región Cervical (C1 - C7):</span>
                    <span className="text-muted-foreground">Alivio de migraña y contractura de cuello</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-muted/60 p-3 text-xs border border-border/40">
                    <span className="font-semibold text-foreground">2. Región Dorsal / Torácica (T1 - T12):</span>
                    <span className="text-muted-foreground">Corrección postural y expansión torácica</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-muted/60 p-3 text-xs border border-border/40">
                    <span className="font-semibold text-foreground">3. Región Lumbar (L1 - L5):</span>
                    <span className="text-muted-foreground">Descompresión de hernias, ciática y lumbago</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-muted/60 p-3 text-xs border border-border/40">
                    <span className="font-semibold text-foreground">4. Región Sacro-Coxígea:</span>
                    <span className="text-muted-foreground">Drenaje linfático y relajación de cadera</span>
                  </div>
                </div>

                <div className="rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/60 dark:bg-rose-950/20 p-3 text-center">
                  <p className="text-xs font-medium text-rose-800 dark:text-rose-300">
                    💡 Disponible para sesiones diarias en nuestras clínicas o para entrega e instalación en tu domicilio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GRID COMPLETO DE PRODUCTOS TERAPÉUTICOS */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-widest text-[11px] font-bold">
              Tienda Médica AuraVital
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
              Todos los Equipos Terapéuticos
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl">
              Equipos de grado médico diseñados para el hogar y clínicas de rehabilitación.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {initialProducts.map((prod) => (
            <Card
              key={prod.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-xl transition-all duration-300 h-full"
            >
              {/* Imagen Fotográfica en la Cabecera con fondo limpio de estudio */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-50/80 dark:bg-neutral-900/80 p-4 flex items-center justify-center border-b border-border/50">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0";
                  }}
                />
                <Badge className="absolute top-3 right-3 bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 font-bold text-[10px] shadow-xs border border-rose-200/80 dark:border-rose-800/50">
                  Stock: {prod.stock} disp.
                </Badge>
              </div>

              <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>
                </div>

                <div className="space-y-2 border-t pt-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-muted-foreground font-medium">Precio Oficial:</span>
                    <p className="text-2xl font-black text-foreground">{currency(prod.price)}</p>
                  </div>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    ✓ Garantía oficial 1 año y manual clínico
                  </p>
                </div>

                {/* Botón de acción alineado en la parte inferior */}
                <div className="pt-2 mt-auto">
                  <Button
                    onClick={() => addToCart(prod)}
                    className="w-full rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 text-xs shadow-sm h-9.5"
                  >
                    <ShoppingCart className="mr-1.5 h-3.5 w-3.5" />
                    Añadir al Carrito
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. BANNER DE CONTACTO Y ASESORÍA TÉCNICA */}
      <section className="rounded-3xl bg-muted/50 border p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-foreground">¿Necesitas asesoría sobre qué equipo es el ideal para ti?</h3>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Nuestros fisioterapeutas y especialistas te orientan según tu diagnóstico médico (lumbalgia, hernias, mala circulación o postura).
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Button
            onClick={() => onGoToBooking("fisio")}
            className="rounded-xl bg-primary text-primary-foreground font-bold px-6"
          >
            Agendar Evaluación Médica
          </Button>
        </div>
      </section>
    </div>
  );
}
