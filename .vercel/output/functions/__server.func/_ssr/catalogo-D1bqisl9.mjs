import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as Flame, _ as ShoppingCart, _t as ArrowRight, l as Truck, ut as Check, v as ShoppingBag, y as ShieldCheck, yt as Activity } from "../_libs/lucide-react.mjs";
import { D as useCart, d as initialProducts, j as Button, s as currency, y as Badge } from "./router-4_udcFnR.mjs";
import { n as CardContent, t as Card } from "./card-B3bKphNG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalogo-D1bqisl9.js
var import_jsx_runtime = require_jsx_runtime();
function CatalogPage({ onGoToBooking }) {
	const { addToCart } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-16 pb-16 animate-in fade-in duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-neutral-900 to-rose-950 p-8 sm:p-12 text-white shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 max-w-3xl space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							className: "bg-primary/30 border border-primary/50 text-rose-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "mr-1.5 h-3.5 w-3.5" }), " Equipamiento Médico y Salud Postural"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white",
							children: "Catálogo Oficial de Equipos Terapéuticos AuraVital"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-slate-300 text-sm sm:text-base leading-relaxed",
							children: "Tecnología médica certificada para el cuidado de la columna vertebral, termoterapia con calor infrarrojo lejano y alivio duradero de dolores musculares y articulares."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs text-slate-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-rose-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Garantía Oficial 1 Año" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Envíos a todo Ecuador" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4 text-rose-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Piedras de Jade Natural" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Asesoría Médica" })]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden rounded-3xl border bg-gradient-to-r from-white via-slate-50/90 to-slate-100/80 dark:from-card dark:via-card dark:to-muted/30 shadow-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-contain bg-right bg-no-repeat opacity-25 lg:opacity-35 dark:opacity-20 pointer-events-none transition-all duration-700",
						style: { backgroundImage: `url('/products/showcase-jade-bed.png')` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent dark:from-background dark:via-background/90 dark:to-transparent lg:w-3/5 pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 p-8 sm:p-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-10 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6 lg:col-span-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: "bg-primary text-primary-foreground font-semibold px-3 py-1 text-xs",
										children: "Equipo Médico Insignia"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl leading-tight",
										children: "Camilla Terapéutica Térmica de Jade"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground leading-relaxed text-sm sm:text-base",
										children: "El dispositivo médico terapéutico más completo para el alivio y alineación de la columna vertebral. Combina masaje guiado por rieles anatómicos, calor de piedras de jade y extensión progresiva para liberar la presión en los discos intervertebrales."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-3",
										children: [
											"Escaneo automático de columna con 6 niveles de intensidad personalizables",
											"12 programas terapéuticos: relajación, estiramiento, modo lumbar y sueño",
											"Proyector externo de 9 esferas de jade para abdomen, hombros y articulaciones",
											"Rango térmico de 30°C a 65°C con emisión de calor infrarrojo profundo"
										].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs sm:text-sm font-medium text-foreground",
												children: item
											})]
										}, idx))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-4 pt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted-foreground font-medium",
												children: "Precio el Equipo Completo:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-2xl sm:text-3xl font-extrabold text-foreground",
												children: currency(1450)
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												onClick: () => {
													const firstProduct = initialProducts[0];
													if (firstProduct) addToCart(firstProduct);
												},
												className: "rounded-xl bg-primary px-5 py-5 font-bold shadow-md hover:bg-primary/90 text-white text-xs sm:text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "mr-2 h-4 w-4" }), "Añadir al Carrito"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "outline",
												onClick: () => onGoToBooking("fisio"),
												className: "rounded-xl px-5 py-5 font-semibold text-xs sm:text-sm bg-white/80 dark:bg-card/80 hover:bg-white",
												children: ["Probar en Consulta", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
											})]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative rounded-2xl border bg-white/95 dark:bg-card/95 backdrop-blur-md p-6 shadow-lg space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b pb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-bold text-foreground text-sm sm:text-base",
												children: "Mapa de Puntos de Presión"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Distribución de rodillos térmicos de jade"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "border-emerald-500 text-emerald-600 dark:text-emerald-400 text-xs font-semibold bg-emerald-50/50 dark:bg-emerald-950/30",
												children: "Alineación Vértebra por Vértebra"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-xl bg-slate-50 dark:bg-muted/60 p-3 text-xs border border-border/40",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-foreground",
														children: "1. Región Cervical (C1 - C7):"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground",
														children: "Alivio de migraña y contractura de cuello"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-xl bg-slate-50 dark:bg-muted/60 p-3 text-xs border border-border/40",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-foreground",
														children: "2. Región Dorsal / Torácica (T1 - T12):"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground",
														children: "Corrección postural y expansión torácica"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-xl bg-slate-50 dark:bg-muted/60 p-3 text-xs border border-border/40",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-foreground",
														children: "3. Región Lumbar (L1 - L5):"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground",
														children: "Descompresión de hernias, ciática y lumbago"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-xl bg-slate-50 dark:bg-muted/60 p-3 text-xs border border-border/40",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-foreground",
														children: "4. Región Sacro-Coxígea:"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground",
														children: "Drenaje linfático y relajación de cadera"
													})]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/60 dark:bg-rose-950/20 p-3 text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-rose-800 dark:text-rose-300",
												children: "💡 Disponible para sesiones diarias en nuestras clínicas o para entrega e instalación en tu domicilio."
											})
										})
									]
								})
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-primary border-primary/30 uppercase tracking-widest text-[11px] font-bold",
								children: "Tienda Médica AuraVital"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-extrabold tracking-tight text-foreground",
								children: "Todos los Equipos Terapéuticos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm max-w-xl",
								children: "Equipos de grado médico diseñados para el hogar y clínicas de rehabilitación."
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: initialProducts.map((prod) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "group flex flex-col justify-between overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-xl transition-all duration-300 h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-52 w-full overflow-hidden bg-slate-50/80 dark:bg-neutral-900/80 p-4 flex items-center justify-center border-b border-border/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: prod.image,
								alt: prod.name,
								className: "max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500",
								loading: "lazy",
								onError: (e) => {
									e.currentTarget.style.opacity = "0";
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								className: "absolute top-3 right-3 bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 font-bold text-[10px] shadow-xs border border-rose-200/80 dark:border-rose-800/50",
								children: [
									"Stock: ",
									prod.stock,
									" disp."
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "p-5 flex-1 flex flex-col justify-between space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-foreground text-base group-hover:text-primary transition-colors leading-snug",
										children: prod.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground leading-relaxed line-clamp-2",
										children: prod.description
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 border-t pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground font-medium",
											children: "Precio Oficial:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-2xl font-black text-foreground",
											children: currency(prod.price)
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-emerald-600 dark:text-emerald-400 font-medium",
										children: "✓ Garantía oficial 1 año y manual clínico"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-2 mt-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: () => addToCart(prod),
										className: "w-full rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 text-xs shadow-sm h-9.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "mr-1.5 h-3.5 w-3.5" }), "Añadir al Carrito"]
									})
								})
							]
						})]
					}, prod.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl bg-muted/50 border p-8 text-center space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold text-foreground",
						children: "¿Necesitas asesoría sobre qué equipo es el ideal para ti?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground max-w-xl mx-auto",
						children: "Nuestros fisioterapeutas y especialistas te orientan según tu diagnóstico médico (lumbalgia, hernias, mala circulación o postura)."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center gap-4 pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => onGoToBooking("fisio"),
							className: "rounded-xl bg-primary text-primary-foreground font-bold px-6",
							children: "Agendar Evaluación Médica"
						})
					})
				]
			})
		]
	});
}
function CatalogoRoute() {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogPage, { onGoToBooking: (specialtyId) => {
			navigate({
				to: "/paciente",
				search: specialtyId ? { specialty: specialtyId } : {}
			});
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} })
	});
}
//#endregion
export { CatalogoRoute as component };
