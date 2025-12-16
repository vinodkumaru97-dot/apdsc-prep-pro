import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { supabase, isSupabaseConfigured } from "./lib/supabase";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Check if Supabase is configured
  app.get("/api/auth/status", (req, res) => {
    res.json({ 
      configured: isSupabaseConfigured(),
      message: isSupabaseConfigured() 
        ? "Supabase authentication is ready" 
        : "Supabase not configured - using mock authentication"
    });
  });

  // Auth Routes
  app.post("/api/auth/signup", async (req, res) => {
    try {
      if (!isSupabaseConfigured() || !supabase) {
        // Mock signup for development
        const { email, name, role } = req.body;
        const mockUser = {
          id: `mock-${Date.now()}`,
          email,
          user_metadata: { name: name || email.split("@")[0], role: role || "student" },
        };
        return res.json({ user: mockUser, session: { access_token: "mock-token" } });
      }

      const { email, password, name, role } = req.body;

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

      if (error) {
        return res.status(400).json({ error: error.message });
      }

      res.json({ user: data.user, session: data.session });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/auth/signin", async (req, res) => {
    try {
      if (!isSupabaseConfigured() || !supabase) {
        // Mock signin for development
        const { email } = req.body;
        const mockUser = {
          id: `mock-${Date.now()}`,
          email,
          user_metadata: { name: email.split("@")[0], role: "student" },
        };
        return res.json({ user: mockUser, session: { access_token: "mock-token" } });
      }

      const { email, password } = req.body;

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return res.status(400).json({ error: error.message });
      }

      res.json({ user: data.user, session: data.session });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/auth/signout", async (req, res) => {
    try {
      if (!isSupabaseConfigured() || !supabase) {
        return res.json({ success: true });
      }

      const { error } = await supabase.auth.signOut();

      if (error) {
        return res.status(400).json({ error: error.message });
      }

      res.json({ success: true });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/auth/session", async (req, res) => {
    try {
      if (!isSupabaseConfigured() || !supabase) {
        return res.status(401).json({ error: "Not authenticated" });
      }

      const authHeader = req.headers.authorization;
      
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "No token provided" });
      }

      const token = authHeader.substring(7);
      
      const { data, error } = await supabase.auth.getUser(token);

      if (error) {
        return res.status(401).json({ error: error.message });
      }

      res.json({ user: data.user });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  return httpServer;
}
