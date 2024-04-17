"use client"
import React from "react"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Loading from "@/app/loading"
import Image from "next/image.js"
import { Arvo } from "next/font/google"

const arvo = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function DisplayAllJournal() {
  const { data: session, status } = useSession()
  const [journals, setJournals] = useState(null)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/journals`)
      .then((res) => res.json())
      .then((data) => setJournals(data))
  }, [])

  if (status === "loading") {
    return <Loading />
  }
  return (
    <section>
      <h1 className="text-3xl font-semibold m-2 text-center">Journal</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
        {journals?.map(({ title, slug, image, user_id }) => (
          <Link
            key={slug}
            href={`/journals/${user_id}/${slug}`}
            className="block group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer ">
              <Image
                src={image?.url}
                alt={image?.alt}
                width={640}
                height={360}
                className="cursor-pointer object-cover h-[300px]"
              />
              <div className="absolute top-0 w-full h-full items-center content-center text-center">
                <div className=" bg-black/30 m-auto">
                  <h2
                    className={`${arvo.className} text-2xl text-white p-4 uppercase`}
                  >
                    {title}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
