import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as Pen, D as Plus, E as Power, F as Mail, M as Minus, O as Phone, P as MapPin, R as Lock, S as Search, Y as FileSpreadsheet, _ as ShoppingCart, a as Users, b as ShieldAlert, d as TrendingUp, dt as Calendar, et as Download, f as Trash2, g as Sparkles, it as CircleCheck, j as Package, l as Truck, lt as ChevronDown, m as Stethoscope, n as X, nt as Clock, o as User, ot as ChevronUp, s as UserPlus, ut as Check } from "../_libs/lucide-react.mjs";
import { A as AvatarFallback, C as DialogFooter, M as cn, O as useAuth, S as DialogDescription, T as DialogTitle, _ as Label, b as Dialog, c as doctors, d as initialProducts, f as initialTransfers, g as Separator, j as Button, k as Avatar, l as earnings, p as specialties, s as currency, u as initialPatients, v as Input, w as DialogHeader, x as DialogContent, y as Badge } from "./router-4_udcFnR.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BYfOmXtJ.mjs";
import { t as Card } from "./card-B3bKphNG.mjs";
import { a as TableHead, i as TableCell, n as Table, o as TableHeader, r as TableBody, s as TableRow, t as StatCard } from "./StatCard-Coej7ifZ.mjs";
import { t as Switch } from "./switch-CCza_WcE.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DaaGkCIX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var allWeekDays = [
	"Lunes",
	"Martes",
	"Miércoles",
	"Jueves",
	"Viernes",
	"Sábado"
];
var defaultDoctorForm = {
	name: "",
	specialtyId: "cardio",
	email: "",
	phone: "+593 99 ",
	commission: 55,
	active: true,
	avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80",
	daysAvailable: [
		"Lunes",
		"Martes",
		"Miércoles",
		"Jueves",
		"Viernes"
	],
	startTime: "08:00",
	endTime: "18:00",
	slotDuration: 30
};
var defaultPatientForm = {
	firstName: "",
	lastName: "",
	cedula: "",
	age: 30,
	phone: "+593 99 ",
	email: "",
	address: "Quito, Ecuador",
	active: true
};
function AdminFinancials() {
	const [docs, setDocs] = (0, import_react.useState)(doctors);
	const [patientsList, setPatientsList] = (0, import_react.useState)(initialPatients);
	const [transfers, setTransfers] = (0, import_react.useState)(initialTransfers);
	const [doctorQuery, setDoctorQuery] = (0, import_react.useState)("");
	const [patientQuery, setPatientQuery] = (0, import_react.useState)("");
	const [openDocModal, setOpenDocModal] = (0, import_react.useState)(false);
	const [editingDocId, setEditingDocId] = (0, import_react.useState)(null);
	const [docForm, setDocForm] = (0, import_react.useState)(defaultDoctorForm);
	const [openPatientModal, setOpenPatientModal] = (0, import_react.useState)(false);
	const [editingPatientId, setEditingPatientId] = (0, import_react.useState)(null);
	const [patientForm, setPatientForm] = (0, import_react.useState)(defaultPatientForm);
	const [viewingPatientApts, setViewingPatientApts] = (0, import_react.useState)(null);
	const specialtyName = (id) => specialties.find((s) => s.id === id)?.name ?? "—";
	const filteredDocs = (0, import_react.useMemo)(() => {
		const q = doctorQuery.trim().toLowerCase();
		if (!q) return docs;
		return docs.filter((d) => d.name.toLowerCase().includes(q) || d.email.toLowerCase().includes(q) || specialtyName(d.specialtyId).toLowerCase().includes(q));
	}, [docs, doctorQuery]);
	const filteredPatients = (0, import_react.useMemo)(() => {
		const q = patientQuery.trim().toLowerCase();
		if (!q) return patientsList;
		return patientsList.filter((p) => p.firstName.toLowerCase().includes(q) || p.lastName.toLowerCase().includes(q) || p.cedula.includes(q) || p.record.toLowerCase().includes(q));
	}, [patientsList, patientQuery]);
	const handleOpenNewDoctor = () => {
		setEditingDocId(null);
		setDocForm(defaultDoctorForm);
		setOpenDocModal(true);
	};
	const handleEditDoctor = (doc) => {
		setEditingDocId(doc.id);
		setDocForm({
			...doc,
			daysAvailable: doc.daysAvailable || [
				"Lunes",
				"Martes",
				"Miércoles",
				"Jueves",
				"Viernes"
			],
			startTime: doc.startTime || "08:00",
			endTime: doc.endTime || "18:00",
			slotDuration: doc.slotDuration || 30,
			phone: doc.phone || "+593 99 876 5432"
		});
		setOpenDocModal(true);
	};
	const handleSaveDoctor = () => {
		if (!docForm.name?.trim() || !docForm.email?.trim()) {
			toast.error("El nombre y correo del médico son obligatorios");
			return;
		}
		if (editingDocId) {
			setDocs((prev) => prev.map((d) => d.id === editingDocId ? {
				...d,
				...docForm
			} : d));
			toast.success(`Datos y horarios de ${docForm.name} actualizados`);
		} else {
			const initials = docForm.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
			const newDoc = {
				id: `d-${crypto.randomUUID()}`,
				name: docForm.name.trim(),
				specialtyId: docForm.specialtyId || "cardio",
				initials: initials || "DR",
				rating: 5,
				years: Number(docForm.years) || 6,
				commission: Number(docForm.commission) || 55,
				active: docForm.active ?? true,
				email: docForm.email.trim(),
				phone: docForm.phone?.trim() || "+593 99 000 0000",
				avatarUrl: docForm.avatarUrl || "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80",
				daysAvailable: docForm.daysAvailable || [
					"Lunes",
					"Martes",
					"Miércoles",
					"Jueves",
					"Viernes"
				],
				startTime: docForm.startTime || "08:00",
				endTime: docForm.endTime || "18:00",
				slotDuration: docForm.slotDuration || 30
			};
			setDocs((prev) => [newDoc, ...prev]);
			toast.success(`¡Doctor ${newDoc.name} registrado con éxito en el sistema!`);
		}
		setOpenDocModal(false);
	};
	const toggleDayAvailable = (day) => {
		const current = docForm.daysAvailable || [];
		if (current.includes(day)) setDocForm({
			...docForm,
			daysAvailable: current.filter((d) => d !== day)
		});
		else setDocForm({
			...docForm,
			daysAvailable: [...current, day]
		});
	};
	const handleOpenNewPatient = () => {
		setEditingPatientId(null);
		setPatientForm(defaultPatientForm);
		setOpenPatientModal(true);
	};
	const handleEditPatient = (pat) => {
		setEditingPatientId(pat.id);
		setPatientForm({
			...pat,
			active: pat.active ?? true,
			email: pat.email || `${pat.firstName.toLowerCase()}@correo.com`,
			address: pat.address || "Quito, Ecuador"
		});
		setOpenPatientModal(true);
	};
	const handleSavePatient = () => {
		if (!patientForm.firstName?.trim() || !patientForm.lastName?.trim() || !patientForm.cedula?.trim()) {
			toast.error("Nombres, apellidos y cédula son obligatorios");
			return;
		}
		if (editingPatientId) {
			setPatientsList((prev) => prev.map((p) => p.id === editingPatientId ? {
				...p,
				...patientForm
			} : p));
			toast.success(`Datos de ${patientForm.firstName} ${patientForm.lastName} actualizados`);
		} else {
			const newPat = {
				id: `p-${crypto.randomUUID()}`,
				firstName: patientForm.firstName.trim(),
				lastName: patientForm.lastName.trim(),
				cedula: patientForm.cedula.trim(),
				age: Number(patientForm.age) || 30,
				record: `HC-00${Math.floor(200 + Math.random() * 700)}`,
				phone: patientForm.phone?.trim() || "+593 99 000 0000",
				email: patientForm.email?.trim() || "",
				address: patientForm.address?.trim() || "Quito, Ecuador",
				active: patientForm.active ?? true,
				vitals: {
					height: 170,
					weight: 70,
					bloodPressure: "120/80",
					heartRate: 72,
					temperature: 36.5,
					oxygen: 98
				},
				notes: [],
				labResults: [],
				labOrders: []
			};
			setPatientsList((prev) => [newPat, ...prev]);
			toast.success(`Paciente ${newPat.firstName} ${newPat.lastName} registrado en el CRM.`);
		}
		setOpenPatientModal(false);
	};
	const togglePatientActive = (id, current) => {
		setPatientsList((prev) => prev.map((p) => p.id === id ? {
			...p,
			active: !current
		} : p));
		toast.info(`Cuenta del paciente ${!current ? "activada" : "desactivada"}`);
	};
	const setStatus = (id, status) => {
		setTransfers((prev) => prev.map((t) => t.id === id ? {
			...t,
			status
		} : t));
		toast.success(status === "confirmed" ? "Pago por transferencia confirmado" : "Pago rechazado");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "gap-0 p-0 overflow-hidden border shadow-sm bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b p-5 bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-base font-bold text-foreground flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-5 w-5 text-primary" }), " Administración de Doctores & Disponibilidad"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Configura perfiles médicos, comisiones porcentuales y turnos de atención para agendamiento"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: handleOpenNewDoctor,
								className: "bg-primary text-primary-foreground font-bold text-xs h-9 shadow-sm hover:bg-primary/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 h-4 w-4" }), " Registrar Nuevo Doctor"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 border-b bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: doctorQuery,
								onChange: (e) => setDoctorQuery(e.target.value),
								placeholder: "Buscar doctor por nombre, especialidad o correo electrónico…",
								className: "pl-9 text-xs h-9"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: "text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Especialista" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Especialidad" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Contacto" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Horario Habitual" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "w-32",
									children: "Comisión (%)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Estado" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-right",
									children: "Acciones"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, {
							className: "text-xs",
							children: [filteredDocs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
								className: "hover:bg-muted/20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
											className: "h-9 w-9 border overflow-hidden shrink-0",
											children: d.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: d.avatarUrl,
												alt: d.name,
												className: "h-full w-full object-cover"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
												className: "font-bold text-xs",
												children: d.initials
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-foreground truncate",
												children: d.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[11px] text-muted-foreground",
												children: [d.years, " años de experiencia"]
											})]
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										className: "font-semibold text-[11px]",
										children: specialtyName(d.specialtyId)
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-0.5 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3 text-primary" }),
												" ",
												d.email
											]
										}), d.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3 text-emerald-600" }),
												" ",
												d.phone
											]
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-0.5 text-foreground font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-primary" }),
												" ",
												d.startTime || "08:00",
												" - ",
												d.endTime || "18:00"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground",
											children: d.daysAvailable ? d.daysAvailable.join(", ") : "Lun - Vie"
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											className: "h-8 w-18 text-xs font-bold",
											inputMode: "numeric",
											value: d.commission,
											onChange: (e) => setDocs((prev) => prev.map((x) => x.id === d.id ? {
												...x,
												commission: Number(e.target.value) || 0
											} : x))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-muted-foreground",
											children: "%"
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
											checked: d.active,
											"aria-label": `Activar ${d.name}`,
											onCheckedChange: (v) => setDocs((prev) => prev.map((x) => x.id === d.id ? {
												...x,
												active: v
											} : x))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("text-[11px] font-semibold", d.active ? "text-emerald-600" : "text-muted-foreground"),
											children: d.active ? "Activo" : "Inactivo"
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											onClick: () => handleEditDoctor(d),
											className: "h-8 text-xs font-semibold hover:border-primary hover:text-primary gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-3.5 w-3.5" }), " Editar"]
										})
									})
								]
							}, d.id)), filteredDocs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								colSpan: 7,
								className: "py-8 text-center text-muted-foreground",
								children: [
									"No se encontraron doctores con el criterio “",
									doctorQuery,
									"”."
								]
							}) })]
						})] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "gap-0 p-0 overflow-hidden border shadow-sm bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b p-5 bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-base font-bold text-foreground flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5 text-primary" }), " Administración de Pacientes"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Control de expedientes, estados de cuenta y citas agendadas por paciente"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: handleOpenNewPatient,
							className: "bg-primary text-primary-foreground font-bold text-xs h-9 shadow-sm hover:bg-primary/90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "mr-1.5 h-4 w-4" }), " Registrar Nuevo Paciente"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 border-b bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: patientQuery,
								onChange: (e) => setPatientQuery(e.target.value),
								placeholder: "Buscar paciente por cédula, nombre, apellido o N.º de historia clínica…",
								className: "pl-9 text-xs h-9"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: "text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Paciente" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Cédula" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Historia Clínica" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Contacto" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Dirección" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Estado" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-right",
									children: "Acciones"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, {
							className: "text-xs",
							children: [filteredPatients.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
								className: "hover:bg-muted/20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "font-bold text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "h-7 w-7 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs",
												children: [p.firstName[0], p.lastName[0]]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												p.firstName,
												" ",
												p.lastName
											] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "font-mono",
										children: p.cedula
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										className: "font-mono text-xs font-bold text-primary",
										children: p.record
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-0.5 text-muted-foreground text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-1 font-medium text-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3 text-emerald-600" }),
												" ",
												p.phone
											]
										}), p.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3" }),
												" ",
												p.email
											]
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "text-muted-foreground text-[11px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 text-primary" }),
												" ",
												p.address || "Quito, Ecuador"
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: cn("text-[10px] font-bold px-2 py-0.5", p.active !== false ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30" : "bg-muted text-muted-foreground"),
										children: p.active !== false ? "Activo" : "Inactivo"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-end gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "outline",
													onClick: () => handleEditPatient(p),
													className: "h-8 text-xs font-semibold gap-1",
													title: "Editar datos",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-3 w-3" }), " Editar"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "secondary",
													onClick: () => setViewingPatientApts(p),
													className: "h-8 text-xs font-semibold gap-1 text-primary",
													title: "Ver citas agendadas",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }), " Citas"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: p.active !== false ? "ghost" : "outline",
													onClick: () => togglePatientActive(p.id, p.active !== false),
													className: cn("h-8 text-xs font-semibold", p.active !== false ? "text-destructive hover:bg-destructive/10" : "text-emerald-600"),
													title: p.active !== false ? "Desactivar cuenta" : "Activar cuenta",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, { className: "h-3.5 w-3.5" })
												})
											]
										})
									})
								]
							}, p.id)), filteredPatients.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								colSpan: 7,
								className: "py-8 text-center text-muted-foreground",
								children: [
									"No se encontraron pacientes con el criterio “",
									patientQuery,
									"”."
								]
							}) })]
						})] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "gap-0 p-0 overflow-hidden border shadow-sm bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b p-5 bg-muted/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold text-foreground",
						children: "Verificación de Pagos por Transferencia"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-0.5",
						children: "Confirma o rechaza comprobantes bancarios subidos por los pacientes"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Paciente" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Concepto" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Banco" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Fecha" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "text-right",
								children: "Monto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Estado" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "text-right",
								children: "Acciones"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
						className: "text-xs",
						children: transfers.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: "hover:bg-muted/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "font-bold text-foreground",
									children: t.patient
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: t.concept }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-muted-foreground",
									children: t.bank
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-muted-foreground",
									children: t.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-right font-bold",
									children: currency(t.amount)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [
									t.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-[10px]",
										children: "Pendiente"
									}),
									t.status === "confirmed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-[10px]",
										children: "Confirmado"
									}),
									t.status === "rejected" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "destructive",
										className: "text-[10px]",
										children: "Rechazado"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-end gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											disabled: t.status === "confirmed",
											onClick: () => setStatus(t.id, "confirmed"),
											className: "h-8 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }), " Confirmar"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											disabled: t.status === "rejected",
											onClick: () => setStatus(t.id, "rejected"),
											className: "h-8 text-xs text-destructive hover:bg-destructive/10 gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" }), " Rechazar"]
										})]
									})
								})
							]
						}, t.id))
					})] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: openDocModal,
				onOpenChange: setOpenDocModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[92vh] overflow-y-auto sm:max-w-2xl bg-card border shadow-2xl space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
							className: "border-b pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
								className: "text-xl font-bold flex items-center gap-2 text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-5 w-5 text-primary" }), editingDocId ? "Editar Datos & Horarios del Doctor" : "Registrar Nuevo Doctor"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "text-xs text-muted-foreground",
								children: "Configura la información profesional y los turnos de atención para agendamiento."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
							defaultValue: "profile",
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
									className: "grid grid-cols-2 w-full h-10 p-1 bg-muted rounded-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "profile",
										className: "rounded-lg text-xs font-bold",
										children: "1. Datos Profesionales"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "schedule",
										className: "rounded-lg text-xs font-bold",
										children: "2. 📅 Horarios & Turnos"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									value: "profile",
									className: "space-y-4 mt-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "doc-name",
													className: "text-xs font-semibold",
													children: ["Nombre Completo del Médico ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "doc-name",
													value: docForm.name || "",
													onChange: (e) => setDocForm({
														...docForm,
														name: e.target.value
													}),
													placeholder: "Ej. Dr. Andrés Carrión",
													className: "h-9 text-xs"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "doc-spec",
													className: "text-xs font-semibold",
													children: ["Especialidad Médica ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													value: docForm.specialtyId || "",
													onValueChange: (v) => setDocForm({
														...docForm,
														specialtyId: v
													}),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
														id: "doc-spec",
														className: "h-9 text-xs",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Selecciona especialidad" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: specialties.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: s.id,
														className: "text-xs",
														children: s.name
													}, s.id)) })]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "doc-email",
													className: "text-xs font-semibold",
													children: ["Correo Electrónico ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "doc-email",
													type: "email",
													value: docForm.email || "",
													onChange: (e) => setDocForm({
														...docForm,
														email: e.target.value
													}),
													placeholder: "doctor@auravital.com",
													className: "h-9 text-xs"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "doc-phone",
													className: "text-xs font-semibold",
													children: "Teléfono / WhatsApp"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "doc-phone",
													value: docForm.phone || "",
													onChange: (e) => setDocForm({
														...docForm,
														phone: e.target.value
													}),
													placeholder: "+593 99 876 5432",
													className: "h-9 text-xs"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "doc-comm",
													className: "text-xs font-semibold",
													children: "Porcentaje de Comisión (%)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "doc-comm",
													type: "number",
													value: docForm.commission || 50,
													onChange: (e) => setDocForm({
														...docForm,
														commission: Number(e.target.value) || 0
													}),
													className: "h-9 text-xs"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "doc-years",
													className: "text-xs font-semibold",
													children: "Años de Experiencia Clínica"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "doc-years",
													type: "number",
													value: docForm.years || 5,
													onChange: (e) => setDocForm({
														...docForm,
														years: Number(e.target.value) || 0
													}),
													className: "h-9 text-xs"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1 sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "doc-avatar",
													className: "text-xs font-semibold",
													children: "URL de Foto de Perfil"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "doc-avatar",
													value: docForm.avatarUrl || "",
													onChange: (e) => setDocForm({
														...docForm,
														avatarUrl: e.target.value
													}),
													placeholder: "https://images.unsplash.com/...",
													className: "h-9 text-xs"
												})]
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									value: "schedule",
									className: "space-y-4 mt-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-muted/30 border rounded-2xl space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-xs font-bold text-foreground",
													children: "Días de Atención Disponibles:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid grid-cols-3 sm:grid-cols-6 gap-2",
													children: allWeekDays.map((day) => {
														const isSelected = (docForm.daysAvailable || []).includes(day);
														return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															type: "button",
															size: "sm",
															variant: isSelected ? "default" : "outline",
															onClick: () => toggleDayAvailable(day),
															className: cn("h-9 text-xs font-bold", isSelected && "bg-primary text-primary-foreground"),
															children: day.slice(0, 3)
														}, day);
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-3 sm:grid-cols-3 pt-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
															htmlFor: "doc-start",
															className: "text-xs font-semibold",
															children: "Hora de Inicio"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															id: "doc-start",
															value: docForm.startTime || "08:00",
															onChange: (e) => setDocForm({
																...docForm,
																startTime: e.target.value
															}),
															placeholder: "08:00",
															className: "h-9 text-xs font-mono"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
															htmlFor: "doc-end",
															className: "text-xs font-semibold",
															children: "Hora de Finalización"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															id: "doc-end",
															value: docForm.endTime || "18:00",
															onChange: (e) => setDocForm({
																...docForm,
																endTime: e.target.value
															}),
															placeholder: "18:00",
															className: "h-9 text-xs font-mono"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
															htmlFor: "doc-duration",
															className: "text-xs font-semibold",
															children: "Duración de Cita"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
															value: String(docForm.slotDuration || 30),
															onValueChange: (v) => setDocForm({
																...docForm,
																slotDuration: Number(v)
															}),
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
																id: "doc-duration",
																className: "h-9 text-xs",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "30 min" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																	value: "30",
																	children: "30 Minutos"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																	value: "45",
																	children: "45 Minutos"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																	value: "60",
																	children: "60 Minutos"
																})
															] })]
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-card p-3 border text-xs text-muted-foreground space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "font-bold text-foreground flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-600" }), " Sincronización Automática con Portal de Pacientes"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													"Al guardar, los turnos calculados estarán disponibles en el paso 2 del módulo de agendamiento para los pacientes interesados en ",
													specialtyName(docForm.specialtyId || ""),
													"."
												] })]
											})
										]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "pt-2 border-t",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setOpenDocModal(false),
								children: "Cancelar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: handleSaveDoctor,
								className: "bg-primary text-primary-foreground font-bold",
								children: "Guardar Doctor & Disponibilidad"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: openPatientModal,
				onOpenChange: setOpenPatientModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-lg bg-card border shadow-2xl space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
							className: "border-b pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
								className: "text-xl font-bold flex items-center gap-2 text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5 text-primary" }), editingPatientId ? "Editar Ficha del Paciente" : "Registrar Nuevo Paciente"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "text-xs text-muted-foreground",
								children: "Administración de datos filiatorios y contacto para el CRM clínico."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2 py-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "pat-fn",
										className: "text-xs font-semibold",
										children: "Nombres *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pat-fn",
										value: patientForm.firstName || "",
										onChange: (e) => setPatientForm({
											...patientForm,
											firstName: e.target.value
										}),
										placeholder: "Juan",
										className: "h-9 text-xs"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "pat-ln",
										className: "text-xs font-semibold",
										children: "Apellidos *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pat-ln",
										value: patientForm.lastName || "",
										onChange: (e) => setPatientForm({
											...patientForm,
											lastName: e.target.value
										}),
										placeholder: "Pérez",
										className: "h-9 text-xs"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "pat-cd",
										className: "text-xs font-semibold",
										children: "Cédula / ID *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pat-cd",
										value: patientForm.cedula || "",
										onChange: (e) => setPatientForm({
											...patientForm,
											cedula: e.target.value
										}),
										placeholder: "1712345678",
										className: "h-9 text-xs"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "pat-age",
										className: "text-xs font-semibold",
										children: "Edad (años)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pat-age",
										type: "number",
										value: patientForm.age || 30,
										onChange: (e) => setPatientForm({
											...patientForm,
											age: Number(e.target.value) || 0
										}),
										className: "h-9 text-xs"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "pat-phone",
										className: "text-xs font-semibold",
										children: "Teléfono / WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pat-phone",
										value: patientForm.phone || "",
										onChange: (e) => setPatientForm({
											...patientForm,
											phone: e.target.value
										}),
										placeholder: "+593 99 123 4567",
										className: "h-9 text-xs"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "pat-email",
										className: "text-xs font-semibold",
										children: "Correo Electrónico"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pat-email",
										type: "email",
										value: patientForm.email || "",
										onChange: (e) => setPatientForm({
											...patientForm,
											email: e.target.value
										}),
										placeholder: "paciente@correo.com",
										className: "h-9 text-xs"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1 sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "pat-addr",
										className: "text-xs font-semibold",
										children: "Dirección Domiciliaria"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pat-addr",
										value: patientForm.address || "",
										onChange: (e) => setPatientForm({
											...patientForm,
											address: e.target.value
										}),
										placeholder: "Av. 10 de Agosto y Mariana de Jesús, Quito",
										className: "h-9 text-xs"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "pt-2 border-t",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setOpenPatientModal(false),
								children: "Cancelar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: handleSavePatient,
								className: "bg-primary text-primary-foreground font-bold",
								children: "Guardar Paciente"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!viewingPatientApts,
				onOpenChange: (open) => !open && setViewingPatientApts(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-lg bg-card border shadow-2xl space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
							className: "border-b pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
								className: "text-lg font-bold flex items-center gap-2 text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-5 w-5 text-primary" }),
									"Citas de ",
									viewingPatientApts?.firstName,
									" ",
									viewingPatientApts?.lastName
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
								className: "text-xs text-muted-foreground",
								children: [
									"Historia: ",
									viewingPatientApts?.record,
									" · Cédula: ",
									viewingPatientApts?.cedula
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border p-3 bg-muted/40 space-y-1 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: "Consulta de Cardiología"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-[10px]",
											children: "Confirmada / Pago Aprobado"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "Fecha: 15 de Agosto, 2026 · 10:00 AM"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "Especialista: Dra. Valeria Ríos"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border p-3 bg-muted/40 space-y-1 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: "Fisioterapia & Camilla Térmica"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "text-[10px]",
											children: "Atendida / Finalizada"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "Fecha: 28 de Julio, 2026 · 09:30 AM"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "Especialista: Lcdo. Diego Suárez"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, {
							className: "pt-2 border-t",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => setViewingPatientApts(null),
								className: "w-full",
								children: "Cerrar"
							})
						})
					]
				})
			})
		]
	});
}
function AdminStore() {
	const [products] = (0, import_react.useState)(initialProducts);
	const [cart, setCart] = (0, import_react.useState)([]);
	const [buyer, setBuyer] = (0, import_react.useState)("");
	const add = (product) => setCart((prev) => {
		if (prev.find((l) => l.product.id === product.id)) return prev.map((l) => l.product.id === product.id ? {
			...l,
			qty: l.qty + 1
		} : l);
		return [...prev, {
			product,
			qty: 1
		}];
	});
	const dec = (id) => setCart((prev) => prev.flatMap((l) => l.product.id === id ? l.qty > 1 ? [{
		...l,
		qty: l.qty - 1
	}] : [] : [l]));
	const total = cart.reduce((a, l) => a + l.product.price * l.qty, 0);
	const revenue = products.reduce((a, p) => a + p.price * p.sold, 0);
	const profit = products.reduce((a, p) => a + (p.price - p.cost) * p.sold, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "gap-2 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold leading-snug",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "secondary",
								className: "shrink-0",
								children: ["Stock ", p.stock]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: p.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg font-semibold text-primary",
								children: currency(p.price)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								onClick: () => add(p),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Agregar"]
							})]
						})
					]
				}, p.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "h-fit gap-4 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4 text-primary" }), " Venta directa"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "buyer",
							children: "Paciente / Cliente"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "buyer",
							value: buyer,
							onChange: (e) => setBuyer(e.target.value),
							placeholder: "Nombre del paciente"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					cart.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-4 text-center text-sm text-muted-foreground",
						children: "Carrito vacío"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: cart.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium",
									children: l.product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [currency(l.product.price), " c/u"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "outline",
										className: "h-7 w-7",
										onClick: () => dec(l.product.id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-6 text-center text-sm",
										children: l.qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "outline",
										className: "h-7 w-7",
										onClick: () => add(l.product),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
									})
								]
							})]
						}, l.product.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "Total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl font-semibold",
							children: currency(total)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "flex-1",
							onClick: () => setCart([]),
							disabled: !cart.length,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), " Vaciar"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "flex-1",
							disabled: !cart.length,
							onClick: () => {
								toast.success(`Venta registrada por ${currency(total)}${buyer ? ` a ${buyer}` : ""}`);
								setCart([]);
								setBuyer("");
							},
							children: "Registrar venta"
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "gap-0 p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Reporte de ventas de productos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"Ingresos ",
						currency(revenue),
						" · Ganancia neta ",
						currency(profit)
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Producto" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Precio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Costo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Unidades"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Ingresos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Ganancia"
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-medium",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: currency(p.price)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right text-muted-foreground",
						children: currency(p.cost)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: p.sold
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: currency(p.price * p.sold)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right font-medium text-primary",
						children: currency((p.price - p.cost) * p.sold)
					})
				] }, p.id)) })] })
			})]
		})]
	});
}
var consultSalesData = [
	{
		id: "cs-1",
		datetime: "09 Ago 2026 · 08:30",
		patientName: "Juan Pérez",
		patientCedula: "1712345678",
		doctorName: "Dra. Valeria Ríos",
		specialty: "Cardiología",
		amount: 60,
		doctorShare: 36,
		clinicShare: 24,
		method: "Tarjeta",
		status: "Aprobado"
	},
	{
		id: "cs-2",
		datetime: "09 Ago 2026 · 09:00",
		patientName: "María López",
		patientCedula: "0923456781",
		doctorName: "Lcdo. Diego Suárez",
		specialty: "Fisioterapia",
		amount: 45,
		doctorShare: 24.75,
		clinicShare: 20.25,
		method: "Transferencia",
		status: "Aprobado"
	},
	{
		id: "cs-3",
		datetime: "08 Ago 2026 · 10:00",
		patientName: "Carlos Mendoza",
		patientCedula: "1103456789",
		doctorName: "Dra. Valeria Ríos",
		specialty: "Cardiología",
		amount: 60,
		doctorShare: 36,
		clinicShare: 24,
		method: "Tarjeta",
		status: "Aprobado"
	},
	{
		id: "cs-4",
		datetime: "08 Ago 2026 · 11:30",
		patientName: "Sofía Ramírez",
		patientCedula: "1720984532",
		doctorName: "Dr. Andrés Cabrera",
		specialty: "Cardiología",
		amount: 70,
		doctorShare: 42,
		clinicShare: 28,
		method: "Tarjeta",
		status: "Aprobado"
	},
	{
		id: "cs-5",
		datetime: "07 Ago 2026 · 15:00",
		patientName: "Elena Cruz",
		patientCedula: "1709845123",
		doctorName: "Dr. Roberto Silva",
		specialty: "Cardiología",
		amount: 50,
		doctorShare: 30,
		clinicShare: 20,
		method: "Transferencia",
		status: "Liquidado"
	},
	{
		id: "cs-6",
		datetime: "07 Ago 2026 · 16:30",
		patientName: "Roberto Noboa",
		patientCedula: "1711442233",
		doctorName: "Lcda. Karla Salazar",
		specialty: "Fisioterapia",
		amount: 45,
		doctorShare: 22.5,
		clinicShare: 22.5,
		method: "Tarjeta",
		status: "Liquidado"
	},
	{
		id: "cs-7",
		datetime: "06 Ago 2026 · 09:30",
		patientName: "Patricia Díaz",
		patientCedula: "0912445566",
		doctorName: "Dr. Mateo Benítez",
		specialty: "Nutrición",
		amount: 45,
		doctorShare: 24.75,
		clinicShare: 20.25,
		method: "Tarjeta",
		status: "Liquidado"
	},
	{
		id: "cs-8",
		datetime: "05 Ago 2026 · 11:00",
		patientName: "Fernando Vega",
		patientCedula: "1802334455",
		doctorName: "Lcda. Ana Terán",
		specialty: "Nutrición",
		amount: 40,
		doctorShare: 20,
		clinicShare: 20,
		method: "Transferencia",
		status: "Liquidado"
	},
	{
		id: "cs-9",
		datetime: "05 Ago 2026 · 14:00",
		patientName: "Diana Ortiz",
		patientCedula: "1723445566",
		doctorName: "Dr. Gabriel Paz",
		specialty: "Traumatología",
		amount: 65,
		doctorShare: 39,
		clinicShare: 26,
		method: "Tarjeta",
		status: "Liquidado"
	},
	{
		id: "cs-10",
		datetime: "04 Ago 2026 · 10:30",
		patientName: "Carmen Salazar",
		patientCedula: "1104556677",
		doctorName: "Dra. Sofía Morales",
		specialty: "Nutrición",
		amount: 45,
		doctorShare: 22.5,
		clinicShare: 22.5,
		method: "Tarjeta",
		status: "Liquidado"
	}
];
var productSalesData = [
	{
		id: "ps-1",
		date: "09 Ago 2026",
		invoice: "FAC-00891",
		customer: "Andrés Vaca",
		productName: "Camilla Terapéutica Térmica de Jade",
		quantity: 1,
		unitPrice: 1450,
		totalPrice: 1450,
		status: "Entregado"
	},
	{
		id: "ps-2",
		date: "08 Ago 2026",
		invoice: "FAC-00890",
		customer: "Dra. Mariana Cárdenas",
		productName: "Camilla Terapéutica Térmica de Jade",
		quantity: 2,
		unitPrice: 1450,
		totalPrice: 2900,
		status: "Entregado"
	},
	{
		id: "ps-3",
		date: "07 Ago 2026",
		invoice: "FAC-00889",
		customer: "Clínica San Rafael",
		productName: "Camilla Terapéutica Térmica de Jade",
		quantity: 3,
		unitPrice: 1450,
		totalPrice: 4350,
		status: "Entregado"
	},
	{
		id: "ps-4",
		date: "07 Ago 2026",
		invoice: "FAC-00888",
		customer: "Nadia Ríos",
		productName: "Cinturón de Electroestimulación EMS",
		quantity: 4,
		unitPrice: 120,
		totalPrice: 480,
		status: "Entregado"
	},
	{
		id: "ps-5",
		date: "06 Ago 2026",
		invoice: "FAC-00887",
		customer: "Centro Fisioterapia & Bienestar",
		productName: "Masajeador Térmico Espinal",
		quantity: 5,
		unitPrice: 210,
		totalPrice: 1050,
		status: "En Despacho"
	},
	{
		id: "ps-6",
		date: "05 Ago 2026",
		invoice: "FAC-00886",
		customer: "Juan Carlos Noboa",
		productName: "Cojín Térmico Cerámico Tourmalina",
		quantity: 8,
		unitPrice: 89,
		totalPrice: 712,
		status: "Entregado"
	},
	{
		id: "ps-7",
		date: "04 Ago 2026",
		invoice: "FAC-00885",
		customer: "Centro Kinesio Norte",
		productName: "Camilla Terapéutica Térmica de Jade",
		quantity: 2,
		unitPrice: 1450,
		totalPrice: 2900,
		status: "Entregado"
	},
	{
		id: "ps-8",
		date: "03 Ago 2026",
		invoice: "FAC-00884",
		customer: "Paulina Echeverría",
		productName: "Cinturón de Electroestimulación EMS",
		quantity: 10,
		unitPrice: 120,
		totalPrice: 1200,
		status: "Entregado"
	}
];
function AdminDashboard() {
	const consultRevenue = earnings.reduce((a, e) => a + e.amount, 0) * 4;
	const productRevenue = initialProducts.reduce((a, p) => a + p.price * p.sold, 0);
	const activeDoctors = doctors.filter((d) => d.active).length;
	const [openConsultModal, setOpenConsultModal] = (0, import_react.useState)(false);
	const [openProductModal, setOpenProductModal] = (0, import_react.useState)(false);
	const [consultQuery, setConsultQuery] = (0, import_react.useState)("");
	const [productQuery, setProductQuery] = (0, import_react.useState)("");
	const filteredConsults = (0, import_react.useMemo)(() => {
		const q = consultQuery.trim().toLowerCase();
		if (!q) return consultSalesData;
		return consultSalesData.filter((c) => c.patientName.toLowerCase().includes(q) || c.patientCedula.includes(q) || c.doctorName.toLowerCase().includes(q) || c.specialty.toLowerCase().includes(q));
	}, [consultQuery]);
	const filteredProducts = (0, import_react.useMemo)(() => {
		const q = productQuery.trim().toLowerCase();
		if (!q) return productSalesData;
		return productSalesData.filter((p) => p.customer.toLowerCase().includes(q) || p.productName.toLowerCase().includes(q) || p.invoice.toLowerCase().includes(q));
	}, [productQuery]);
	const handleExport = (reportType) => {
		toast.success(`¡Reporte financiero de ${reportType} exportado exitosamente a Excel / PDF!`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-extrabold sm:text-3xl text-foreground",
						children: "Control General"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "bg-primary/20 text-primary border border-primary/30 text-xs font-semibold",
						children: "Super Administrador"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs sm:text-sm text-muted-foreground",
					children: "Visión ejecutiva de operaciones clínicas, finanzas, comisiones y tienda terapéutica."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => handleExport("consultas"),
						className: "h-9 text-xs font-semibold gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Descargar Consolidado"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "button",
						tabIndex: 0,
						onClick: () => setOpenConsultModal(true),
						className: "cursor-pointer group transition-all duration-200 hover:scale-[1.02]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Ingresos por citas",
							value: currency(consultRevenue),
							hint: "Haz clic para ver desglose detallado ↗",
							icon: TrendingUp,
							accent: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "button",
						tabIndex: 0,
						onClick: () => setOpenProductModal(true),
						className: "cursor-pointer group transition-all duration-200 hover:scale-[1.02]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Ventas de productos",
							value: currency(productRevenue),
							hint: "Haz clic para ver reporte de ventas ↗",
							icon: Package
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Pacientes registrados",
						value: String(initialPatients.length + 128),
						hint: "Base activa en CRM",
						icon: Users
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Doctores activos",
						value: `${activeDoctors} / ${doctors.length}`,
						hint: "Personal médico en servicio",
						icon: Stethoscope
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "finance",
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "w-full justify-start overflow-x-auto h-11 p-1 bg-muted rounded-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "finance",
							className: "rounded-lg text-xs sm:text-sm font-semibold",
							children: "Finanzas y Gestión Operativa"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "store",
							className: "rounded-lg text-xs sm:text-sm font-semibold",
							children: "Tienda Terapéutica & Stock"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "finance",
						className: "mt-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminFinancials, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "store",
						className: "mt-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminStore, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: openConsultModal,
				onOpenChange: setOpenConsultModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[92vh] overflow-y-auto sm:max-w-4xl bg-card border shadow-2xl space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
							className: "border-b pb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
									className: "text-xl font-bold flex items-center gap-2 text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5 text-primary" }), " Desglose Financiero de Consultas Médicas"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
									className: "text-xs text-muted-foreground mt-0.5",
									children: "Liquidación de citas, división de comisiones profesionales e ingresos brutos de la clínica."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => handleExport("consultas"),
									className: "h-8 text-xs font-bold gap-1.5 border-primary/40 text-primary hover:bg-primary/10 self-start sm:self-auto shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "h-3.5 w-3.5" }), " 📄 Exportar Reporte"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border bg-muted/40 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] uppercase font-bold text-muted-foreground",
										children: "Total Cobrado (Bruto)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl font-black text-foreground",
										children: currency(consultRevenue)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] uppercase font-bold text-emerald-800 dark:text-emerald-300",
										children: "Honorarios Doctores (Liquidables)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl font-black text-emerald-700 dark:text-emerald-300",
										children: currency(consultRevenue * .58)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border bg-primary/10 border-primary/30 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] uppercase font-bold text-primary",
										children: "Margen Neto AuraVital (42%)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl font-black text-primary",
										children: currency(consultRevenue * .42)
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: consultQuery,
								onChange: (e) => setConsultQuery(e.target.value),
								placeholder: "Buscar por paciente, cédula, médico o especialidad…",
								className: "pl-9 text-xs h-9"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "gap-0 p-0 overflow-hidden border shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
									className: "text-xs bg-muted/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Fecha y Hora" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Paciente" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Doctor / Rama" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
											className: "text-right",
											children: "Monto Total"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Comisión (Doctor / Clínica)" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Método" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
											className: "text-center",
											children: "Estado"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
									className: "text-xs",
									children: filteredConsults.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
										className: "hover:bg-muted/20",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
												className: "font-mono text-muted-foreground text-[11px]",
												children: c.datetime
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-foreground",
												children: c.patientName
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground font-mono",
												children: c.patientCedula
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-foreground",
												children: c.doctorName
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "text-[10px] px-1 py-0",
												children: c.specialty
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
												className: "text-right font-black text-foreground",
												children: currency(c.amount)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[11px] font-medium space-y-0.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-emerald-600 dark:text-emerald-400 font-semibold",
													children: ["Dr: ", currency(c.doctorShare)]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-primary",
													children: ["Clínica: ", currency(c.clinicShare)]
												})]
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "secondary",
												className: "text-[10px] font-medium",
												children: c.method
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
												className: "text-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
													className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-[10px]",
													children: ["✓ ", c.status]
												})
											})
										]
									}, c.id))
								})] })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "pt-2 border-t flex items-center justify-between sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground font-medium",
								children: [
									"Mostrando ",
									filteredConsults.length,
									" transacciones registradas"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => setOpenConsultModal(false),
								className: "text-xs",
								children: "Cerrar"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: openProductModal,
				onOpenChange: setOpenProductModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[92vh] overflow-y-auto sm:max-w-4xl bg-card border shadow-2xl space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
							className: "border-b pb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
									className: "text-xl font-bold flex items-center gap-2 text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5 text-primary" }), " Reporte Detallado de Ventas de Equipos"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
									className: "text-xs text-muted-foreground mt-0.5",
									children: "Registro de facturación, despachos y ventas de tecnología terapéutica (Camillas de Jade, EMS, etc.)."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => handleExport("productos"),
									className: "h-8 text-xs font-bold gap-1.5 border-primary/40 text-primary hover:bg-primary/10 self-start sm:self-auto shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "h-3.5 w-3.5" }), " 📄 Exportar Reporte"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border bg-muted/40 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] uppercase font-bold text-muted-foreground",
										children: "Facturación Total Tienda"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl font-black text-foreground",
										children: currency(productRevenue)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border bg-primary/10 border-primary/30 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] uppercase font-bold text-primary",
										children: "Unidades Despachadas"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xl font-black text-primary",
										children: [productSalesData.reduce((a, b) => a + b.quantity, 0), " unidades"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] uppercase font-bold text-emerald-800 dark:text-emerald-300",
										children: "Camillas de Jade Vendidas"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl font-black text-emerald-700 dark:text-emerald-300",
										children: "9 Camillas"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: productQuery,
								onChange: (e) => setProductQuery(e.target.value),
								placeholder: "Buscar por comprador, producto o N.º de factura…",
								className: "pl-9 text-xs h-9"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "gap-0 p-0 overflow-hidden border shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
									className: "text-xs bg-muted/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Fecha / Factura" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Cliente / Comprador" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Producto Adquirido" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
											className: "text-center",
											children: "Cant."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
											className: "text-right",
											children: "P. Unitario"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
											className: "text-right",
											children: "Total Facturado"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
											className: "text-center",
											children: "Estado"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
									className: "text-xs",
									children: filteredProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
										className: "hover:bg-muted/20",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono font-bold text-foreground",
												children: p.invoice
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: p.date
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
												className: "font-semibold text-foreground",
												children: p.customer
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-primary truncate max-w-[200px]",
												children: p.productName
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
												className: "text-center font-bold",
												children: p.quantity
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
												className: "text-right font-mono text-muted-foreground",
												children: currency(p.unitPrice)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
												className: "text-right font-black text-foreground",
												children: currency(p.totalPrice)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
												className: "text-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
													className: cn("text-[10px] font-semibold gap-1", p.status === "Entregado" ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30" : "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3 w-3" }),
														" ",
														p.status
													]
												})
											})
										]
									}, p.id))
								})] })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "pt-2 border-t flex items-center justify-between sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground font-medium",
								children: [
									"Mostrando ",
									filteredProducts.length,
									" ventas de equipos registradas"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => setOpenProductModal(false),
								className: "text-xs",
								children: "Cerrar"
							})]
						})
					]
				})
			})
		]
	});
}
function AdminRoute() {
	const navigate = useNavigate();
	const { user, quickLogin } = useAuth();
	const handleQuickAdmin = () => {
		quickLogin("admin");
		navigate({ to: "/admin" });
	};
	if (!user || user.role !== "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border bg-card p-8 sm:p-12 text-center max-w-xl mx-auto space-y-5 shadow-lg my-8 animate-in fade-in duration-300",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-16 w-16 place-items-center rounded-2xl bg-amber-500/10 text-amber-600 mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-foreground",
						children: "Control Administrativo Protegido"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Área confidencial para la dirección y finanzas de AuraVital. Autentícate como administrador para verificar transferencias bancarias, gestionar médicos y liquidación de honorarios."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-center justify-center gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: handleQuickAdmin,
						className: "w-full sm:w-auto rounded-xl bg-primary text-primary-foreground font-bold px-6 h-10 shadow-md hover:bg-primary/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-4 w-4" }), "Entrar como Lic. Roberto Noboa (Admin)"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => navigate({
							to: "/login",
							search: {
								tab: "login",
								role: "admin"
							}
						}),
						className: "w-full sm:w-auto rounded-xl font-semibold px-5 h-10 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "mr-2 h-4 w-4" }), "Iniciar Sesión"]
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 animate-in fade-in duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboard, {})
	});
}
//#endregion
export { AdminRoute as component };
