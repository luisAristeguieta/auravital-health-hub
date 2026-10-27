import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime, l as Slot, n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { B as Landmark, D as Plus, H as House, I as LogOut, L as LogIn, M as Minus, _ as ShoppingCart, _t as ArrowRight, f as Trash2, it as CircleCheck, l as Truck, m as Stethoscope, n as X, o as User, s as UserPlus, tt as CreditCard, v as ShoppingBag, y as ShieldCheck } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { t as Root$1 } from "../_libs/radix-ui__react-separator.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DRsC1qZi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-4_udcFnR.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-Ba5x3sI-.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		closeButton: true,
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-2xl",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
			closeButton: "group-[.toast]:bg-background group-[.toast]:text-foreground group-[.toast]:border group-[.toast]:border-border/80 hover:group-[.toast]:bg-muted/80 group-[.toast]:transition-all group-[.toast]:cursor-pointer"
		} },
		...props
	});
};
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
var demoUsers = {
	patient: {
		id: "u-patient",
		name: "Juan Pérez",
		email: "paciente@auravital.com",
		role: "patient",
		cedula: "1712345678",
		phone: "+593 99 812 4455",
		initials: "JP"
	},
	doctor: {
		id: "u-doctor",
		name: "Dra. Valeria Ríos",
		email: "doctor@auravital.com",
		role: "doctor",
		specialty: "Cardiología & Salud Integral",
		initials: "VR"
	},
	admin: {
		id: "u-admin",
		name: "Lic. Roberto Noboa",
		email: "admin@auravital.com",
		role: "admin",
		specialty: "Dirección Médica & Finanzas",
		initials: "RN"
	}
};
var AuthContext = (0, import_react.createContext)(void 0);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [isAuthModalOpen, setIsAuthModalOpen] = (0, import_react.useState)(false);
	const [authModalTab, setAuthModalTab] = (0, import_react.useState)("login");
	const [targetRedirectRole, setTargetRedirectRole] = (0, import_react.useState)();
	const openAuthModal = (tab = "login", targetRole) => {
		setAuthModalTab(tab);
		setTargetRedirectRole(targetRole);
		setIsAuthModalOpen(true);
	};
	const closeAuthModal = () => {
		setIsAuthModalOpen(false);
		setTargetRedirectRole(void 0);
	};
	const quickLogin = (role) => {
		const selectedUser = demoUsers[role];
		setUser(selectedUser);
		setIsAuthModalOpen(false);
		toast.success(`Bienvenido/a, ${selectedUser.name} (${selectedUser.role.toUpperCase()})`);
	};
	const login = (email, password, manualRole) => {
		const cleanEmail = email.trim().toLowerCase();
		let resolvedRole = manualRole || "patient";
		if (cleanEmail.includes("doctor")) resolvedRole = "doctor";
		else if (cleanEmail.includes("admin")) resolvedRole = "admin";
		const baseUser = demoUsers[resolvedRole];
		const loggedUser = {
			...baseUser,
			email: cleanEmail || baseUser.email
		};
		setUser(loggedUser);
		setIsAuthModalOpen(false);
		toast.success(`Sesión iniciada como ${loggedUser.name}`);
		return true;
	};
	const register = (data) => {
		const initials = data.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "PA";
		const newUser = {
			id: crypto.randomUUID(),
			name: data.name,
			email: data.email,
			role: "patient",
			cedula: data.cedula,
			phone: data.phone,
			initials
		};
		setUser(newUser);
		setIsAuthModalOpen(false);
		toast.success(`¡Cuenta creada con éxito! Bienvenido/a ${newUser.name}`);
	};
	const logout = () => {
		setUser(null);
		toast.info("Has cerrado sesión.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			isAuthenticated: !!user,
			login,
			quickLogin,
			register,
			logout,
			isAuthModalOpen,
			authModalTab,
			openAuthModal,
			closeAuthModal,
			targetRedirectRole
		},
		children
	});
}
function useAuth() {
	const context = (0, import_react.useContext)(AuthContext);
	if (!context) throw new Error("useAuth must be used within an AuthProvider");
	return context;
}
var CartContext = (0, import_react.createContext)(void 0);
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [isCartOpen, setIsCartOpen] = (0, import_react.useState)(false);
	const addToCart = (product, quantity = 1) => {
		setItems((prev) => {
			if (prev.find((item) => item.product.id === product.id)) return prev.map((item) => item.product.id === product.id ? {
				...item,
				quantity: item.quantity + quantity
			} : item);
			return [...prev, {
				product,
				quantity
			}];
		});
		toast.success(`"${product.name}" añadido al carrito de compras.`);
		setIsCartOpen(true);
	};
	const removeFromCart = (productId) => {
		setItems((prev) => prev.filter((item) => item.product.id !== productId));
		toast.info("Producto eliminado del carrito.");
	};
	const updateQuantity = (productId, quantity) => {
		if (quantity <= 0) {
			removeFromCart(productId);
			return;
		}
		setItems((prev) => prev.map((item) => item.product.id === productId ? {
			...item,
			quantity
		} : item));
	};
	const clearCart = () => {
		setItems([]);
	};
	const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
	const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
	const tax = subtotal * .15;
	const total = subtotal + tax;
	const openCart = () => setIsCartOpen(true);
	const closeCart = () => setIsCartOpen(false);
	const toggleCart = () => setIsCartOpen((prev) => !prev);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value: {
			items,
			addToCart,
			removeFromCart,
			updateQuantity,
			clearCart,
			totalItems,
			subtotal,
			tax,
			total,
			isCartOpen,
			openCart,
			closeCart,
			toggleCart
		},
		children
	});
}
function useCart() {
	const context = (0, import_react.useContext)(CartContext);
	if (!context) throw new Error("useCart must be used within a CartProvider");
	return context;
}
function AuraVitalIcon({ className = "h-10 w-10", idPrefix = "auravital" }) {
	const bgGradId = `${idPrefix}-soft-bg`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 44 44",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: bgGradId,
				x1: "0",
				y1: "0",
				x2: "44",
				y2: "44",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#FFF0EB",
					stopOpacity: "0.85"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#F3E8FF",
					stopOpacity: "0.75"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1",
				y: "1",
				width: "42",
				height: "42",
				rx: "12",
				fill: `url(#${bgGradId})`,
				stroke: "#D00B2B",
				strokeWidth: "1.2",
				strokeOpacity: "0.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 22 34 C 15.5 28.8 8 22.5 8 15.8 C 8 11.2 11.6 7.5 16.2 7.5 C 19 7.5 21.4 8.8 22 11 C 22.6 8.8 25 7.5 27.8 7.5 C 32.4 7.5 36 11.2 36 15.8 C 36 22.5 28.5 28.8 22 34 Z",
				stroke: "#D00B2B",
				strokeWidth: "2.2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 5 21.5 H 12.5 L 15.5 15.5 L 19.5 28.5 L 23.5 13 L 26.5 25.5 L 29.5 19.5 L 31.5 21.5 H 39",
				stroke: "#D00B2B",
				strokeWidth: "2.4",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "23.5",
				cy: "13",
				r: "1.5",
				fill: "#D00B2B"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "19.5",
				cy: "28.5",
				r: "1.5",
				fill: "#D00B2B"
			})
		]
	});
}
function Header({ activeView: propActiveView, onNavigate }) {
	const navigate = useNavigate();
	const { user, isAuthenticated, logout } = useAuth();
	const { totalItems, openCart } = useCart();
	const pathname = useRouterState({ select: (s) => s?.location?.pathname ?? "/" });
	const getActiveTab = () => {
		if (propActiveView) return propActiveView;
		if (pathname === "/catalogo") return "catalog";
		if (pathname === "/paciente") return "patient";
		if (pathname === "/doctor") return "doctor";
		if (pathname === "/admin") return "admin";
		if (pathname === "/login") return "login";
		return "home";
	};
	const currentTab = getActiveTab();
	const handleNavigate = (view, path) => {
		if (onNavigate) onNavigate(view);
		navigate({ to: path });
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const handleLogout = () => {
		logout();
		handleNavigate("home", "/");
	};
	const roleLabels = {
		patient: "Paciente",
		doctor: "Médico Especialista",
		admin: "Súper Admin"
	};
	const getRolePath = (role) => {
		if (role === "doctor") return "/doctor";
		if (role === "admin") return "/admin";
		return "/paciente";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b bg-card/95 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					onClick: () => window.scrollTo({
						top: 0,
						behavior: "smooth"
					}),
					className: "flex min-w-0 items-center gap-3 text-left transition-all duration-200 hover:opacity-90 cursor-pointer group select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl",
					title: "Ir a la página de inicio de AuraVital",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative shrink-0 transition-transform duration-300 group-hover:scale-105",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuraVitalIcon, { className: "h-10 w-10" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-lg font-bold leading-tight tracking-tight text-[#D00B2B]",
							children: "AuraVital"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[11px] font-medium text-[#D00B2B]/85",
							children: "Salud Terapéutica & Equipos Médicos"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							onClick: () => window.scrollTo({
								top: 0,
								behavior: "smooth"
							}),
							className: cn("flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors", currentTab === "home" ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inicio" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/catalogo",
							onClick: () => window.scrollTo({
								top: 0,
								behavior: "smooth"
							}),
							className: cn("flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors", currentTab === "catalog" ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Catálogo de Equipos" })]
						}),
						isAuthenticated && user && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: getRolePath(user.role),
							onClick: () => window.scrollTo({
								top: 0,
								behavior: "smooth"
							}),
							className: cn("flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors border border-primary/20 bg-primary/5", currentTab === user.role ? "bg-primary text-primary-foreground font-bold" : "text-primary hover:bg-primary/10"),
							children: [
								user.role === "patient" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5" }),
								user.role === "doctor" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-3.5 w-3.5" }),
								user.role === "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									user.role === "patient" && "Mi Portal de Citas",
									user.role === "doctor" && "Panel Clínico & Ganancias",
									user.role === "admin" && "Control Administrativo"
								] })
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 sm:gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: openCart,
					className: "relative grid h-9 w-9 place-items-center rounded-xl border bg-card hover:bg-muted text-foreground transition-colors cursor-pointer group shadow-2xs",
					title: "Ver Carrito de Compras",
					"aria-label": "Abrir Carrito de Compras",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4 text-foreground group-hover:text-primary transition-colors" }), totalItems > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -top-1.5 -right-1.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-black text-primary-foreground shadow-xs animate-in zoom-in",
						children: totalItems
					})]
				}), !isAuthenticated ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => {
							navigate({
								to: "/login",
								search: { tab: "login" }
							});
							window.scrollTo({
								top: 0,
								behavior: "smooth"
							});
						},
						className: "h-9 rounded-lg text-xs font-semibold hover:border-primary hover:text-primary cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "mr-1.5 h-3.5 w-3.5" }), "Iniciar Sesión"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => {
							navigate({
								to: "/login",
								search: { tab: "register" }
							});
							window.scrollTo({
								top: 0,
								behavior: "smooth"
							});
						},
						className: "h-9 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 shadow-sm cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "mr-1.5 h-3.5 w-3.5" }), "Registrarse"]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden sm:flex flex-col text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold text-foreground leading-tight",
								children: user?.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground font-medium",
								children: user ? roleLabels[user.role] : ""
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							className: "h-8 w-8 border-2 border-primary/40 bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
								className: "text-xs font-bold text-primary",
								children: user?.initials || "AV"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: handleLogout,
							className: "h-8 px-2.5 rounded-lg text-xs font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors",
							title: "Cerrar sesión",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4 sm:mr-1.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Salir"
							})]
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex md:hidden items-center justify-around border-t px-4 py-2 text-xs bg-muted/30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: cn("py-1 font-semibold", currentTab === "home" ? "text-primary font-bold" : "text-muted-foreground"),
					children: "Inicio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/catalogo",
					className: cn("py-1 font-semibold", currentTab === "catalog" ? "text-primary font-bold" : "text-muted-foreground"),
					children: "Catálogo"
				}),
				isAuthenticated && user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: getRolePath(user.role),
					className: cn("py-1 font-semibold", currentTab === user.role ? "text-primary font-bold" : "text-muted-foreground"),
					children: [
						user.role === "patient" && "Mi Portal",
						user.role === "doctor" && "Panel Doctor",
						user.role === "admin" && "Admin"
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: cn("py-1 font-semibold", currentTab === "login" ? "text-primary font-bold" : "text-muted-foreground"),
					children: "Acceder"
				})
			]
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
	...props
}));
Separator.displayName = Root$1.displayName;
var specialties = [
	{
		id: "cardio",
		name: "Cardiología",
		icon: "HeartPulse",
		price: 60,
		description: "Salud del corazón"
	},
	{
		id: "pediatria",
		name: "Pediatría",
		icon: "Baby",
		price: 45,
		description: "Cuidado infantil"
	},
	{
		id: "derma",
		name: "Dermatología",
		icon: "Sparkles",
		price: 50,
		description: "Piel y anexos"
	},
	{
		id: "trauma",
		name: "Traumatología",
		icon: "Bone",
		price: 55,
		description: "Huesos y articulaciones"
	},
	{
		id: "neuro",
		name: "Neurología",
		icon: "Brain",
		price: 70,
		description: "Sistema nervioso"
	},
	{
		id: "gineco",
		name: "Ginecología",
		icon: "Flower2",
		price: 55,
		description: "Salud femenina"
	},
	{
		id: "general",
		name: "Medicina General",
		icon: "Stethoscope",
		price: 30,
		description: "Atención primaria"
	},
	{
		id: "oftalmo",
		name: "Oftalmología",
		icon: "Eye",
		price: 48,
		description: "Salud visual"
	},
	{
		id: "fisio",
		name: "Fisioterapia / Salud Integral",
		icon: "Activity",
		price: 40,
		description: "Rehabilitación"
	},
	{
		id: "nutri",
		name: "Nutrición",
		icon: "Apple",
		price: 35,
		description: "Plan alimenticio"
	}
];
var doctors = [
	{
		id: "d1",
		name: "Dra. Valeria Ríos",
		specialtyId: "cardio",
		initials: "VR",
		rating: 4.9,
		years: 12,
		commission: 60,
		active: true,
		email: "v.rios@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d2",
		name: "Dr. Andrés Cabrera",
		specialtyId: "cardio",
		initials: "AC",
		rating: 4.7,
		years: 8,
		commission: 55,
		active: true,
		email: "a.cabrera@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d12",
		name: "Dr. Roberto Silva",
		specialtyId: "cardio",
		initials: "RS",
		rating: 4.9,
		years: 14,
		commission: 60,
		active: true,
		email: "r.silva@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d3",
		name: "Dra. Camila Sotomayor",
		specialtyId: "pediatria",
		initials: "CS",
		rating: 5,
		years: 15,
		commission: 65,
		active: true,
		email: "c.sotomayor@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1594824813628-984b9015c9a4?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d13",
		name: "Dr. Gabriel Paredes",
		specialtyId: "pediatria",
		initials: "GP",
		rating: 4.8,
		years: 9,
		commission: 55,
		active: true,
		email: "g.paredes@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d14",
		name: "Dra. Elena Vásconez",
		specialtyId: "pediatria",
		initials: "EV",
		rating: 4.8,
		years: 7,
		commission: 50,
		active: true,
		email: "e.vasconez@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d4",
		name: "Dr. Iván Peralta",
		specialtyId: "derma",
		initials: "IP",
		rating: 4.6,
		years: 9,
		commission: 50,
		active: true,
		email: "i.peralta@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d15",
		name: "Dra. Mariana Carrera",
		specialtyId: "derma",
		initials: "MC",
		rating: 4.9,
		years: 11,
		commission: 58,
		active: true,
		email: "m.carrera@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d16",
		name: "Dr. Santiago Ortiz",
		specialtyId: "derma",
		initials: "SO",
		rating: 4.7,
		years: 6,
		commission: 48,
		active: true,
		email: "s.ortiz@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d5",
		name: "Dr. Mateo Villacís",
		specialtyId: "trauma",
		initials: "MV",
		rating: 4.8,
		years: 11,
		commission: 58,
		active: true,
		email: "m.villacis@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d17",
		name: "Dr. Carlos Echeverría",
		specialtyId: "trauma",
		initials: "CE",
		rating: 4.9,
		years: 13,
		commission: 60,
		active: true,
		email: "c.echeverria@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d18",
		name: "Dra. Daniela Flores",
		specialtyId: "trauma",
		initials: "DF",
		rating: 4.8,
		years: 8,
		commission: 52,
		active: true,
		email: "d.flores@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d6",
		name: "Dra. Lucía Andrade",
		specialtyId: "neuro",
		initials: "LA",
		rating: 4.9,
		years: 14,
		commission: 62,
		active: true,
		email: "l.andrade@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d19",
		name: "Dr. Fernando Viteri",
		specialtyId: "neuro",
		initials: "FV",
		rating: 4.8,
		years: 12,
		commission: 60,
		active: true,
		email: "f.viteri@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d7",
		name: "Dra. Paula Guerrero",
		specialtyId: "gineco",
		initials: "PG",
		rating: 4.8,
		years: 10,
		commission: 60,
		active: true,
		email: "p.guerrero@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d20",
		name: "Dra. Patricia Cárdenas",
		specialtyId: "gineco",
		initials: "PC",
		rating: 4.9,
		years: 13,
		commission: 62,
		active: true,
		email: "p.cardenas@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d21",
		name: "Dr. Daniel Aguirre",
		specialtyId: "gineco",
		initials: "DA",
		rating: 4.7,
		years: 8,
		commission: 52,
		active: true,
		email: "d.aguirre@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d8",
		name: "Dr. Jorge Molina",
		specialtyId: "general",
		initials: "JM",
		rating: 4.8,
		years: 6,
		commission: 45,
		active: true,
		email: "j.molina@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d22",
		name: "Dra. Andrea Morales",
		specialtyId: "general",
		initials: "AM",
		rating: 4.9,
		years: 9,
		commission: 50,
		active: true,
		email: "a.morales@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1594824813628-984b9015c9a4?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d23",
		name: "Dr. Xavier Noboa",
		specialtyId: "general",
		initials: "XN",
		rating: 4.7,
		years: 5,
		commission: 45,
		active: true,
		email: "x.noboa@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d9",
		name: "Dra. Renata Ponce",
		specialtyId: "oftalmo",
		initials: "RP",
		rating: 4.8,
		years: 7,
		commission: 52,
		active: true,
		email: "r.ponce@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d24",
		name: "Dr. Emilio Alarcón",
		specialtyId: "oftalmo",
		initials: "EA",
		rating: 4.9,
		years: 10,
		commission: 58,
		active: true,
		email: "e.alarcon@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d10",
		name: "Lcdo. Diego Suárez",
		specialtyId: "fisio",
		initials: "DS",
		rating: 4.9,
		years: 9,
		commission: 55,
		active: true,
		email: "d.suarez@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d25",
		name: "Lcda. Karla Salazar",
		specialtyId: "fisio",
		initials: "KS",
		rating: 4.8,
		years: 7,
		commission: 50,
		active: true,
		email: "k.salazar@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d26",
		name: "Lcdo. Martín Cevallos",
		specialtyId: "fisio",
		initials: "MC",
		rating: 4.9,
		years: 8,
		commission: 52,
		active: true,
		email: "m.cevallos@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d11",
		name: "Lcda. Ana Terán",
		specialtyId: "nutri",
		initials: "AT",
		rating: 4.8,
		years: 5,
		commission: 50,
		active: true,
		email: "a.teran@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d27",
		name: "Dr. Mateo Benítez",
		specialtyId: "nutri",
		initials: "MB",
		rating: 4.9,
		years: 8,
		commission: 55,
		active: true,
		email: "m.benitez@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=300&q=80"
	},
	{
		id: "d28",
		name: "Dra. Sofía Morales",
		specialtyId: "nutri",
		initials: "SM",
		rating: 4.7,
		years: 6,
		commission: 50,
		active: true,
		email: "s.morales@auravital.com",
		avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
	}
];
var timeSlots = [
	"08:00",
	"08:30",
	"09:00",
	"09:30",
	"10:00",
	"10:30",
	"11:00",
	"14:00",
	"14:30",
	"15:00",
	"15:30",
	"16:00",
	"16:30",
	"17:00"
];
var unavailableSlots = ["09:30", "14:00"];
var initialPatients = [
	{
		id: "p1",
		firstName: "Juan",
		lastName: "Pérez",
		cedula: "1712345678",
		age: 42,
		record: "HC-00124",
		phone: "+593 99 812 4455",
		vitals: {
			height: 176,
			weight: 84,
			bloodPressure: "130/85",
			heartRate: 78,
			temperature: 36.7,
			oxygen: 97
		},
		notes: [{
			id: "n1",
			date: "2026-07-14",
			text: "Paciente refiere fatiga leve al esfuerzo. Se solicita perfil lipídico y monitoreo de presión.",
			doctorName: "Dra. Valeria Ríos",
			doctorSpecialty: "Cardiología"
		}, {
			id: "n1b",
			date: "2026-06-25",
			text: "Control rutinario. Presión arterial controlada con hábitos saludables y ejercicio aeróbico.",
			doctorName: "Dr. Roberto Silva",
			doctorSpecialty: "Cardiología"
		}],
		labResults: [
			{
				id: "lr1",
				testName: "Hemograma Completo",
				result: "Leucocitos 6.8 x10³/µL",
				reference: "4.5 - 11.0 x10³/µL",
				status: "normal",
				date: "2026-07-16"
			},
			{
				id: "lr2",
				testName: "Glucosa en Ayunas",
				result: "92 mg/dL",
				reference: "70 - 100 mg/dL",
				status: "normal",
				date: "2026-07-16"
			},
			{
				id: "lr3",
				testName: "Colesterol Total",
				result: "240 mg/dL (ELEVADO)",
				reference: "< 200 mg/dL",
				status: "abnormal",
				date: "2026-07-16"
			},
			{
				id: "lr4",
				testName: "Triglicéridos",
				result: "185 mg/dL (ELEVADO)",
				reference: "< 150 mg/dL",
				status: "abnormal",
				date: "2026-07-16"
			},
			{
				id: "lr5",
				testName: "Colesterol LDL",
				result: "158 mg/dL (ELEVADO)",
				reference: "< 100 mg/dL",
				status: "abnormal",
				date: "2026-07-16"
			},
			{
				id: "lr6",
				testName: "Colesterol HDL",
				result: "45 mg/dL",
				reference: "> 40 mg/dL",
				status: "normal",
				date: "2026-07-16"
			},
			{
				id: "lr7",
				testName: "Ácido Úrico",
				result: "5.4 mg/dL",
				reference: "3.4 - 7.0 mg/dL",
				status: "normal",
				date: "2026-07-16"
			}
		],
		labOrders: [{
			id: "lo1",
			date: "2026-07-14",
			doctor: "Dra. Valeria Ríos (Cardiología)",
			tests: [
				"Perfil Lipídico",
				"Glucosa en Ayunas",
				"Hemograma Completo"
			],
			notes: "Descarte de dislipidemia mixta y riesgo aterogénico.",
			status: "completed"
		}]
	},
	{
		id: "p2",
		firstName: "María",
		lastName: "López",
		cedula: "0923456781",
		age: 35,
		record: "HC-00125",
		phone: "+593 98 445 1120",
		vitals: {
			height: 162,
			weight: 58,
			bloodPressure: "110/70",
			heartRate: 68,
			temperature: 36.4,
			oxygen: 99
		},
		notes: [{
			id: "n2",
			date: "2026-07-28",
			text: "Control post tratamiento. Evolución favorable, continúa fisioterapia lumbar.",
			doctorName: "Lcdo. Diego Suárez",
			doctorSpecialty: "Fisioterapia"
		}],
		labResults: [
			{
				id: "lr8",
				testName: "Biometría Hemática",
				result: "Hb 13.5 g/dL",
				reference: "12.0 - 15.5 g/dL",
				status: "normal",
				date: "2026-07-20"
			},
			{
				id: "lr9",
				testName: "Perfil Tiroideo TSH",
				result: "2.1 µUI/mL",
				reference: "0.4 - 4.0 µUI/mL",
				status: "normal",
				date: "2026-07-20"
			},
			{
				id: "lr10",
				testName: "Glucosa en Ayunas",
				result: "88 mg/dL",
				reference: "70 - 100 mg/dL",
				status: "normal",
				date: "2026-07-20"
			},
			{
				id: "lr11",
				testName: "Colesterol Total",
				result: "175 mg/dL",
				reference: "< 200 mg/dL",
				status: "normal",
				date: "2026-07-20"
			}
		],
		labOrders: []
	},
	{
		id: "p3",
		firstName: "Carlos",
		lastName: "Mendoza",
		cedula: "1103456789",
		age: 57,
		record: "HC-00126",
		phone: "+593 96 220 7781",
		vitals: {
			height: 170,
			weight: 92,
			bloodPressure: "145/92",
			heartRate: 84,
			temperature: 36.9,
			oxygen: 95
		},
		notes: [{
			id: "n3",
			date: "2026-08-01",
			text: "Hipertensión estadio 1 no controlada. Ajuste de dosis y dieta hiposódica estricta.",
			doctorName: "Dra. Valeria Ríos",
			doctorSpecialty: "Cardiología"
		}],
		labResults: [
			{
				id: "lr12",
				testName: "Glucosa en Ayunas",
				result: "128 mg/dL (ELEVADO)",
				reference: "70 - 100 mg/dL",
				status: "abnormal",
				date: "2026-08-02"
			},
			{
				id: "lr13",
				testName: "Hemoglobina Glicosilada (HbA1c)",
				result: "7.2 % (ELEVADO)",
				reference: "< 5.7 %",
				status: "abnormal",
				date: "2026-08-02"
			},
			{
				id: "lr14",
				testName: "Creatinina Sérica",
				result: "1.1 mg/dL",
				reference: "0.7 - 1.3 mg/dL",
				status: "normal",
				date: "2026-08-02"
			},
			{
				id: "lr15",
				testName: "Electrólitos Séricos",
				result: "Na: 140 / K: 4.2 mEq/L",
				reference: "Na: 135-145 / K: 3.5-5.0",
				status: "normal",
				date: "2026-08-02"
			}
		],
		labOrders: [{
			id: "lo2",
			date: "2026-08-01",
			doctor: "Dra. Valeria Ríos (Cardiología)",
			tests: [
				"Química Sanguínea",
				"HbA1c",
				"Electrólitos"
			],
			notes: "Evaluación metabólica integral por descontrol tensional.",
			status: "completed"
		}]
	},
	{
		id: "p4",
		firstName: "Sofía",
		lastName: "Ramírez",
		cedula: "1720984532",
		age: 29,
		record: "HC-00127",
		phone: "+593 97 112 3344",
		vitals: {
			height: 165,
			weight: 62,
			bloodPressure: "115/75",
			heartRate: 75,
			temperature: 36.6,
			oxygen: 98
		},
		notes: [{
			id: "n4",
			date: "2026-08-04",
			text: "Consulta por episodios de taquicardia situacional. Se solicita Holter de 24h."
		}]
	},
	{
		id: "p5",
		firstName: "Elena",
		lastName: "Cruz",
		cedula: "1709845123",
		age: 48,
		record: "HC-00129",
		phone: "+593 99 443 2210",
		vitals: {
			height: 160,
			weight: 68,
			bloodPressure: "125/80",
			heartRate: 70,
			temperature: 36.5,
			oxygen: 98
		},
		notes: [{
			id: "n5",
			date: "2026-07-20",
			text: "Seguimiento cardiológico satisfactorio. Buena tolerancia a la terapia."
		}]
	},
	{
		id: "p6",
		firstName: "Roberto",
		lastName: "Noboa",
		cedula: "1711442233",
		age: 52,
		record: "HC-00130",
		phone: "+593 99 900 1122",
		vitals: {
			height: 178,
			weight: 81,
			bloodPressure: "120/80",
			heartRate: 64,
			temperature: 36.4,
			oxygen: 99
		},
		notes: [{
			id: "n6",
			date: "2026-07-15",
			text: "Electrocardiograma de esfuerzo. Respuesta cronotrópica adecuada."
		}]
	},
	{
		id: "p7",
		firstName: "Patricia",
		lastName: "Díaz",
		cedula: "0912445566",
		age: 61,
		record: "HC-00131",
		phone: "+593 98 776 5544",
		vitals: {
			height: 158,
			weight: 70,
			bloodPressure: "135/85",
			heartRate: 74,
			temperature: 36.7,
			oxygen: 96
		},
		notes: [{
			id: "n7",
			date: "2026-08-02",
			text: "Control de extrasístoles ventriculares benignas. Mantener hidratación."
		}]
	},
	{
		id: "p8",
		firstName: "Fernando",
		lastName: "Vega",
		cedula: "1802334455",
		age: 45,
		record: "HC-00132",
		phone: "+593 99 123 9988",
		vitals: {
			height: 174,
			weight: 79,
			bloodPressure: "128/82",
			heartRate: 72,
			temperature: 36.5,
			oxygen: 98
		},
		notes: [{
			id: "n8",
			date: "2026-07-30",
			text: "Ecocardiograma Doppler: función ventricular conservada."
		}]
	},
	{
		id: "p9",
		firstName: "Diana",
		lastName: "Ortiz",
		cedula: "1723445566",
		age: 38,
		record: "HC-00133",
		phone: "+593 95 334 2211",
		vitals: {
			height: 168,
			weight: 64,
			bloodPressure: "118/76",
			heartRate: 69,
			temperature: 36.5,
			oxygen: 99
		},
		notes: [{
			id: "n9",
			date: "2026-08-05",
			text: "Revisión de monitoreo ambulatorio de presión arterial (MAPA)."
		}]
	},
	{
		id: "p10",
		firstName: "Gabriel",
		lastName: "Castillo",
		cedula: "1715667788",
		age: 50,
		record: "HC-00134",
		phone: "+593 97 889 0011",
		vitals: {
			height: 172,
			weight: 86,
			bloodPressure: "140/90",
			heartRate: 80,
			temperature: 36.8,
			oxygen: 96
		},
		notes: [{
			id: "n10",
			date: "2026-07-10",
			text: "Valoración de riesgo cardiovascular preoperatorio: Riesgo habitual."
		}]
	},
	{
		id: "p11",
		firstName: "Carmen",
		lastName: "Salazar",
		cedula: "1104556677",
		age: 66,
		record: "HC-00135",
		phone: "+593 98 221 4455",
		vitals: {
			height: 155,
			weight: 65,
			bloodPressure: "132/84",
			heartRate: 70,
			temperature: 36.6,
			oxygen: 97
		},
		notes: [{
			id: "n11",
			date: "2026-08-01",
			text: "Control de hipertensión arterial esencial. Ajuste de antihipertensivo."
		}]
	},
	{
		id: "p12",
		firstName: "Jorge",
		lastName: "Molina",
		cedula: "1708990011",
		age: 40,
		record: "HC-00136",
		phone: "+593 99 554 3322",
		vitals: {
			height: 180,
			weight: 82,
			bloodPressure: "122/78",
			heartRate: 66,
			temperature: 36.4,
			oxygen: 99
		},
		notes: [{
			id: "n12",
			date: "2026-07-22",
			text: "Interconsulta médica de chequeo preventivo general."
		}]
	}
];
var earnings = [
	{
		id: "e1",
		patient: "Juan Pérez",
		datetime: "09 Ago 2026 · 08:30",
		amount: 60,
		commissionPct: 60,
		method: "Tarjeta",
		status: "Aprobado"
	},
	{
		id: "e2",
		patient: "María López",
		datetime: "09 Ago 2026 · 09:00",
		amount: 45,
		commissionPct: 60,
		method: "Transferencia",
		status: "Pendiente"
	},
	{
		id: "e3",
		patient: "Carlos Mendoza",
		datetime: "08 Ago 2026 · 10:00",
		amount: 60,
		commissionPct: 60,
		method: "Tarjeta",
		status: "Aprobado"
	},
	{
		id: "e4",
		patient: "Sofía Ramírez",
		datetime: "07 Ago 2026 · 11:30",
		amount: 70,
		commissionPct: 60,
		method: "Tarjeta",
		status: "Aprobado"
	},
	{
		id: "e5",
		patient: "Luis Ordóñez",
		datetime: "05 Ago 2026 · 16:00",
		amount: 55,
		commissionPct: 60,
		method: "Transferencia",
		status: "Aprobado"
	},
	{
		id: "e6",
		patient: "Elena Cruz",
		datetime: "03 Ago 2026 · 14:30",
		amount: 50,
		commissionPct: 60,
		method: "Tarjeta",
		status: "Aprobado"
	}
];
var initialTransfers = [
	{
		id: "t1",
		patient: "María López",
		concept: "Consulta Pediatría",
		amount: 45,
		date: "09 Ago 2026",
		bank: "Banco Pichincha",
		status: "pending"
	},
	{
		id: "t2",
		patient: "Andrés Vaca",
		concept: "Cojín Térmico Cerámico",
		amount: 89,
		date: "08 Ago 2026",
		bank: "Produbanco",
		status: "pending"
	},
	{
		id: "t3",
		patient: "Luis Ordóñez",
		concept: "Consulta Traumatología",
		amount: 55,
		date: "05 Ago 2026",
		bank: "Banco Guayaquil",
		status: "confirmed"
	},
	{
		id: "t4",
		patient: "Nadia Ríos",
		concept: "Cinturón de Electroestimulación",
		amount: 120,
		date: "04 Ago 2026",
		bank: "Banco Pichincha",
		status: "rejected"
	}
];
var initialProducts = [
	{
		id: "pr1",
		name: "Camilla Terapéutica Térmica",
		description: "Camilla de jade con terapia de calor infrarrojo y alineación espinal automática",
		price: 1450,
		stock: 6,
		sold: 9,
		cost: 980,
		image: "/products/jade-thermal-bed.png"
	},
	{
		id: "pr2",
		name: "Cinturón de Electroestimulación",
		description: "EMS lumbar de 6 modos terapéuticos e intensidad graduable para alivio focalizado",
		price: 120,
		stock: 34,
		sold: 62,
		cost: 68,
		image: "/products/ems-lumbar-belt.png"
	},
	{
		id: "pr3",
		name: "Masajeador Térmico Espinal",
		description: "Masaje shiatsu con calor infrarrojo para descontracturar la columna cervical y dorsal",
		price: 210,
		stock: 18,
		sold: 41,
		cost: 128,
		image: "/products/spinal-thermal-massager.png"
	},
	{
		id: "pr4",
		name: "Cojín Térmico Cerámico",
		description: "Cojín ergonómico con piedras cerámicas de tourmalina para relajación y circulación",
		price: 89,
		stock: 52,
		sold: 87,
		cost: 44,
		image: "/products/ceramic-thermal-cushion.png"
	}
];
var bankAccounts = [{
	bank: "Banco Pichincha",
	type: "Cuenta Corriente",
	number: "2100 4455 82",
	holder: "AuraVital Salud S.A.",
	ruc: "1792845560001"
}, {
	bank: "Produbanco",
	type: "Cuenta de Ahorros",
	number: "1204 9987 33",
	holder: "AuraVital Salud S.A.",
	ruc: "1792845560001"
}];
var currency = (n) => new Intl.NumberFormat("es-EC", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 2
}).format(n);
var bmi = (weightKg, heightCm) => {
	if (!weightKg || !heightCm) return 0;
	return +(weightKg / Math.pow(heightCm / 100, 2)).toFixed(1);
};
var bmiLabel = (value) => {
	if (value < 18.5) return "Bajo peso";
	if (value < 25) return "Normal";
	if (value < 30) return "Sobrepeso";
	return "Obesidad";
};
function CartDrawer({ onGoToCatalog }) {
	const { items, totalItems, subtotal, tax, total, isCartOpen, closeCart, removeFromCart, updateQuantity, clearCart } = useCart();
	const { user } = useAuth();
	const [checkoutStep, setCheckoutStep] = (0, import_react.useState)("cart");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("card");
	const [deliveryForm, setDeliveryForm] = (0, import_react.useState)({
		name: user?.name || "Carlos Mendoza",
		email: user?.email || "paciente@auravital.com",
		phone: user?.phone || "+593 98 445 1120",
		city: "Quito",
		address: "Av. Amazonas N34-12 y República",
		notes: "Entregar en horario de oficina"
	});
	const [cardForm, setCardForm] = (0, import_react.useState)({
		number: "4532 •••• •••• 8812",
		holder: user?.name || "CARLOS MENDOZA",
		expiry: "09/29",
		cvv: "345"
	});
	const [transferReceipt, setTransferReceipt] = (0, import_react.useState)("comprobante_banco_pichincha_08912.pdf");
	const [generatedOrderNumber, setGeneratedOrderNumber] = (0, import_react.useState)("");
	const handleOpenChange = (open) => {
		if (!open) {
			closeCart();
			setTimeout(() => setCheckoutStep("cart"), 300);
		}
	};
	const handleConfirmPurchase = () => {
		const orderNum = `FAC-${Math.floor(1e4 + Math.random() * 9e4)}`;
		setGeneratedOrderNumber(orderNum);
		setCheckoutStep("success");
		toast.success(`¡Pedido ${orderNum} generado y confirmado con éxito!`);
	};
	const handleFinish = () => {
		clearCart();
		closeCart();
		setCheckoutStep("cart");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isCartOpen,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] overflow-y-auto sm:max-w-[540px] p-0 bg-card border shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-gradient-to-r from-primary/15 via-rose-500/10 to-transparent p-5 border-b",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-lg font-bold text-foreground",
							children: [
								checkoutStep === "cart" && "Carrito de Compras Terapéutico",
								checkoutStep === "payment" && "Pasarela de Pago & Despacho",
								checkoutStep === "success" && "¡Pedido Confirmado!"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "text-xs text-muted-foreground",
							children: [
								checkoutStep === "cart" && `${totalItems} productos seleccionados para tu salud`,
								checkoutStep === "payment" && "Completa tus datos de entrega y método de pago",
								checkoutStep === "success" && "Tu orden médica está en proceso de despacho"
							]
						})] })]
					}), checkoutStep === "cart" && items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						className: "bg-primary/20 text-primary border-primary/30 text-xs",
						children: [
							totalItems,
							" ",
							totalItems === 1 ? "artículo" : "artículos"
						]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 space-y-4",
				children: [
					checkoutStep === "cart" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-12 text-center space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-16 w-16 place-items-center rounded-full bg-muted text-muted-foreground mx-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-8 w-8" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground text-base",
									children: "Tu carrito está vacío"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground max-w-xs mx-auto",
									children: "Explora nuestras camillas de jade, masajeadores térmicos y equipos EMS en el catálogo."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => {
									closeCart();
									onGoToCatalog?.();
								},
								className: "rounded-xl bg-primary text-primary-foreground font-bold text-xs",
								children: "Ver Catálogo de Equipos"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3 max-h-[340px] overflow-y-auto pr-1",
								children: items.map(({ product, quantity }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3.5 p-3 rounded-2xl border bg-muted/30 hover:bg-muted/50 transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: product.image,
											alt: product.name,
											className: "h-16 w-16 rounded-xl object-cover border bg-muted shrink-0",
											onError: (e) => {
												e.currentTarget.style.opacity = "0";
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1 space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-bold text-sm text-foreground truncate",
													children: product.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs font-semibold text-primary",
													children: [currency(product.price), " c/u"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[10px] text-muted-foreground",
													children: ["Stock disp: ", product.stock]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-end gap-2 shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1 border rounded-lg bg-card p-0.5 shadow-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														type: "button",
														variant: "ghost",
														size: "icon",
														className: "h-6 w-6 rounded-md hover:bg-muted",
														onClick: () => updateQuantity(product.id, quantity - 1),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "w-6 text-center text-xs font-bold text-foreground",
														children: quantity
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														type: "button",
														variant: "ghost",
														size: "icon",
														className: "h-6 w-6 rounded-md hover:bg-muted",
														onClick: () => updateQuantity(product.id, quantity + 1),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => removeFromCart(product.id),
												className: "text-muted-foreground hover:text-destructive text-[11px] flex items-center gap-1 transition-colors",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3" }), " Eliminar"]
											})]
										})
									]
								}, product.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-2xl border bg-card space-y-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal de productos:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-foreground",
											children: currency(subtotal)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "IVA (15% Ecuador):" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-foreground",
											children: currency(tax)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5 text-emerald-600" }), " Envío a domicilio:"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-emerald-600",
											children: "¡GRATIS!"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-base font-black text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total a Pagar:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary text-xl font-extrabold",
											children: currency(total)
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2 flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => setCheckoutStep("payment"),
									className: "w-full h-11 rounded-xl bg-primary text-primary-foreground font-bold shadow-md hover:bg-primary/90 text-sm",
									children: [
										"Proceder al Pago (",
										currency(total),
										")",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "sm",
									onClick: () => {
										closeCart();
										onGoToCatalog?.();
									},
									className: "text-xs text-muted-foreground",
									children: "Seguir Comprando"
								})]
							})
						]
					}) }),
					checkoutStep === "payment" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-2xl border bg-muted/20 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-bold text-xs flex items-center gap-1.5 text-foreground uppercase tracking-wider",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5 text-primary" }), " 1. Datos de Envío y Despacho"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-[11px]",
												children: "Nombres del Receptor"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: deliveryForm.name,
												onChange: (e) => setDeliveryForm({
													...deliveryForm,
													name: e.target.value
												}),
												className: "h-8 text-xs"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-[11px]",
												children: "WhatsApp de Contacto"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: deliveryForm.phone,
												onChange: (e) => setDeliveryForm({
													...deliveryForm,
													phone: e.target.value
												}),
												className: "h-8 text-xs"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-3 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-[11px]",
												children: "Ciudad"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: deliveryForm.city,
												onChange: (e) => setDeliveryForm({
													...deliveryForm,
													city: e.target.value
												}),
												className: "h-8 text-xs"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "col-span-2 space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-[11px]",
												children: "Dirección de Entrega"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: deliveryForm.address,
												onChange: (e) => setDeliveryForm({
													...deliveryForm,
													address: e.target.value
												}),
												className: "h-8 text-xs",
												placeholder: "Calle Principal y Secundaria"
											})]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-2xl border bg-card space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-bold text-xs flex items-center gap-1.5 text-foreground uppercase tracking-wider",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3.5 w-3.5 text-primary" }), " 2. Método de Pago"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPaymentMethod("card"),
											className: cn("flex items-center gap-2 p-3 rounded-xl border text-left transition-all text-xs font-semibold", paymentMethod === "card" ? "border-primary bg-primary/10 text-primary shadow-xs" : "border-border hover:bg-muted text-muted-foreground"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold",
												children: "Tarjeta de Crédito"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] opacity-80",
												children: "Visa / Mastercard / Diners"
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPaymentMethod("transfer"),
											className: cn("flex items-center gap-2 p-3 rounded-xl border text-left transition-all text-xs font-semibold", paymentMethod === "transfer" ? "border-primary bg-primary/10 text-primary shadow-xs" : "border-border hover:bg-muted text-muted-foreground"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold",
												children: "Transferencia"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] opacity-80",
												children: "Pichincha / Produbanco"
											})] })]
										})]
									}),
									paymentMethod === "card" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3.5 rounded-xl border bg-muted/30 space-y-2.5 pt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-[11px]",
												children: "Número de Tarjeta"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: cardForm.number,
												onChange: (e) => setCardForm({
													...cardForm,
													number: e.target.value
												}),
												className: "h-8 text-xs font-mono"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-[11px]",
													children: "Vencimiento"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: cardForm.expiry,
													onChange: (e) => setCardForm({
														...cardForm,
														expiry: e.target.value
													}),
													className: "h-8 text-xs font-mono text-center"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-[11px]",
													children: "CVV"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: cardForm.cvv,
													onChange: (e) => setCardForm({
														...cardForm,
														cvv: e.target.value
													}),
													className: "h-8 text-xs font-mono text-center"
												})]
											})]
										})]
									}),
									paymentMethod === "transfer" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3.5 rounded-xl border bg-muted/30 space-y-2.5 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-foreground",
												children: "Cuentas Habilitadas de AuraVital S.A.:"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1 text-[11px] text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													"• ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Banco Pichincha:" }),
													" Cta Cte 2100 4455 82 (RUC: 1792845560001)"
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													"• ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Produbanco:" }),
													" Cta Ahorros 1204 9987 33 (RUC: 1792845560001)"
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[11px] flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Comprobante listo: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: transferReceipt })] })]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									onClick: () => setCheckoutStep("cart"),
									className: "w-1/3 rounded-xl text-xs",
									children: "Volver al Carrito"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: handleConfirmPurchase,
									className: "w-2/3 h-10 rounded-xl bg-primary text-primary-foreground font-bold shadow-md hover:bg-primary/90 text-xs",
									children: [
										"Confirmar Pago (",
										currency(total),
										")"
									]
								})]
							})
						]
					}),
					checkoutStep === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-6 text-center space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 mx-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 text-xs",
										children: generatedOrderNumber
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold text-foreground",
										children: "¡Muchas Gracias por tu Compra!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground max-w-sm mx-auto",
										children: [
											"Hemos enviado la confirmación y la factura electrónica a ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: deliveryForm.email }),
											". El Administrador de AuraVital ya está procesando tu despacho a ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: deliveryForm.city }),
											"."
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-2xl border bg-muted/40 text-xs text-left space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Destinatario:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: deliveryForm.name
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Dirección:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium text-foreground",
											children: [
												deliveryForm.address,
												", ",
												deliveryForm.city
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Método:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-foreground",
											children: paymentMethod === "card" ? "Tarjeta de Crédito (Aprobado)" : "Transferencia Bancaria (Verificada)"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between font-bold text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Monto Total Facturado:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary font-black",
											children: currency(total)
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-2 flex flex-col gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: handleFinish,
									className: "w-full h-10 rounded-xl bg-primary text-primary-foreground font-bold text-xs",
									children: "Finalizar y Volver a la Tienda"
								})
							})
						]
					})
				]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "AuraVital — CRM Médico, Agenda y Salud Terapéutica" },
			{
				name: "description",
				content: "AuraVital: Centro de Salud Terapéutica, Agenda Médica y Equipos de Jade."
			},
			{
				name: "author",
				content: "AuraVital"
			},
			{
				property: "og:title",
				content: "AuraVital — CRM Médico, Agenda y Salud Terapéutica"
			},
			{
				property: "og:description",
				content: "AuraVital: Centro de Salud Terapéutica, Agenda Médica y Equipos de Jade."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@AuraVital"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "alternate icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.svg"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function AppLayout() {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col justify-between",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t py-8 text-center text-xs text-muted-foreground space-y-2 bg-card/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-foreground/90",
					children: "AuraVital · Centro de Salud Terapéutica & Equipos Médicos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tecnología de Alineación Espinal con Piedras de Jade y Calor Infrarrojo · Quito - Guayaquil - Cuenca, Ecuador" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, { onGoToCatalog: () => navigate({ to: "/catalogo" }) })
		]
	}) }) });
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLayout, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-right",
			richColors: true,
			closeButton: true
		})]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-C-PfwUo7.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "AuraVital — CRM Médico, Agenda y Salud Terapéutica" },
		{
			name: "description",
			content: "Plataforma AuraVital: agenda citas médicas, gestión de salud terapéutica con calor de jade, catálogo de equipos, historias clínicas y tienda médica."
		},
		{
			property: "og:title",
			content: "AuraVital — CRM Médico, Agenda y Salud Terapéutica"
		},
		{
			property: "og:description",
			content: "Plataforma AuraVital: agenda citas médicas, gestión de salud terapéutica con calor de jade, catálogo de equipos, historias clínicas y tienda médica."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./admin-DaaGkCIX.mjs");
var Route$4 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Control Administrativo & Finanzas — AuraVital" },
		{
			name: "description",
			content: "Panel de administración general, validación de transferencias bancarias, catálogo y métricas financieras de AuraVital."
		},
		{
			property: "og:title",
			content: "Control Administrativo & Finanzas — AuraVital"
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./catalogo-D1bqisl9.mjs");
var Route$3 = createFileRoute("/catalogo")({
	head: () => ({ meta: [
		{ title: "Catálogo de Equipos Terapéuticos — AuraVital" },
		{
			name: "description",
			content: "Catálogo oficial de equipos terapéuticos AuraVital: camillas de jade, masajeadores espinales, cinturones EMS y cojines térmicos cerámicos."
		},
		{
			property: "og:title",
			content: "Catálogo de Equipos Terapéuticos — AuraVital"
		},
		{
			property: "og:description",
			content: "Catálogo oficial de equipos terapéuticos AuraVital: camillas de jade, masajeadores espinales, cinturones EMS y cojines térmicos cerámicos."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./doctor-B8hEhseT.mjs");
var Route$2 = createFileRoute("/doctor")({
	head: () => ({ meta: [
		{ title: "Panel Médico — AuraVital" },
		{
			name: "description",
			content: "Gestión clínica, agenda del día, historias de pacientes y comisiones médicas de AuraVital."
		},
		{
			property: "og:title",
			content: "Panel Médico — AuraVital"
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./login-CuYTrsch.mjs");
var Route$1 = createFileRoute("/login")({
	validateSearch: (search) => {
		return {
			tab: search["tab"] === "register" ? "register" : "login",
			role: search["role"] || void 0
		};
	},
	head: () => ({ meta: [
		{ title: "Iniciar Sesión o Registro — AuraVital" },
		{
			name: "description",
			content: "Ingresa a tu cuenta de paciente, médico o administrador en la plataforma médica AuraVital."
		},
		{
			property: "og:title",
			content: "Iniciar Sesión o Registro — AuraVital"
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./paciente-CArlp-kX.mjs");
var Route = createFileRoute("/paciente")({
	validateSearch: (search) => {
		const spec = search["specialty"];
		return { specialty: typeof spec === "string" ? spec : void 0 };
	},
	head: () => ({ meta: [
		{ title: "Portal del Paciente — AuraVital" },
		{
			name: "description",
			content: "Agenda tus consultas médicas y revisa tu historial de atenciones en AuraVital."
		},
		{
			property: "og:title",
			content: "Portal del Paciente — AuraVital"
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AdminRoute: Route$4.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$6
	}),
	CatalogoRoute: Route$3.update({
		id: "/catalogo",
		path: "/catalogo",
		getParentRoute: () => Route$6
	}),
	DoctorRoute: Route$2.update({
		id: "/doctor",
		path: "/doctor",
		getParentRoute: () => Route$6
	}),
	LoginRoute: Route$1.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$6
	}),
	PacienteRoute: Route.update({
		id: "/paciente",
		path: "/paciente",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { AvatarFallback as A, DialogFooter as C, useCart as D, AuraVitalIcon as E, cn as M, useAuth as O, DialogDescription as S, DialogTitle as T, Label as _, bmi as a, Dialog as b, doctors as c, initialProducts as d, initialTransfers as f, Separator as g, unavailableSlots as h, bankAccounts as i, Button as j, Avatar as k, earnings as l, timeSlots as m, Route as n, bmiLabel as o, specialties as p, Route$1 as r, currency as s, router_exports as t, initialPatients as u, Input as v, DialogHeader as w, DialogContent as x, Badge as y };
