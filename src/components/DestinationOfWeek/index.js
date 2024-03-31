/*
Author: Alex Chu up2244885
University of Portsmouth
Destination of the week section to show on the home page.
It gets the data from the data.js. This would be much better to get the data from an API, and the data should be pulled from a database.
*/
"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

import { destinationOfWeek } from "./data.js"

export default function DestinationOfWeek() {
  return (
    <section id="destination-of-week" className="border rounded-xl p-4 mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">
        DESTINATION OF THE WEEK
        <span className="text-base font-light md:ml-2 block md:inline">
          今週のおすすめ
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mx-auto ">
        <div className="destination-card col-span-2 md:col-span-1 relative h-[300px] rounded-lg overflow-hidden shadow-lg">
          <Link href={destinationOfWeek.link}>
            <Image
              src={destinationOfWeek.image}
              alt={destinationOfWeek.alt}
              title={destinationOfWeek.alt}
              fill
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          </Link>
        </div>
        <div className="destination-card col-span-2 md:col-span-1 p-6">
          <h3 className="text-2xl font-semibold mb-2">
            {destinationOfWeek.title}
          </h3>
          <p className="mb-4">{destinationOfWeek.desc}</p>
          <Link
            href={destinationOfWeek.link}
            className="font-semibold color3 hover:text-blue-700"
          >
            Discover
          </Link>
        </div>
      </div>
      <style jsx>{`
        .destination-card {
          transition: transform 0.2s;
        }

        .destination-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  )
}
