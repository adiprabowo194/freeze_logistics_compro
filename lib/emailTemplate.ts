import { ContactInput } from "./schema";

export function emailTemplate(data: {
  company_name?: string;
  contact_name: string;
  email: string;
  contact_number: string;
  street_address: string;
  suburb: string;
  enquiry: string;
}) {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
      <!-- Header / Logo -->
      <div style="text-align: center; margin-bottom: 30px;">
        <a href="https://freezelogistics.com.au" target="_blank" style="text-decoration: none; display: inline-block;">
          <img 
            src="https://freezelogistics.com.au/assets/logo_freeze_logistics.webp" 
            alt="Freeze Logistics" 
            width="180"
            style="display: block; width: 180px; height: auto; max-width: 100%; border: 0; outline: none; margin: 0 auto;"
          />
        </a>
        <p style="color: #64748b; font-size: 13px; margin-top: 10px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;">
          New Website Enquiry Received
        </p>
      </div>

      <hr style="border: 0; border-top: 1px solid #f1f5f9; margin-bottom: 30px;" />

      <!-- Content -->
      <p style="font-size: 16px; color: #334155; line-height: 1.6; margin-bottom: 12px;">Hi Team,</p>
      <p style="font-size: 16px; color: #334155; line-height: 1.6; margin-bottom: 24px;">
        A user has submitted a new inquiry through the <strong>Get In Touch</strong> form on the website. Below are the details provided:
      </p>

      <!-- Customer Details Table Card -->
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
        <h3 style="color: #0f172a; margin-top: 0; margin-bottom: 16px; font-size: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
          Contact Information
        </h3>
        <table style="width: 100%; font-size: 15px; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 35%; font-weight: 500;">Company Name</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.company_name || "-"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Contact Name</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.contact_name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Email Address</td>
            <td style="padding: 8px 0; color: #2563eb; font-weight: 600;"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Contact Number</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.contact_number}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Street Address</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.street_address}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Suburb</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.suburb}</td>
          </tr>
        </table>
      </div>

      <!-- Enquiry Section Card -->
      <div style="background-color: #f1f5f9; border-radius: 12px; padding: 24px; margin-bottom: 35px;">
        <h3 style="color: #0f172a; margin-top: 0; margin-bottom: 12px; font-size: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
          Enquiry / Message
        </h3>
        <p style="font-size: 15px; color: #334155; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.enquiry}</p>
      </div>

      <hr style="border: 0; border-top: 1px solid #f1f5f9; margin-bottom: 24px;" />

      <!-- Footer -->
      <div style="text-align: center; color: #94a3b8; font-size: 12px; line-height: 1.5;">
        <p style="margin: 0 0 4px 0; font-weight: 600; color: #64748b;">Freeze Logistics Notification System</p>
        <p style="margin: 0;">This is an automated operational email sent from the Get Started Page form.</p>
      </div>
    </div>
  `;
}
