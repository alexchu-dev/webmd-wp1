import dbConnect from "@/db/mongoose"
import User from "@/db/User"
import Journal from "@/db/Journal"
import { getServerSession } from "next-auth/next"
import { options } from "../../auth/[...nextauth]/options"

export async function GET(req) {
  const session = await getServerSession(options)
  console.log("Dashboard API Session: ", session)
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
    const isAuthor = await User.findOne({ email: session.user.email })
    console.log("Is Author: ", isAuthor._id)
    const journal = await Journal.find({ user_id: isAuthor._id }).lean().limit(10)
    console.log("Journal: ", journal)
    if (!journal) {
      return new Response(JSON.stringify({ message: "Journal not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      })
    } else {
      console.log("Getting journal in dashboard...")
      return new Response(JSON.stringify(journal), {
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
