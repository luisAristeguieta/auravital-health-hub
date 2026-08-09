# 🩺 AuraVital — CRM Médico & E-Commerce de Salud Terapéutica

> Plataforma integral de gestión médica y comercio electrónico diseñada para clínicas de salud integral, tratamientos de medicina alternativa y especialidades médicas.

---

## 🎓 Propósito Académico & Prototipado

Este proyecto ha sido desarrollado con **fines estrictamente académicos, de demostración técnica y aprendizaje tecnológico**. 

* **Demostración de Arquitectura Software:** Sirve como un prototipo funcional para la validación de experiencia de usuario (UX/UI), modelado de datos de salud y flujos de trabajo en sistemas médicos y e-commerce.
* **Datos Simulados (Mock Data):** Toda la información de pacientes, historias clínicas, diagnósticos, valores de laboratorio y registros financieros son completamente ficticios y utilizados únicamente para simular escenarios reales de un entorno clínico.
* **Exención de Responsabilidad:** No está destinado a reemplazar sistemas de gestión médica reales ni a ser utilizado con datos médicos confidenciales sin la debida integración de normativas de seguridad (HIPAA / GDPR).

---

## 🌟 Características Principales

### 🌐 1. Vista Pública & Landing Page
- **Hero Section Dinámico:** Presentación de valor con imágenes médicas y navegación limpia.
- **La Ciencia Detrás:** Explicación técnica de tratamientos (*Termoterapia, Escaneo Espinal, Acupresión y EMS*) con imágenes de referencia.
- **Teaser de Catálogo:** Resumen visual de equipos médicos con enlace directo a la tienda.
- **Agenda en Línea:** Catálogo fotográfico de 10 especialidades médicas con agendamiento directo.
- **Prueba Social:** Sección de testimonios reales con fotografía, padecimiento y calificación.

---

### 🛒 2. E-Commerce & Catálogo Terapéutico
- **Vista Dedicada (`/catalogo`):** Catálogo de productos de grado médico (Camilla Térmica de Jade, Cinturón EMS, Masajeador Espinal, Cojín Cerámico).
- **Ficha Técnica:** Vista detallada de la Camilla Térmica con mapa de puntos de presión y rangos térmicos.
- **Carrito de Compras:** Sistema lateral (*Drawer*) con control de unidades, totales y pasarela de pago simulada.

---

### 👤 3. Portal del Paciente / Cliente
- **Historial de Citas:** Pestaña interactiva con estado de citas (*Próximas, Atendidas, Canceladas y Pendientes de Verificación*).
- **Wizard de Agendamiento (5 pasos):**
  1. Selección de Especialidad Médica con apoyo visual.
  2. Elección de Doctor (2-3 médicos disponibles) y disponibilidad horaria.
  3. Formulario de Datos Personales.
  4. Pasarela de Pago (Tarjeta / Comprobante de Transferencia Bancaria).
  5. Confirmación con opción de sincronización con Google Calendar.

---

### 🩺 4. Panel del Doctor
- **Agenda del Día:** Vista inicial de atención con cambio de estados en tiempo real (*En Espera, Atendido, No Asistió*).
- **Calendario en Cuadrícula:** Conmutador de vista para planificación por **Día**, **Semana (Parrilla Horaria)** y **Mes**.
- **Historia Clínica Digital:**
  - Registro completo de Signos Vitales (PA, FC, Temp, SpO2) e IMC calculado automáticamente.
  - Expediente previo detallando el médico tratante.
  - **Módulo de Laboratorio:** Resultados con indicadores de rango (*Normal vs Alterado/Elevado*) y emisor de órdenes de examen.
- **Registro Rápido de Consultorio:** Modal de triage para dar de alta pacientes con signos vitales en recepción.

---

### 🛡️ 5. Control General (Super Administrador)
- **Dashboard Ejecutivo:** Métricas KPI globales e indicadores financieros.
- **Detalle Contable Clicable:**
  - Desglose modal de **Ingresos por Citas** (Comisión Clínica vs Doctor).
  - Desglose modal de **Ventas de Productos** (Historial de compras y pedidos).
- **Módulo de Mantenimiento:**
  - Alta y edición de Doctores, fotos, comisiones porcentuales y asignación de **Horarios/Turnos de Atención**.
  - Aprobación/Rechazo de transferencias bancarias de pacientes.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React + TypeScript (Vite)
- **UI & Estilos:** Tailwind CSS + Radix UI / shadcn/ui
- **Iconos & Gráficos:** Lucide React + Recharts
- **Router & Estado:** React Router / TanStack Router + AuthContext

---

## 🚀 Instalación y Configuración Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/auravital-crm.git](https://github.com/tu-usuario/auravital-crm.git)
   cd auravital-crm