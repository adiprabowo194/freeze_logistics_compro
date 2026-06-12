import { z } from "zod";

export const contactSchema = z.object({
  company_name: z
    .string()
    .min(2, "Company name minimal 2 karakter")
    .optional()
    .or(z.literal("")),

  contact_name: z.string().min(2, "Contact name minimal 2 karakter"),

  contact_number: z.string().min(6, "Contact number minimal 6 digit"),

  suburb: z.string().min(2, "Suburb minimal 2 karakter"),

  street_address: z.string().min(5, "Street address minimal 5 karakter"),

  email: z.string().min(2, "Email minimal 2 karakter").email("email not valid"),

  enquiry: z.string().min(10, "Enquiry minimal 10 karakter"),
});

export type ContactInput = z.infer<typeof contactSchema>;
