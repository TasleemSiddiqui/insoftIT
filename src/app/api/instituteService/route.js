import { instituteService, db } from "@/drizzle/schema"; // Drizzle ORM schema
import { NextResponse } from "next/server"; // Next.js response
import nodemailer from "nodemailer"; // Import Nodemailer

export async function POST(request) {
  try {
    const body = await request.json(); // Parse the request body

    // Insert form data into the `contact` table using Drizzle ORM
    await db.insert(instituteService).values(body);

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER, // Gmail user (your email)
        pass: process.env.GMAIL_PASSWORD, // Gmail app password
      },
    });

    // Define the HTML template for the email
    const htmlTemplate = `
  <h2>New Institute Form Submission</h2>
<table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
  <tr>
    <th>First Name</th>
    <td>${body.firstName}</td>
  </tr>
  <tr>
    <th>Last Name</th>
    <td>${body.lastName}</td>
  </tr>
  <tr>
    <th>Phone Number</th>
    <td>${body.phoneNumber}</td>
  </tr>
  <tr>
    <th>Email</th>
    <td>${body.email}</td>
  </tr>
  <tr>
    <th>Location</th>
    <td>${body.location}</td>
  </tr>
  <tr>
    <th>Area</th>
    <td>${body.area}</td>
  </tr>
  <tr>
    <th>CNIC (Optional)</th>
    <td>${body.cnic || 'N/A'}</td>
  </tr>
  <tr>
    <th>Timing</th>
    <td>${body.timing}</td>
  </tr>
  <tr>
    <th>Feedback</th>
    <td>${body.feedback}</td>
  </tr>
  <tr>
    <th>Course</th>
    <td>${body.course}</td>
  </tr>
</table>

  `;
  

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER, // Sender address (your email)
      to: process.env.GMAIL_USER,   // Recipient address (your email)
      subject: "New Institute Form Submission",
      html: htmlTemplate, // Sending HTML template as email body
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ message: "Data submitted and email sent successfully!" });
  } catch (error) {
    console.error("Error occurred:", error); // Log errors
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
