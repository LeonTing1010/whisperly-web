import { NextRequest } from "next/server";
import { Resend } from "resend";
import { env } from "../../../env.mjs";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { email?: string; survey?: string };
    const { email, survey } = body;
    if (!email || !survey) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 });
    }

    const resend = new Resend(env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Whisperly <noreply@whisperly.com>",
      to: env.BUY_PRO_RECIPIENT_EMAIL,
      subject: "New Whisperly Pro Purchase Request",
      html: `<p><b>Email:</b> ${email}</p><p><b>Survey:</b> ${survey}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 });
  }
} 