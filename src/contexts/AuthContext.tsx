import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { authService } from "../api/services/auth.service";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper function to decode JWT payload
function decodeJWT(token: string): { sub: string; username: string } {
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("Invalid JWT token");

  const payload = parts[1];
  const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
  return JSON.parse(decoded);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Check for stored auth token on mount
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const payload = decodeJWT(token);
      return {
        id: payload.sub,
        username: payload.username,
      };
    } catch {
      localStorage.removeItem("token");
      return null;
    }
  });

  const login = async (username: string, password: string) => {
    const { access_token } = await authService.login(username, password);

    // Decode JWT to get user info
    const payload = decodeJWT(access_token);
    const userData: User = {
      id: payload.sub,
      username: payload.username,
    };

    setUser(userData);
    localStorage.setItem("token", access_token);
  };

  const register = async (
    username: string,
    email: string,
    password: string,
  ) => {
    await authService.register(username, email, password);

    // After successful registration, log the user in
    await login(username, password);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
