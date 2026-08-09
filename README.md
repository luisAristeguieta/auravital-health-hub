# AuraVital Health Hub

Crea un prototipo funcional en React + TypeScript usando Vite, Tailwind CSS y shadcn/ui. 

Utiliza únicamente datos quemados (hardcoded), sin APIs ni backend.

Configura la identidad visual e institucional de la plataforma con la marca "AuraVital" utilizando la siguiente paleta de colores extraída directamente del branding institucional:

- Rojo Carmesí (Acentos principales / Botones CTA / Badges): #D00B2B

- Gris Carbón (Texto principal / Encabezados / Navegación): #333333

- Gris Claro Neutro (Fondos de tarjetas / Separadores): #F5F5F5

- Blanco Puro (Fondo de modales y contenedores principales): #FFFFFF

Prioriza un diseño clínico, moderno, elegante, responsive, sin degradados estridentes y con componentes reutilizables.

Diseña un sistema integral de "CRM y Gestión Médica con E-Commerce de Salud Terapéutica" llamado "AuraVital". La plataforma debe contar con un selector de roles en la parte superior para cambiar entre vistas: [Vista Paciente], [Vista Doctor] y [Vista Súper Admin].

---

### 1. VISTA PACIENTE (Portal de Agendamiento)

Permite al paciente agendar citas médicas siguiendo este flujo interactivo:

- Pasos de Agendamiento:

  1. Selección de Especialidad: Muestra al menos 10 especialidades médicas (Cardiología, Pediatría, Dermatología, Traumatología, Neurología, Ginecología, Medicina General, Oftalmología, Fisioterapia / Salud Integral y Nutrición).

  2. Selección de Doctor, Fecha y Hora: Al elegir especialidad, despliega un calendario interactivo con días disponibles, la lista de doctores asignados a esa rama con su foto/avatar, y bloques de horarios seleccionables.

  3. Datos de Contacto y Sincronización: Solicita Nombre, Cédula, Correo Electrónico y Número de WhatsApp. Incluye un switch/checkbox interactivo: "Sincronizar cita automáticamente con Google Calendar".

  4. Módulo de Pago:

     - Opción A: Botón de Pago en línea (Simulación de tarjeta de crédito/débito).

     - Opción B: Transferencia Bancaria (Muestra los datos bancarios y permite adjuntar/simular la subida del comprobante).

  5. Confirmación: Estado del pago ("Pendiente de verificación" para transferencias / "Aprobado" para tarjeta).

---

### 2. VISTA DOCTOR (Gestión Clínica, Agenda y Mis Ganancias)

Módulo de trabajo para el personal médico con las siguientes secciones:

- Panel de Control & Resumen Financiero del Doctor:

  - Tarjetas de Ganancias: "Ganancias del Día", "Ganancias de la Semana", "Ganancias del Mes" y "Comisiones por Consultas Atendidas".

  - Desglose de Ingresos: Tabla con el historial de pacientes atendidos, fecha/hora, valor cobrado por consulta, porcentaje/comisión correspondiente al doctor y estado del pago (Tarjeta vs Transferencia).

- Registro Rápido de Paciente: Formulario modal para dar de alta a un paciente en el sistema.

- Búsqueda Avanzada de Pacientes: Barra de búsqueda funcional por Cédula, Nombre, Apellido o Número de Historia Clínica.

- Expediente / Historia Clínica Digital:

  - Muestra una tabla/lista con al menos 3 pacientes quemados (ej. Juan Pérez, María López, Carlos Mendoza).

  - Cada historial debe incluir: Nombres, Apellidos, Cédula, Edad, Signos Vitales (Altura, Peso, Cálculo automático de IMC, Presión Arterial, Frecuencia Cardíaca, Temperatura y Saturación de Oxígeno).

  - Debe permitir editar los signos vitales y agregar "Observaciones Médicas / Evolución" guardándolas en el estado local.

- Calendario de Consultas del Doctor:

  - Tarjetas de resumen del día: "Citas Agendadas Hoy", "Pacientes Atendidos", "Pacientes Ausentes/Cancelados".

  - Vista de agenda diaria con la lista de pacientes agendados, hora de cita y botones de estado para marcar: [Atendido], [No Asistió] o [En Espera].

---

### 3. VISTA SÚPER ADMINISTRADOR (Gestión Global & Tienda de Salud Terapéutica)

Dashboard ejecutivo y de control financiero que incluye:

- Módulo de Control General:

  - Tarjetas KPI: Ingresos Totales por Citas, Ventas de Productos Terapéuticos, Total de Pacientes Registrados, Total de Doctores Activos.

  - Administración de Doctores y Pacientes: Tablas completas para activar/desactivar doctores, asignar porcentajes de comisión por consulta o editar datos de pacientes.

- Módulo Financiero y Verificación de Pagos:

  - Lista de transacciones por transferencia bancaria para [Confirmar] o [Rechazar] pagos manualmente.

- Catálogo de Productos Terapéuticos y Salud Postural:

  - Módulo e-commerce con productos de salud (ej. Camilla Terapéutica Térmica, Cinturón de Electroestimulación, Masajeador Térmico Espinal, Cojín Térmico Cerámico).

  - Muestra reporte de ventas de estos productos y ganancias obtenidas.

  - Incluye un pequeño carrito/módulo para registrar ventas directas de productos a pacientes durante la consulta o recepción.

Prioriza la organización del código por componentes (Header, RoleSelector, SpecialtyGrid, CalendarBooking, PatientHistoryModal, DoctorDashboard, DoctorEarnings, AdminFinancials) para facilitar la posterior integración con servicios backend.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8f6af4e2-e103-460b-8148-0b9ba44fdf94).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
