import dbConnect from "@/lib/mongoose"
import User from "@/db/User"
import Journal from "@/db/Journal"
import { getServerSession } from "next-auth/next"
import { options } from "../../auth/[...nextauth]/options"

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
    const author = await User.findOne({ email: session.user.email })
    const journal = await Journal.find({ user_id: author.user_id }).lean().sort({ date: -1 }).limit(10)
    if (!author || !journal) {
      return new Response(JSON.stringify({ message: "User or Journal not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      })
    } else {
      console.log("Retrieving journal in dashboard...")
      return new Response(JSON.stringify(journal), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }
  } catch (error) {
    return new Response(JSON.stringify(), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export async function POST(request) {
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
    const author = await User.findOne({ email: session.user.email })
    const { title, slug, destination, image, date, excerpt, content } =
    await request.json()
    const journal = new Journal({
      title: title,
      slug: slug,
      destination: destination,
      image: { url: image.url, alt: image.alt },
      user_id: author.user_id,
      date: date,
      excerpt: excerpt,
      content: content,
    })
    await journal.save()
    console.log("Journal created!")
    return new Response(JSON.stringify(journal), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}