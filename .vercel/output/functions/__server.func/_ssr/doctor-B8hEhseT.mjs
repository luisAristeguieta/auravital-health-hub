import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { $ as ExternalLink, C as Save, G as FlaskConical, J as FileText, N as MessageSquare, R as Lock, S as Search, U as HeartPulse, W as Grid3x3, X as FilePlusCorner, at as CircleCheckBig, c as UserCheck, ct as ChevronLeft, dt as Calendar, ft as CalendarRange, g as Sparkles, ht as Banknote, i as Wallet, it as CircleCheck, k as Percent, m as Stethoscope, nt as Clock, o as User, p as Thermometer, pt as CalendarDays, r as Wind, rt as CircleX, s as UserPlus, st as ChevronRight, u as TriangleAlert, vt as ArrowLeft, x as Send, yt as Activity, z as List } from "../_libs/lucide-react.mjs";
import { C as DialogFooter, M as cn, O as useAuth, S as DialogDescription, T as DialogTitle, _ as Label, a as bmi, b as Dialog, g as Separator, j as Button, l as earnings, o as bmiLabel, s as currency, u as initialPatients, v as Input, w as DialogHeader, x as DialogContent, y as Badge } from "./router-4_udcFnR.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BYfOmXtJ.mjs";
import { t as Card } from "./card-B3bKphNG.mjs";
import { a as TableHead, i as TableCell, n as Table, o as TableHeader, r as TableBody, s as TableRow, t as StatCard } from "./StatCard-Coej7ifZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctor-B8hEhseT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DoctorEarnings() {
	const day = earnings.filter((e) => e.datetime.startsWith("09 Ago"));
	const commission = (e) => e.amount * e.commissionPct / 100;
	const sum = (rows) => rows.reduce((a, e) => a + commission(e), 0);
	const week = earnings.slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Ganancias del día",
					value: currency(sum(day)),
					hint: `${day.length} consultas hoy`,
					icon: Wallet,
					accent: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Ganancias de la semana",
					value: currency(sum(week)),
					hint: `${week.length} consultas`,
					icon: CalendarRange
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Ganancias del mes",
					value: currency(sum(earnings)),
					hint: `${earnings.length} consultas`,
					icon: Banknote
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Comisión por consulta",
					value: "60%",
					hint: "Tarifa negociada vigente",
					icon: Percent
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "gap-0 p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Desglose de ingresos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Historial de pacientes atendidos y comisiones"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Paciente" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Fecha / Hora" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Valor consulta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Comisión"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Método" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Estado" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: earnings.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-medium",
						children: e.patient
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-muted-foreground",
						children: e.datetime
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: currency(e.amount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "text-right",
						children: [
							currency(commission(e)),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [
									"(",
									e.commissionPct,
									"%)"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						children: e.method
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: e.status === "Aprobado" ? "bg-success text-success-foreground" : "bg-warning text-warning-foreground",
						children: e.status
					}) })
				] }, e.id)) })] })
			})]
		})]
	});
}
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var availableLabTests = [
	"Biometría Hemática Completa",
	"Química Sanguínea (Glucosa, Urea, Creatinina)",
	"Perfil Lipídico (Colesterol Total, HDL, LDL, Triglicéridos)",
	"Electrólitos Séricos (Sodio, Potasio, Cloro)",
	"Pruebas de Función Hepática (TGO, TGP, FA)",
	"Perfil Tiroideo TSH & T4 Libre",
	"Electrocardiograma de 12 Derivaciones",
	"Hemoglobina Glicosilada (HbA1c)"
];
function PatientHistoryModal({ patient, open, onOpenChange, onSave, onReturnToAgenda }) {
	const [vitals, setVitals] = (0, import_react.useState)(patient?.vitals ?? null);
	const [note, setNote] = (0, import_react.useState)("");
	const [activeTab, setActiveTab] = (0, import_react.useState)("clinical");
	const [selectedTests, setSelectedTests] = (0, import_react.useState)([]);
	const [labJustification, setLabJustification] = (0, import_react.useState)("");
	const [labOrders, setLabOrders] = (0, import_react.useState)(patient?.labOrders ?? []);
	(0, import_react.useEffect)(() => {
		setVitals(patient?.vitals ?? null);
		setNote("");
		setSelectedTests([]);
		setLabJustification("");
		setLabOrders(patient?.labOrders ?? []);
	}, [patient]);
	if (!patient || !vitals) return null;
	const imc = bmi(vitals.weight, vitals.height);
	const toggleTest = (test) => {
		setSelectedTests((prev) => prev.includes(test) ? prev.filter((t) => t !== test) : [...prev, test]);
	};
	const handleSendLabOrder = () => {
		if (selectedTests.length === 0) {
			toast.error("Selecciona al menos un examen de laboratorio para prescribir");
			return;
		}
		const newOrder = {
			id: crypto.randomUUID(),
			date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			doctor: "Dra. Valeria Ríos (Cardiología)",
			tests: selectedTests,
			notes: labJustification.trim() || "Exámenes complementarios para control clínico.",
			status: "sent"
		};
		setLabOrders((prev) => [newOrder, ...prev]);
		setSelectedTests([]);
		setLabJustification("");
		toast.success("¡Orden de laboratorio prescrita y enviada al WhatsApp y correo del paciente!");
	};
	const field = (key, label, suffix) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
			htmlFor: key,
			className: "text-xs font-semibold",
			children: [
				label,
				" ",
				suffix ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted-foreground font-normal",
					children: [
						"(",
						suffix,
						")"
					]
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id: key,
			value: String(vitals[key]),
			onChange: (e) => setVitals({
				...vitals,
				[key]: key === "bloodPressure" ? e.target.value : Number(e.target.value) || 0
			}),
			className: "h-9 text-sm"
		})]
	});
	const handleReturn = () => {
		onOpenChange(false);
		if (onReturnToAgenda) onReturnToAgenda();
	};
	const labResults = patient.labResults || [
		{
			id: "lr-d1",
			testName: "Biometría Hemática",
			result: "Leucocitos 6.5 x10³/µL",
			reference: "4.5 - 11.0",
			status: "normal",
			date: "2026-07-15"
		},
		{
			id: "lr-d2",
			testName: "Glucosa en Ayunas",
			result: "95 mg/dL",
			reference: "70 - 100 mg/dL",
			status: "normal",
			date: "2026-07-15"
		},
		{
			id: "lr-d3",
			testName: "Colesterol Total",
			result: "235 mg/dL (ELEVADO)",
			reference: "< 200 mg/dL",
			status: "abnormal",
			date: "2026-07-15"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] overflow-y-auto sm:max-w-3xl bg-card border shadow-2xl space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
					className: "border-b pb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-xl font-bold flex items-center gap-2 text-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-primary" }),
								" ",
								patient.firstName,
								" ",
								patient.lastName
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "text-xs text-muted-foreground mt-1",
							children: [
								"Cédula ",
								patient.cedula,
								" · ",
								patient.age,
								" años · Historia Clínica ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-primary",
									children: patient.record
								}),
								" · Tel: ",
								patient.phone
							]
						})] }), onReturnToAgenda && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: handleReturn,
							className: "self-start sm:self-auto h-8 text-xs font-semibold hover:border-primary hover:text-primary shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-1.5 h-3.5 w-3.5" }), " Volver a la Agenda del Día"]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					value: activeTab,
					onValueChange: (v) => setActiveTab(v),
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "grid grid-cols-2 w-full h-10 p-1 bg-muted rounded-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "clinical",
								className: "rounded-lg text-xs font-bold flex items-center justify-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-4 w-4 text-rose-500" }), " Signos Vitales & Consulta"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "labs",
								className: "rounded-lg text-xs font-bold flex items-center justify-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "h-4 w-4 text-primary" }),
									" Exámenes de Laboratorio (",
									labResults.length,
									")"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "clinical",
							className: "space-y-4 mt-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-4 w-4 text-primary" }), " Registro de Signos Vitales"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-3",
										children: [
											field("height", "Altura", "cm"),
											field("weight", "Peso", "kg"),
											field("bloodPressure", "Presión arterial", "mmHg"),
											field("heartRate", "Frecuencia cardíaca", "lpm"),
											field("temperature", "Temperatura", "°C"),
											field("oxygen", "Saturación O₂", "%")
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-xl bg-muted/60 p-3.5 border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase font-bold text-muted-foreground",
										children: "IMC Calculado Automáticamente"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-2xl font-black text-foreground",
										children: imc
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: "bg-primary text-primary-foreground font-bold text-xs px-3 py-1",
										children: bmiLabel(imc)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "note",
										className: "text-xs font-bold text-foreground",
										children: "Observaciones Médicas / Evolución de la Consulta Actual (Dra. Valeria Ríos)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "note",
										rows: 3,
										value: note,
										onChange: (e) => setNote(e.target.value),
										placeholder: "Escribe el diagnóstico, notas de evolución o prescripción para la consulta de hoy…",
										className: "text-sm rounded-xl"
									})]
								}),
								patient.notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2.5 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-bold text-foreground flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-primary" }), " Historial de Consultas Previas & Médicos Tratantes"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-2.5 max-h-48 overflow-y-auto pr-1",
										children: patient.notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-primary/20 bg-muted/40 p-3 text-xs space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center justify-between gap-1 text-[11px] text-muted-foreground border-b pb-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-foreground",
													children: n.date
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-primary font-bold flex items-center gap-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-3.5 w-3.5" }),
														"Atendido por: ",
														n.doctorName || "Dra. Valeria Ríos",
														" (",
														n.doctorSpecialty || "Cardiología",
														")"
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-foreground/90 leading-relaxed",
												children: n.text
											})]
										}, n.id))
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "labs",
							className: "space-y-5 mt-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
											className: "text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "h-4 w-4 text-primary" }), " 🧪 Resultados de Laboratorio Clínico"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "text-[11px]",
											children: "Última actualización: Julio / Agosto 2026"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
										className: "p-0 overflow-hidden border shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b bg-muted/50 text-[11px]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
													className: "font-bold",
													children: "Examen"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
													className: "font-bold",
													children: "Resultado"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
													className: "font-bold",
													children: "Valor de Referencia"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
													className: "font-bold text-center",
													children: "Estado"
												})
											]
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
											className: "text-xs",
											children: labResults.map((lr) => {
												const isAbnormal = lr.status === "abnormal";
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
													className: cn(isAbnormal && "bg-destructive/5"),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
															className: "font-semibold text-foreground",
															children: lr.testName
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
															className: cn("font-bold", isAbnormal ? "text-destructive" : "text-foreground"),
															children: lr.result
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
															className: "text-muted-foreground font-mono text-[11px]",
															children: lr.reference
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
															className: "text-center",
															children: isAbnormal ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
																variant: "destructive",
																className: "text-[10px] font-bold px-2 py-0.5 gap-1 bg-[#D00B2B] text-white",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3 w-3" }), " Alterado / Elevado"]
															}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
																className: "text-[10px] font-semibold px-2 py-0.5 gap-1 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-3 w-3" }), " En Rango / Normal"]
															})
														})
													]
												}, lr.id);
											})
										})] })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "p-4 bg-muted/30 border border-primary/20 rounded-2xl space-y-3.5 shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b pb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
												className: "text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePlusCorner, { className: "h-4 w-4 text-primary" }), " 📋 Prescribir Nueva Orden de Laboratorio"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												className: "bg-primary/20 text-primary border-primary/30 text-[10px]",
												children: "Firma Digital Dra. Valeria Ríos"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-bold text-foreground",
												children: "Selecciona los análisis solicitados:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid gap-2 sm:grid-cols-2",
												children: availableLabTests.map((test) => {
													const isChecked = selectedTests.includes(test);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														role: "button",
														tabIndex: 0,
														onClick: () => toggleTest(test),
														className: cn("flex items-center gap-2.5 p-2 rounded-xl border text-xs cursor-pointer select-none transition-all", isChecked ? "bg-primary/10 border-primary text-primary font-bold shadow-xs" : "bg-card border-border hover:border-primary/50 text-foreground"),
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: cn("h-4 w-4 rounded flex items-center justify-center border text-[10px]", isChecked ? "bg-primary text-primary-foreground border-primary" : "border-muted-foreground/50 bg-card"),
															children: isChecked ? "✓" : ""
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "truncate",
															children: test
														})]
													}, test);
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "justification",
												className: "text-xs font-bold text-foreground",
												children: "Indicaciones / Justificación Médica"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "justification",
												value: labJustification,
												onChange: (e) => setLabJustification(e.target.value),
												placeholder: "Ej. Control de perfil lipídico y monitoreo de función renal en ayunas…",
												className: "text-xs h-9 bg-card"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-[11px] text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Se enviará notificación automática por WhatsApp y Correo" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												onClick: handleSendLabOrder,
												className: "bg-primary text-primary-foreground font-bold text-xs shadow-md hover:bg-primary/90 h-9",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-1.5 h-3.5 w-3.5" }), " Generar y Enviar Orden al Paciente"]
											})]
										})
									]
								}),
								labOrders.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold text-foreground",
										children: "Órdenes de Laboratorio Emitidas Previamente"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-2",
										children: labOrders.map((ord) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border bg-card p-3 text-xs space-y-1 shadow-2xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-bold text-primary",
														children: [
															ord.date,
															" · ",
															ord.doctor
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-[10px]",
														children: "✓ Emitida y Notificada"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-foreground font-medium",
													children: ["Análisis: ", ord.tests.join(", ")]
												}),
												ord.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-muted-foreground text-[11px] italic",
													children: [
														"“",
														ord.notes,
														"”"
													]
												})
											]
										}, ord.id))
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "gap-2 sm:gap-0 pt-2 border-t",
					children: [
						onReturnToAgenda && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: handleReturn,
							className: "text-xs mr-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-1.5 h-3.5 w-3.5" }), " Volver a Agenda"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => onOpenChange(false),
							className: "text-xs",
							children: "Cerrar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => {
								onSave(patient.id, vitals, note.trim());
								toast.success("Historia clínica y evolución actualizadas con éxito.");
								onOpenChange(false);
							},
							className: "bg-primary text-primary-foreground font-bold text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-1.5 h-3.5 w-3.5" }), " Guardar Cambios en Expediente"]
						})
					]
				})
			]
		})
	});
}
var initialForm = {
	firstName: "",
	lastName: "",
	cedula: "",
	age: "",
	phone: "",
	reason: "Consulta general / Triage inicial",
	height: 170,
	weight: 70,
	bloodPressure: "120/80",
	heartRate: 72,
	temperature: 36.5,
	oxygen: 98
};
function QuickPatientModal({ open, onOpenChange, onPatientCreated }) {
	const [form, setForm] = (0, import_react.useState)(initialForm);
	const calculatedImc = (0, import_react.useMemo)(() => {
		const w = Number(form.weight) || 70;
		const h = Number(form.height) || 170;
		return bmi(w, h);
	}, [form.weight, form.height]);
	const imcStatus = (0, import_react.useMemo)(() => {
		return bmiLabel(calculatedImc);
	}, [calculatedImc]);
	const handleSave = () => {
		if (!form.firstName.trim() || !form.lastName.trim() || !form.cedula.trim()) {
			toast.error("Nombres, apellidos y cédula son campos obligatorios");
			return;
		}
		const vitals = {
			height: Number(form.height) || 170,
			weight: Number(form.weight) || 70,
			bloodPressure: form.bloodPressure.trim() || "120/80",
			heartRate: Number(form.heartRate) || 72,
			temperature: Number(form.temperature) || 36.5,
			oxygen: Number(form.oxygen) || 98
		};
		const newPatient = {
			id: crypto.randomUUID(),
			firstName: form.firstName.trim(),
			lastName: form.lastName.trim(),
			cedula: form.cedula.trim(),
			age: Number(form.age) || 30,
			record: `HC-00${Math.floor(140 + Math.random() * 800)}`,
			phone: form.phone.trim() || "+593 99 000 0000",
			vitals,
			notes: [{
				id: crypto.randomUUID(),
				date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				text: `Ingreso por Triage / Registro rápido. Motivo: ${form.reason.trim() || "Consulta médica"}. Signos vitales iniciales tomados en recepción.`,
				doctorName: "Dra. Valeria Ríos",
				doctorSpecialty: "Cardiología"
			}],
			labResults: [],
			labOrders: []
		};
		onPatientCreated(newPatient, form.reason.trim() || "Consulta médica");
		setForm(initialForm);
		onOpenChange(false);
		toast.success(`Paciente ${newPatient.firstName} ${newPatient.lastName} registrado con triage y agregado a la Agenda`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] overflow-y-auto sm:max-w-2xl bg-card border shadow-2xl space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "text-xl font-bold flex items-center gap-2 text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "h-5 w-5 text-primary" }), " Registro Rápido & Triage de Paciente"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs text-muted-foreground",
						children: "Ingreso de datos filiatorios y toma de signos vitales iniciales para atención en consultorio."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 py-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 border-b pb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4 text-primary" }), " 1. Datos Personales del Paciente"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "q-fn",
											className: "text-xs font-semibold",
											children: ["Nombres ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "q-fn",
											value: form.firstName,
											onChange: (e) => setForm({
												...form,
												firstName: e.target.value
											}),
											placeholder: "Ej. Carlos",
											className: "h-9 text-xs"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "q-ln",
											className: "text-xs font-semibold",
											children: ["Apellidos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "q-ln",
											value: form.lastName,
											onChange: (e) => setForm({
												...form,
												lastName: e.target.value
											}),
											placeholder: "Ej. Mendoza",
											className: "h-9 text-xs"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "q-cd",
											className: "text-xs font-semibold",
											children: ["Cédula / Documento ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "q-cd",
											value: form.cedula,
											onChange: (e) => setForm({
												...form,
												cedula: e.target.value
											}),
											placeholder: "1712345678",
											className: "h-9 text-xs"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "q-ag",
											className: "text-xs font-semibold",
											children: "Edad (años)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "q-ag",
											inputMode: "numeric",
											value: form.age,
											onChange: (e) => setForm({
												...form,
												age: e.target.value
											}),
											placeholder: "38",
											className: "h-9 text-xs"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1 sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "q-ph",
											className: "text-xs font-semibold",
											children: "Teléfono / WhatsApp"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "q-ph",
											value: form.phone,
											onChange: (e) => setForm({
												...form,
												phone: e.target.value
											}),
											placeholder: "+593 99 123 4567",
											className: "h-9 text-xs"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1 sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "q-rs",
											className: "text-xs font-semibold",
											children: "Motivo de Consulta / Síntomas"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "q-rs",
											value: form.reason,
											onChange: (e) => setForm({
												...form,
												reason: e.target.value
											}),
											placeholder: "Ej. Chequeo de presión arterial y dolor precordial leve…",
											className: "h-9 text-xs"
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b pb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-4 w-4 text-rose-500" }), " 2. Signos Vitales Iniciales (Triage de Recepción)"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-[10px]",
										children: "Enfermería / Triage"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "q-ht",
												className: "text-xs font-semibold",
												children: "Altura (cm)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "q-ht",
												type: "number",
												value: form.height,
												onChange: (e) => setForm({
													...form,
													height: Number(e.target.value) || 0
												}),
												className: "h-9 text-xs"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "q-wt",
												className: "text-xs font-semibold",
												children: "Peso (kg)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "q-wt",
												type: "number",
												value: form.weight,
												onChange: (e) => setForm({
													...form,
													weight: Number(e.target.value) || 0
												}),
												className: "h-9 text-xs"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "q-bp",
												className: "text-xs font-semibold",
												children: "Presión Arterial (mmHg)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "q-bp",
												value: form.bloodPressure,
												onChange: (e) => setForm({
													...form,
													bloodPressure: e.target.value
												}),
												placeholder: "120/80",
												className: "h-9 text-xs font-mono font-semibold"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												htmlFor: "q-hr",
												className: "text-xs font-semibold flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-3 w-3 text-rose-500" }), " Frec. Cardíaca (lpm)"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "q-hr",
												type: "number",
												value: form.heartRate,
												onChange: (e) => setForm({
													...form,
													heartRate: Number(e.target.value) || 0
												}),
												className: "h-9 text-xs"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												htmlFor: "q-tp",
												className: "text-xs font-semibold flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thermometer, { className: "h-3 w-3 text-amber-500" }), " Temperatura (°C)"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "q-tp",
												type: "number",
												step: "0.1",
												value: form.temperature,
												onChange: (e) => setForm({
													...form,
													temperature: Number(e.target.value) || 0
												}),
												className: "h-9 text-xs"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												htmlFor: "q-ox",
												className: "text-xs font-semibold flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { className: "h-3 w-3 text-sky-500" }), " Saturación O₂ (SpO2 %)"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "q-ox",
												type: "number",
												value: form.oxygen,
												onChange: (e) => setForm({
													...form,
													oxygen: Number(e.target.value) || 0
												}),
												className: "h-9 text-xs"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-xl bg-muted/60 p-3 border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] uppercase font-bold text-muted-foreground",
										children: "Índice de Masa Corporal (IMC) Calculado en Tiempo Real:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl font-black text-foreground",
										children: calculatedImc
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: cn("font-bold text-xs px-3 py-1", imcStatus === "Normal" && "bg-emerald-600 text-white", imcStatus === "Sobrepeso" && "bg-amber-500 text-white", imcStatus === "Obesidad" && "bg-[#D00B2B] text-white", imcStatus === "Bajo peso" && "bg-blue-600 text-white"),
										children: imcStatus
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "gap-2 sm:gap-0 pt-2 border-t",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						className: "text-xs",
						children: "Cancelar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: handleSave,
						className: "bg-primary text-primary-foreground font-bold text-xs shadow-md hover:bg-primary/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-1.5 h-3.5 w-3.5" }), " Guardar Paciente & Enviar a Consulta"]
					})]
				})
			]
		})
	});
}
var initialWeekAppointments = [
	{
		id: "apt-w1",
		patient: "Juan Pérez",
		dayIndex: 0,
		dayDate: 10,
		dayMonthName: "Ago",
		time: "08:30",
		timeHour: "08:00",
		reason: "Control cardiológico",
		specialty: "Cardiología",
		status: "attended",
		phone: "+593 99 812 4455",
		record: "HC-00124"
	},
	{
		id: "apt-w2",
		patient: "Carlos Mendoza",
		dayIndex: 0,
		dayDate: 10,
		dayMonthName: "Ago",
		time: "10:00",
		timeHour: "10:00",
		reason: "Presión arterial y fatiga",
		specialty: "Cardiología",
		status: "waiting",
		phone: "+593 96 220 7781",
		record: "HC-00126"
	},
	{
		id: "apt-w3",
		patient: "Elena Cruz",
		dayIndex: 0,
		dayDate: 10,
		dayMonthName: "Ago",
		time: "14:30",
		timeHour: "14:00",
		reason: "Seguimiento post tratamiento",
		specialty: "Cardiología",
		status: "waiting",
		phone: "+593 99 443 2210",
		record: "HC-00129"
	},
	{
		id: "apt-w4",
		patient: "María López",
		dayIndex: 1,
		dayDate: 11,
		dayMonthName: "Ago",
		time: "09:00",
		timeHour: "09:00",
		reason: "Chequeo preventivo anual",
		specialty: "Cardiología",
		status: "attended",
		phone: "+593 98 445 1120",
		record: "HC-00125"
	},
	{
		id: "apt-w5",
		patient: "Sofía Ramírez",
		dayIndex: 1,
		dayDate: 11,
		dayMonthName: "Ago",
		time: "11:00",
		timeHour: "11:00",
		reason: "Primera consulta - Palpitaciones",
		specialty: "Cardiología",
		status: "waiting",
		phone: "+593 97 112 3344",
		record: "HC-00127"
	},
	{
		id: "apt-w6",
		patient: "Roberto Noboa",
		dayIndex: 2,
		dayDate: 12,
		dayMonthName: "Ago",
		time: "10:30",
		timeHour: "10:00",
		reason: "Electrocardiograma de esfuerzo",
		specialty: "Cardiología",
		status: "waiting",
		phone: "+593 99 900 1122",
		record: "HC-00130"
	},
	{
		id: "apt-w7",
		patient: "Patricia Díaz",
		dayIndex: 2,
		dayDate: 12,
		dayMonthName: "Ago",
		time: "15:00",
		timeHour: "15:00",
		reason: "Control de arritmia",
		specialty: "Cardiología",
		status: "attended",
		phone: "+593 98 776 5544",
		record: "HC-00131"
	},
	{
		id: "apt-w8",
		patient: "Fernando Vega",
		dayIndex: 3,
		dayDate: 13,
		dayMonthName: "Ago",
		time: "08:30",
		timeHour: "08:00",
		reason: "Auscultación y ecocardiograma",
		specialty: "Cardiología",
		status: "waiting",
		phone: "+593 99 123 9988",
		record: "HC-00132"
	},
	{
		id: "apt-w9",
		patient: "Diana Ortiz",
		dayIndex: 3,
		dayDate: 13,
		dayMonthName: "Ago",
		time: "16:00",
		timeHour: "16:00",
		reason: "Revisión de mapa de presión",
		specialty: "Cardiología",
		status: "waiting",
		phone: "+593 95 334 2211",
		record: "HC-00133"
	},
	{
		id: "apt-w10",
		patient: "Gabriel Castillo",
		dayIndex: 4,
		dayDate: 14,
		dayMonthName: "Ago",
		time: "09:30",
		timeHour: "09:00",
		reason: "Valoración prequirúrgica",
		specialty: "Cardiología",
		status: "absent",
		phone: "+593 97 889 0011",
		record: "HC-00134"
	},
	{
		id: "apt-w11",
		patient: "Carmen Salazar",
		dayIndex: 4,
		dayDate: 14,
		dayMonthName: "Ago",
		time: "11:00",
		timeHour: "11:00",
		reason: "Control de medicación",
		specialty: "Cardiología",
		status: "attended",
		phone: "+593 98 221 4455",
		record: "HC-00135"
	},
	{
		id: "apt-w12",
		patient: "Jorge Molina",
		dayIndex: 5,
		dayDate: 15,
		dayMonthName: "Ago",
		time: "10:00",
		timeHour: "10:00",
		reason: "Revisión interconsulta",
		specialty: "Cardiología",
		status: "waiting",
		phone: "+593 99 554 3322",
		record: "HC-00136"
	}
];
var weekDays = [
	{
		label: "Lun",
		date: 10,
		full: "Lunes 10 de Agosto"
	},
	{
		label: "Mar",
		date: 11,
		full: "Martes 11 de Agosto"
	},
	{
		label: "Mié",
		date: 12,
		full: "Miércoles 12 de Agosto"
	},
	{
		label: "Jue",
		date: 13,
		full: "Jueves 13 de Agosto"
	},
	{
		label: "Vie",
		date: 14,
		full: "Viernes 14 de Agosto"
	},
	{
		label: "Sáb",
		date: 15,
		full: "Sábado 15 de Agosto"
	}
];
var timeGridHours = [
	"08:00",
	"09:00",
	"10:00",
	"11:00",
	"14:00",
	"15:00",
	"16:00",
	"17:00"
];
var emptyForm = {
	firstName: "",
	lastName: "",
	cedula: "",
	age: "",
	phone: ""
};
function DoctorDashboard() {
	const [patients, setPatients] = (0, import_react.useState)(initialPatients);
	const [appointments, setAppointments] = (0, import_react.useState)(initialWeekAppointments);
	const [activeTab, setActiveTab] = (0, import_react.useState)("agenda");
	const [agendaMode, setAgendaMode] = (0, import_react.useState)("week");
	const [selectedDayIndex, setSelectedDayIndex] = (0, import_react.useState)(0);
	const [detailApt, setDetailApt] = (0, import_react.useState)(null);
	const [query, setQuery] = (0, import_react.useState)("");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [openHistory, setOpenHistory] = (0, import_react.useState)(false);
	const [openNew, setOpenNew] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return patients;
		return patients.filter((p) => [
			p.firstName,
			p.lastName,
			p.cedula,
			p.record
		].some((v) => v.toLowerCase().includes(q)));
	}, [patients, query]);
	const counts = {
		total: appointments.length,
		attended: appointments.filter((a) => a.status === "attended").length,
		waiting: appointments.filter((a) => a.status === "waiting").length,
		absent: appointments.filter((a) => a.status === "absent").length
	};
	const updateStatus = (id, newStatus) => {
		setAppointments((prev) => prev.map((a) => a.id === id ? {
			...a,
			status: newStatus
		} : a));
		if (detailApt && detailApt.id === id) setDetailApt({
			...detailApt,
			status: newStatus
		});
		const label = newStatus === "attended" ? "Atendido" : newStatus === "absent" ? "No asistió" : "En espera";
		toast.success(`Estado de la cita actualizado a "${label}"`);
	};
	const handleOpenPatientRecord = (patientNameOrRecord) => {
		const clean = patientNameOrRecord.trim().toLowerCase();
		const found = patients.find((p) => (p.firstName + " " + p.lastName).toLowerCase().includes(clean) || p.record.toLowerCase() === clean || p.cedula === clean || clean.includes(p.firstName.toLowerCase()));
		if (found) {
			setSelected(found);
			setQuery(found.firstName);
			setActiveTab("records");
			setOpenHistory(true);
			setDetailApt(null);
			toast.info(`Abriendo historia clínica de ${found.firstName} ${found.lastName}`);
		} else {
			setQuery(patientNameOrRecord);
			setActiveTab("records");
			toast.info(`Buscando expediente para ${patientNameOrRecord}`);
		}
	};
	const saveHistory = (id, vitals, note) => {
		setPatients((prev) => prev.map((p) => p.id === id ? {
			...p,
			vitals,
			notes: note ? [{
				id: crypto.randomUUID(),
				date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				text: note
			}, ...p.notes] : p.notes
		} : p));
	};
	const handlePatientCreated = (newPatient, reason) => {
		setPatients((prev) => [newPatient, ...prev]);
		const newApt = {
			id: `apt-${crypto.randomUUID()}`,
			patient: `${newPatient.firstName} ${newPatient.lastName}`,
			dayIndex: 0,
			dayDate: 10,
			dayMonthName: "Ago",
			time: "11:30",
			timeHour: "11:00",
			reason: reason || "Consulta médica / Triage de recepción",
			specialty: "Cardiología",
			status: "waiting",
			phone: newPatient.phone,
			record: newPatient.record
		};
		setAppointments((prev) => [newApt, ...prev]);
		setActiveTab("agenda");
	};
	const currentDayApts = appointments.filter((a) => a.dayIndex === selectedDayIndex);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "truncate text-2xl font-extrabold sm:text-3xl text-foreground",
								children: "Panel del Doctor"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								className: "bg-primary/20 text-primary border border-primary/30 text-xs font-semibold",
								children: "En Servicio"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-muted-foreground mt-0.5",
							children: "Dra. Valeria Ríos · Especialista en Cardiología & CRM Clínico"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setOpenNew(true),
						className: "rounded-xl bg-primary text-primary-foreground font-bold shadow-sm hover:bg-primary/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "mr-2 h-4 w-4" }), " Registro Rápido de Paciente"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickPatientModal, {
						open: openNew,
						onOpenChange: setOpenNew,
						onPatientCreated: handlePatientCreated
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				value: activeTab,
				onValueChange: (v) => setActiveTab(v),
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "w-full justify-start overflow-x-auto h-11 p-1 bg-muted rounded-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "agenda",
								className: "rounded-lg text-xs sm:text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "mr-2 h-4 w-4" }), " Agenda del día"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "records",
								className: "rounded-lg text-xs sm:text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mr-2 h-4 w-4" }), " Historias Clínicas"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "earnings",
								className: "rounded-lg text-xs sm:text-sm font-semibold",
								children: "Mis Ganancias"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "agenda",
						className: "space-y-6 mt-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										label: "Citas agendadas en total",
										value: String(counts.total),
										icon: CalendarDays,
										accent: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										label: "Pacientes atendidos",
										value: String(counts.attended),
										icon: CircleCheck
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										label: "En espera de atención",
										value: String(counts.waiting),
										icon: Clock
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										label: "Ausentes / cancelados",
										value: String(counts.absent),
										icon: CircleX
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-4 bg-card border shadow-sm flex flex-col md:flex-row items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 w-full md:w-auto justify-between md:justify-start",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1 border rounded-lg p-1 bg-muted/30",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "sm",
												onClick: () => {
													if (agendaMode === "day") setSelectedDayIndex((prev) => prev > 0 ? prev - 1 : weekDays.length - 1);
													else toast.info("Navegando a la semana previa.");
												},
												className: "h-8 w-8 p-0",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "sm",
												onClick: () => {
													if (agendaMode === "day") setSelectedDayIndex((prev) => prev < weekDays.length - 1 ? prev + 1 : 0);
													else toast.info("Navegando a la siguiente semana.");
												},
												className: "h-8 w-8 p-0",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-bold text-foreground",
												children: agendaMode === "day" ? weekDays[selectedDayIndex]?.full ?? "" : agendaMode === "week" ? "Semana del 10 al 15 de Agosto, 2026" : "Agosto 2026"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											size: "sm",
											onClick: () => {
												setSelectedDayIndex(0);
												toast.success("Mostrando agenda actual");
											},
											className: "h-8 text-xs font-semibold",
											children: "Hoy"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 p-1 bg-muted rounded-xl border self-end md:self-auto",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setAgendaMode("day"),
											className: cn("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all", agendaMode === "day" ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-3.5 w-3.5" }), " Día"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setAgendaMode("week"),
											className: cn("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all", agendaMode === "week" ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "h-3.5 w-3.5" }), " Semana"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setAgendaMode("month"),
											className: cn("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all", agendaMode === "month" ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5" }), " Mes"]
										})
									]
								})]
							}),
							agendaMode === "week" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "p-0 overflow-hidden border shadow-md bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full border-collapse text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b bg-muted/60 text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-3 text-left w-20 font-bold border-r",
												children: "Horario"
											}), weekDays.map((d, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
												className: "p-3 text-center min-w-[150px] border-r last:border-r-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-[11px] uppercase font-bold text-muted-foreground",
													children: d.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("inline-block text-sm font-extrabold mt-0.5 rounded-full px-2 py-0.5", idx === 0 ? "bg-primary text-primary-foreground" : "text-foreground"),
													children: d.date
												})]
											}, d.label))]
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y",
											children: timeGridHours.map((hour) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "hover:bg-muted/10 transition-colors",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 font-mono font-bold text-muted-foreground border-r bg-muted/20 align-top",
													children: hour
												}), weekDays.map((_, dayIdx) => {
													const slotApts = appointments.filter((a) => a.dayIndex === dayIdx && a.timeHour === hour);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-1.5 border-r last:border-r-0 align-top min-h-[70px] h-20",
														children: slotApts.map((apt) => {
															const isAttended = apt.status === "attended";
															const isAbsent = apt.status === "absent";
															const isWaiting = apt.status === "waiting";
															return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: cn("group relative rounded-xl p-2 mb-1.5 text-left border shadow-sm transition-all duration-200 cursor-pointer select-none", isAttended && "bg-emerald-500/15 border-emerald-500/30 text-emerald-800 dark:text-emerald-300 hover:border-emerald-500 hover:shadow-md", isWaiting && "bg-rose-500/15 border-primary/40 text-foreground hover:border-primary hover:shadow-md hover:scale-[1.02]", isAbsent && "bg-slate-500/15 border-slate-400/30 text-muted-foreground opacity-60 line-through"),
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center justify-between gap-1",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																			className: "font-mono text-[10px] font-bold text-primary flex items-center gap-1",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
																				" ",
																				apt.time
																			]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																			variant: "outline",
																			className: cn("text-[9px] px-1 py-0 border-transparent", isAttended && "bg-emerald-600 text-white", isWaiting && "bg-primary text-white", isAbsent && "bg-muted text-muted-foreground"),
																			children: isAttended ? "Atendido" : isWaiting ? "En espera" : "No asistió"
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		onClick: (e) => {
																			e.stopPropagation();
																			handleOpenPatientRecord(apt.patient);
																		},
																		className: "font-bold text-xs mt-1 truncate hover:text-primary hover:underline transition-colors block text-left w-full",
																		title: "Ver Historia Clínica",
																		children: apt.patient
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center justify-between mt-0.5",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-[10px] text-muted-foreground truncate",
																			children: apt.reason
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			onClick: () => setDetailApt(apt),
																			className: "text-[9px] text-primary font-bold hover:underline opacity-0 group-hover:opacity-100 transition-opacity",
																			children: "Detalle"
																		})]
																	})
																]
															}, apt.id);
														})
													}, dayIdx);
												})]
											}, hour))
										})]
									})
								})
							}),
							agendaMode === "day" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-0 overflow-hidden border shadow-sm bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-b p-4 bg-muted/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-base font-bold text-foreground",
										children: ["Consultas del ", weekDays[selectedDayIndex]?.full ?? ""]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [currentDayApts.length, " pacientes programados · Haz clic en el nombre para abrir su historia clínica"]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-1 overflow-x-auto",
										children: weekDays.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: selectedDayIndex === i ? "default" : "outline",
											onClick: () => setSelectedDayIndex(i),
											className: "h-8 text-xs font-bold shrink-0",
											children: [
												d.label,
												" ",
												d.date
											]
										}, d.label))
									})]
								}), currentDayApts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-10 text-center text-muted-foreground text-xs",
									children: "No hay citas agendadas para este día."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "divide-y",
									children: currentDayApts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "grid gap-3 p-4 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center hover:bg-muted/20 transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-2 text-sm font-bold text-primary",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }),
													" ",
													a.time
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
															onClick: () => handleOpenPatientRecord(a.patient),
															className: "group flex items-center gap-1 text-sm font-bold text-foreground hover:text-primary hover:underline transition-colors text-left",
															title: "Abrir Historia Clínica de este paciente",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a.patient }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5 text-primary opacity-70 group-hover:opacity-100" })]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															role: "button",
															onClick: () => handleOpenPatientRecord(a.record),
															variant: "outline",
															className: "text-[10px] px-1.5 py-0 cursor-pointer hover:border-primary hover:text-primary",
															title: "Ver expediente",
															children: a.record
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: a.status === "attended" ? "default" : a.status === "absent" ? "destructive" : "secondary",
															className: "text-[10px] px-1.5 py-0",
															children: a.status === "attended" ? "Atendido" : a.status === "absent" ? "No asistió" : "En espera"
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "truncate text-xs text-muted-foreground",
													children: [
														a.reason,
														" · Tel: ",
														a.phone
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-2",
												children: [[
													["attended", "Atendido"],
													["absent", "No asistió"],
													["waiting", "En espera"]
												].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: a.status === value ? "default" : "outline",
													className: cn("h-8 text-xs font-semibold rounded-lg", a.status === value && value === "attended" && "bg-emerald-600 hover:bg-emerald-700 text-white", a.status === value && value === "absent" && "bg-destructive text-destructive-foreground", a.status === value && value === "waiting" && "bg-primary text-primary-foreground font-bold"),
													onClick: () => updateStatus(a.id, value),
													children: label
												}, value)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "secondary",
													onClick: () => handleOpenPatientRecord(a.patient),
													className: "h-8 text-xs font-semibold hover:border-primary",
													title: "Abrir expediente",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5 mr-1 text-primary" }), " Historia"]
												})]
											})
										]
									}, a.id))
								})]
							}),
							agendaMode === "month" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-4 border shadow-sm bg-card space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-bold text-foreground",
											children: "Calendario General · Agosto 2026"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "31 Días"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-7 gap-1 text-center font-bold text-xs text-muted-foreground pb-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dom" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lun" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mar" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mié" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Jue" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vie" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sáb" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-7 gap-2",
										children: Array.from({ length: 35 }, (_, idx) => {
											const dayNum = idx - 5;
											const isValidDay = dayNum >= 1 && dayNum <= 31;
											const dayApts = isValidDay ? appointments.filter((a) => a.dayDate === dayNum) : [];
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: cn("min-h-[90px] rounded-xl border p-2 text-left flex flex-col justify-between transition-all", isValidDay ? "bg-card hover:border-primary hover:shadow-sm" : "bg-muted/20 opacity-30 pointer-events-none", dayNum === 10 && "border-primary bg-primary/[0.02] ring-1 ring-primary/40"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: cn("text-xs font-bold", dayNum === 10 ? "text-primary font-black" : "text-foreground"),
														children: isValidDay ? dayNum : ""
													}), dayApts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
														variant: "secondary",
														className: "text-[9px] px-1 py-0 font-extrabold text-primary",
														children: [
															dayApts.length,
															" ",
															dayApts.length === 1 ? "cita" : "citas"
														]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1 mt-1",
													children: [dayApts.slice(0, 2).map((apt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														onClick: () => handleOpenPatientRecord(apt.patient),
														className: "w-full text-left truncate text-[10px] rounded bg-muted/60 p-1 font-medium hover:text-primary hover:bg-primary/10 transition-colors block",
														title: "Abrir historia clínica",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-bold text-primary",
																children: apt.time
															}),
															" ",
															apt.patient.split(" ")[0]
														]
													}, apt.id)), dayApts.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-[9px] text-muted-foreground font-semibold",
														children: [
															"+",
															dayApts.length - 2,
															" más"
														]
													})]
												})]
											}, idx);
										})
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "records",
						className: "space-y-5 mt-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: query,
									onChange: (e) => setQuery(e.target.value),
									placeholder: "Buscar por cédula, nombre, apellido o N.º de historia clínica...",
									className: "pl-9"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => {
									setActiveTab("agenda");
									window.scrollTo({
										top: 0,
										behavior: "smooth"
									});
								},
								className: "text-xs font-semibold shrink-0",
								children: "← Volver a la Agenda del Día"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "gap-0 overflow-x-auto p-0 border shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Paciente" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Cédula" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Edad" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Historia" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "IMC" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "P. Arterial" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-right",
									children: "Acción"
								})
							] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
									className: "font-bold text-foreground",
									children: [
										p.firstName,
										" ",
										p.lastName
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: p.cedula }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [p.age, " años"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									className: "font-mono text-xs font-bold text-primary",
									children: p.record
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "font-semibold",
									children: bmi(p.vitals.weight, p.vitals.height)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "font-mono",
									children: p.vitals.bloodPressure
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "default",
										size: "sm",
										className: "bg-primary text-primary-foreground font-semibold text-xs h-8",
										onClick: () => {
											setSelected(p);
											setOpenHistory(true);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mr-1.5 h-3.5 w-3.5" }), " Ver Expediente"]
									})
								})
							] }, p.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								colSpan: 7,
								className: "py-8 text-center text-muted-foreground",
								children: [
									"Sin resultados para “",
									query,
									"”."
								]
							}) })] })] })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "earnings",
						className: "mt-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorEarnings, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!detailApt,
				onOpenChange: (open) => !open && setDetailApt(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-primary" }), " Ficha de Cita Médica"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "text-xs",
							children: "Detalle y gestión rápida de estado para la consulta médica."
						})] }),
						detailApt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-xs pt-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border bg-muted/40 p-4 space-y-2.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Paciente:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => handleOpenPatientRecord(detailApt.patient),
												className: "font-bold text-sm text-primary hover:underline text-right",
												children: [detailApt.patient, " ↗"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Historia Clínica:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-semibold",
												children: detailApt.record
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Teléfono / WhatsApp:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-primary",
												children: detailApt.phone
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Horario Asignado:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold",
												children: [
													detailApt.dayDate,
													" de ",
													detailApt.dayMonthName,
													" · ",
													detailApt.time
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between items-center border-t pt-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Motivo de Consulta:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: detailApt.reason
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Estado Actual:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: detailApt.status === "attended" ? "default" : detailApt.status === "absent" ? "destructive" : "secondary",
												className: "text-xs font-bold",
												children: detailApt.status === "attended" ? "Atendido" : detailApt.status === "absent" ? "No asistió" : "En espera"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => handleOpenPatientRecord(detailApt.patient),
									className: "w-full h-9 font-bold text-primary hover:bg-primary/10 border-primary/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mr-2 h-4 w-4" }), " Abrir Historia Clínica & Signos Vitales"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-foreground text-xs",
										children: "Cambiar Estado de Atención:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-3 gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: detailApt.status === "attended" ? "default" : "outline",
												className: cn(detailApt.status === "attended" && "bg-emerald-600 hover:bg-emerald-700 text-white font-bold"),
												onClick: () => updateStatus(detailApt.id, "attended"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1 h-3.5 w-3.5" }), " Atendido"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: detailApt.status === "waiting" ? "default" : "outline",
												className: cn(detailApt.status === "waiting" && "bg-primary text-primary-foreground font-bold"),
												onClick: () => updateStatus(detailApt.id, "waiting"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 h-3.5 w-3.5" }), " En espera"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: detailApt.status === "absent" ? "default" : "outline",
												className: cn(detailApt.status === "absent" && "bg-destructive text-white font-bold"),
												onClick: () => updateStatus(detailApt.id, "absent"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-1 h-3.5 w-3.5" }), " No asistió"]
											})
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => setDetailApt(null),
								className: "w-full",
								children: "Cerrar"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientHistoryModal, {
				patient: selected,
				open: openHistory,
				onOpenChange: setOpenHistory,
				onSave: saveHistory,
				onReturnToAgenda: () => setActiveTab("agenda")
			})
		]
	});
}
function DoctorRoute() {
	const navigate = useNavigate();
	const { user, quickLogin } = useAuth();
	const handleQuickDoctor = () => {
		quickLogin("doctor");
		navigate({ to: "/doctor" });
	};
	if (!user || user.role !== "doctor") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border bg-card p-8 sm:p-12 text-center max-w-xl mx-auto space-y-5 shadow-lg my-8 animate-in fade-in duration-300",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-16 w-16 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-foreground",
						children: "Acceso al Portal Médico"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Esta área está reservada exclusivamente para el cuerpo médico de AuraVital. Inicia sesión con tus credenciales de especialista para gestionar la agenda, historias clínicas y liquidación de honorarios."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-center justify-center gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: handleQuickDoctor,
						className: "w-full sm:w-auto rounded-xl bg-primary text-primary-foreground font-bold px-6 h-10 shadow-md hover:bg-primary/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-4 w-4" }), "Entrar como Dra. Valeria Ríos (Demo)"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => navigate({
							to: "/login",
							search: {
								tab: "login",
								role: "doctor"
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorDashboard, {})
	});
}
//#endregion
export { DoctorRoute as component };
