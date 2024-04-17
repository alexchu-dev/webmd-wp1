"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import parse from "html-react-parser"
import Image from "next/image"
import Link from "next/link"
import Loading from "@/app/loading"

export default function DisplayJournal() {
  const { data: session, status } = useSession()
  const [journals, setJournals] = useState(null)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/member/myJournal`)
      .then((res) => res.json())
      .then((data) => setJournals(data))
  }, [])

  if (status === "loading") {
    return <Loading />
  }
  console.log("Journals: ", journals)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
      {journals?.map((journal) => (
        <div key={journal._id} className="">
          <Link href={`/journals/${journal.user_id}/${journal.slug}`} className="block group">
            <Image
              src={journal.image.url}
              alt={journal.title}
              width={640}
              height={360}
              className="object-cover h-[300px]"
            />
          </Link>
          <h3 className="text-lg font-bold">{journal.title}</h3>
          <p>{parse(journal.excerpt)}</p>
        </div>
      ))}
    </div>
  )
}
