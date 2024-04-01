import dbConnect from "@/db/mongoose"
import Journal from "@/db/Journal"

export async function POST(request) {
  await dbConnect()
  const { title, slug, destination, image, user_id, date, excerpt, content } =
    await request.json()
  try {
    const journal = new Journal({
      title,
      slug,
      destination,
      image,
      user_id,
      date,
      excerpt,
      content,
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

export async function GET() {
  await dbConnect()
  try {
    const res = await Journal.find().lean().limit(10)
    return new Response(JSON.stringify(res), {
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
