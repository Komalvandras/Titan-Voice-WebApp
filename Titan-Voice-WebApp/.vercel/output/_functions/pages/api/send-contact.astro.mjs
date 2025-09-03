import formData from 'form-data';
import Mailgun from 'mailgun.js';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: "c08abbfa3953e58871deada99d5e6bd5-1ae02a08-1daa5d46",
  // Specifies the EU region for the Mailgun API
  url: "https://api.mailgun.net"
});
const POST = async ({ request }) => {
  const data = await request.json();
  if (!data.from_name || !data.email || !data.message) {
    return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
  }
  const adminMessage = {
    from: `Contact Form <noreply@${"sandbox8c2b64e95d584b7a88951b2979a3819a.mailgun.org"}>`,
    to: ["vandrasikomalkumar6@gmail.com"],
    // The email address that will receive the form submissions
    subject: `New Contact Form Submission from ${data.from_name}`,
    html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${data.from_name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
      <p><strong>Subject:</strong> ${data.subject || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
  };
  const customerMessage = {
    from: `Titan Voice <support@${"sandbox8c2b64e95d584b7a88951b2979a3819a.mailgun.org"}>`,
    to: [data.email],
    // Send to the customer's email address
    subject: "We have received your message!",
    html: `
      <h3>Thank You For Reaching Out!</h3>
      <p>Hi ${data.from_name},</p>
      <p>Thank you for contacting us. We have received your message and a member of our team will get back to you shortly.</p>
      <p><strong>Here is a copy of the details you submitted:</strong></p>
      <ul>
        <li><strong>Name:</strong> ${data.from_name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone || "Not provided"}</li>
        <li><strong>Subject:</strong> ${data.subject || "Not provided"}</li>
        <li><strong>Message:</strong> ${data.message}</li>
      </ul>
      <p>Sincerely,<br>The Titan Voice Team</p>
    `
  };
  try {
    await Promise.all([
      mg.messages.create("sandbox8c2b64e95d584b7a88951b2979a3819a.mailgun.org", adminMessage),
      mg.messages.create("sandbox8c2b64e95d584b7a88951b2979a3819a.mailgun.org", customerMessage)
    ]);
    return new Response(JSON.stringify({ message: "Emails sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Mailgun Error:", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
