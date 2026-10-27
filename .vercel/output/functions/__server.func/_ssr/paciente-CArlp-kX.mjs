import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { B as Landmark, D as Plus, J as FileText, L as LogIn, Q as Eye, T as RefreshCcw, Z as FileCheck, b as ShieldAlert, c as UserCheck, dt as Calendar, g as Sparkles, h as Star, it as CircleCheck, lt as ChevronDown, mt as CalendarCheck, n as X, nt as Clock, o as User, q as FileUp, rt as CircleX, st as ChevronRight, tt as CreditCard, ut as Check, w as RotateCcw } from "../_libs/lucide-react.mjs";
import { A as AvatarFallback, C as DialogFooter, M as cn, O as useAuth, S as DialogDescription, T as DialogTitle, _ as Label, b as Dialog, c as doctors, h as unavailableSlots, i as bankAccounts, j as Button, k as Avatar, m as timeSlots, n as Route, p as specialties, s as currency, v as Input, w as DialogHeader, x as DialogContent, y as Badge } from "./router-4_udcFnR.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BYfOmXtJ.mjs";
import { t as Card } from "./card-B3bKphNG.mjs";
import { t as Switch } from "./switch-CCza_WcE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/paciente-CArlp-kX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var specialtyImages = {
	cardio: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80",
	pediatria: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
	derma: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
	trauma: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80",
	neuro: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80",
	gineco: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
	general: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=600&q=80",
	oftalmo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
	fisio: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
	nutri: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80"
};
function SpecialtyGrid({ selected, selectedId, onSelect }) {
	const currentSelectedId = selectedId || selected?.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-5",
		children: specialties.map((s) => {
			const active = currentSelectedId === s.id;
			const imgUrl = specialtyImages[s.id] || "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=600&q=80";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "button",
				tabIndex: 0,
				onClick: () => onSelect(s),
				onKeyDown: (e) => e.key === "Enter" && onSelect(s),
				className: cn("group relative flex flex-col overflow-hidden rounded-2xl border text-left transition-all duration-300 cursor-pointer bg-card shadow-sm select-none", active ? "border-primary ring-2 ring-primary/40 shadow-lg scale-[1.02] bg-primary/[0.03]" : "border-border/80 hover:-translate-y-1 hover:border-primary/80 hover:shadow-md"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-28 sm:h-32 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: imgUrl,
							alt: s.name,
							className: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-108",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-2.5 left-2.5 rounded-lg bg-background/95 px-2 py-0.5 text-xs font-black text-primary shadow-md backdrop-blur-md border border-border/60",
							children: currency(s.price)
						}),
						active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-2.5 right-2.5 grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground shadow-md animate-in zoom-in-75 duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col justify-between p-3.5 sm:p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: cn("text-xs sm:text-sm font-bold transition-colors line-clamp-1", active ? "text-primary font-extrabold" : "text-foreground group-hover:text-primary"),
						children: s.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed",
						children: s.description
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-between border-t border-border/60 pt-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-extrabold text-primary",
							children: currency(s.price)
						}), active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-bold text-primary flex items-center gap-1",
							children: "✓ Elegido"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-semibold text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-0.5",
							children: "Seleccionar →"
						})]
					})]
				})]
			}, s.id);
		})
	});
}
var DAY_LABELS = [
	"Dom",
	"Lun",
	"Mar",
	"Mié",
	"Jue",
	"Vie",
	"Sáb"
];
var MONTH_NAMES = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre"
];
function nextDays(count) {
	const base = /* @__PURE__ */ new Date();
	return Array.from({ length: count }, (_, i) => {
		const d = new Date(base);
		d.setDate(base.getDate() + i);
		return d;
	});
}
function CalendarBooking({ specialtyId, selectedDoctor, doctorId, onSelectDoctor, onDoctor, selectedDate, date, onSelectDate, onDate, selectedTime, time, onSelectTime, onTime }) {
	const list = doctors.filter((d) => d.specialtyId === specialtyId && d.active);
	const days = nextDays(14);
	const handleDoctorChange = (d) => {
		if (onSelectDoctor) onSelectDoctor(d);
		if (onDoctor) onDoctor(d);
	};
	const handleDateChange = (iso) => {
		if (onSelectDate) onSelectDate(iso);
		if (onDate) onDate(iso);
	};
	const handleTimeChange = (t) => {
		if (onSelectTime) onSelectTime(t);
		if (onTime) onTime(t);
	};
	const currentDoctor = selectedDoctor || list.find((d) => d.id === doctorId);
	const currentDate = selectedDate || date;
	const currentTime = selectedTime || time;
	(0, import_react.useEffect)(() => {
		if (!currentDoctor && list.length > 0 && list[0]) handleDoctorChange(list[0]);
	}, [
		specialtyId,
		currentDoctor,
		list
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-5 space-y-4 bg-card border shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-bold text-foreground flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-4 w-4 text-primary" }), " Especialistas Disponibles"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-0.5",
					children: "Haz clic en el médico para asignarlo a tu consulta"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "secondary",
					className: "text-[11px] font-semibold",
					children: [
						list.length,
						" ",
						list.length === 1 ? "doctor" : "doctores"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2.5",
				children: list.map((d) => {
					const active = currentDoctor?.id === d.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "button",
						tabIndex: 0,
						onClick: () => handleDoctorChange(d),
						onKeyDown: (e) => e.key === "Enter" && handleDoctorChange(d),
						className: cn("relative flex w-full items-center gap-3.5 rounded-2xl border p-3.5 text-left transition-all duration-200 cursor-pointer select-none", active ? "border-primary bg-[#FFF5F5] dark:bg-rose-950/25 ring-2 ring-primary/30 shadow-md scale-[1.01]" : "border-border/80 bg-card hover:border-primary/60 hover:bg-muted/40 hover:shadow-sm"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
								className: "h-12 w-12 shrink-0 border-2 border-primary/30 bg-primary/10 overflow-hidden shadow-sm",
								children: [d.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: d.avatarUrl,
									alt: d.name,
									className: "h-full w-full object-cover object-top",
									loading: "lazy"
								}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
									className: "text-xs font-bold text-primary",
									children: d.initials
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1 space-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("truncate text-sm font-bold", active ? "text-primary" : "text-foreground"),
										children: d.name
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [d.years, " años de experiencia clínica"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-end gap-1.5 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "secondary",
									className: "gap-1 text-[11px] font-semibold px-2 py-0.5 bg-card border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-amber-400 text-amber-500" }), d.rating]
								}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-[11px] font-extrabold text-primary animate-in zoom-in-50 duration-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-4 w-4 place-items-center rounded-full bg-primary text-primary-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-2.5 w-2.5 stroke-[3]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Elegido" })]
								})]
							})
						]
					}, d.id);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-5 space-y-5 bg-card border shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold text-foreground",
						children: "📅 1. Selecciona el Día de Consulta"
					}), currentDate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						className: "bg-primary/15 text-primary border-primary/30 text-xs font-semibold",
						children: ["Día seleccionado: ", currentDate]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4 gap-2 sm:grid-cols-7",
					children: days.map((d) => {
						const iso = d.toISOString().slice(0, 10);
						const isSunday = d.getDay() === 0;
						const active = currentDate === iso;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: isSunday,
							onClick: () => handleDateChange(iso),
							className: cn("flex flex-col items-center justify-center rounded-xl border p-2 text-center transition-all duration-200 select-none", isSunday ? "cursor-not-allowed opacity-30 bg-muted/40 text-muted-foreground" : "cursor-pointer", active ? "border-primary bg-primary text-primary-foreground font-bold shadow-md ring-2 ring-primary/40 scale-105" : isSunday ? "" : "border-border/80 bg-card hover:border-primary/80 hover:bg-primary/5 hover:text-primary"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("text-[10px] uppercase font-semibold", active ? "text-primary-foreground/90" : "text-muted-foreground"),
									children: DAY_LABELS[d.getDay()]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base font-extrabold mt-0.5 leading-none",
									children: d.getDate()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("text-[9px] mt-1", active ? "text-primary-foreground/80" : "text-muted-foreground/70"),
									children: MONTH_NAMES[d.getMonth()]?.slice(0, 3)
								})
							]
						}, iso);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 border-t pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-bold text-foreground flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-primary" }), " 2. Horarios Disponibles"]
					}), currentTime && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 text-xs font-semibold",
						children: ["Hora: ", currentTime]
					})]
				}), !currentDate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl border border-dashed bg-muted/40 p-4 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground font-medium",
						children: "👈 Selecciona un día arriba para habilitar y ver los turnos disponibles."
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 animate-in fade-in duration-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2 sm:grid-cols-5",
						children: timeSlots.map((t) => {
							const taken = unavailableSlots.includes(t);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: taken,
								onClick: () => handleTimeChange(t),
								className: cn("rounded-xl border py-2.5 px-2 text-xs font-bold transition-all duration-200 select-none", taken ? "cursor-not-allowed opacity-30 line-through bg-muted text-muted-foreground border-transparent" : "cursor-pointer", currentTime === t ? "border-primary bg-primary text-primary-foreground font-extrabold shadow-md ring-2 ring-primary/40 scale-105" : taken ? "" : "border-border/80 bg-card hover:border-primary hover:bg-primary/10 hover:text-primary"),
								children: t
							}, t);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground pt-1",
						children: "Turnos médicos de 30 a 45 minutos. Confirmación inmediata."
					})]
				})]
			})]
		})]
	});
}
var initialMockAppointments = [
	{
		id: "apt-1",
		specialtyId: "fisio",
		specialtyName: "Fisioterapia / Salud Integral",
		doctorName: "Lcdo. Diego Suárez",
		doctorInitials: "DS",
		date: "15 de Agosto, 2026",
		time: "10:00 AM",
		status: "confirmed",
		paymentMethod: "Tarjeta",
		amount: 40,
		location: "Sede Norte · Sala Terapéutica 2 (Camilla de Jade)"
	},
	{
		id: "apt-2",
		specialtyId: "trauma",
		specialtyName: "Traumatología & Columna",
		doctorName: "Dr. Mateo Villacís",
		doctorInitials: "MV",
		date: "18 de Agosto, 2026",
		time: "15:30 PM",
		status: "pending_transfer",
		paymentMethod: "Transferencia",
		amount: 55,
		location: "Sede Centro · Consultorio 204",
		transferDetails: {
			bank: "Banco Pichincha",
			reference: "TRANS-8849201",
			receiptFileName: "comprobante_transferencia_pichincha_55usd.pdf"
		}
	},
	{
		id: "apt-3",
		specialtyId: "general",
		specialtyName: "Medicina General",
		doctorName: "Dr. Jorge Molina",
		doctorInitials: "JM",
		date: "10 de Julio, 2026",
		time: "09:00 AM",
		status: "attended",
		paymentMethod: "Tarjeta",
		amount: 30,
		location: "Sede Norte · Consultorio 102",
		summary: {
			diagnosis: "Control preventivo general. Lumbalgia postural leve por postura en escritorio.",
			notes: "Paciente refiere molestias lumbares ocasionales. Sin antecedentes quirúrgicos. Se recomienda higiene postural y terapia física.",
			vitals: {
				bp: "120/80 mmHg",
				hr: 72,
				temp: 36.5,
				weight: 84
			},
			indications: [
				"Realizar pausas activas cada 2 horas de trabajo.",
				"Se deriva a sesión de termomasaje de jade en Fisioterapia.",
				"Control en 6 meses o en caso de dolor persistente."
			]
		}
	},
	{
		id: "apt-4",
		specialtyId: "cardio",
		specialtyName: "Cardiología",
		doctorName: "Dra. Valeria Ríos",
		doctorInitials: "VR",
		date: "25 de Junio, 2026",
		time: "11:00 AM",
		status: "attended",
		paymentMethod: "Tarjeta",
		amount: 60,
		location: "Sede Principal · Unidad de Cardiología",
		summary: {
			diagnosis: "Chequeo cardiológico rutinario. Presión arterial controlada.",
			notes: "Evolución favorable. Auscultación sin soplos. Ritmo sinusal normal.",
			vitals: {
				bp: "125/82 mmHg",
				hr: 68,
				temp: 36.4,
				weight: 85
			},
			indications: ["Continuar plan de alimentación hiposódico.", "Caminatas de 30 minutos al menos 4 veces por semana."]
		}
	},
	{
		id: "apt-5",
		specialtyId: "derma",
		specialtyName: "Dermatología",
		doctorName: "Dr. Iván Peralta",
		doctorInitials: "IP",
		date: "02 de Julio, 2026",
		time: "14:00 PM",
		status: "cancelled",
		paymentMethod: "Tarjeta",
		amount: 50,
		location: "Sede Centro · Consultorio 301"
	}
];
var wizardSteps = [
	"Especialidad",
	"Doctor y horario",
	"Datos",
	"Pago",
	"Confirmación"
];
function PatientBooking({ initialSpecialtyId }) {
	const { user } = useAuth();
	const [activeTab, setActiveTab] = (0, import_react.useState)(initialSpecialtyId ? "booking" : "history");
	const [appointments, setAppointments] = (0, import_react.useState)(initialMockAppointments);
	const [showCancelled, setShowCancelled] = (0, import_react.useState)(false);
	const [cancelModalApt, setCancelModalApt] = (0, import_react.useState)(null);
	const [receiptModalApt, setReceiptModalApt] = (0, import_react.useState)(null);
	const [summaryModalApt, setSummaryModalApt] = (0, import_react.useState)(null);
	const initialSpec = initialSpecialtyId ? specialties.find((s) => s.id === initialSpecialtyId) : void 0;
	const initialDoctor = initialSpec ? doctors.find((d) => d.specialtyId === initialSpec.id && d.active) : void 0;
	const [step, setStep] = (0, import_react.useState)(initialSpec ? 1 : 0);
	const [specialty, setSpecialty] = (0, import_react.useState)(initialSpec);
	const [doctor, setDoctor] = (0, import_react.useState)(initialDoctor);
	const [date, setDate] = (0, import_react.useState)();
	const [time, setTime] = (0, import_react.useState)();
	const [form, setForm] = (0, import_react.useState)({
		name: user?.name || "Juan Pérez",
		cedula: user?.cedula || "1712345678",
		email: user?.email || "paciente@auravital.com",
		whatsapp: user?.phone || "+593 99 812 4455"
	});
	const [gcal, setGcal] = (0, import_react.useState)(true);
	const [method, setMethod] = (0, import_react.useState)("card");
	const [card, setCard] = (0, import_react.useState)({
		number: "",
		holder: "",
		expiry: "",
		cvv: ""
	});
	const [receipt, setReceipt] = (0, import_react.useState)();
	const [paid, setPaid] = (0, import_react.useState)();
	const upcomingApts = appointments.filter((a) => a.status === "confirmed" || a.status === "pending_transfer");
	const pastApts = appointments.filter((a) => a.status === "attended");
	const cancelledApts = appointments.filter((a) => a.status === "cancelled");
	const handleCancelAppointment = () => {
		if (!cancelModalApt) return;
		setAppointments((prev) => prev.map((a) => a.id === cancelModalApt.id ? {
			...a,
			status: "cancelled"
		} : a));
		toast.success("Cita médica cancelada correctamente.");
		setCancelModalApt(null);
	};
	const handleSyncGCal = (apt) => {
		toast.success(`Cita con ${apt.doctorName} sincronizada con Google Calendar.`);
	};
	const handleSelectSpecialty = (s) => {
		setSpecialty(s);
		const foundDoc = doctors.find((d) => d.specialtyId === s.id && d.active);
		if (foundDoc) setDoctor(foundDoc);
	};
	const handleRebook = (specId) => {
		const foundSpec = specialties.find((s) => s.id === specId);
		setSpecialty(foundSpec);
		const foundDoc = doctors.find((d) => d.specialtyId === specId && d.active);
		setDoctor(foundDoc);
		setDate(void 0);
		setTime(void 0);
		setStep(1);
		setActiveTab("booking");
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const canNext = step === 0 && !!specialty || step === 1 && !!doctor && !!date && !!time || step === 2 && form.name && form.cedula && form.email && form.whatsapp || step === 3;
	const confirmBooking = () => {
		if (method === "card") {
			if (!card.number || !card.holder || !card.expiry || !card.cvv) {
				toast.error("Completa los datos de la tarjeta");
				return;
			}
			setPaid("approved");
			toast.success("Pago aprobado con éxito");
		} else {
			if (!receipt) {
				toast.error("Adjunta el comprobante de transferencia");
				return;
			}
			setPaid("pending");
			toast.success("Comprobante enviado. Pendiente de verificación");
		}
		const newApt = {
			id: `apt-${Date.now()}`,
			specialtyId: specialty?.id || "general",
			specialtyName: specialty?.name || "Consulta Médica",
			doctorName: doctor?.name || "Doctor AuraVital",
			doctorInitials: doctor?.initials || "DR",
			date: date ? `${date}` : "Próxima Fecha",
			time: time || "09:00 AM",
			status: method === "card" ? "confirmed" : "pending_transfer",
			paymentMethod: method === "card" ? "Tarjeta" : "Transferencia",
			amount: specialty?.price || 40,
			location: "Sede Principal AuraVital · Consultorio Central",
			...method === "transfer" ? { transferDetails: {
				bank: "Banco Pichincha",
				reference: `TRANS-${Math.floor(1e5 + Math.random() * 9e5)}`,
				receiptFileName: receipt || "comprobante_transferencia.pdf"
			} } : {}
		};
		setAppointments((prev) => [newApt, ...prev]);
		setStep(4);
	};
	const resetWizard = () => {
		setStep(0);
		setSpecialty(void 0);
		setDoctor(void 0);
		setDate(void 0);
		setTime(void 0);
		setPaid(void 0);
		setReceipt(void 0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground",
						children: "Portal del Paciente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "bg-primary/20 text-primary border border-primary/30 text-xs font-semibold",
						children: "Juan Pérez"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs sm:text-sm text-muted-foreground",
					children: "Gestiona tus citas programadas, historial de consultas médicas y agendamiento en línea."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => {
						resetWizard();
						setActiveTab("booking");
					},
					className: "rounded-xl bg-primary px-6 font-bold shadow-md hover:bg-primary/90 text-white self-start sm:self-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Agendar Nueva Cita"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				value: activeTab,
				onValueChange: (v) => setActiveTab(v),
				className: "w-full space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "grid w-full max-w-md grid-cols-2 h-11 p-1 bg-muted rounded-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "history",
							className: "rounded-lg text-xs sm:text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "mr-2 h-4 w-4" }),
								"Mis Citas & Historial (",
								upcomingApts.length,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "booking",
							className: "rounded-lg text-xs sm:text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), "Agendar Nueva Cita"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "history",
						className: "space-y-8 mt-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "text-lg font-bold text-foreground flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-primary" }), " Citas Próximas y en Proceso"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "outline",
										className: "text-xs",
										children: [
											upcomingApts.length,
											" ",
											upcomingApts.length === 1 ? "cita activa" : "citas activas"
										]
									})]
								}), upcomingApts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "p-8 text-center bg-muted/20 border-dashed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "No tienes citas médicas próximas agendadas."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										onClick: () => {
											resetWizard();
											setActiveTab("booking");
										},
										className: "mt-4 text-xs font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 h-3.5 w-3.5" }), " Reservar Turno Ahora"]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-4",
									children: upcomingApts.map((apt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
										className: "overflow-hidden border-border/80 bg-card shadow-sm hover:shadow-md transition-all",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5 space-y-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start justify-between gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "secondary",
														className: "text-[11px] font-semibold text-primary mb-1",
														children: apt.specialtyName
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-base font-bold text-foreground",
														children: apt.doctorName
													})] }), apt.status === "confirmed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
														className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 text-xs font-semibold",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1 h-3.5 w-3.5" }), " Confirmada / Pagada"]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
														className: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30 text-xs font-semibold",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 h-3.5 w-3.5" }), " Verificación Pendiente"]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1.5 rounded-xl bg-muted/50 p-3 text-xs",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-muted-foreground",
																children: "📅 Fecha y Hora:"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "font-semibold text-foreground",
																children: [
																	apt.date,
																	" · ",
																	apt.time
																]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-muted-foreground",
																children: "📍 Ubicación:"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-medium text-foreground",
																children: apt.location
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-muted-foreground",
																children: [
																	"💳 Pago (",
																	apt.paymentMethod,
																	"):"
																]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-bold text-primary",
																children: currency(apt.amount)
															})]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-center gap-2 pt-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
															size: "sm",
															variant: "outline",
															onClick: () => handleSyncGCal(apt),
															className: "text-xs h-8 hover:border-primary",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "mr-1.5 h-3.5 w-3.5 text-primary" }), " Sincronizar Calendar"]
														}),
														apt.status === "pending_transfer" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
															size: "sm",
															variant: "secondary",
															onClick: () => setReceiptModalApt(apt),
															className: "text-xs h-8",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "mr-1.5 h-3.5 w-3.5" }), " Ver Comprobante"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
															size: "sm",
															variant: "ghost",
															onClick: () => setCancelModalApt(apt),
															className: "text-xs h-8 text-destructive hover:bg-destructive/10 hover:text-destructive ml-auto",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mr-1 h-3.5 w-3.5" }), " Cancelar Cita"]
														})
													]
												})
											]
										})
									}, apt.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 pt-4 border-t",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "text-lg font-bold text-foreground flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-emerald-600 dark:text-emerald-400" }), " Historial de Consultas Atendidas"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "outline",
										className: "text-xs",
										children: [pastApts.length, " consultas pasadas"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-4",
									children: pastApts.map((apt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "border-border/80 bg-card p-5 space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "outline",
														className: "text-[10px] text-muted-foreground mb-1",
														children: apt.specialtyName
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-base font-bold text-foreground",
														children: apt.doctorName
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-xs text-muted-foreground mt-0.5",
														children: ["Atendido el ", apt.date]
													})
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
													className: "bg-muted text-foreground text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mr-1 h-3 w-3 text-emerald-500" }), " Atendido"]
												})]
											}),
											apt.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-muted/40 p-3 text-xs space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-foreground",
													children: "Diagnóstico:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground line-clamp-2",
													children: apt.summary.diagnosis
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-2 pt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "outline",
													onClick: () => setSummaryModalApt(apt),
													className: "text-xs h-8",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-1.5 h-3.5 w-3.5 text-primary" }), " Ver Resumen Médico"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													onClick: () => handleRebook(apt.specialtyId),
													className: "text-xs h-8 bg-primary text-primary-foreground font-semibold hover:bg-primary/90",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, { className: "mr-1.5 h-3.5 w-3.5" }), " Volver a Agendar"]
												})]
											})
										]
									}, apt.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 pt-4 border-t",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setShowCancelled(!showCancelled),
									className: "flex items-center justify-between w-full p-3 rounded-xl bg-muted/40 hover:bg-muted/70 transition-colors text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm font-semibold text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Citas Canceladas (",
											cancelledApts.length,
											")"
										] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 text-muted-foreground transition-transform", showCancelled && "rotate-180") })]
								}), showCancelled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",
									children: cancelledApts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground p-3",
										children: "No tienes citas canceladas."
									}) : cancelledApts.map((apt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "p-4 border-dashed bg-muted/20 opacity-80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between items-start",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-bold text-foreground",
												children: apt.specialtyName
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground",
												children: [
													apt.doctorName,
													" · ",
													apt.date
												]
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "destructive",
												className: "text-[10px]",
												children: "Cancelada"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "ghost",
											onClick: () => handleRebook(apt.specialtyId),
											className: "mt-2 text-xs h-7 text-primary hover:bg-primary/10",
											children: "Reagendar consulta →"
										})]
									}, apt.id))
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "booking",
						className: "space-y-6 mt-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-5 gap-2 border-b pb-4 text-xs font-medium",
								children: wizardSteps.map((label, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("flex items-center gap-2 border-b-2 pb-2 transition-colors", step === idx && "border-primary text-primary font-bold", step > idx && "border-emerald-500 text-emerald-600 dark:text-emerald-400", step < idx && "border-transparent text-muted-foreground"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-5 w-5 place-items-center rounded-full bg-surface text-[10px]",
										children: step > idx ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }) : idx + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline truncate",
										children: label
									})]
								}, label))
							}),
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-bold text-foreground",
									children: "1. Selecciona la Especialidad Médica"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Elige la rama médica en la que deseas recibir atención especializada."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecialtyGrid, {
									selected: specialty,
									onSelect: handleSelectSpecialty
								})]
							}),
							step === 1 && specialty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-bold text-foreground",
									children: "2. Selecciona Doctor y Horario"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: ["Especialidad elegida: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-primary",
										children: specialty.name
									})]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarBooking, {
									specialtyId: specialty.id,
									selectedDoctor: doctor,
									onSelectDoctor: setDoctor,
									selectedDate: date,
									onSelectDate: setDate,
									selectedTime: time,
									onSelectTime: setTime
								})]
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl mx-auto space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-bold text-foreground",
									children: "3. Datos de Contacto del Paciente"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Recibirás la confirmación de la cita y recordatorio por WhatsApp."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "p-6 space-y-4 bg-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "name",
												className: "text-xs font-semibold",
												children: "Nombres y Apellidos"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "name",
												value: form.name,
												onChange: (e) => setForm({
													...form,
													name: e.target.value
												}),
												placeholder: "Ej. Juan Pérez"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "cedula",
													className: "text-xs font-semibold",
													children: "Cédula de Identidad"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "cedula",
													value: form.cedula,
													onChange: (e) => setForm({
														...form,
														cedula: e.target.value
													}),
													placeholder: "1712345678"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "whatsapp",
													className: "text-xs font-semibold",
													children: "Número de WhatsApp"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "whatsapp",
													value: form.whatsapp,
													onChange: (e) => setForm({
														...form,
														whatsapp: e.target.value
													}),
													placeholder: "+593 99 812 4455"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "email",
												className: "text-xs font-semibold",
												children: "Correo Electrónico"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "email",
												type: "email",
												value: form.email,
												onChange: (e) => setForm({
													...form,
													email: e.target.value
												}),
												placeholder: "paciente@auravital.com"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-xl bg-muted/60 p-4 pt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-0.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-bold text-foreground",
													children: "Sincronizar con Google Calendar"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground",
													children: "Agrega el evento automáticamente con recordatorio a tu calendario."
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: gcal,
												onCheckedChange: setGcal
											})]
										})
									]
								})]
							}),
							step === 3 && specialty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl mx-auto space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-bold text-foreground",
										children: "4. Método de Pago"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: ["Valor a cancelar: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-primary",
											children: currency(specialty.price)
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setMethod("card"),
											className: cn("flex flex-col items-center rounded-2xl border p-4 text-center transition-all", method === "card" ? "border-primary bg-primary/5 text-primary font-bold shadow-sm" : "bg-card text-muted-foreground hover:bg-muted"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-6 w-6 mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs",
												children: "Tarjeta de Crédito / Débito"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setMethod("transfer"),
											className: cn("flex flex-col items-center rounded-2xl border p-4 text-center transition-all", method === "transfer" ? "border-primary bg-primary/5 text-primary font-bold shadow-sm" : "bg-card text-muted-foreground hover:bg-muted"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "h-6 w-6 mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs",
												children: "Transferencia Bancaria"
											})]
										})]
									}),
									method === "card" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "p-6 space-y-4 bg-card",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-xs",
													children: "Número de Tarjeta"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "4500 0000 0000 0000",
													value: card.number,
													onChange: (e) => setCard({
														...card,
														number: e.target.value
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-xs",
													children: "Titular de la Tarjeta"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "NOMBRE COMO FIGURA EN LA TARJETA",
													value: card.holder,
													onChange: (e) => setCard({
														...card,
														holder: e.target.value
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														className: "text-xs",
														children: "Caducidad"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														placeholder: "MM/AA",
														value: card.expiry,
														onChange: (e) => setCard({
															...card,
															expiry: e.target.value
														})
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														className: "text-xs",
														children: "CVV"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														placeholder: "123",
														value: card.cvv,
														onChange: (e) => setCard({
															...card,
															cvv: e.target.value
														})
													})]
												})]
											})
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "p-6 space-y-4 bg-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-muted/60 p-4 space-y-2 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-foreground",
												children: "Datos para Transferencia Bancaria:"
											}), bankAccounts.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "border-t pt-2 space-y-0.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "font-semibold text-primary",
														children: [
															b.bank,
															" · ",
															b.type
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-muted-foreground",
														children: [
															"Cuenta: ",
															b.number,
															" | RUC: ",
															b.ruc
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-muted-foreground",
														children: ["Titular: ", b.holder]
													})
												]
											}, b.number))]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2 pt-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-semibold",
												children: "Adjuntar Comprobante de Transferencia"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													type: "button",
													variant: "outline",
													onClick: () => setReceipt("comprobante_banco_pichincha_40usd.pdf"),
													className: "text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, { className: "mr-1.5 h-4 w-4" }), " Simular Subida de Archivo"]
												}), receipt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													className: "bg-emerald-500/15 text-emerald-700 text-xs",
													children: receipt
												})]
											})]
										})]
									})
								]
							}),
							step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "max-w-xl mx-auto p-8 text-center space-y-5 bg-card shadow-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-16 w-16 place-items-center rounded-full bg-emerald-500/20 text-emerald-600 mx-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-2xl font-bold text-foreground",
										children: "¡Cita Médica Registrada!"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm text-muted-foreground mt-1",
										children: paid === "approved" ? "Tu pago con tarjeta ha sido aprobado. Recibirás el recordatorio por WhatsApp." : "Tu comprobante de transferencia fue recibido. Está pendiente de verificación por administración."
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-muted/60 p-4 text-xs space-y-2 text-left",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "Especialidad:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-foreground",
													children: specialty?.name
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "Doctor:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-foreground",
													children: doctor?.name
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "Fecha y Hora:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold text-foreground",
													children: [
														date,
														" · ",
														time
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "Paciente:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-foreground",
													children: form.name
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between border-t pt-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "Estado del Pago:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: paid === "approved" ? "default" : "secondary",
													children: paid === "approved" ? "Aprobado (Tarjeta)" : "Pendiente de verificación (Transferencia)"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row gap-3 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: () => {
												resetWizard();
												setActiveTab("history");
											},
											className: "flex-1 rounded-xl bg-primary text-primary-foreground font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "mr-2 h-4 w-4" }), " Ver Mis Citas & Historial"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											onClick: resetWizard,
											className: "flex-1 rounded-xl text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 h-4 w-4" }), " Agendar Otra Cita"]
										})]
									})
								]
							}),
							step < 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pt-6 border-t",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									disabled: step === 0,
									onClick: () => setStep((s) => s - 1),
									className: "rounded-xl text-xs",
									children: "Atrás"
								}), step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									disabled: !canNext,
									onClick: () => setStep((s) => s + 1),
									className: "rounded-xl bg-primary text-primary-foreground font-bold px-8",
									children: ["Continuar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-1 h-4 w-4" })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: confirmBooking,
									className: "rounded-xl bg-primary text-primary-foreground font-bold px-8 shadow-md hover:bg-primary/90",
									children: "Confirmar y Reservar Cita"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!cancelModalApt,
				onOpenChange: (open) => !open && setCancelModalApt(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "flex items-center gap-2 text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-5 w-5" }), " Cancelar Cita Médica"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "text-xs",
							children: [
								"¿Estás seguro de que deseas cancelar tu cita de ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: cancelModalApt?.specialtyName }),
								" programada para el",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
									cancelModalApt?.date,
									" a las ",
									cancelModalApt?.time
								] }),
								" con ",
								cancelModalApt?.doctorName,
								"?"
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Esta acción liberará el horario para otros pacientes. Puedes volver a agendar en cualquier momento."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "gap-2 sm:gap-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setCancelModalApt(null),
								children: "Mantener Cita"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "destructive",
								onClick: handleCancelAppointment,
								children: "Sí, Cancelar Cita"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!receiptModalApt,
				onOpenChange: (open) => !open && setReceiptModalApt(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md bg-card space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "flex items-center gap-2 text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "h-5 w-5" }), " Comprobante de Transferencia"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "text-xs",
							children: [
								"Detalle del pago enviado para la cita de ",
								receiptModalApt?.specialtyName,
								"."
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border bg-muted/40 p-4 space-y-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Banco Emisor:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: receiptModalApt?.transferDetails?.bank
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Referencia / Transacción:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-foreground",
										children: receiptModalApt?.transferDetails?.reference
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Valor Transferido:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-primary",
										children: currency(receiptModalApt?.amount || 0)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Archivo Adjunto:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-slate-600 dark:text-slate-300 truncate max-w-[200px]",
										children: receiptModalApt?.transferDetails?.receiptFileName
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-700 dark:text-amber-300",
							children: "⏳ Comprobante en proceso de validación por el departamento de tesorería y administración de AuraVital."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setReceiptModalApt(null),
							className: "w-full",
							children: "Cerrar"
						}) })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!summaryModalApt,
				onOpenChange: (open) => !open && setSummaryModalApt(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-lg bg-card space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "flex items-center gap-2 text-emerald-600 dark:text-emerald-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" }), " Resumen de Consulta Médica"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "text-xs",
							children: [
								summaryModalApt?.specialtyName,
								" · ",
								summaryModalApt?.doctorName,
								" · ",
								summaryModalApt?.date
							]
						})] }),
						summaryModalApt?.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl bg-muted/50 p-3.5 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: "Diagnóstico Clínico:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground leading-relaxed",
										children: summaryModalApt.summary.diagnosis
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border p-3.5 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: "Signos Vitales Registrados:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] pt-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "bg-muted/40 p-2 rounded-lg text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground",
													children: "Presión Art."
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-bold",
													children: summaryModalApt.summary.vitals.bp
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "bg-muted/40 p-2 rounded-lg text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground",
													children: "Frecuencia C."
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "font-bold",
													children: [summaryModalApt.summary.vitals.hr, " lpm"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "bg-muted/40 p-2 rounded-lg text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground",
													children: "Temperatura"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "font-bold",
													children: [summaryModalApt.summary.vitals.temp, " °C"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "bg-muted/40 p-2 rounded-lg text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground",
													children: "Peso"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "font-bold",
													children: [summaryModalApt.summary.vitals.weight, " kg"]
												})]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: "Indicaciones & Recomendaciones Médicas:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "list-disc list-inside space-y-1 text-muted-foreground pl-1",
										children: summaryModalApt.summary.indications.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: ind }, i))
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setSummaryModalApt(null),
								children: "Cerrar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => {
									const specId = summaryModalApt?.specialtyId;
									setSummaryModalApt(null);
									if (specId) handleRebook(specId);
								},
								className: "bg-primary text-primary-foreground font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, { className: "mr-1.5 h-3.5 w-3.5" }), " Volver a Agendar Consulta"]
							})]
						})
					]
				})
			})
		]
	});
}
function PacienteRoute() {
	const navigate = useNavigate();
	const { specialty } = Route.useSearch();
	const { user, quickLogin } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6 animate-in fade-in duration-300",
			children: [!user && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-4 sm:p-5 border-primary/20 bg-gradient-to-r from-primary/10 via-card to-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold text-foreground",
						children: "¿Tienes cuenta de Paciente AuraVital?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Inicia sesión para sincronizar automáticamente tus citas agendadas y tu historial clínico."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 w-full sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => quickLogin("patient"),
						className: "text-xs font-semibold h-8 rounded-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-1.5 h-3.5 w-3.5 text-amber-500" }), "Demo Paciente"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => navigate({
							to: "/login",
							search: {
								tab: "login",
								role: "patient"
							}
						}),
						className: "text-xs font-bold h-8 rounded-lg bg-primary text-primary-foreground cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "mr-1.5 h-3.5 w-3.5" }), "Iniciar Sesión"]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientBooking, { initialSpecialtyId: specialty }, `${specialty ?? "default"}-${user?.id || "anon"}`)]
		})
	});
}
//#endregion
export { PacienteRoute as component };
