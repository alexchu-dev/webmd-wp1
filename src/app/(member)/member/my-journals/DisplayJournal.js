"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import parse from "html-react-parser"
import Image from "next/image"
import Link from "next/link"
import Loading from "@/app/loading"
import Swal from "sweetalert2"

export default function DisplayJournal() {
  const { data: session, status } = useSession()
  const [journals, setJournals] = useState(null)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/member/myJournal`)
      .then((res) => res.json())
      .then((data) => setJournals(data))
  }, [])

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/member/myJournal`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id }),
            }
          )
          if (response.ok) {
            setJournals(journals.filter((journal) => journal._id !== id))
            Swal.fire("Deleted!", "Your journal has been deleted.", "success")
          }
        } catch (error) {
          console.error("Error deleting journal:", error)
        }
      }
    })
  }

  if (status === "loading") {
    return <Loading />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
      {journals?.map((journal) => (
        <div key={journal._id} className="relative">
          <div className="relative">
            <Image
              src={journal.image.url}
              alt={journal.title}
              width={640}
              height={360}
              className="object-cover h-[300px]"
            />
            <div className="absolute bottom-0 right-0">
              <button
                onClick={() => handleDelete(journal._id)}
                className="bg-red-500 text-white p-2 rounded w-full"
              >
                Delete
              </button>
            </div>
          </div>
          <Link
            href={`/journals/${journal.user_id}/${journal.slug}`}
            className="block group"
          >
            <h3 className="text-lg font-bold">{journal.title}</h3>
            <p>{parse(journal.excerpt)} <u>[Details]</u></p>
          </Link>
        </div>
      ))}
    </div>
  )
}
