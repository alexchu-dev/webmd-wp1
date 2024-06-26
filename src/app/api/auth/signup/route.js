import dbConnect from "@/lib/mongoose"
import User from "@/db/User"
import { sendMail } from "@/lib/mailer"
import bcryptjs from "bcryptjs"

export async function POST(request) {
  await dbConnect()
  const { name, email, password } = await request.json()
  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists!" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }
    if (!name || !email || !password || !email.includes("@")) {
      return new Response(JSON.stringify({ message: "Invalid input!" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }
    console.log(name, email, password)
    const hashedPassword = await bcryptjs.hash(password, 10)
    const user = new User({ name, email, password: hashedPassword })
    console.log("Going to save now...")
    const savedUser = await user?.save()
    console.log(savedUser)

    // Send confirmation email
    await sendMail({
      email: email,
      subject: `${name}, Welcome to Ports Travel!`,
      html: "Thank you for registering with <a href=\"https://webmd-wp1.vercel.app/\">Ports Travel</a>! We are excited to have you on board.<br/><br/> Ports Travel is a virtual travel agency that is for academic purposes only.<br/><br/>Developer - Alex Chu<br>https://alexchu.dev",
    })
    
    // Remove hashed password from response to secure data
    savedUser.hashedPassword = undefined
    return new Response(JSON.stringify(savedUser), {
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
