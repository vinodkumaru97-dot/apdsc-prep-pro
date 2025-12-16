import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "wouter";
import { createClient, User, Session, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

const isSupabaseConfigured = () => supabase !== null;

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isConfigured: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name?: string, role?: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isSupabaseConfigured() || !supabase) {
      // Check localStorage for mock user
      const mockUser = localStorage.getItem("mock_user");
      if (mockUser) {
        setUser(JSON.parse(mockUser));
      }
      setIsLoading(false);
      return;
    }

    // Get initial session from Supabase
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      if (!isSupabaseConfigured() || !supabase) {
        // Mock sign in
        const mockUser = {
          id: `mock-${Date.now()}`,
          email,
          user_metadata: { name: email.split("@")[0], role: "student" },
          app_metadata: {},
          aud: "mock",
          created_at: new Date().toISOString(),
        } as unknown as User;
        setUser(mockUser);
        localStorage.setItem("mock_user", JSON.stringify(mockUser));
        setLocation("/dashboard");
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setSession(data.session);
      setUser(data.user);
      setLocation("/dashboard");
    } catch (error: any) {
      throw new Error(error.message || "Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name?: string, role?: string) => {
    setIsLoading(true);
    try {
      if (!isSupabaseConfigured() || !supabase) {
        // Mock sign up
        const mockUser = {
          id: `mock-${Date.now()}`,
          email,
          user_metadata: { name: name || email.split("@")[0], role: role || "student" },
          app_metadata: {},
          aud: "mock",
          created_at: new Date().toISOString(),
        } as unknown as User;
        setUser(mockUser);
        localStorage.setItem("mock_user", JSON.stringify(mockUser));
        setLocation("/dashboard");
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name || email.split("@")[0],
            role: role || "student",
          },
        },
      });

      if (error) throw error;

      setSession(data.session);
      setUser(data.user);
      setLocation("/dashboard");
    } catch (error: any) {
      throw new Error(error.message || "Failed to sign up");
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      if (!isSupabaseConfigured() || !supabase) {
        setUser(null);
        localStorage.removeItem("mock_user");
        setLocation("/");
        return;
      }

      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      setSession(null);
      setUser(null);
      setLocation("/");
    } catch (error: any) {
      throw new Error(error.message || "Failed to sign out");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      session, 
      isLoading, 
      isConfigured: isSupabaseConfigured(),
      signIn, 
      signUp, 
      signOut 
    }}>
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
