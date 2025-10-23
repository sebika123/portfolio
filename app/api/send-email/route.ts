import { Resend } from "resend";

export const dynamic = "force-dynamic"; // ensure dynamic route
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ success: false, error: "All fields are required." }), { status: 400 });
    }

    const API_KEY = process.env.RESEND_API_KEY; // Set this in Cloudflare Pages Environment Variables

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contact Form <no-reply@yourdomain.com>",
        to: ["sebikanepal.dev@gmail.com"],
        subject: `New Contact Message: ${subject}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const result = await response.json();

    return new Response(JSON.stringify({ success: true, result }), { status: 200 });
  } catch (error: any) {
    console.error("Resend error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message || "Internal Server Error" }), { status: 500 });
  }
}
