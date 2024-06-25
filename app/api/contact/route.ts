import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    try {
      // Get the form data from the request body
      const { name, email, message } = await req.json();

      // Create a Nodemailer transporter
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Create the email message
      const mailOptions = {
        from: email,
        to: "maoridi16@gmail.com",
        subject: `${name} | maoridi.com | Contact Form Submission`,
        text: `Full Name: ${name}
Email: ${email}
--------------------------------

${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Return a success response
      return NextResponse.json({
        message: "Email sent successfully",
        status: 200,
      });
    } catch (error) {
      // Return an error response
      return NextResponse.json({
        message: "Failed to send email",
        status: 500,
      });
    }
  } else {
    // Return a method not allowed response
    return NextResponse.json({ message: "Method not allowed", status: 405 });
  }
}
