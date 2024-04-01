// This Login Route is a legacy option. Now the site is using the Next-Auth for authentication.
import dbConnect from "@/db/mongoose"
import User from "@/db/User"
import bcryptjs from "bcryptjs"

export async function POST(request) {
  await dbConnect()
  const { email, password } = await request.json()
  try {
    const user = await User.findOne({ email })

    if (user && await bcryptjs.compare(password, user.password)) {
      user.password = undefined;

      return new Response(JSON.stringify({ message: "Login successful", user }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    else {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
  catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: "Method not allowed." }), {
    status: 400,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
// export const dynamic = "force-static"
