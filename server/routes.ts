import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // No need for backend routes as this is purely a frontend landing page

  // Basic health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", message: "Brainrot DUELTZ™ API is up and running" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
