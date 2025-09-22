import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// This API route must always run on the server with Node runtime
export const prerender = false;
export const runtime = 'node';

// Ensure the secrets are only used on the server
const RESEND_API_KEY = import.meta.env.SECRET_RESEND_API_KEY;
const RECAPTCHA_SECRET_KEY = import.meta.env.SECRET_RECAPTCHA_SECRET_KEY;

if (!RESEND_API_KEY) {
  console.warn('[api/contact] SECRET_RESEND_API_KEY is not set. Email sending will fail.');
}

if (!RECAPTCHA_SECRET_KEY) {
  console.warn('[api/contact] SECRET_RECAPTCHA_SECRET_KEY is not set. reCAPTCHA verification will fail.');
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    console.log(contentType);

    let data: { name?: string; email?: string; subject?: string; message?: string; recaptchaToken?: string } = {};

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

    const { name, email, subject, message, recaptchaToken } = data;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: 'All fields are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // reCAPTCHA validation
    if (!recaptchaToken) {
      return new Response(
        JSON.stringify({ ok: false, error: 'reCAPTCHA verification failed. Please try again.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verify reCAPTCHA token
    const recaptchaVerification = await verifyRecaptchaToken(recaptchaToken);
    if (!recaptchaVerification.success || recaptchaVerification.score < 0.5) {
      return new Response(
        JSON.stringify({ ok: false, error: 'reCAPTCHA verification failed. Please try again.' }),
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

// Verify reCAPTCHA token with Google's servers
async function verifyRecaptchaToken(token: string): Promise<{ success: boolean; score: number }> {
  if (!RECAPTCHA_SECRET_KEY) {
    console.error('[api/contact] RECAPTCHA_SECRET_KEY is not set');
    return { success: false, score: 0 };
  }
  
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    
    const data = await response.json();
    
    if (!data.success) {
      console.error('[api/contact] reCAPTCHA verification failed:', data['error-codes']);
      return { success: false, score: 0 };
    }
    
    // Return the success status and score (default to 0 if score is not available)
    return {
      success: true,
      score: data.score || 0,
    };
    
  } catch (error) {
    console.error('[api/contact] reCAPTCHA verification error:', error);
    return { success: false, score: 0 };
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
