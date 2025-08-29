// src/pages/api/send-quote.ts
import type { APIRoute } from 'astro';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: import.meta.env.MAILGUN_API_KEY,
});

export const POST: APIRoute = async ({ request }) => {
  let data;
  try {
    // Attempt to parse the JSON from the request body
    data = await request.json();
  } catch (error) {
    // If the body is empty or not valid JSON, return an error
    return new Response(JSON.stringify({ message: 'Invalid request body' }), { status: 400 });
  }

  // Validate the data
  if (!data.from_name || !data.email || !data.phone) {
    return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
  }

  // --- Email to You (The Admin) ---
  const adminMessageData = {
    from: `Quote Form <noreply@${import.meta.env.MAILGUN_DOMAIN}>`,
    to: ['vandrasikomalkumar6@gmail.com'], // The email address that will receive the submissions
    subject: `New Quote Request from ${data.from_name}`,
    html: `
      <h3>New Quote Request</h3>
      <p><strong>Name:</strong> ${data.from_name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>SMS Consent:</strong> ${data.sms_consent}</p>
    `,
  };

  // --- Confirmation Email to the Customer ---
  const customerMessageData = {
    from: `Titan Voice <support@${import.meta.env.MAILGUN_DOMAIN}>`,
    to: [data.email], // Send to the customer's email address
    subject: 'Thank you for your quote request!',
    html: `
      <h3>Request Received!</h3>
      <p>Hi ${data.from_name},</p>
      <p>Thank you for reaching out. We have received your quote request and a member of our team will be in touch with you shortly.</p>
      <p>Here is a copy of the details you submitted:</p>
      <ul>
        <li><strong>Name:</strong> ${data.from_name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>SMS Consent:</strong> ${data.sms_consent}</li>
      </ul>
      <p>Sincerely,<br>The Titan Voice Team</p>
    `,
  };

  try {
    // Send both emails
    await Promise.all([
      mg.messages.create(import.meta.env.MAILGUN_DOMAIN, adminMessageData),
      mg.messages.create(import.meta.env.MAILGUN_DOMAIN, customerMessageData)
    ]);
    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email with Mailgun:', error);
    return new Response(JSON.stringify({ message: 'Error sending email.' }), { status: 500 });
  }
};