"use server";

import { Resend } from "resend";
import { emailTemplate } from "@/lib/emailTemplate";

// Mengambil API Key aman dari environment variable (.env.local)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleContactSubmit(prevState: any, formData: FormData) {
  const company_name = formData.get("company_name") as string;
  const contact_name = formData.get("contact_name") as string;
  const email = formData.get("email") as string;
  const contact_number = formData.get("contact_number") as string;
  const street_address = formData.get("street_address") as string;
  const suburb = formData.get("suburb") as string;
  const enquiry = formData.get("enquiry") as string;

  // Validasi Backend Sederhana
  const errors: Record<string, string> = {};
  if (!contact_name) errors.contact_name = "Contact name wajib diisi";
  if (!email) errors.email = "Email wajib diisi";
  if (!contact_number) errors.contact_number = "Contact number wajib diisi";
  if (!street_address) errors.street_address = "Street address wajib diisi";
  if (!suburb) errors.suburb = "Suburb wajib diisi";
  if (!enquiry) errors.enquiry = "Enquiry wajib diisi";

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    // Eksekusi pengiriman email saja
    await resend.emails.send({
      from: "Freeze Logistics Web <onboarding@resend.dev>", // Ganti ke domain asli Anda jika sudah production
      to: process.env.EMAIL_REGISTER_SENDING
        ? [process.env.EMAIL_REGISTER_SENDING]
        : ["admin@freezelogistics.com.au"], // Email tujuan penerima internal tim Anda
      subject: `New Contact Enquiry from ${contact_name}`,
      html: emailTemplate({
        company_name,
        contact_name,
        email,
        contact_number,
        street_address,
        suburb,
        enquiry,
      }),
    });

    return { success: true, errors: {} };
  } catch (error) {
    return {
      success: false,
      errors: { root: "Failed to send email. Please try again later." },
    };
  }
}
