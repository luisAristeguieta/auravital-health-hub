import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { F as Mail, L as LogIn, O as Phone, R as Lock, V as IdCard, _t as ArrowRight, g as Sparkles, it as CircleCheck, m as Stethoscope, o as User, s as UserPlus, y as ShieldCheck } from "../_libs/lucide-react.mjs";
import { E as AuraVitalIcon, O as useAuth, _ as Label, j as Button, r as Route$1, v as Input } from "./router-4_udcFnR.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BYfOmXtJ.mjs";
import { i as CardTitle, n as CardContent, r as CardDescription, t as Card } from "./card-B3bKphNG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CuYTrsch.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage({ initialTab = "login", initialRole }) {
	const navigate = useNavigate();
	const { user, login, quickLogin, register } = useAuth();
	const [activeTab, setActiveTab] = (0, import_react.useState)(initialTab || "login");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [regForm, setRegForm] = (0, import_react.useState)({
		name: "",
		cedula: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: ""
	});
	(0, import_react.useEffect)(() => {
		if (initialTab) setActiveTab(initialTab);
	}, [initialTab]);
	(0, import_react.useEffect)(() => {
		if (initialRole === "doctor" && !email) {
			setEmail("doctor@auravital.com");
			setPassword("demo123");
		} else if (initialRole === "admin" && !email) {
			setEmail("admin@auravital.com");
			setPassword("demo123");
		} else if (initialRole === "patient" && !email) {
			setEmail("paciente@auravital.com");
			setPassword("demo123");
		}
	}, [initialRole]);
	const handleLoginSubmit = (e) => {
		e.preventDefault();
		if (!email.trim()) {
			toast.error("Por favor, ingresa tu correo electrónico.");
			return;
		}
		login(email, password, initialRole);
		const clean = email.trim().toLowerCase();
		if (clean.includes("doctor") || initialRole === "doctor") navigate({ to: "/doctor" });
		else if (clean.includes("admin") || initialRole === "admin") navigate({ to: "/admin" });
		else navigate({ to: "/paciente" });
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const handleQuick = (role) => {
		if (role === "doctor") {
			setEmail("doctor@auravital.com");
			setPassword("demo123");
		} else if (role === "admin") {
			setEmail("admin@auravital.com");
			setPassword("demo123");
		} else {
			setEmail("paciente@auravital.com");
			setPassword("demo123");
		}
		quickLogin(role);
		if (role === "doctor") navigate({ to: "/doctor" });
		else if (role === "admin") navigate({ to: "/admin" });
		else navigate({ to: "/paciente" });
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const handleRegisterSubmit = (e) => {
		e.preventDefault();
		if (!regForm.name.trim() || !regForm.cedula.trim() || !regForm.email.trim() || !regForm.phone.trim()) {
			toast.error("Completa todos los campos obligatorios para registrarte.");
			return;
		}
		if (!regForm.password || regForm.password.length < 6) {
			toast.error("La contraseña debe tener al menos 6 caracteres.");
			return;
		}
		if (regForm.password !== regForm.confirmPassword) {
			toast.error("Las contraseñas no coinciden. Por favor, verifícalas.");
			return;
		}
		register({
			name: regForm.name,
			cedula: regForm.cedula,
			email: regForm.email,
			phone: regForm.phone,
			password: regForm.password
		});
		navigate({ to: "/paciente" });
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	if (user) {
		const rolePaths = {
			patient: "/paciente",
			doctor: "/doctor",
			admin: "/admin"
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-md mx-auto my-12 text-center space-y-6 animate-in fade-in duration-300",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-8 space-y-5 rounded-3xl border shadow-xl bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-16 w-16 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-600 mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold text-foreground",
						children: "Sesión Activa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: [
							"Has iniciado sesión como ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: user.name
							}),
							" (",
							user.role.toUpperCase(),
							")."
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => {
								navigate({ to: rolePaths[user.role] });
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							className: "w-full rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold h-11 shadow-md cursor-pointer",
							children: [
								"Ir a Mi Panel (",
								user.role === "patient" ? "Portal de Citas" : user.role === "doctor" ? "Panel Médico" : "Administración",
								")",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => {
								navigate({ to: "/" });
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							className: "w-full rounded-xl text-xs font-semibold cursor-pointer",
							children: "Volver al Inicio"
						})]
					})
				]
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-md mx-auto my-6 sm:my-10 animate-in fade-in duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "overflow-hidden rounded-3xl border shadow-xl bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-gradient-to-r from-rose-500/15 via-primary/10 to-transparent p-6 border-b",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuraVitalIcon, { className: "h-11 w-11" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-xl font-extrabold tracking-tight text-foreground",
						children: "Acceso a AuraVital"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
						className: "text-xs text-muted-foreground mt-0.5",
						children: "Ingresa a tu portal médico, agenda de citas o control administrativo."
					})] })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					value: activeTab,
					onValueChange: (v) => setActiveTab(v),
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "grid w-full grid-cols-2 mb-6 h-11 bg-muted/70 p-1 rounded-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "login",
								className: "text-xs font-bold rounded-lg data-[state=active]:bg-card data-[state=active]:text-rose-600 data-[state=active]:shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "mr-1.5 h-3.5 w-3.5" }), " Iniciar Sesión"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "register",
								className: "text-xs font-bold rounded-lg data-[state=active]:bg-card data-[state=active]:text-rose-600 data-[state=active]:shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "mr-1.5 h-3.5 w-3.5" }), " Crear Cuenta (Paciente)"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "login",
							className: "space-y-5 mt-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2.5 rounded-2xl bg-rose-500/5 p-4 border border-rose-200/50 dark:border-rose-950",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] font-black text-rose-700 dark:text-rose-300 uppercase tracking-wider flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-rose-600" }), "Accesos Rápidos de Demostración:"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-semibold text-muted-foreground",
										children: "1-Clic"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											onClick: () => handleQuick("patient"),
											className: "h-10 text-xs font-bold flex flex-col items-center justify-center gap-0.5 bg-card hover:border-emerald-500 hover:text-emerald-600 transition-all cursor-pointer shadow-2xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5 text-emerald-600" }), " Paciente"]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											onClick: () => handleQuick("doctor"),
											className: "h-10 text-xs font-bold flex flex-col items-center justify-center gap-0.5 bg-card hover:border-blue-500 hover:text-blue-600 transition-all cursor-pointer shadow-2xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-3.5 w-3.5 text-blue-600" }), " Doctor"]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											onClick: () => handleQuick("admin"),
											className: "h-10 text-xs font-bold flex flex-col items-center justify-center gap-0.5 bg-card hover:border-purple-500 hover:text-purple-600 transition-all cursor-pointer shadow-2xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-purple-600" }), " Admin"]
											})
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleLoginSubmit,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "login-email",
											className: "text-xs font-bold text-foreground flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-rose-600" }), " Correo Electrónico"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "login-email",
											type: "email",
											placeholder: "ej. paciente@auravital.com",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											className: "h-10 text-xs rounded-xl focus-visible:ring-rose-500",
											required: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "login-pass",
											className: "text-xs font-bold text-foreground flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 text-rose-600" }), " Contraseña"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "login-pass",
											type: "password",
											placeholder: "••••••••",
											value: password,
											onChange: (e) => setPassword(e.target.value),
											className: "h-10 text-xs rounded-xl focus-visible:ring-rose-500"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "submit",
										className: "w-full h-11 font-extrabold bg-rose-600 hover:bg-rose-700 text-white rounded-xl shadow-md transition-all hover:scale-[1.01] cursor-pointer mt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "mr-2 h-4 w-4" }), "Entrar a la Plataforma"]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "register",
							className: "space-y-4 mt-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleRegisterSubmit,
								className: "space-y-3.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "reg-name",
											className: "text-xs font-bold flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5 text-rose-600" }), " Nombres y Apellidos"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "reg-name",
											placeholder: "Ej. Juan Pérez",
											value: regForm.name,
											onChange: (e) => setRegForm({
												...regForm,
												name: e.target.value
											}),
											className: "h-10 text-xs rounded-xl",
											required: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												htmlFor: "reg-cedula",
												className: "text-xs font-bold flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "h-3.5 w-3.5 text-rose-600" }), " Cédula"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "reg-cedula",
												placeholder: "1712345678",
												value: regForm.cedula,
												onChange: (e) => setRegForm({
													...regForm,
													cedula: e.target.value
												}),
												className: "h-10 text-xs rounded-xl",
												required: true
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												htmlFor: "reg-phone",
												className: "text-xs font-bold flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-rose-600" }), " Teléfono / WhatsApp"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "reg-phone",
												placeholder: "+593 99 000 0000",
												value: regForm.phone,
												onChange: (e) => setRegForm({
													...regForm,
													phone: e.target.value
												}),
												className: "h-10 text-xs rounded-xl",
												required: true
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "reg-email",
											className: "text-xs font-bold flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-rose-600" }), " Correo Electrónico"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "reg-email",
											type: "email",
											placeholder: "juan.perez@email.com",
											value: regForm.email,
											onChange: (e) => setRegForm({
												...regForm,
												email: e.target.value
											}),
											className: "h-10 text-xs rounded-xl",
											required: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "reg-pass",
											className: "text-xs font-bold flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 text-rose-600" }), " Contraseña"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "reg-pass",
											type: "password",
											placeholder: "Mínimo 6 caracteres",
											value: regForm.password,
											onChange: (e) => setRegForm({
												...regForm,
												password: e.target.value
											}),
											className: "h-10 text-xs rounded-xl",
											required: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												htmlFor: "reg-confirm-pass",
												className: "text-xs font-bold flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 text-rose-600" }), " Confirmar Contraseña"]
											}), regForm.confirmPassword && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-[10px] font-bold ${regForm.password === regForm.confirmPassword ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600"}`,
												children: regForm.password === regForm.confirmPassword ? "✓ Coinciden" : "✕ No coinciden"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "reg-confirm-pass",
											type: "password",
											placeholder: "Repite tu contraseña",
											value: regForm.confirmPassword,
											onChange: (e) => setRegForm({
												...regForm,
												confirmPassword: e.target.value
											}),
											className: `h-10 text-xs rounded-xl ${regForm.confirmPassword && regForm.password !== regForm.confirmPassword ? "border-rose-500 focus-visible:ring-rose-500" : regForm.confirmPassword && regForm.password === regForm.confirmPassword ? "border-emerald-500 focus-visible:ring-emerald-500" : ""}`,
											required: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "submit",
										className: "w-full h-11 font-extrabold bg-rose-600 hover:bg-rose-700 text-white mt-3 rounded-xl shadow-md transition-all hover:scale-[1.01] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "mr-2 h-4 w-4" }), "Completar Registro de Paciente"]
									})
								]
							})
						})
					]
				})
			})]
		})
	});
}
function LoginRoute() {
	const { tab, role } = Route$1.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginPage, {
			initialTab: tab,
			initialRole: role
		})
	});
}
//#endregion
export { LoginRoute as component };
