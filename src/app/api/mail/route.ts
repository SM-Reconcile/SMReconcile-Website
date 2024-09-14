import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Named export for POST request
export async function POST(req: Request) {
  try {
    const { first_name, last_name, email, company, message } = await req.json();

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER as string,
      to: 'nilaynathsharan16@gmail.com',
      subject: 'Contact Form Submission',
      html: `
        <p><strong>First Name:</strong> ${first_name}</p>
        <p><strong>Last Name:</strong> ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
