import dbConnect from "@/lib/mongoose"
import Journal from "@/db/Journal"

export async function GET(request) {
  await dbConnect()

  const url = new URL(request.url)
  const slug = url.searchParams.get("slug")
  const user_id = url.searchParams.get("user_id")
  const sort = url.searchParams.get("sort")

  try {
    let journal

    if (slug && user_id) {
      journal = await Journal.findOne({ user_id: user_id, slug: slug }).lean()
      if (!journal) {
        return new Response(JSON.stringify({ message: "Journal not found" }), {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        })
      }
    } else {
      if (sort === "latest")
        journal = await Journal.find().lean().sort({ date: -1 }).limit(3)
      else journal = await Journal.find().lean().sort({ date: -1 }).limit(10)
    }

    return new Response(JSON.stringify(journal), {
      status: 200,
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