import { z } from "zod";

export const HELP_TYPES = [
  { value: "web-development", label: "Web Development" },
  { value: "digital-infrastructure", label: "Digital Infrastructure" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your name"),
  email: z.string().trim().email("Enter a valid email"),
  helpType: z.enum(["web-development", "digital-infrastructure", "not-sure"], {
    message: "Choose what you need help with",
  }),
  message: z.string().trim().min(10, "Tell us a bit more about your project"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
