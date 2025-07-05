import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  operatingSystem?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactFormData;
    const { name, email, subject, operatingSystem, message } = body;

    // 基本验证
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 邮件内容
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Operating System:</strong> ${operatingSystem || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>This message was sent from the Whisperly contact form.</em></p>
    `;

    // 发送邮件
    const data = await resend.emails.send({
      from: 'noreply@whisperly.space',
      to: [process.env.BUY_PRO_RECIPIENT_EMAIL || 'support@whisperly.space'],
      subject: `Contact Form: ${subject}`,
      html: emailContent,
      replyTo: email,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', emailId: data.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
