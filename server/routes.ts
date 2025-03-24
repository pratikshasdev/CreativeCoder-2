import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes - prefix all routes with /api
  
  // Get all projects
  app.get("/api/projects", async (req: Request, res: Response) => {
    try {
      const projects = await storage.getAllProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });
  
  // Get project by ID
  app.get("/api/projects/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid project ID" });
      }
      
      const project = await storage.getProjectById(id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });
  
  // Get projects by category
  app.get("/api/projects/category/:category", async (req: Request, res: Response) => {
    try {
      const category = req.params.category;
      const projects = await storage.getProjectsByCategory(category);
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects by category" });
    }
  });
  
  // Get all skills
  app.get("/api/skills", async (req: Request, res: Response) => {
    try {
      const skills = await storage.getAllSkills();
      res.json(skills);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch skills" });
    }
  });
  
  // Get skills by category
  app.get("/api/skills/category/:category", async (req: Request, res: Response) => {
    try {
      const category = req.params.category;
      const skills = await storage.getSkillsByCategory(category);
      res.json(skills);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch skills by category" });
    }
  });
  
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body using the Zod schema
      const validationResult = insertMessageSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const errorMessage = fromZodError(validationResult.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      // Save the message
      const message = await storage.createMessage(validationResult.data);
      
      // In a real application, you might want to send an email here
      // For this demo, we'll just return the created message
      res.status(201).json({ 
        message: "Message sent successfully", 
        data: message 
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
