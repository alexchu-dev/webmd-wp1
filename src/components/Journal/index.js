/*
Author: Alex Chu up2244885
University of Portsmouth
Latest Journal section for the home page.
*/
"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = { day: "numeric", month: "short", year: "numeric" }
  const formattedDate = date.toLocaleDateString("en-GB", options)

  const day = date.getDate()
  let suffix = "th"
  if (day === 1 || day === 21 || day === 31) suffix = "st"
  else if (day === 2 || day === 22) suffix = "nd"
  else if (day === 3 || day === 23) suffix = "rd"

  return formattedDate.replace(/(\d+)(?=\s)/, `$1<sup>${suffix}</sup>`)
}

export default function LatestJournal() {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/journals?sort=latest`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data)
      })
      .catch((error) => console.error("Error fetching data:", error))
  }, [])
  return (
    <section
      id="latest-journal"
      className="border rounded-xl p-4 mb-4 bg-white"
    >
      <h2 className="text-xl font-bold mb-2">LATEST JOURNAL</h2>
      <div className="journal-entries grid grid-cols-1 md:grid-cols-3 gap-4">
        {blog?.map(({ slug, title, image, date, excerpt, user_id }) => (
          <div
            key={slug}
            className="journal-entry rounded-lg overflow-hidden shadow-lg justify-start"
          >
            <div className="relative w-full h-[300px]">
              <Link href={`journal/${user_id}/${slug}`}>
                <Image
                  src={image.url}
                  alt={image.alt}
                  title={image.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
              </Link>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{ __html: formatDate(date) }}
              ></p>
              <p className="excerpt">
                {excerpt}
                <Link
                  href={`/journal/${user_id}/${slug}`}
                  className="font-semibold color3 hover:text-blue-700 ml-2"
                >
                  [Read More]
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .journal-entry {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eaeaea;
        }

        .excerpt {
          margin-top: 10px;
        }
      `}</style>
    </section>
  )
}
