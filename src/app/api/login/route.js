export async function POST(req) {
  const data = await req.json()
  console.log(data.email, data.password)
  if (data.email === "demo@demo.com" && data.password === "demo") {
    return new Response(JSON.stringify({ message: "Function will be implemented in phase 2" }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    return new Response(JSON.stringify({ message: "Function will be implemented in phase 2" }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
export async function GET() {
    return new Response(JSON.stringify({ message: "Test OK!" }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
}
export const dynamic = "force-static"
