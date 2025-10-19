
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("process.env.RESEND_API_KEY",process.env.RESEND_API_KEY)
export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, subject, message } = data;

  try {
    const result = await resend.emails.send({
      from: 'Contact Form <no-reply@yourdomain.com>',
      to: ['sebikanepal4@gmail.com'],
      subject: `New Contact Message: ${subject}`,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Subject:</strong> ${subject}<br/>
        <strong>Message:</strong><br/>${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
