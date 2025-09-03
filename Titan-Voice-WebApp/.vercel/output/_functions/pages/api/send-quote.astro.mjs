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
  let data;
  try {
    data = await request.json();
  } catch (error) {
    return new Response(JSON.stringify({ message: "Invalid request body" }), { status: 400 });
  }
  if (!data.from_name || !data.email || !data.phone) {
    return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
  }
  const adminMessageData = {
    from: `Quote Form <noreply@${"sandbox8c2b64e95d584b7a88951b2979a3819a.mailgun.org"}>`,
    to: ["vandrasikomalkumar6@gmail.com"],
    // The email address that will receive the submissions
    subject: `New Quote Request from ${data.from_name}`,
    html: `
      <h3>New Quote Request</h3>
      <p><strong>Name:</strong> ${data.from_name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>SMS Consent:</strong> ${data.sms_consent}</p>
    `
  };
  const customerMessageData = {
    from: `Titan Voice <support@${"sandbox8c2b64e95d584b7a88951b2979a3819a.mailgun.org"}>`,
    to: [data.email],
    // Send to the customer's email address
    subject: "Thank you for your quote request!",
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
    `
  };
  try {
    await Promise.all([
      mg.messages.create("sandbox8c2b64e95d584b7a88951b2979a3819a.mailgun.org", adminMessageData),
      mg.messages.create("sandbox8c2b64e95d584b7a88951b2979a3819a.mailgun.org", customerMessageData)
    ]);
    return new Response(JSON.stringify({ message: "Emails sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email with Mailgun:", error);
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
