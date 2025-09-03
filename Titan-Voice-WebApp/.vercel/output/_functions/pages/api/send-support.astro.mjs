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
  if (!data.name || !data.email || !data.serviceCategory) {
    return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
  }
  const adminMessage = {
    from: `Support Ticket <noreply@${"sandbox8c2b64e95d584b7a88951b2979a3819a.mailgun.org"}>`,
    to: ["vandrasikomalkumar6@gmail.com"],
    // Your support team's email
    subject: `New Support Ticket [${data.serviceCategory}] from ${data.company}`,
    html: `
      <h3>New Support Ticket Received</h3>
      <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
    `
  };
  const customerMessage = {
    from: `Titan Voice Support <support@${"sandbox8c2b64e95d584b7a88951b2979a3819a.mailgun.org"}>`,
    to: [data.email],
    subject: "We have received your support request!",
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
