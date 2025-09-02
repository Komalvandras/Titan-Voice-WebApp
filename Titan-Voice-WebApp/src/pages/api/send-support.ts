export const prerender = false;

import type { APIRoute } from 'astro';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: import.meta.env.MAILGUN_API_KEY,
  // Specifies the EU region for the Mailgun API
  url: "https://api.mailgun.net"
});

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  // Basic validation
  if (!data.name || !data.email || !data.serviceCategory) {
    return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
  }

  // --- 1. Email to You (The Admin) ---
  // This email can be as detailed as you need.
  const adminMessage = {
    from: `Support Ticket <noreply@${import.meta.env.MAILGUN_DOMAIN}>`,
    to: ['vandrasikomalkumar6@gmail.com'], // Your support team's email
    subject: `New Support Ticket [${data.serviceCategory}] from ${data.company}`,
    html: `
      <h3>New Support Ticket Received</h3>
      <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
    `,
  };


  const customerMessage = {
    from: `Titan Voice Support <support@${import.meta.env.MAILGUN_DOMAIN}>`,
    to: [data.email], 
    subject: 'We have received your support request!',
    html: `
      <h3>Support Ticket Received!</h3>
      <p>Hi ${data.name},</p>
      <p>Thank you for reaching out to our support team. We have received your request and will get back to you as soon as possible.</p>
      <p><strong>Here is a summary of your request:</strong></p>
      <ul>
        <li><strong>Company:</strong> ${data.company}</li>
        <li><strong>Service Category:</strong> ${data.serviceCategory}</li>
        <li><strong>Description:</strong> ${data.description}</li>
      </ul>
      <p>Sincerely,<br>The Titan Voice Support Team</p>
    `,
  };

  try {
    
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
