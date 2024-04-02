"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function DisplayJournal() {
  const { data: session, status } = useSession()
  const [journals, setJournals] = useState([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/getJournal`)
      .then((res) => res.json())
      .then((data) => setJournals(data))
  }, [])

  console.log(journals)
  if (status === "loading") {
    return <p>Loading...</p>
  }

  return (
    <section>
      <p>My Journals</p>
      <div>
        {journals?.map((journal) => (
          <div key={journal._id}>
            <h3>{journal.title}</h3>
            <p>{journal.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
