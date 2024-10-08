import {contact } from "@/drizzle/schema";
import { db } from "@/drizzle/db";
// Ensure the API returns plain JSON:
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;
   await db.insert(contact).values(formData);
    
    // Simulate some server processing...
    const response = {
      success: true,
      data:"form submited sucessfully", // This should be a plain object
    };
    
    // Ensure that we are returning a plain JSON object
    res.status(200).json(response);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
