import Journal from "@/db/Journal"
import dbConnect from "@/lib/mongoose"

export async function GET(request) {
  await dbConnect()
  try {
  const testPost = new Journal({
    title: "test",
    slug: "test",
    destination: "paris",
    image: {
      url: "/img/paris/paris-4353533_1920.jpg",
      alt: "Paris",
    },
    user_id: "1",
    date: "2024-01-11",
    excerpt: "testing...",
    content: "<p>test</p>",
  })

  const res = await testPost.save()
  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })} catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
