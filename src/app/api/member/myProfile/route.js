import dbConnect from "@/lib/mongoose"
import User from "@/db/User"
import { getServerSession } from "next-auth/next"
import { options } from "../../auth/[...nextauth]/options"
import bcryptjs from "bcryptjs"

export async function GET(request) {
  const session = await getServerSession(options)
  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 403,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  await dbConnect()
  try {
    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      })
    } else {
      console.log("Retrieving user profile...")
      return new Response(JSON.stringify(user), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export async function PUT(request) {
    const session = await getServerSession(options)
    if (!session) {
        return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 403,
        headers: {
            "Content-Type": "application/json",
        },
        })
    }
    await dbConnect()
    try {
        const { name, password } = await request.json();
        const hashedPassword = await bcryptjs.hash(password, 10)

        const user = await User.findOneAndUpdate(
        { email: session.user.email },
        { name, password: hashedPassword },
        { new: true }
        )
        if (!user) {
        return new Response(JSON.stringify({ message: "User not found" }), {
            status: 404,
            headers: {
            "Content-Type": "application/json",
            },
        })
        } else {
        console.log("Updating user profile...")
        return new Response(JSON.stringify(user), {
            status: 200,
            headers: {
            "Content-Type": "application/json",
            },
        })
        }
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), {
        status: 400,
        headers: {
            "Content-Type": "application/json",
        },
        })
    }
}