import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as Flame, ct as ChevronLeft, g as Sparkles, gt as Award, h as Star, m as Stethoscope, mt as CalendarCheck, st as ChevronRight, t as Zap, v as ShoppingBag, y as ShieldCheck, yt as Activity } from "../_libs/lucide-react.mjs";
import { O as useAuth, d as initialProducts, j as Button, p as specialties, s as currency, y as Badge } from "./router-4_udcFnR.mjs";
import { n as CardContent, t as Card } from "./card-B3bKphNG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C-PfwUo7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LandingHome({ onGoToBooking, onGoToCatalog, onGoToDoctor, onGoToAdmin }) {
	const [selectedProductModal, setSelectedProductModal] = (0, import_react.useState)(null);
	const benefits = [
		{
			icon: Flame,
			title: "Termoterapia con Piedras de Jade",
			description: "Emisión de calor infrarrojo lejano (30°C - 65°C) que penetra hasta 7 cm en los tejidos, dilatando vasos sanguíneos y relajando espasmos musculares.",
			badge: "Calor Infrarrojo",
			image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80"
		},
		{
			icon: Activity,
			title: "Escaneo & Masaje Espinal",
			description: "Tecnología que mide la longitud y curvatura de la columna vertebral del usuario para ofrecer un masaje anatómico personalizado y descompresión discal.",
			badge: "Alineación Espinal",
			image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
		},
		{
			icon: Sparkles,
			title: "Acupresión & Moxibustión",
			description: "Estimula los puntos neurales y meridianos a lo largo de la columna vertebral para reactivar la energía vital y aliviar dolores crónicos.",
			badge: "Terapia Tradicional",
			image: "/acupresion-moxibustion.png"
		},
		{
			icon: Zap,
			title: "Electroestimulación Lumbar (EMS)",
			description: "Impulsos de baja y media frecuencia para tonificar músculos debilitados, reducir la grasa abdominal y calmar dolores lumbares intensos.",
			badge: "Rehabilitación",
			image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
		}
	];
	const testimonials = [
		{
			name: "Martha Villacrés",
			age: "58 años · Quito",
			condition: "Hernia Discal L4-L5 y Lumbalgia Crónica",
			quote: "Llevaba 3 años con dolores que no me dejaban dormir. Con la terapia de camilla térmica de jade en AuraVital recuperé mi movilidad sin necesidad de cirugía.",
			rating: 5,
			avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
		},
		{
			name: "Ing. Roberto Alarcón",
			age: "46 años · Guayaquil",
			condition: "Estrés Laboral & Cervicalgia Severa",
			quote: "El masaje térmico cervical y la atención del fisioterapeuta me devolvieron la energía. Es impresionante cómo el calor infrarrojo desinflama la espalda.",
			rating: 5,
			avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
		},
		{
			name: "Dra. Carmen Salazar",
			age: "62 años · Cuenca",
			condition: "Artrosis y Mala Circulación",
			quote: "Como médica recomiendo esta tecnología. La combinación de medicina preventiva y termomasaje terapéutico es lo mejor para el bienestar general.",
			rating: 5,
			avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop"
		}
	];
	const [currentSlide, setCurrentSlide] = (0, import_react.useState)(0);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const [touchStartX, setTouchStartX] = (0, import_react.useState)(null);
	const [touchEndX, setTouchEndX] = (0, import_react.useState)(null);
	const [dragStartX, setDragStartX] = (0, import_react.useState)(null);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const heroSlides = [
		{
			id: "doctors",
			bgImage: "/hero-doctors.png",
			badge: "Consultas Médicas & Especialistas",
			title: "Atención médica especializada y diagnóstico integral.",
			subtitle: "Doctores certificados en 10 especialidades con agenda en línea y confirmación inmediata.",
			ctaText: "Agendar Cita Médica",
			onAction: () => onGoToBooking()
		},
		{
			id: "patients",
			bgImage: "/hero-patients.png",
			badge: "Bienestar & Salud Integral",
			title: "Recupera tu vitalidad y dile adiós al dolor de espalda.",
			subtitle: "Terapias no invasivas de descompresión espinal y calor infrarrojo para alivio efectivo y duradero.",
			ctaText: "Reservar Sesión Terapéutica",
			onAction: () => onGoToBooking("fisio")
		},
		{
			id: "products",
			bgImage: "/hero-products.png",
			badge: "Equipos Médicos & Termomasaje",
			title: "Camillas térmicas de jade y salud postural para tu hogar.",
			subtitle: "Tecnología médica con calor de jade de 30°C a 65°C para el alineamiento de tu columna.",
			ctaText: "Explorar Equipos Terapéuticos",
			onAction: () => onGoToCatalog()
		}
	];
	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
	};
	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
	};
	(0, import_react.useEffect)(() => {
		if (isPaused) return;
		const timer = setInterval(() => {
			nextSlide();
		}, 5500);
		return () => clearInterval(timer);
	}, [isPaused, heroSlides.length]);
	const handleTouchStart = (e) => {
		setIsPaused(true);
		setTouchStartX(e.targetTouches[0]?.clientX ?? null);
		setTouchEndX(null);
	};
	const handleTouchMove = (e) => {
		setTouchEndX(e.targetTouches[0]?.clientX ?? null);
	};
	const handleTouchEnd = () => {
		if (touchStartX !== null && touchEndX !== null) {
			const diff = touchStartX - touchEndX;
			if (diff > 45) nextSlide();
			else if (diff < -45) prevSlide();
		}
		setTouchStartX(null);
		setTouchEndX(null);
		setIsPaused(false);
	};
	const handleMouseDown = (e) => {
		setIsPaused(true);
		setIsDragging(true);
		setDragStartX(e.clientX);
	};
	const handleMouseMove = () => {};
	const handleMouseUp = (e) => {
		if (isDragging && dragStartX !== null) {
			const diff = dragStartX - e.clientX;
			if (diff > 45) nextSlide();
			else if (diff < -45) prevSlide();
		}
		setIsDragging(false);
		setDragStartX(null);
		setIsPaused(false);
	};
	const handleMouseLeave = () => {
		if (isDragging) {
			setIsDragging(false);
			setDragStartX(null);
		}
		setIsPaused(false);
	};
	const slide = heroSlides[currentSlide];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			onMouseEnter: () => setIsPaused(true),
			onMouseLeave: handleMouseLeave,
			onTouchStart: handleTouchStart,
			onTouchMove: handleTouchMove,
			onTouchEnd: handleTouchEnd,
			onMouseDown: handleMouseDown,
			onMouseMove: handleMouseMove,
			onMouseUp: handleMouseUp,
			className: "relative w-full overflow-hidden bg-slate-950 text-white min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center select-none cursor-grab active:cursor-grabbing",
			children: [
				heroSlides.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `absolute inset-0 transition-all duration-1000 ease-out ${idx === currentSlide ? "opacity-60 scale-100" : "opacity-0 scale-105 pointer-events-none"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.bgImage,
						alt: s.title,
						className: "h-full w-full object-cover object-center filter brightness-90 contrast-105 pointer-events-none",
						draggable: false
					})
				}, s.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/35 pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-y-0 left-4 sm:left-8 z-20 hidden md:flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							prevSlide();
						},
						className: "grid h-12 w-12 place-items-center rounded-full bg-black/45 text-white/80 backdrop-blur-md border border-white/15 hover:bg-black/80 hover:text-white hover:scale-110 transition-all cursor-pointer shadow-xl",
						"aria-label": "Diapositiva anterior",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-6 w-6" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-y-0 right-4 sm:right-8 z-20 hidden md:flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							nextSlide();
						},
						className: "grid h-12 w-12 place-items-center rounded-full bg-black/45 text-white/80 backdrop-blur-md border border-white/15 hover:bg-black/80 hover:text-white hover:scale-110 transition-all cursor-pointer shadow-xl",
						"aria-label": "Diapositiva siguiente",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl sm:max-w-3xl space-y-6 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-200 backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: slide.badge })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl animate-in fade-in slide-in-from-left-4 duration-500",
								children: slide.title
							}, `title-${currentSlide}`),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm sm:text-base lg:text-lg leading-relaxed text-slate-200 max-w-2xl animate-in fade-in slide-in-from-left-4 duration-500 delay-100",
								children: slide.subtitle
							}, `sub-${currentSlide}`),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-4 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									onClick: slide.onAction,
									className: "h-12 sm:h-14 rounded-xl bg-primary px-8 text-sm sm:text-base font-extrabold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "mr-2 h-5 w-5" }), slide.ctaText]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									variant: "outline",
									onClick: () => onGoToCatalog(),
									className: "h-12 sm:h-14 rounded-xl border-white/30 bg-white/10 px-7 text-sm sm:text-base font-bold text-white backdrop-blur-md hover:bg-white/20 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "mr-2 h-4 w-4" }), "Catálogo de Equipos"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-6 pt-6 border-t border-white/15 max-w-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2",
									children: heroSlides.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => {
											e.stopPropagation();
											setCurrentSlide(i);
										},
										className: `h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentSlide ? "w-8 bg-primary shadow-md shadow-primary" : "w-2.5 bg-white/40 hover:bg-white/75"}`,
										"aria-label": `Ver diapositiva ${i + 1}`
									}, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-mono font-bold tracking-widest text-slate-300 select-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-white text-sm font-black",
											children: ["0", currentSlide + 1]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/40 mx-1",
											children: "/"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-white/60",
											children: ["0", heroSlides.length]
										})
									]
								})]
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 space-y-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid grid-cols-2 gap-4 rounded-3xl border bg-card p-6 shadow-sm sm:grid-cols-4 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-rose-500/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold text-foreground",
								children: "Termomasaje Jade"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Calor de 30°C a 65°C"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-500/10 text-blue-600",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold text-foreground",
								children: "10 Especialidades"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Doctores acreditados"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-amber-500/10 text-amber-600",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold text-foreground",
								children: "Garantía 1 Año"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Equipos certificados"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-purple-500/10 text-purple-600",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold text-foreground",
								children: "Alineación Espinal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Alivio sin cirugía"
							})] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center max-w-2xl mx-auto space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "text-primary border-primary/30 uppercase tracking-widest text-[11px] font-bold",
									children: "Cuerpo Médico & Terapias"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl",
									children: "Atención Especializada & Agenda en Línea"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm max-w-xl mx-auto",
									children: "Selecciona la especialidad para consultar los médicos disponibles, horarios de atención y agendar tu cita."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5",
							children: specialties.map((spec) => {
								const bgImage = {
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
								}[spec.id] || "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=600&q=80";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									onClick: () => onGoToBooking(spec.id),
									className: "group relative cursor-pointer overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/50 hover:shadow-lg flex flex-col h-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: bgImage,
											alt: spec.name,
											className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
											loading: "lazy"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-5 flex-1 flex flex-col justify-between space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-bold text-foreground group-hover:text-rose-600 transition-colors",
											children: spec.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground line-clamp-2 mt-1 leading-relaxed",
											children: spec.description
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pt-3 flex items-center justify-between border-t text-xs font-bold text-rose-600",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Agendar cita >" })
										})]
									})]
								}, spec.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center pt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: () => onGoToBooking(),
								className: "rounded-xl bg-rose-600 px-8 font-extrabold text-white shadow-lg hover:bg-rose-700 transition-all hover:scale-105 cursor-pointer h-12",
								children: "Ver Calendario de Doctores y Horarios 📅"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-3xl mx-auto space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-primary border-primary/30 uppercase tracking-widest text-[11px] font-bold",
								children: "Ciencia & Salud Terapéutica"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl",
								children: "La Ciencia Detrás de Nuestra Salud Terapéutica"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto",
								children: "Inspirados en la medicina tradicional oriental y la biomecánica moderna, nuestros tratamientos restauran la armonía de tu sistema nervioso y muscular."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: benefits.map((b, i) => {
							const Icon = b.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "group relative overflow-hidden rounded-2xl border bg-card shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: b.image,
											alt: b.title,
											className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
											loading: "lazy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-3 right-3 rounded-full bg-white/95 dark:bg-neutral-900/95 px-3 py-0.5 text-[10px] font-bold text-rose-600 shadow-sm border border-rose-100 dark:border-rose-950 backdrop-blur-xs",
											children: b.badge
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute bottom-3 left-3 grid h-8 w-8 place-items-center rounded-xl bg-rose-600 text-white shadow-md",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 flex-1 flex flex-col justify-start space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-foreground text-base group-hover:text-rose-600 transition-colors leading-snug",
										children: b.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground leading-relaxed",
										children: b.description
									})]
								})]
							}, i);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "text-primary border-primary/30 uppercase tracking-widest text-[11px] font-bold",
									children: "Tienda Médica AuraVital"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-extrabold tracking-tight text-foreground",
									children: "Equipos Terapéuticos para el Hogar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm max-w-xl",
									children: "Lleva la tecnología de calor de jade y electroestimulación a tu hogar con garantía y manual clínico."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => onGoToCatalog(),
							className: "rounded-xl bg-primary text-primary-foreground font-bold text-xs h-10 self-start sm:self-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "mr-2 h-4 w-4" }), "Explorar Todo el Catálogo"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: initialProducts.map((prod) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "group flex flex-col justify-between overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-xl transition-all duration-300 h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-48 w-full overflow-hidden bg-slate-50/80 dark:bg-neutral-900/80 p-4 flex items-center justify-center border-b",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: prod.image,
									alt: prod.name,
									className: "max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									className: "absolute top-3 right-3 bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 font-bold text-[10px] shadow-xs border border-rose-200/80",
									children: [
										"Stock: ",
										prod.stock,
										" disp."
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "p-5 flex-1 flex flex-col justify-between space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-foreground text-sm group-hover:text-primary transition-colors leading-snug",
										children: prod.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed",
										children: prod.description
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t pt-3 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground",
											children: "Precio:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xl font-extrabold text-foreground",
											children: currency(prod.price)
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										onClick: () => onGoToCatalog(),
										variant: "outline",
										className: "w-full rounded-xl text-xs font-bold hover:bg-primary hover:text-primary-foreground border-primary/30 h-9",
										children: "Ver en Tienda"
									})]
								})]
							})]
						}, prod.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-2xl mx-auto space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-primary border-primary/30 uppercase tracking-widest text-[11px] font-bold",
								children: "Experiencias de Pacientes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-extrabold tracking-tight text-foreground",
								children: "Historias Reales de Recuperación"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm",
								children: "Conoce cómo nuestros pacientes recuperaron su bienestar y movilidad con la medicina integral y termoterapia AuraVital."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-6",
						children: testimonials.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-6 rounded-2xl border bg-card shadow-xs flex flex-col justify-between space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-1 text-amber-500",
										children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-amber-400" }, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-bold text-primary uppercase tracking-wide",
										children: ["Diagnóstico: ", t.condition]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs leading-relaxed text-muted-foreground italic",
										children: [
											"\"",
											t.quote,
											"\""
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 border-t pt-3 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: t.avatarUrl,
									alt: t.name,
									className: "h-10 w-10 rounded-full object-cover border"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-foreground",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground",
									children: t.age
								})] })]
							})]
						}, idx))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "rounded-3xl bg-gradient-to-r from-primary via-rose-600 to-rose-700 p-8 text-white text-center shadow-xl sm:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl mx-auto space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-extrabold sm:text-4xl text-white",
								children: "¿Listo para transformar tu salud y despedirte del dolor?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-rose-100 text-base",
								children: "Agenda tu cita hoy mismo o visítanos en nuestro centro para una demostración de terapia de columna con piedras de jade."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap justify-center gap-4 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									onClick: () => onGoToBooking(),
									className: "h-12 rounded-xl bg-white text-primary font-extrabold hover:bg-slate-100 shadow-lg px-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "mr-2 h-5 w-5" }), "Reservar Cita Ahora"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									onClick: () => onGoToCatalog(),
									className: "h-12 rounded-xl bg-white text-primary font-extrabold hover:bg-slate-100 shadow-lg px-6 transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "mr-2 h-5 w-5" }), "Ver Catálogo de Equipos"]
								})]
							})
						]
					})
				})
			]
		})]
	});
}
function HomePage() {
	const navigate = useNavigate();
	const { user } = useAuth();
	const handleBooking = (specialtyId) => {
		if (!user) navigate({
			to: "/login",
			search: {
				tab: "login",
				role: "patient"
			}
		});
		else navigate({
			to: "/paciente",
			search: specialtyId ? { specialty: specialtyId } : {}
		});
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingHome, {
		onGoToBooking: handleBooking,
		onGoToCatalog: () => {
			navigate({ to: "/catalogo" });
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		},
		onGoToDoctor: () => {
			if (user?.role === "doctor") navigate({ to: "/doctor" });
			else navigate({
				to: "/login",
				search: {
					tab: "login",
					role: "doctor"
				}
			});
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		},
		onGoToAdmin: () => {
			if (user?.role === "admin") navigate({ to: "/admin" });
			else navigate({
				to: "/login",
				search: {
					tab: "login",
					role: "admin"
				}
			});
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}
	});
}
//#endregion
export { HomePage as component };
