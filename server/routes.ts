import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema, contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the input using Zod schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Create the message in storage
      const message = await storage.createMessage({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message
      });

      // Return success response
      return res.status(200).json({
        success: true,
        message: "Message sent successfully",
        data: message
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // If validation error, return formatted error message
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }

      // For other errors
      console.error("Error submitting contact form:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while sending your message. Please try again later."
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
