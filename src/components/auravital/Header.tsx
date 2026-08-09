import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Home, LogIn, LogOut, ShieldCheck, ShoppingBag, ShoppingCart, Stethoscope, User, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { AuraVitalIcon } from "@/components/auravital/AuraVitalLogo";
import { cn } from "@/lib/utils";

export type ActiveView = "home" | "catalog" | "patient" | "doctor" | "admin" | "login";

interface HeaderProps {
  activeView?: ActiveView;
  onNavigate?: (view: ActiveView) => void;
}

export function Header({ activeView: propActiveView, onNavigate }: HeaderProps) {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems, openCart } = useCart();

  // Detect current route from TanStack router state
  const pathname = useRouterState({
    select: (s) => s?.location?.pathname ?? "/",
  });

  const getActiveTab = (): ActiveView => {
    if (propActiveView) return propActiveView;
    if (pathname === "/catalogo") return "catalog";
    if (pathname === "/paciente") return "patient";
    if (pathname === "/doctor") return "doctor";
    if (pathname === "/admin") return "admin";
    if (pathname === "/login") return "login";
    return "home";
  };

  const currentTab = getActiveTab();

  const handleNavigate = (view: ActiveView, path: string) => {
    if (onNavigate) {
      onNavigate(view);
    }
    navigate({ to: path });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    logout();
    handleNavigate("home", "/");
  };

  const roleLabels: Record<string, string> = {
    patient: "Paciente",
    doctor: "Médico Especialista",
    admin: "Súper Admin",
  };

  const getRolePath = (role: string) => {
    if (role === "doctor") return "/doctor";
    if (role === "admin") return "/admin";
    return "/paciente";
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* LOGO & BRAND */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex min-w-0 items-center gap-3 text-left transition-all duration-200 hover:opacity-90 cursor-pointer group select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            title="Ir a la página de inicio de AuraVital"
          >
            <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
              <AuraVitalIcon className="h-10 w-10" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-lg font-bold leading-tight tracking-tight text-[#D00B2B]">
                AuraVital
              </p>
              <p className="truncate text-[11px] font-medium text-[#D00B2B]/85">
                Salud Terapéutica & Equipos Médicos
              </p>
            </div>
          </Link>

          {/* PUBLIC LINKS */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors",
                currentTab === "home"
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <Home className="h-3.5 w-3.5" />
              <span>Inicio</span>
            </Link>

            <Link
              to="/catalogo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors",
                currentTab === "catalog"
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>Catálogo de Equipos</span>
            </Link>

            {/* Link al área privada si está logueado */}
            {isAuthenticated && user && (
              <Link
                to={getRolePath(user.role)}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors border border-primary/20 bg-primary/5",
                  currentTab === user.role
                    ? "bg-primary text-primary-foreground font-bold"
                    : "text-primary hover:bg-primary/10"
                )}
              >
                {user.role === "patient" && <User className="h-3.5 w-3.5" />}
                {user.role === "doctor" && <Stethoscope className="h-3.5 w-3.5" />}
                {user.role === "admin" && <ShieldCheck className="h-3.5 w-3.5" />}
                <span>
                  {user.role === "patient" && "Mi Portal de Citas"}
                  {user.role === "doctor" && "Panel Clínico & Ganancias"}
                  {user.role === "admin" && "Control Administrativo"}
                </span>
              </Link>
            )}
          </nav>
        </div>

        {/* AUTH ACTIONS OR USER PROFILE */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* BOTÓN DEL CARRITO DE COMPRAS CON BADGE DINÁMICO */}
          <button
            type="button"
            onClick={openCart}
            className="relative grid h-9 w-9 place-items-center rounded-xl border bg-card hover:bg-muted text-foreground transition-colors cursor-pointer group shadow-2xs"
            title="Ver Carrito de Compras"
            aria-label="Abrir Carrito de Compras"
          >
            <ShoppingCart className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-black text-primary-foreground shadow-xs animate-in zoom-in">
                {totalItems}
              </span>
            )}
          </button>

          {!isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  navigate({ to: "/login", search: { tab: "login" } });
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="h-9 rounded-lg text-xs font-semibold hover:border-primary hover:text-primary cursor-pointer"
              >
                <LogIn className="mr-1.5 h-3.5 w-3.5" />
                Iniciar Sesión
              </Button>

              <Button
                size="sm"
                onClick={() => {
                  navigate({ to: "/login", search: { tab: "register" } });
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="h-9 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 shadow-sm cursor-pointer"
              >
                <UserPlus className="mr-1.5 h-3.5 w-3.5" />
                Registrarse
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3">
              {/* User badge and info */}
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs font-bold text-foreground leading-tight">{user?.name}</span>
                <span className="text-[10px] text-muted-foreground font-medium">
                  {user ? roleLabels[user.role] : ""}
                </span>
              </div>

              <Avatar className="h-8 w-8 border-2 border-primary/40 bg-primary/10 text-primary">
                <AvatarFallback className="text-xs font-bold text-primary">
                  {user?.initials || "AV"}
                </AvatarFallback>
              </Avatar>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="h-8 px-2.5 rounded-lg text-xs font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                title="Cerrar sesión"
              >
                <LogOut className="h-4 w-4 sm:mr-1.5" />
                <span className="hidden sm:inline">Salir</span>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE SECONDARY NAV */}
      <div className="flex md:hidden items-center justify-around border-t px-4 py-2 text-xs bg-muted/30">
        <Link
          to="/"
          className={cn("py-1 font-semibold", currentTab === "home" ? "text-primary font-bold" : "text-muted-foreground")}
        >
          Inicio
        </Link>
        <Link
          to="/catalogo"
          className={cn("py-1 font-semibold", currentTab === "catalog" ? "text-primary font-bold" : "text-muted-foreground")}
        >
          Catálogo
        </Link>
        {isAuthenticated && user ? (
          <Link
            to={getRolePath(user.role)}
            className={cn("py-1 font-semibold", currentTab === user.role ? "text-primary font-bold" : "text-muted-foreground")}
          >
            {user.role === "patient" && "Mi Portal"}
            {user.role === "doctor" && "Panel Doctor"}
            {user.role === "admin" && "Admin"}
          </Link>
        ) : (
          <Link
            to="/login"
            className={cn("py-1 font-semibold", currentTab === "login" ? "text-primary font-bold" : "text-muted-foreground")}
          >
            Acceder
          </Link>
        )}
      </div>
    </header>
  );
}
