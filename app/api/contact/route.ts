import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log("[DEBUG] Contact API hit")
    console.log("[DEBUG] API Key:", process.env.RESEND_API_KEY)

    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const emailContent = `
      New contact form submission:

      Name: ${name}
      Email: ${email}
      Message: ${message}
      Submitted at: ${new Date().toISOString()}
    `

    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // ✅ temporary working sender
      to: "jagadabiabhi@gmail.com",
      subject: `Portfolio Contact: ${name}`,
      text: emailContent,
    })

    console.log("[DEBUG] Resend API response:", response)

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error: any) {
    console.error("[ERROR] Contact form failed:", error, JSON.stringify(error))
    return NextResponse.json(
      { error: error.message || "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
