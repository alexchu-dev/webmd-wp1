import dbConnect from "@/db/mongoose"
import Journal from "@/db/Journal"
import { getServerSession } from "next-auth/next"
import { options } from "../../auth/[...nextauth]/options"

export async function GET(req) {
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
    const journal = await Journal.find({ user: session.user.id }).lean().limit(10)
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
