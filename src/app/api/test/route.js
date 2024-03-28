import dbConnect from "@/app/lib/mongoose"
import User from "@/app/_models/User"

export async function POST( request ) {
  await dbConnect()
  const {name, age} = await request.json()
  console.log(name, age)
  try {
    const person = new User({ name, age })
    const savedPerson = await person?.save()
    console.log(savedPerson)
    return new Response(JSON.stringify(savedPerson), {
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
        'Content-Type': 'application/json',
      },
    })
  }
}

export async function GET() {
    await dbConnect()
    try {
      const res = await User.find({})
      return new Response(JSON.stringify(res));
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), {
            status: 400,
            headers: {
            'Content-Type': 'application/json',
            },
        });
        }
}