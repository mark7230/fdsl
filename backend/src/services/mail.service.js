import sgMail from "@sendgrid/mail";

export async function sendContactMail(data) {
  const { FirstName, LastName, Subject, email, message } = data;

  // Ensure API key exists
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error("SENDGRID_API_KEY is missing in environment variables");
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.TO_EMAIL,        // Your company email where you want to receive queries
    from: process.env.FROM_EMAIL,    // Verified sender email
    subject: `New Contact Form: ${Subject}`,
    html: `
      <h2>📩 New Contact Form Submission</h2>
      <p><strong>First Name:</strong> ${FirstName}</p>
      <p><strong>Last Name:</strong> ${LastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${Subject}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error);
    throw new Error("Email sending failed");
  }
}
