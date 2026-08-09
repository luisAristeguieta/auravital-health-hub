import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { toast } from "sonner";

export type UserRole = "patient" | "doctor" | "admin";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  cedula?: string | undefined;
  phone?: string | undefined;
  specialty?: string | undefined;
  initials: string;
}

export const demoUsers: Record<UserRole, AuthUser> = {
  patient: {
    id: "u-patient",
    name: "Juan Pérez",
    email: "paciente@auravital.com",
    role: "patient",
    cedula: "1712345678",
    phone: "+593 99 812 4455",
    initials: "JP",
  },
  doctor: {
    id: "u-doctor",
    name: "Dra. Valeria Ríos",
    email: "doctor@auravital.com",
    role: "doctor",
    specialty: "Cardiología & Salud Integral",
    initials: "VR",
  },
  admin: {
    id: "u-admin",
    name: "Lic. Roberto Noboa",
    email: "admin@auravital.com",
    role: "admin",
    specialty: "Dirección Médica & Finanzas",
    initials: "RN",
  },
};

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password?: string, role?: UserRole) => boolean;
  quickLogin: (role: UserRole) => void;
  register: (data: { name: string; email: string; cedula: string; phone: string; password?: string }) => void;
  logout: () => void;
  isAuthModalOpen: boolean;
  authModalTab: "login" | "register";
  openAuthModal: (tab?: "login" | "register", targetRole?: UserRole) => void;
  closeAuthModal: () => void;
  targetRedirectRole?: UserRole | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<"login" | "register">("login");
  const [targetRedirectRole, setTargetRedirectRole] = useState<UserRole | undefined>();

  const openAuthModal = (tab: "login" | "register" = "login", targetRole?: UserRole) => {
    setAuthModalTab(tab);
    setTargetRedirectRole(targetRole);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setTargetRedirectRole(undefined);
  };

  const quickLogin = (role: UserRole) => {
    const selectedUser = demoUsers[role];
    setUser(selectedUser);
    setIsAuthModalOpen(false);
    toast.success(`Bienvenido/a, ${selectedUser.name} (${selectedUser.role.toUpperCase()})`);
  };

  const login = (email: string, password?: string, manualRole?: UserRole): boolean => {
    const cleanEmail = email.trim().toLowerCase();

    let resolvedRole: UserRole = manualRole || "patient";
    if (cleanEmail.includes("doctor")) resolvedRole = "doctor";
    else if (cleanEmail.includes("admin")) resolvedRole = "admin";

    const baseUser = demoUsers[resolvedRole];
    const loggedUser: AuthUser = {
      ...baseUser,
      email: cleanEmail || baseUser.email,
    };

    setUser(loggedUser);
    setIsAuthModalOpen(false);
    toast.success(`Sesión iniciada como ${loggedUser.name}`);
    return true;
  };

  const register = (data: { name: string; email: string; cedula: string; phone: string; password?: string }) => {
    const initials = data.name
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "PA";

    const newUser: AuthUser = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      role: "patient",
      cedula: data.cedula,
      phone: data.phone,
      initials,
    };

    setUser(newUser);
    setIsAuthModalOpen(false);
    toast.success(`¡Cuenta creada con éxito! Bienvenido/a ${newUser.name}`);
  };

  const logout = () => {
    setUser(null);
    toast.info("Has cerrado sesión.");
  };

  return (
    <AuthContext.Provider
      value={{
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
        targetRedirectRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
