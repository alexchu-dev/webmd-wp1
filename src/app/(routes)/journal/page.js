import React from "react"
import Link from "next/link"
import Image from "next/image.js"
import { Arvo } from "next/font/google"

const arvo = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Journal | Ports Travel - Best Travel Agency in Portsmouth and Beyond",
  description:
    "The best travel agency in Portsmouth and beyond, providing best options for your next trip since 2024. © Alex Chu 2024",
}

export default async function Journal() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/journals`,{ next: { revalidate: 300 }}) // Set revalidate to 5 minutes to refresh cache
  const journals = await res.json()
  return (
    <section>
      <h1 className="text-3xl font-semibold m-2 text-center">Journal</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
        {journals?.map(({ title, image, slug }) => (
          <Link key={slug} href={`/journal/${slug}`} className="block group">
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
