"use server";

import { Resend } from "resend";
import { emailTemplate } from "@/lib/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleContactSubmit(prevState: any, formData: FormData) {
  const company_name = formData.get("company_name") as string;
  const contact_name = formData.get("contact_name") as string;
  const email = formData.get("email") as string;
  const contact_number = formData.get("contact_number") as string;
  const street_address = formData.get("street_address") as string;
  const suburb = formData.get("suburb") as string;
  const enquiry = formData.get("enquiry") as string;

  // Validasi Backend dengan Bahasa Inggris yang benar
  const errors: Record<string, string> = {};
  if (!contact_name) errors.contact_name = "Contact name is required";
  if (!email) errors.email = "Email address is required";
  if (!contact_number) errors.contact_number = "Contact number is required";
  if (!street_address) errors.street_address = "Street address is required";
  if (!suburb) errors.suburb = "Suburb selection is required";
  if (!enquiry) errors.enquiry = "Enquiry message is required";

  // Validasi format email sederhana tambahan
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
      message: "Please fix the errors in the form.",
      timestamp: Date.now(),
    };
  }

  try {
    // Eksekusi pengiriman email saja tanpa customerCandidate
    await resend.emails.send({
      from: "Freeze Logistics Web <onboarding@resend.dev>",
      to: ["adiprabowo194@gmail.com"],
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

    return {
      success: true,
      errors: {},
      message: "Thank you! Your message has been sent successfully.",
      timestamp: Date.now(),
    };
  } catch (error) {
    return {
      success: false,
      errors: { root: "Failed to send email. Please try again later." },
      message: "An error occurred while sending email. Please try again.",
      timestamp: Date.now(),
    };
  }
}
