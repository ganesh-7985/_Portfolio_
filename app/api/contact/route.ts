import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, text } = body

    if (!name || !email || !text) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would send an email or store the message
    // For example, using a service like SendGrid, Mailgun, or storing in a database

    // This is a placeholder for the actual implementation
    console.log("Contact form submission:", { name, email, text })

    // Return a success response
    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
