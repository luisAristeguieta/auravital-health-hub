export type Specialty = {
  id: string;
  name: string;
  icon: string;
  price: number;
  description: string;
};

export type Doctor = {
  id: string;
  name: string;
  specialtyId: string;
  initials: string;
  rating: number;
  years: number;
  commission: number;
  active: boolean;
  email: string;
};

export type Patient = {
  id: string;
  firstName: string;
  lastName: string;
  cedula: string;
  age: number;
  record: string;
  phone: string;
  vitals: Vitals;
  notes: MedicalNote[];
};

export type Vitals = {
  height: number; // cm
  weight: number; // kg
  bloodPressure: string;
  heartRate: number;
  temperature: number;
  oxygen: number;
};

export type MedicalNote = {
  id: string;
  date: string;
  text: string;
};

export type Appointment = {
  id: string;
  patient: string;
  time: string;
  reason: string;
  status: "waiting" | "attended" | "absent";
};

export type EarningRow = {
  id: string;
  patient: string;
  datetime: string;
  amount: number;
  commissionPct: number;
  method: "Tarjeta" | "Transferencia";
  status: "Aprobado" | "Pendiente";
};

export type Transfer = {
  id: string;
  patient: string;
  concept: string;
  amount: number;
  date: string;
  bank: string;
  status: "pending" | "confirmed" | "rejected";
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  sold: number;
  cost: number;
};

export const specialties: Specialty[] = [
  { id: "cardio", name: "Cardiología", icon: "HeartPulse", price: 60, description: "Salud del corazón" },
  { id: "pediatria", name: "Pediatría", icon: "Baby", price: 45, description: "Cuidado infantil" },
  { id: "derma", name: "Dermatología", icon: "Sparkles", price: 50, description: "Piel y anexos" },
  { id: "trauma", name: "Traumatología", icon: "Bone", price: 55, description: "Huesos y articulaciones" },
  { id: "neuro", name: "Neurología", icon: "Brain", price: 70, description: "Sistema nervioso" },
  { id: "gineco", name: "Ginecología", icon: "Flower2", price: 55, description: "Salud femenina" },
  { id: "general", name: "Medicina General", icon: "Stethoscope", price: 30, description: "Atención primaria" },
  { id: "oftalmo", name: "Oftalmología", icon: "Eye", price: 48, description: "Salud visual" },
  { id: "fisio", name: "Fisioterapia / Salud Integral", icon: "Activity", price: 40, description: "Rehabilitación" },
  { id: "nutri", name: "Nutrición", icon: "Apple", price: 35, description: "Plan alimenticio" },
];

export const doctors: Doctor[] = [
  { id: "d1", name: "Dra. Valeria Ríos", specialtyId: "cardio", initials: "VR", rating: 4.9, years: 12, commission: 60, active: true, email: "v.rios@auravital.com" },
  { id: "d2", name: "Dr. Andrés Cabrera", specialtyId: "cardio", initials: "AC", rating: 4.7, years: 8, commission: 55, active: true, email: "a.cabrera@auravital.com" },
  { id: "d3", name: "Dra. Camila Sotomayor", specialtyId: "pediatria", initials: "CS", rating: 5, years: 15, commission: 65, active: true, email: "c.sotomayor@auravital.com" },
  { id: "d4", name: "Dr. Iván Peralta", specialtyId: "derma", initials: "IP", rating: 4.6, years: 9, commission: 50, active: true, email: "i.peralta@auravital.com" },
  { id: "d5", name: "Dr. Mateo Villacís", specialtyId: "trauma", initials: "MV", rating: 4.8, years: 11, commission: 58, active: true, email: "m.villacis@auravital.com" },
  { id: "d6", name: "Dra. Lucía Andrade", specialtyId: "neuro", initials: "LA", rating: 4.9, years: 14, commission: 62, active: true, email: "l.andrade@auravital.com" },
  { id: "d7", name: "Dra. Paula Guerrero", specialtyId: "gineco", initials: "PG", rating: 4.8, years: 10, commission: 60, active: true, email: "p.guerrero@auravital.com" },
  { id: "d8", name: "Dr. Jorge Molina", specialtyId: "general", initials: "JM", rating: 4.5, years: 6, commission: 45, active: true, email: "j.molina@auravital.com" },
  { id: "d9", name: "Dra. Renata Ponce", specialtyId: "oftalmo", initials: "RP", rating: 4.7, years: 7, commission: 52, active: false, email: "r.ponce@auravital.com" },
  { id: "d10", name: "Lcdo. Diego Suárez", specialtyId: "fisio", initials: "DS", rating: 4.9, years: 9, commission: 55, active: true, email: "d.suarez@auravital.com" },
  { id: "d11", name: "Lcda. Ana Terán", specialtyId: "nutri", initials: "AT", rating: 4.8, years: 5, commission: 50, active: true, email: "a.teran@auravital.com" },
];

export const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
];

export const unavailableSlots = ["09:30", "11:00", "15:00"];

export const initialPatients: Patient[] = [
  {
    id: "p1",
    firstName: "Juan",
    lastName: "Pérez",
    cedula: "1712345678",
    age: 42,
    record: "HC-00124",
    phone: "+593 99 812 4455",
    vitals: { height: 176, weight: 84, bloodPressure: "130/85", heartRate: 78, temperature: 36.7, oxygen: 97 },
    notes: [
      { id: "n1", date: "2026-07-14", text: "Paciente refiere fatiga leve al esfuerzo. Se solicita perfil lipídico." },
    ],
  },
  {
    id: "p2",
    firstName: "María",
    lastName: "López",
    cedula: "0923456781",
    age: 35,
    record: "HC-00125",
    phone: "+593 98 445 1120",
    vitals: { height: 162, weight: 58, bloodPressure: "110/70", heartRate: 68, temperature: 36.4, oxygen: 99 },
    notes: [
      { id: "n2", date: "2026-07-28", text: "Control post tratamiento. Evolución favorable, continúa fisioterapia." },
    ],
  },
  {
    id: "p3",
    firstName: "Carlos",
    lastName: "Mendoza",
    cedula: "1103456789",
    age: 57,
    record: "HC-00126",
    phone: "+593 96 220 7781",
    vitals: { height: 170, weight: 92, bloodPressure: "145/92", heartRate: 84, temperature: 36.9, oxygen: 95 },
    notes: [
      { id: "n3", date: "2026-08-01", text: "Hipertensión no controlada. Ajuste de dosis y dieta hiposódica." },
    ],
  },
];

export const initialAppointments: Appointment[] = [
  { id: "a1", patient: "Juan Pérez", time: "08:30", reason: "Control cardiológico", status: "attended" },
  { id: "a2", patient: "María López", time: "09:00", reason: "Chequeo general", status: "attended" },
  { id: "a3", patient: "Carlos Mendoza", time: "10:00", reason: "Presión arterial", status: "waiting" },
  { id: "a4", patient: "Sofía Ramírez", time: "10:30", reason: "Primera consulta", status: "waiting" },
  { id: "a5", patient: "Luis Ordóñez", time: "11:00", reason: "Resultados de laboratorio", status: "absent" },
  { id: "a6", patient: "Elena Cruz", time: "14:30", reason: "Seguimiento", status: "waiting" },
];

export const earnings: EarningRow[] = [
  { id: "e1", patient: "Juan Pérez", datetime: "09 Ago 2026 · 08:30", amount: 60, commissionPct: 60, method: "Tarjeta", status: "Aprobado" },
  { id: "e2", patient: "María López", datetime: "09 Ago 2026 · 09:00", amount: 45, commissionPct: 60, method: "Transferencia", status: "Pendiente" },
  { id: "e3", patient: "Carlos Mendoza", datetime: "08 Ago 2026 · 10:00", amount: 60, commissionPct: 60, method: "Tarjeta", status: "Aprobado" },
  { id: "e4", patient: "Sofía Ramírez", datetime: "07 Ago 2026 · 11:30", amount: 70, commissionPct: 60, method: "Tarjeta", status: "Aprobado" },
  { id: "e5", patient: "Luis Ordóñez", datetime: "05 Ago 2026 · 16:00", amount: 55, commissionPct: 60, method: "Transferencia", status: "Aprobado" },
  { id: "e6", patient: "Elena Cruz", datetime: "03 Ago 2026 · 14:30", amount: 50, commissionPct: 60, method: "Tarjeta", status: "Aprobado" },
];

export const initialTransfers: Transfer[] = [
  { id: "t1", patient: "María López", concept: "Consulta Pediatría", amount: 45, date: "09 Ago 2026", bank: "Banco Pichincha", status: "pending" },
  { id: "t2", patient: "Andrés Vaca", concept: "Cojín Térmico Cerámico", amount: 89, date: "08 Ago 2026", bank: "Produbanco", status: "pending" },
  { id: "t3", patient: "Luis Ordóñez", concept: "Consulta Traumatología", amount: 55, date: "05 Ago 2026", bank: "Banco Guayaquil", status: "confirmed" },
  { id: "t4", patient: "Nadia Ríos", concept: "Cinturón de Electroestimulación", amount: 120, date: "04 Ago 2026", bank: "Banco Pichincha", status: "rejected" },
];

export const initialProducts: Product[] = [
  { id: "pr1", name: "Camilla Terapéutica Térmica", description: "Camilla de jade con terapia de calor infrarrojo", price: 1450, stock: 6, sold: 9, cost: 980 },
  { id: "pr2", name: "Cinturón de Electroestimulación", description: "EMS lumbar de 6 modos e intensidad graduable", price: 120, stock: 34, sold: 62, cost: 68 },
  { id: "pr3", name: "Masajeador Térmico Espinal", description: "Masaje shiatsu con calor para columna cervical", price: 210, stock: 18, sold: 41, cost: 128 },
  { id: "pr4", name: "Cojín Térmico Cerámico", description: "Cojín postural con piedras cerámicas de tourmalina", price: 89, stock: 52, sold: 87, cost: 44 },
];

export const bankAccounts = [
  { bank: "Banco Pichincha", type: "Cuenta Corriente", number: "2100 4455 82", holder: "AuraVital Salud S.A.", ruc: "1792845560001" },
  { bank: "Produbanco", type: "Cuenta de Ahorros", number: "1204 9987 33", holder: "AuraVital Salud S.A.", ruc: "1792845560001" },
];

export const currency = (n: number) =>
  new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(n);

export const bmi = (weightKg: number, heightCm: number) => {
  if (!weightKg || !heightCm) return 0;
  return +(weightKg / Math.pow(heightCm / 100, 2)).toFixed(1);
};

export const bmiLabel = (value: number) => {
  if (value < 18.5) return "Bajo peso";
  if (value < 25) return "Normal";
  if (value < 30) return "Sobrepeso";
  return "Obesidad";
};
