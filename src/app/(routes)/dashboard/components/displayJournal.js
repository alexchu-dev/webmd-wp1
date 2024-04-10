"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import parse from "html-react-parser"
import Image from "next/image"

export default function DisplayJournal() {
  const { data: session, status } = useSession()
  const [journals, setJournals] = useState([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/getJournal`)
      .then((res) => res.json())
      .then((data) => setJournals(data))
  }, [])

  console.log("UseSession: ",session)
  if (status === "loading") {
    return <p>Loading...</p>
  }

  return (
    <section>
      <h2 className="text-2xl font-bold">My Journals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {journals?.map((journal) => (
          <div key={journal._id} className="">
            <Image
              src={journal.image.url}
              alt={journal.title}
              width={400}
              height={200}
              className="object-cover h-[200px] mx-auto"
            />
            <h3 className="text-lg font-bold">{journal.title}</h3>
            <p>{parse(journal.excerpt)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
