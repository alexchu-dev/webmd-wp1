import dbConnect from "@/db/mongoose"
import Journal from "@/db/Journal"

export async function POST(request) {
  await dbConnect()
  const { title, slug, destination, image, user_id, date, excerpt, content } =
    await request.json()
  try {
    const journal = new Journal({
      title: title,
      slug: slug,
      destination: destination,
      image: { url: image.url, alt: image.alt },
      user_id: user_id,
      date: date,
      excerpt: excerpt,
      content: content,
    })
    const savedJournal = await journal?.save()
    console.log(savedJournal)
    return new Response(JSON.stringify(savedJournal), {
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

export async function GET(request) {
  await dbConnect()

  const url = new URL(request.url)
  const slug = url.searchParams.get("slug")
  const sort = url.searchParams.get("sort")

  try {
    let journal

    if (slug) {
      journal = await Journal.findOne({ slug }).lean()
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
      journal = await Journal.find().lean().sort({ date: -1 }).limit(10)
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
