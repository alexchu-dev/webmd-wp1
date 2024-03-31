import React from "react"
import Link from "next/link"
import Image from "next/image"
import { packages } from "./data"

export const metadata = {
  title:
    "Packages | Ports Travel - Best Travel Agency in Portsmouth and Beyond",
  description:
    "The best travel agency in Portsmouth and beyond, providing best options for your next trip since 2024. © Alex Chu 2024",
}

export default function PackagesPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold m-2 text-center">Packages</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
        {packages.map(({ id, title, images }) => (
          <Link key={id} href={`/packages/${id}`} className="block group">
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <Image
                src={images[0].image}
                alt={title}
                width={640}
                height={360}
                className="cursor-pointer object-cover h-[300px]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h2 className="text-5xl font-black text-white p-4 uppercase">
                  {title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
