 "use client";
 
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { login as apiLogin, type LoginResponse } from "@/lib/admin-api";

type AdminAuthContextValue = {
  isAuthenticated: boolean;
  isDemo: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user: LoginResponse["user"] | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

type StoredSession =
  | {
      mode: "real";
      accessToken: string;
      refreshToken: string;
      user: LoginResponse["user"];
    }
  | {
    mode: "demo";
    user: LoginResponse["user"];
  };

const STORAGE_KEY = "admin-auth-session";
const DEMO_USERNAME = "demo";
const DEMO_PASSWORD = "demo123";

const AdminAuthContext = createContext<AdminAuthContextValue | undefined>(undefined);
 
 type ProviderProps = {
   children: React.ReactNode;
 };
 
export function AdminAuthProvider({ children }: ProviderProps) {
  const [session, setSession] = useState<StoredSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as StoredSession;
        if (
          parsed &&
          ((parsed.mode === "real" && parsed.accessToken && parsed.refreshToken) || parsed.mode === "demo")
        ) {
          setSession(parsed);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const persistSession = useCallback((nextSession: StoredSession) => {
    setSession(nextSession);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSession));
    }
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const trimmedUsername = username.trim();

    if (trimmedUsername === DEMO_USERNAME && password === DEMO_PASSWORD) {
      const demoUser: LoginResponse["user"] = {
        id: -1,
        username: DEMO_USERNAME,
        email: "demo@example.com",
        first_name: "Demo",
        last_name: "Admin",
        is_staff: true,
        is_superuser: true,
      };

      persistSession({
        mode: "demo",
        user: demoUser,
      });
      return;
    }

    const response = await apiLogin(trimmedUsername, password);
    if (!response.success) {
      throw new Error(response.message ?? "Unable to authenticate.");
    }

    const nextSession: StoredSession = {
      mode: "real",
      accessToken: response.tokens.access,
      refreshToken: response.tokens.refresh,
      user: response.user,
    };

    persistSession(nextSession);
  }, [persistSession]);

  const logout = useCallback(() => {
    setSession(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const value = useMemo<AdminAuthContextValue>(
  () => ({
    isAuthenticated: Boolean(session),
    isDemo: session?.mode === "demo",
    accessToken: session?.mode === "real" ? session.accessToken : null,
    refreshToken: session?.mode === "real" ? session.refreshToken : null,
    user: session?.user ?? null,
    login,
    logout,
    isLoading,
  }),
  [session, login, logout, isLoading],
);

return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}

