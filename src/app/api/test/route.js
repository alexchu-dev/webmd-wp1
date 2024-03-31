import { getSession } from "@/lib/getMySession"

export async function GET() {
  const session = await getSession()
  console.log(session)
  if (session) {
    return new Response(JSON.stringify({ message: "Testing" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } else {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
