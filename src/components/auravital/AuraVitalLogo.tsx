import React from "react";

interface AuraVitalIconProps {
  className?: string;
  idPrefix?: string;
}

export function AuraVitalIcon({
  className = "h-10 w-10",
  idPrefix = "auravital",
}: AuraVitalIconProps) {
  const bgGradId = `${idPrefix}-soft-bg`;

  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Fondo sutil translúcido: de melocotón muy pálido (#FFF5EE) a lavanda casi imperceptible (#F5F3FF) */}
        <linearGradient
          id={bgGradId}
          x1="0"
          y1="0"
          x2="44"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFF0EB" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#F3E8FF" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* Contenedor cuadrado con esquinas redondeadas estilo app icon */}
      <rect
        x="1"
        y="1"
        width="42"
        height="42"
        rx="12"
        fill={`url(#${bgGradId})`}
        stroke="#D00B2B"
        strokeWidth="1.2"
        strokeOpacity="0.25"
      />

      {/* Silueta de corazón estilizada en rojo carmesí sólido */}
      <path
        d="M 22 34 C 15.5 28.8 8 22.5 8 15.8 C 8 11.2 11.6 7.5 16.2 7.5 C 19 7.5 21.4 8.8 22 11 C 22.6 8.8 25 7.5 27.8 7.5 C 32.4 7.5 36 11.2 36 15.8 C 36 22.5 28.5 28.8 22 34 Z"
        stroke="#D00B2B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Onda / Pulso vital ECG dinámico en rojo carmesí sólido */}
      <path
        d="M 5 21.5 H 12.5 L 15.5 15.5 L 19.5 28.5 L 23.5 13 L 26.5 25.5 L 29.5 19.5 L 31.5 21.5 H 39"
        stroke="#D00B2B"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Puntos de pulso luminosos en rojo carmesí */}
      <circle cx="23.5" cy="13" r="1.5" fill="#D00B2B" />
      <circle cx="19.5" cy="28.5" r="1.5" fill="#D00B2B" />
    </svg>
  );
}

export function AuraVitalLogo({
  className = "",
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onNavigate}
      className={`flex min-w-0 items-center gap-3 text-left transition-all duration-200 hover:opacity-95 cursor-pointer group select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl ${className}`}
      title="Ir a la página principal de AuraVital"
    >
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <AuraVitalIcon className="h-10 w-10" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-lg font-bold leading-tight tracking-tight text-[#D00B2B]">
          AuraVital
        </p>
        <p className="truncate text-[11px] font-medium text-[#D00B2B]/85">
          Salud Terapéutica & Equipos Médicos
        </p>
      </div>
    </button>
  );
}
