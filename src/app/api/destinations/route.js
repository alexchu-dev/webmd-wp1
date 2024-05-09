import dbConnect from "@/lib/mongoose"
import Destination from "@/db/Destination"

export async function GET(request) {
  await dbConnect()

  try {
    const destinations = await Destination.find().lean()

    return new Response(JSON.stringify(destinations), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export async function POST(request) {
  await dbConnect()
  try {
    console.log("Creating destination...")
    const { name, slug, banner, description, images } = await request.json()
    const destination = new Destination({
      name: name,
      slug: slug,
      banner: banner,
      description: description,
      images: images,
    })
    console.log("Destination:", destination)
    await destination.save()
    console.log("Destination created!")
    return new Response(JSON.stringify(destination), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export async function PUT(request) {
  await dbConnect()
  try {
    const { name, slug, banner, description, images, dest_id } = await request.json()
    console.log(dest_id, name, slug, banner, description, images, )
    const destination = await Destination.findOneAndUpdate(
      { dest_id: dest_id },
      { name, slug, banner, description, images },
      { new: true }
    )
    console.log("Destination updated!")
    return new Response(JSON.stringify(destination), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export async function DELETE(request) {
  await dbConnect()
  try {
    const url = new URL(request.url)
    const dest_id = url.searchParams.get("dest_id")

    console.log("Deleting destination with ID:", dest_id)
    const deleteResult = await Destination.deleteOne({ dest_id: dest_id })

    console.log("Destination deleted successfully!")
    return new Response(JSON.stringify({ message: "Destination deleted successfully!" }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}