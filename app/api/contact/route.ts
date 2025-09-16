import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log("[DEBUG] Contact API hit")

    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Email body
    const emailContent = `
      New contact form submission:

      Name: ${name}
      Email: ${email}
      Message: ${message}

      Submitted at: ${new Date().toISOString()}
    `

    // Send using Resend
    const response = await resend.emails.send({
      from: "portfolio@yourdomain.com", // Use a domain you’ve verified in Resend
      to: "jagadabiabhi@gmail.com", // your real email
      subject: `Portfolio Contact: ${name}`,
      text: emailContent,
    })

    console.log("[DEBUG] Resend API response:", response)

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("[ERROR] Contact form failed:", error)
    return NextResponse.json(
      { error: error.message || "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
