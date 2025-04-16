import { MailService } from '@sendgrid/mail';

// Make sure to check for API key
if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable is not set. Email functionality will not work.");
}

// Initialize mail service if API key is available
const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

/**
 * Sends an email using SendGrid
 * @param params Email parameters (to, from, subject, text/html)
 * @returns Promise resolving to boolean indicating success/failure
 */
export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('Cannot send email: SENDGRID_API_KEY is not set');
    return false;
  }

  try {
    // Type assertion to assure TypeScript that SENDGRID_API_KEY is defined
    const apiKey = process.env.SENDGRID_API_KEY as string;
    mailService.setApiKey(apiKey);
    
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

/**
 * Formats a contact form submission into HTML for email
 */
export function formatContactFormHtml(name: string, email: string, subject: string, message: string): string {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <p style="margin-bottom: 20px; color: #666;">You have received a new message from your portfolio website contact form.</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #aaff00;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
      
      <p style="color: #999; font-size: 12px;">This email was sent from your portfolio website contact form.</p>
    </div>
  `;
}

/**
 * Creates a plain text version of the email for clients that don't support HTML
 */
export function formatContactFormText(name: string, email: string, subject: string, message: string): string {
  return `
New Contact Form Submission

You have received a new message from your portfolio website contact form.

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}

This email was sent from your portfolio website contact form.
  `;
}