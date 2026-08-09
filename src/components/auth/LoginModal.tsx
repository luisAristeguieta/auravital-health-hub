import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Stethoscope, User, LogIn, UserPlus, Lock, Mail, Phone, IdCard, Sparkles } from "lucide-react";
import { useAuth, type UserRole } from "@/context/AuthContext";
import { toast } from "sonner";

import { useNavigate } from "@tanstack/react-router";

export function LoginModal() {
  const navigate = useNavigate();
  const {
    isAuthModalOpen,
    closeAuthModal,
    authModalTab,
    targetRedirectRole,
    login,
    quickLogin: authQuickLogin,
    register,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<"login" | "register">(authModalTab || "login");
  
  // Synchronize tab when opened
  useEffect(() => {
    if (authModalTab) {
      setActiveTab(authModalTab);
    }
  }, [authModalTab, isAuthModalOpen]);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register form state
  const [regForm, setRegForm] = useState({
    name: "",
    cedula: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.trim()) {
      toast.error("Por favor, ingresa tu correo electrónico.");
      return;
    }
    const cleanEmail = loginEmail.trim().toLowerCase();
    login(loginEmail, loginPassword, targetRedirectRole);
    if (cleanEmail.includes("doctor") || targetRedirectRole === "doctor") {
      navigate({ to: "/doctor" });
    } else if (cleanEmail.includes("admin") || targetRedirectRole === "admin") {
      navigate({ to: "/admin" });
    } else {
      navigate({ to: "/paciente" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuickLogin = (role: UserRole) => {
    authQuickLogin(role);
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
    if (!regForm.name || !regForm.cedula || !regForm.email || !regForm.phone) {
      toast.error("Por favor, completa todos los campos requeridos.");
      return;
    }
    register(regForm);
    navigate({ to: "/paciente" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Dialog open={isAuthModalOpen} onOpenChange={(open) => !open && closeAuthModal()}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden bg-card border shadow-2xl">
        <div className="bg-gradient-to-r from-primary/15 via-rose-500/10 to-transparent p-6 pb-4 border-b">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-md">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold tracking-tight text-foreground">
                Acceso a Plataforma AuraVital
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground mt-0.5">
                Ingresa a tu portal médico, agenda de citas o panel administrativo.
              </DialogDescription>
            </div>
          </div>
        </div>

        <div className="p-6 pt-3">
          <Tabs
            value={activeTab}
            onValueChange={(v) => setActiveTab(v as "login" | "register")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="text-xs font-semibold">
                <LogIn className="mr-1.5 h-3.5 w-3.5" /> Iniciar Sesión
              </TabsTrigger>
              <TabsTrigger value="register" className="text-xs font-semibold">
                <UserPlus className="mr-1.5 h-3.5 w-3.5" /> Registrarse (Paciente)
              </TabsTrigger>
            </TabsList>

            {/* TAB: LOGIN */}
            <TabsContent value="login" className="space-y-5 mt-0">
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="login-email" className="text-xs font-medium">
                    Correo Electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="ejemplo@auravital.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="pl-9 h-10 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="login-pass" className="text-xs font-medium">
                      Contraseña
                    </Label>
                    <span className="text-[11px] text-muted-foreground">Demo: cualquier clave</span>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="login-pass"
                      type="password"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="pl-9 h-10 text-sm"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full h-10 font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                  Ingresar a la Plataforma
                </Button>
              </form>

              {/* DEMO QUICK ACCESS BUTTONS */}
              <div className="rounded-xl border border-dashed border-border/90 bg-muted/40 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    ⚡ Accesos Rápidos de Demostración
                  </span>
                  <Badge variant="secondary" className="text-[10px]">Sin contraseña</Badge>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-1">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleQuickLogin("patient")}
                    className="justify-start h-9 text-xs font-medium hover:border-primary hover:text-primary transition-all"
                  >
                    <User className="mr-2 h-4 w-4 text-rose-500" />
                    <span>Entrar como <strong>Paciente</strong> (paciente@auravital.com)</span>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleQuickLogin("doctor")}
                    className="justify-start h-9 text-xs font-medium hover:border-primary hover:text-primary transition-all"
                  >
                    <Stethoscope className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Entrar como <strong>Doctor</strong> (doctor@auravital.com)</span>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleQuickLogin("admin")}
                    className="justify-start h-9 text-xs font-medium hover:border-primary hover:text-primary transition-all"
                  >
                    <ShieldCheck className="mr-2 h-4 w-4 text-amber-500" />
                    <span>Entrar como <strong>Administrador</strong> (admin@auravital.com)</span>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* TAB: REGISTER */}
            <TabsContent value="register" className="space-y-4 mt-0">
              <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                <div className="space-y-1.5">
                  <Label htmlFor="reg-name" className="text-xs font-medium">Nombre y Apellidos</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="reg-name"
                      placeholder="Ej. Carlos Mendoza"
                      value={regForm.name}
                      onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                      className="pl-9 h-9 text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="reg-cedula" className="text-xs font-medium">Cédula</Label>
                    <div className="relative">
                      <IdCard className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="reg-cedula"
                        placeholder="1712345678"
                        value={regForm.cedula}
                        onChange={(e) => setRegForm({ ...regForm, cedula: e.target.value })}
                        className="pl-9 h-9 text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="reg-phone" className="text-xs font-medium">WhatsApp</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="reg-phone"
                        placeholder="+593 99 123 4567"
                        value={regForm.phone}
                        onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                        className="pl-9 h-9 text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="reg-email" className="text-xs font-medium">Correo Electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="reg-email"
                      type="email"
                      placeholder="paciente@correo.com"
                      value={regForm.email}
                      onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                      className="pl-9 h-9 text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="reg-pass" className="text-xs font-medium">Crear Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="reg-pass"
                      type="password"
                      placeholder="••••••••"
                      value={regForm.password}
                      onChange={(e) => setRegForm({ ...regForm, password: e.target.value })}
                      className="pl-9 h-9 text-sm"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full h-10 font-bold bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
                  Crear Cuenta e Iniciar Sesión
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
