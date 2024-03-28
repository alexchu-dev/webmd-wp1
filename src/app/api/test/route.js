import dbConnect from "@/app/lib/mongoose"
import User from "@/app/_models/User"

export async function POST(request) {
  await dbConnect()
  const { name, age } = await request.json()
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
        "Content-Type": "application/json",
      },
    })
  }
}

export async function GET() {
  await dbConnect()
  try {
    const res = await User.find({})
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

export async function DELETE(request) {
  await dbConnect()
  const req = await request.json()
  const _id = req._id
  console.log(`To be deleted: ${_id}`)
  try {
    if (_id) {
      const res = await User.deleteOne({ _id: _id })
      return new Response(JSON.stringify(res), { status: 200 })
    } else {
      throw new Error("Error Deletion Record!")
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
