import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import 'dotenv/config';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM as string,
      to: 'abhijayrajvansh01@gmail.com',
      subject: 'Testing Resend Email',
      react: EmailTemplate({ firstName: 'Abhijay' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
    
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
