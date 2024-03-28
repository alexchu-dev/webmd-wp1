import dbConnect from "@/app/lib/mongoose"
import ToDo from "@/app/_models/ToDo"

export async function POST(request) {
  await dbConnect()
  const { title, task } = await request.json()
  console.log(title, task)
  try {
    const toDo = new ToDo({ title, task })
    const savedToDo = await toDo?.save()
    console.log(savedToDo)
    return new Response(JSON.stringify(savedToDo), {
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
    const res = await ToDo.find({})
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
      const res = await ToDo.deleteOne({ _id: _id })
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

export async function PUT(request) {
  await dbConnect()
  const req = await request.json()
  const { _id, title, task } = req
  console.log(`To be updated: ${_id}`)
  try {
    if (_id) {
      const res = await ToDo.updateOne({ _id: _id }, { title: title, task: task })
      return new Response(JSON.stringify(res), { status: 200 })
    } else {
      throw new Error("Error Updating Record!")
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