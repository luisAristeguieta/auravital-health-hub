import React, { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAuth, type UserRole } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AuraVitalIcon } from "@/components/auravital/AuraVitalLogo";
import {
  ShieldCheck,
  Stethoscope,
  User,
  LogIn,
  UserPlus,
  Lock,
  Mail,
  Phone,
  IdCard,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

interface LoginPageProps {
  initialTab?: "login" | "register" | undefined;
  initialRole?: UserRole | undefined;
}

export function LoginPage({ initialTab = "login", initialRole }: LoginPageProps) {
  const navigate = useNavigate();
  const { user, login, quickLogin, register } = useAuth();

  const [activeTab, setActiveTab] = useState<"login" | "register">(initialTab || "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regForm, setRegForm] = useState({
    name: "",
    cedula: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Si ya tiene rol preseleccionado en URL, prellenar su email demo
  useEffect(() => {
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

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Por favor, ingresa tu correo electrónico.");
      return;
    }

    login(email, password, initialRole);

    const clean = email.trim().toLowerCase();
    if (clean.includes("doctor") || initialRole === "doctor") {
      navigate({ to: "/doctor" });
    } else if (clean.includes("admin") || initialRole === "admin") {
      navigate({ to: "/admin" });
    } else {
      navigate({ to: "/paciente" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuick = (role: UserRole) => {
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

    if (role === "doctor") {
      navigate({ to: "/doctor" });
    } else if (role === "admin") {
      navigate({ to: "/admin" });
    } else {
      navigate({ to: "/paciente" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
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
      password: regForm.password,
    });
    navigate({ to: "/paciente" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Si ya tiene sesión activa
  if (user) {
    const rolePaths = {
      patient: "/paciente",
      doctor: "/doctor",
      admin: "/admin",
    };

    return (
      <div className="max-w-md mx-auto my-12 text-center space-y-6 animate-in fade-in duration-300">
        <Card className="p-8 space-y-5 rounded-3xl border shadow-xl bg-card">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-600 mx-auto">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Sesión Activa</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Has iniciado sesión como <strong className="text-foreground">{user.name}</strong> ({user.role.toUpperCase()}).
            </p>
          </div>
          <div className="space-y-2 pt-2">
            <Button
              onClick={() => {
                navigate({ to: rolePaths[user.role] });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold h-11 shadow-md cursor-pointer"
            >
              Ir a Mi Panel ({user.role === "patient" ? "Portal de Citas" : user.role === "doctor" ? "Panel Médico" : "Administración"})
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                navigate({ to: "/" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full rounded-xl text-xs font-semibold cursor-pointer"
            >
              Volver al Inicio
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto my-6 sm:my-10 animate-in fade-in duration-300">
      <Card className="overflow-hidden rounded-3xl border shadow-xl bg-card">
        {/* Header con Branding AuraVital */}
        <div className="bg-gradient-to-r from-rose-500/15 via-primary/10 to-transparent p-6 border-b">
          <div className="flex items-center gap-3.5">
            <div className="shrink-0">
              <AuraVitalIcon className="h-11 w-11" />
            </div>
            <div>
              <CardTitle className="text-xl font-extrabold tracking-tight text-foreground">
                Acceso a AuraVital
              </CardTitle>
              <CardDescription className="text-xs text-muted-foreground mt-0.5">
                Ingresa a tu portal médico, agenda de citas o control administrativo.
              </CardDescription>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "login" | "register")} className="w-full">
            {/* Selector de Pestañas Superior */}
            <TabsList className="grid w-full grid-cols-2 mb-6 h-11 bg-muted/70 p-1 rounded-xl">
              <TabsTrigger value="login" className="text-xs font-bold rounded-lg data-[state=active]:bg-card data-[state=active]:text-rose-600 data-[state=active]:shadow-xs">
                <LogIn className="mr-1.5 h-3.5 w-3.5" /> Iniciar Sesión
              </TabsTrigger>
              <TabsTrigger value="register" className="text-xs font-bold rounded-lg data-[state=active]:bg-card data-[state=active]:text-rose-600 data-[state=active]:shadow-xs">
                <UserPlus className="mr-1.5 h-3.5 w-3.5" /> Crear Cuenta (Paciente)
              </TabsTrigger>
            </TabsList>

            {/* Pestaña: Iniciar Sesión */}
            <TabsContent value="login" className="space-y-5 mt-0">
              {/* Sección de ACCESOS RÁPIDOS DE DEMOSTRACIÓN */}
              <div className="space-y-2.5 rounded-2xl bg-rose-500/5 p-4 border border-rose-200/50 dark:border-rose-950">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-black text-rose-700 dark:text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-rose-600" />
                    Accesos Rápidos de Demostración:
                  </p>
                  <span className="text-[10px] font-semibold text-muted-foreground">1-Clic</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuick("patient")}
                    className="h-10 text-xs font-bold flex flex-col items-center justify-center gap-0.5 bg-card hover:border-emerald-500 hover:text-emerald-600 transition-all cursor-pointer shadow-2xs"
                  >
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-emerald-600" /> Paciente
                    </span>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuick("doctor")}
                    className="h-10 text-xs font-bold flex flex-col items-center justify-center gap-0.5 bg-card hover:border-blue-500 hover:text-blue-600 transition-all cursor-pointer shadow-2xs"
                  >
                    <span className="flex items-center gap-1">
                      <Stethoscope className="h-3.5 w-3.5 text-blue-600" /> Doctor
                    </span>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuick("admin")}
                    className="h-10 text-xs font-bold flex flex-col items-center justify-center gap-0.5 bg-card hover:border-purple-500 hover:text-purple-600 transition-all cursor-pointer shadow-2xs"
                  >
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-purple-600" /> Admin
                    </span>
                  </Button>
                </div>
              </div>

              {/* Formulario Estándar */}
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="login-email" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-rose-600" /> Correo Electrónico
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="ej. paciente@auravital.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 text-xs rounded-xl focus-visible:ring-rose-500"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="login-pass" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5 text-rose-600" /> Contraseña
                  </Label>
                  <Input
                    id="login-pass"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-10 text-xs rounded-xl focus-visible:ring-rose-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 font-extrabold bg-rose-600 hover:bg-rose-700 text-white rounded-xl shadow-md transition-all hover:scale-[1.01] cursor-pointer mt-2"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Entrar a la Plataforma
                </Button>
              </form>
            </TabsContent>

            {/* Pestaña: Crear Cuenta */}
            <TabsContent value="register" className="space-y-4 mt-0">
              <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                <div className="space-y-1">
                  <Label htmlFor="reg-name" className="text-xs font-bold flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-rose-600" /> Nombres y Apellidos
                  </Label>
                  <Input
                    id="reg-name"
                    placeholder="Ej. Juan Pérez"
                    value={regForm.name}
                    onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                    className="h-10 text-xs rounded-xl"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label htmlFor="reg-cedula" className="text-xs font-bold flex items-center gap-1.5">
                      <IdCard className="h-3.5 w-3.5 text-rose-600" /> Cédula
                    </Label>
                    <Input
                      id="reg-cedula"
                      placeholder="1712345678"
                      value={regForm.cedula}
                      onChange={(e) => setRegForm({ ...regForm, cedula: e.target.value })}
                      className="h-10 text-xs rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="reg-phone" className="text-xs font-bold flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-rose-600" /> Teléfono / WhatsApp
                    </Label>
                    <Input
                      id="reg-phone"
                      placeholder="+593 99 000 0000"
                      value={regForm.phone}
                      onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                      className="h-10 text-xs rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="reg-email" className="text-xs font-bold flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-rose-600" /> Correo Electrónico
                  </Label>
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder="juan.perez@email.com"
                    value={regForm.email}
                    onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                    className="h-10 text-xs rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="reg-pass" className="text-xs font-bold flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5 text-rose-600" /> Contraseña
                  </Label>
                  <Input
                    id="reg-pass"
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    value={regForm.password}
                    onChange={(e) => setRegForm({ ...regForm, password: e.target.value })}
                    className="h-10 text-xs rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="reg-confirm-pass" className="text-xs font-bold flex items-center gap-1.5">
                      <Lock className="h-3.5 w-3.5 text-rose-600" /> Confirmar Contraseña
                    </Label>
                    {regForm.confirmPassword && (
                      <span className={`text-[10px] font-bold ${regForm.password === regForm.confirmPassword ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600"}`}>
                        {regForm.password === regForm.confirmPassword ? "✓ Coinciden" : "✕ No coinciden"}
                      </span>
                    )}
                  </div>
                  <Input
                    id="reg-confirm-pass"
                    type="password"
                    placeholder="Repite tu contraseña"
                    value={regForm.confirmPassword}
                    onChange={(e) => setRegForm({ ...regForm, confirmPassword: e.target.value })}
                    className={`h-10 text-xs rounded-xl ${
                      regForm.confirmPassword && regForm.password !== regForm.confirmPassword
                        ? "border-rose-500 focus-visible:ring-rose-500"
                        : regForm.confirmPassword && regForm.password === regForm.confirmPassword
                        ? "border-emerald-500 focus-visible:ring-emerald-500"
                        : ""
                    }`}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 font-extrabold bg-rose-600 hover:bg-rose-700 text-white mt-3 rounded-xl shadow-md transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  Completar Registro de Paciente
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
