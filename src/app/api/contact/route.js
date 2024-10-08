import { contact, db } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextResponse, NextRequest } from "next/server";


export async function POST(request) {
  try {
    const body = await request.json();
    await db.insert(contact).values(body);
     return NextResponse.json("Data submitted Successfully");
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
}
