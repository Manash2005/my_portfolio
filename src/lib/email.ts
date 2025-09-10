import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = "swainm099@gmail.com";
// NOTE: Resend requires a verified domain for the `from` address.
// For testing, you can use the default `onboarding@resend.dev` address.
const fromEmail = "onboarding@resend.dev"; 

type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail(payload: ContactEmailPayload) {
  const { name, email, message } = payload;
  
  try {
    const { data, error } = await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: [toEmail],
      subject: `New message from ${name}`,
      html: `
        <p>You have a new contact form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      reply_to: email,
    });

    if (error) {
      console.error('Resend Error:', error);
      throw new Error('Failed to send email.');
    }

    return data;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('An unexpected error occurred while trying to send the email.');
  }
}
