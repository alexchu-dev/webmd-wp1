import React from "react"
import Link from "next/link"
import Image from "next/image.js"
import { blogs } from "./data.js"

export const metadata = {
  title: "Journal | Ports Travel - Best Travel Agency in Portsmouth and Beyond",
  description:
    "The best travel agency in Portsmouth and beyond, providing best options for your next trip since 2024. © Alex Chu 2024",
}

export default function Journal() {
  return (
    <section>
      <h1 className="text-3xl font-semibold m-2 text-center">Journal</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {blogs.map(({ title, images, slug }) => (
        <div key={slug} className="p-4 items-center justify-center">
           <Link href={`/journal/${slug}`} className="block relative">
          <Image
            src={images[0].url}
            alt={images[0].alt}
            width={400}
            height={250}
            className="object-cover h-[250px] rounded-xl mx-auto"
          />
          <div className="text">{title}</div></Link>
        </div>))}
        </div>
    </section>
  )
}
