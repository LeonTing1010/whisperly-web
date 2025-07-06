import { NextRequest } from "next/server";
import { Resend } from "resend";
import { env } from "../../../env.mjs";

type SurveyData = {
  email: string;
  name: string;
  currentUsage: string;
  useCase: string;
  features: string[];
  priceRange: string;
  paymentPreference: string;
  feedback: string;
  urgency: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as SurveyData;
    const { email, name, currentUsage, useCase, features, priceRange, paymentPreference, feedback, urgency } = body;
    
    if (!email || !currentUsage || !useCase) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 });
    }

    const resend = new Resend(env.RESEND_API_KEY);
    
    // Create formatted HTML email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
          New Whisperly User Survey Response
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        </div>

        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Current Usage</h3>
          <p><strong>Usage Frequency:</strong> ${currentUsage}</p>
          <p><strong>Primary Use Case:</strong> ${useCase}</p>
        </div>

        <div style="background-color: #f5f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Feature Preferences</h3>
          <p><strong>Important Features:</strong></p>
          <ul style="margin-left: 20px;">
            ${features.length > 0 ? features.map(feature => `<li>${feature}</li>`).join('') : '<li>No features selected</li>'}
          </ul>
        </div>

        <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Pricing Preferences</h3>
          <p><strong>Price Range:</strong> ${priceRange || 'Not specified'}</p>
          <p><strong>Payment Preference:</strong> ${paymentPreference || 'Not specified'}</p>
        </div>

        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Additional Information</h3>
          <p><strong>Urgency:</strong> ${urgency || 'Not specified'}</p>
          <p><strong>Additional Comments:</strong></p>
          <p style="background-color: white; padding: 10px; border-radius: 4px; border-left: 4px solid #e5e7eb;">
            ${feedback || 'No additional comments'}
          </p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This survey was submitted on ${new Date().toLocaleString()} via the Whisperly website.</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Whisperly Survey <noreply@whisperly.space>",
      to: env.BUY_PRO_RECIPIENT_EMAIL,
      subject: `New User Survey Response - ${useCase}`,
      html: htmlContent,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Survey submission error:', error);
    return new Response(JSON.stringify({ error: "Failed to send survey." }), { status: 500 });
  }
}
