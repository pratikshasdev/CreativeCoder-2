import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact message
      const contact = await storage.createContact(contactData);
      
      res.status(200).json({ success: true, message: "Message sent successfully", contact });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(400).json({ success: false, message: "Invalid form data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
