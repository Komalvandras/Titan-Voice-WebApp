import type { APIRoute } from 'astro';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: import.meta.env.MAILGUN_API_KEY,
});

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  // Validate the data from the form
  if (!data.from_name || !data.email || !data.message) {
    return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
  }

  // --- 1. Email to You (The Admin) ---
  const adminMessage = {
    from: `Contact Form <noreply@${import.meta.env.MAILGUN_DOMAIN}>`,
    to: ['your-email@example.com'], // The email address that will receive the form submissions
    subject: `New Contact Form Submission from ${data.from_name}`,
    html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${data.from_name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${data.subject || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  };

  // --- 2. Confirmation Email to the Customer ---
  const customerMessage = {
    from: `Titan Voice <support@${import.meta.env.MAILGUN_DOMAIN}>`,
    to: [data.email], // Send to the customer's email address
    subject: 'We have received your message!',
    html: `
      <h3>Thank You For Reaching Out!</h3>
      <p>Hi ${data.from_name},</p>
      <p>Thank you for contacting us. We have received your message and a member of our team will get back to you shortly.</p>
      <p><strong>Here is a copy of the details you submitted:</strong></p>
      <ul>
        <li><strong>Name:</strong> ${data.from_name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone || 'Not provided'}</li>
        <li><strong>Subject:</strong> ${data.subject || 'Not provided'}</li>
        <li><strong>Message:</strong> ${data.message}</li>
      </ul>
      <p>Sincerely,<br>The Titan Voice Team</p>
    `,
  };

  try {
    // Send both emails at the same time
    await Promise.all([
      mg.messages.create(import.meta.env.MAILGUN_DOMAIN, adminMessage),
      mg.messages.create(import.meta.env.MAILGUN_DOMAIN, customerMessage)
    ]);
    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Mailgun Error:', error);
    return new Response(JSON.stringify({ message: 'Error sending email.' }), { status: 500 });
  }
};