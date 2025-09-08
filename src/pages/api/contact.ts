import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// This API route must always run on the server with Node runtime
export const prerender = false;
export const runtime = 'node';

// Ensure the secret is only used on the server
const RESEND_API_KEY = import.meta.env.SECRET_RESEND_API_KEY;

if (!RESEND_API_KEY) {
  console.warn('[api/contact] SECRET_RESEND_API_KEY is not set. Email sending will fail.');
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    console.log(contentType);

    let data: { name?: string; email?: string; subject?: string; message?: string } = {};

    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await request.formData();
      data = Object.fromEntries(form.entries()) as Record<string, string>;
    } else {
      return new Response(
        JSON.stringify({ ok: false, error: 'Unsupported Content-Type' }),
        { status: 415, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { name, email, subject, message } = data;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: 'All fields are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Server email service not configured.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    // Customize these values for your inbox
    const toAddress = 'fadlank.noer@gmail.com';
    const fromAddress = 'Portfolio Contact <onboarding@resend.dev>'; // or a verified sender

    const html = `
      <div>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    const { data: sent, error } = await resend.emails.send({
      to: toAddress,
      from: fromAddress,
      subject: `[Portfolio] ${subject}`,
      reply_to: email,
      html,
    } as any);

    if (error) {
      console.error('[api/contact] Resend error:', error);
      return new Response(
        JSON.stringify({ ok: false, error: 'Failed to send email.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, id: sent?.id ?? null }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('[api/contact] Unexpected error:', err);
    return new Response(
      JSON.stringify({ ok: false, error: 'Unexpected server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
