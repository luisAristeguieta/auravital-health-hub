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
  phone?: string;
  avatarUrl?: string;
  daysAvailable?: string[];
  startTime?: string;
  endTime?: string;
  slotDuration?: number;
};

export type MedicalNote = {
  id: string;
  date: string;
  text: string;
  doctorName?: string;
  doctorSpecialty?: string;
};

export type LabResult = {
  id: string;
  testName: string;
  result: string;
  reference: string;
  status: "normal" | "abnormal";
  date: string;
};

export type LabOrder = {
  id: string;
  date: string;
  doctor: string;
  tests: string[];
  notes: string;
  status: "sent" | "completed" | "pending";
};

export type Vitals = {
  height: number;
  weight: number;
  bloodPressure: string;
  heartRate: number;
  temperature: number;
  oxygen: number;
};

export type Patient = {
  id: string;
  firstName: string;
  lastName: string;
  cedula: string;
  age: number;
  record: string;
  phone: string;
  email?: string;
  address?: string;
  active?: boolean;
  vitals: Vitals;
  notes: MedicalNote[];
  labResults?: LabResult[];
  labOrders?: LabOrder[];
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
  image: string;
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
  // 1. CARDIOLOGÍA
  { id: "d1", name: "Dra. Valeria Ríos", specialtyId: "cardio", initials: "VR", rating: 4.9, years: 12, commission: 60, active: true, email: "v.rios@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80" },
  { id: "d2", name: "Dr. Andrés Cabrera", specialtyId: "cardio", initials: "AC", rating: 4.7, years: 8, commission: 55, active: true, email: "a.cabrera@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80" },
  { id: "d12", name: "Dr. Roberto Silva", specialtyId: "cardio", initials: "RS", rating: 4.9, years: 14, commission: 60, active: true, email: "r.silva@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80" },

  // 2. PEDIATRÍA
  { id: "d3", name: "Dra. Camila Sotomayor", specialtyId: "pediatria", initials: "CS", rating: 5.0, years: 15, commission: 65, active: true, email: "c.sotomayor@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1594824813628-984b9015c9a4?auto=format&fit=crop&w=300&q=80" },
  { id: "d13", name: "Dr. Gabriel Paredes", specialtyId: "pediatria", initials: "GP", rating: 4.8, years: 9, commission: 55, active: true, email: "g.paredes@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80" },
  { id: "d14", name: "Dra. Elena Vásconez", specialtyId: "pediatria", initials: "EV", rating: 4.8, years: 7, commission: 50, active: true, email: "e.vasconez@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" },

  // 3. DERMATOLOGÍA
  { id: "d4", name: "Dr. Iván Peralta", specialtyId: "derma", initials: "IP", rating: 4.6, years: 9, commission: 50, active: true, email: "i.peralta@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80" },
  { id: "d15", name: "Dra. Mariana Carrera", specialtyId: "derma", initials: "MC", rating: 4.9, years: 11, commission: 58, active: true, email: "m.carrera@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80" },
  { id: "d16", name: "Dr. Santiago Ortiz", specialtyId: "derma", initials: "SO", rating: 4.7, years: 6, commission: 48, active: true, email: "s.ortiz@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" },

  // 4. TRAUMATOLOGÍA
  { id: "d5", name: "Dr. Mateo Villacís", specialtyId: "trauma", initials: "MV", rating: 4.8, years: 11, commission: 58, active: true, email: "m.villacis@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=300&q=80" },
  { id: "d17", name: "Dr. Carlos Echeverría", specialtyId: "trauma", initials: "CE", rating: 4.9, years: 13, commission: 60, active: true, email: "c.echeverria@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80" },
  { id: "d18", name: "Dra. Daniela Flores", specialtyId: "trauma", initials: "DF", rating: 4.8, years: 8, commission: 52, active: true, email: "d.flores@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80" },

  // 5. NEUROLOGÍA
  { id: "d6", name: "Dra. Lucía Andrade", specialtyId: "neuro", initials: "LA", rating: 4.9, years: 14, commission: 62, active: true, email: "l.andrade@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=300&q=80" },
  { id: "d19", name: "Dr. Fernando Viteri", specialtyId: "neuro", initials: "FV", rating: 4.8, years: 12, commission: 60, active: true, email: "f.viteri@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },

  // 6. GINECOLOGÍA
  { id: "d7", name: "Dra. Paula Guerrero", specialtyId: "gineco", initials: "PG", rating: 4.8, years: 10, commission: 60, active: true, email: "p.guerrero@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80" },
  { id: "d20", name: "Dra. Patricia Cárdenas", specialtyId: "gineco", initials: "PC", rating: 4.9, years: 13, commission: 62, active: true, email: "p.cardenas@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80" },
  { id: "d21", name: "Dr. Daniel Aguirre", specialtyId: "gineco", initials: "DA", rating: 4.7, years: 8, commission: 52, active: true, email: "d.aguirre@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },

  // 7. MEDICINA GENERAL
  { id: "d8", name: "Dr. Jorge Molina", specialtyId: "general", initials: "JM", rating: 4.8, years: 6, commission: 45, active: true, email: "j.molina@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80" },
  { id: "d22", name: "Dra. Andrea Morales", specialtyId: "general", initials: "AM", rating: 4.9, years: 9, commission: 50, active: true, email: "a.morales@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1594824813628-984b9015c9a4?auto=format&fit=crop&w=300&q=80" },
  { id: "d23", name: "Dr. Xavier Noboa", specialtyId: "general", initials: "XN", rating: 4.7, years: 5, commission: 45, active: true, email: "x.noboa@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80" },

  // 8. OFTALMOLOGÍA
  { id: "d9", name: "Dra. Renata Ponce", specialtyId: "oftalmo", initials: "RP", rating: 4.8, years: 7, commission: 52, active: true, email: "r.ponce@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" },
  { id: "d24", name: "Dr. Emilio Alarcón", specialtyId: "oftalmo", initials: "EA", rating: 4.9, years: 10, commission: 58, active: true, email: "e.alarcon@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80" },

  // 9. FISIOTERAPIA / SALUD INTEGRAL
  { id: "d10", name: "Lcdo. Diego Suárez", specialtyId: "fisio", initials: "DS", rating: 4.9, years: 9, commission: 55, active: true, email: "d.suarez@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80" },
  { id: "d25", name: "Lcda. Karla Salazar", specialtyId: "fisio", initials: "KS", rating: 4.8, years: 7, commission: 50, active: true, email: "k.salazar@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80" },
  { id: "d26", name: "Lcdo. Martín Cevallos", specialtyId: "fisio", initials: "MC", rating: 4.9, years: 8, commission: 52, active: true, email: "m.cevallos@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80" },

  // 10. NUTRICIÓN
  { id: "d11", name: "Lcda. Ana Terán", specialtyId: "nutri", initials: "AT", rating: 4.8, years: 5, commission: 50, active: true, email: "a.teran@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80" },
  { id: "d27", name: "Dr. Mateo Benítez", specialtyId: "nutri", initials: "MB", rating: 4.9, years: 8, commission: 55, active: true, email: "m.benitez@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=300&q=80" },
  { id: "d28", name: "Dra. Sofía Morales", specialtyId: "nutri", initials: "SM", rating: 4.7, years: 6, commission: 50, active: true, email: "s.morales@auravital.com", avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80" },
];

export const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
];

export const unavailableSlots = ["09:30", "14:00"];

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
      {
        id: "n1",
        date: "2026-07-14",
        text: "Paciente refiere fatiga leve al esfuerzo. Se solicita perfil lipídico y monitoreo de presión.",
        doctorName: "Dra. Valeria Ríos",
        doctorSpecialty: "Cardiología",
      },
      {
        id: "n1b",
        date: "2026-06-25",
        text: "Control rutinario. Presión arterial controlada con hábitos saludables y ejercicio aeróbico.",
        doctorName: "Dr. Roberto Silva",
        doctorSpecialty: "Cardiología",
      },
    ],
    labResults: [
      { id: "lr1", testName: "Hemograma Completo", result: "Leucocitos 6.8 x10³/µL", reference: "4.5 - 11.0 x10³/µL", status: "normal", date: "2026-07-16" },
      { id: "lr2", testName: "Glucosa en Ayunas", result: "92 mg/dL", reference: "70 - 100 mg/dL", status: "normal", date: "2026-07-16" },
      { id: "lr3", testName: "Colesterol Total", result: "240 mg/dL (ELEVADO)", reference: "< 200 mg/dL", status: "abnormal", date: "2026-07-16" },
      { id: "lr4", testName: "Triglicéridos", result: "185 mg/dL (ELEVADO)", reference: "< 150 mg/dL", status: "abnormal", date: "2026-07-16" },
      { id: "lr5", testName: "Colesterol LDL", result: "158 mg/dL (ELEVADO)", reference: "< 100 mg/dL", status: "abnormal", date: "2026-07-16" },
      { id: "lr6", testName: "Colesterol HDL", result: "45 mg/dL", reference: "> 40 mg/dL", status: "normal", date: "2026-07-16" },
      { id: "lr7", testName: "Ácido Úrico", result: "5.4 mg/dL", reference: "3.4 - 7.0 mg/dL", status: "normal", date: "2026-07-16" },
    ],
    labOrders: [
      {
        id: "lo1",
        date: "2026-07-14",
        doctor: "Dra. Valeria Ríos (Cardiología)",
        tests: ["Perfil Lipídico", "Glucosa en Ayunas", "Hemograma Completo"],
        notes: "Descarte de dislipidemia mixta y riesgo aterogénico.",
        status: "completed",
      },
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
      {
        id: "n2",
        date: "2026-07-28",
        text: "Control post tratamiento. Evolución favorable, continúa fisioterapia lumbar.",
        doctorName: "Lcdo. Diego Suárez",
        doctorSpecialty: "Fisioterapia",
      },
    ],
    labResults: [
      { id: "lr8", testName: "Biometría Hemática", result: "Hb 13.5 g/dL", reference: "12.0 - 15.5 g/dL", status: "normal", date: "2026-07-20" },
      { id: "lr9", testName: "Perfil Tiroideo TSH", result: "2.1 µUI/mL", reference: "0.4 - 4.0 µUI/mL", status: "normal", date: "2026-07-20" },
      { id: "lr10", testName: "Glucosa en Ayunas", result: "88 mg/dL", reference: "70 - 100 mg/dL", status: "normal", date: "2026-07-20" },
      { id: "lr11", testName: "Colesterol Total", result: "175 mg/dL", reference: "< 200 mg/dL", status: "normal", date: "2026-07-20" },
    ],
    labOrders: [],
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
      {
        id: "n3",
        date: "2026-08-01",
        text: "Hipertensión estadio 1 no controlada. Ajuste de dosis y dieta hiposódica estricta.",
        doctorName: "Dra. Valeria Ríos",
        doctorSpecialty: "Cardiología",
      },
    ],
    labResults: [
      { id: "lr12", testName: "Glucosa en Ayunas", result: "128 mg/dL (ELEVADO)", reference: "70 - 100 mg/dL", status: "abnormal", date: "2026-08-02" },
      { id: "lr13", testName: "Hemoglobina Glicosilada (HbA1c)", result: "7.2 % (ELEVADO)", reference: "< 5.7 %", status: "abnormal", date: "2026-08-02" },
      { id: "lr14", testName: "Creatinina Sérica", result: "1.1 mg/dL", reference: "0.7 - 1.3 mg/dL", status: "normal", date: "2026-08-02" },
      { id: "lr15", testName: "Electrólitos Séricos", result: "Na: 140 / K: 4.2 mEq/L", reference: "Na: 135-145 / K: 3.5-5.0", status: "normal", date: "2026-08-02" },
    ],
    labOrders: [
      {
        id: "lo2",
        date: "2026-08-01",
        doctor: "Dra. Valeria Ríos (Cardiología)",
        tests: ["Química Sanguínea", "HbA1c", "Electrólitos"],
        notes: "Evaluación metabólica integral por descontrol tensional.",
        status: "completed",
      },
    ],
  },
  {
    id: "p4",
    firstName: "Sofía",
    lastName: "Ramírez",
    cedula: "1720984532",
    age: 29,
    record: "HC-00127",
    phone: "+593 97 112 3344",
    vitals: { height: 165, weight: 62, bloodPressure: "115/75", heartRate: 75, temperature: 36.6, oxygen: 98 },
    notes: [
      { id: "n4", date: "2026-08-04", text: "Consulta por episodios de taquicardia situacional. Se solicita Holter de 24h." },
    ],
  },
  {
    id: "p5",
    firstName: "Elena",
    lastName: "Cruz",
    cedula: "1709845123",
    age: 48,
    record: "HC-00129",
    phone: "+593 99 443 2210",
    vitals: { height: 160, weight: 68, bloodPressure: "125/80", heartRate: 70, temperature: 36.5, oxygen: 98 },
    notes: [
      { id: "n5", date: "2026-07-20", text: "Seguimiento cardiológico satisfactorio. Buena tolerancia a la terapia." },
    ],
  },
  {
    id: "p6",
    firstName: "Roberto",
    lastName: "Noboa",
    cedula: "1711442233",
    age: 52,
    record: "HC-00130",
    phone: "+593 99 900 1122",
    vitals: { height: 178, weight: 81, bloodPressure: "120/80", heartRate: 64, temperature: 36.4, oxygen: 99 },
    notes: [
      { id: "n6", date: "2026-07-15", text: "Electrocardiograma de esfuerzo. Respuesta cronotrópica adecuada." },
    ],
  },
  {
    id: "p7",
    firstName: "Patricia",
    lastName: "Díaz",
    cedula: "0912445566",
    age: 61,
    record: "HC-00131",
    phone: "+593 98 776 5544",
    vitals: { height: 158, weight: 70, bloodPressure: "135/85", heartRate: 74, temperature: 36.7, oxygen: 96 },
    notes: [
      { id: "n7", date: "2026-08-02", text: "Control de extrasístoles ventriculares benignas. Mantener hidratación." },
    ],
  },
  {
    id: "p8",
    firstName: "Fernando",
    lastName: "Vega",
    cedula: "1802334455",
    age: 45,
    record: "HC-00132",
    phone: "+593 99 123 9988",
    vitals: { height: 174, weight: 79, bloodPressure: "128/82", heartRate: 72, temperature: 36.5, oxygen: 98 },
    notes: [
      { id: "n8", date: "2026-07-30", text: "Ecocardiograma Doppler: función ventricular conservada." },
    ],
  },
  {
    id: "p9",
    firstName: "Diana",
    lastName: "Ortiz",
    cedula: "1723445566",
    age: 38,
    record: "HC-00133",
    phone: "+593 95 334 2211",
    vitals: { height: 168, weight: 64, bloodPressure: "118/76", heartRate: 69, temperature: 36.5, oxygen: 99 },
    notes: [
      { id: "n9", date: "2026-08-05", text: "Revisión de monitoreo ambulatorio de presión arterial (MAPA)." },
    ],
  },
  {
    id: "p10",
    firstName: "Gabriel",
    lastName: "Castillo",
    cedula: "1715667788",
    age: 50,
    record: "HC-00134",
    phone: "+593 97 889 0011",
    vitals: { height: 172, weight: 86, bloodPressure: "140/90", heartRate: 80, temperature: 36.8, oxygen: 96 },
    notes: [
      { id: "n10", date: "2026-07-10", text: "Valoración de riesgo cardiovascular preoperatorio: Riesgo habitual." },
    ],
  },
  {
    id: "p11",
    firstName: "Carmen",
    lastName: "Salazar",
    cedula: "1104556677",
    age: 66,
    record: "HC-00135",
    phone: "+593 98 221 4455",
    vitals: { height: 155, weight: 65, bloodPressure: "132/84", heartRate: 70, temperature: 36.6, oxygen: 97 },
    notes: [
      { id: "n11", date: "2026-08-01", text: "Control de hipertensión arterial esencial. Ajuste de antihipertensivo." },
    ],
  },
  {
    id: "p12",
    firstName: "Jorge",
    lastName: "Molina",
    cedula: "1708990011",
    age: 40,
    record: "HC-00136",
    phone: "+593 99 554 3322",
    vitals: { height: 180, weight: 82, bloodPressure: "122/78", heartRate: 66, temperature: 36.4, oxygen: 99 },
    notes: [
      { id: "n12", date: "2026-07-22", text: "Interconsulta médica de chequeo preventivo general." },
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
  {
    id: "pr1",
    name: "Camilla Terapéutica Térmica",
    description: "Camilla de jade con terapia de calor infrarrojo y alineación espinal automática",
    price: 1450,
    stock: 6,
    sold: 9,
    cost: 980,
    image: "/products/jade-thermal-bed.png",
  },
  {
    id: "pr2",
    name: "Cinturón de Electroestimulación",
    description: "EMS lumbar de 6 modos terapéuticos e intensidad graduable para alivio focalizado",
    price: 120,
    stock: 34,
    sold: 62,
    cost: 68,
    image: "/products/ems-lumbar-belt.png",
  },
  {
    id: "pr3",
    name: "Masajeador Térmico Espinal",
    description: "Masaje shiatsu con calor infrarrojo para descontracturar la columna cervical y dorsal",
    price: 210,
    stock: 18,
    sold: 41,
    cost: 128,
    image: "/products/spinal-thermal-massager.png",
  },
  {
    id: "pr4",
    name: "Cojín Térmico Cerámico",
    description: "Cojín ergonómico con piedras cerámicas de tourmalina para relajación y circulación",
    price: 89,
    stock: 52,
    sold: 87,
    cost: 44,
    image: "/products/ceramic-thermal-cushion.png",
  },
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
