import { sendMail } from "@/lib/mailer"

export async function POST(request) {
  const { name, email, message } = await request.json()
  try {
    if (!name || !email || !message || !email.includes("@")) {
      return new Response(JSON.stringify({ message: "Invalid input!" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      })
    } else {
      // Send confirmation email
      await sendMail({
        email: email,
        subject: `Hi ${name}! Thank you for contactint Ports Travel!`,
        html: `Thank you for contacting me! I have received your message and will get back to you as soon as possible.<br/><br/>Developer - Alex Chu<br>https://alexchu.dev`,
      })
      const newMessage = `
        <h1>Ports Travel</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
      await sendMail({
        email: "alexchu.developer@gmail.com",
        subject: `Ports Travel message from ${name} - ${email}`,
        html: newMessage,
      })
    }

    return new Response(JSON.stringify({ message: "Message sent!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
