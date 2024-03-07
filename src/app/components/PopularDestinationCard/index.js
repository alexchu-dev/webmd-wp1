/*
Author: Alex Chu up2244885
University of Portsmouth
This component shows the popular destinations on the home page.
It uses the data.js file to get the data and then maps through the data to display the destinations.
*/
"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

import { popularDestinations } from "./data.js"

export default function PopularDestinations() {
  return (
    <section id="popular-destinations" className="border  rounded-xl p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">
        POPULAR DESTINATIONS
        <span className="text-base font-light md:ml-2 block md:inline">
          人気の海外旅行先
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {popularDestinations.map((destination) => (
          <div
            key={destination.id}
            className="destination-card rounded-lg overflow-hidden shadow-lg"
          >
            <Link href={destination.link}>
              <Image
                src={destination.image}
                alt={destination.alt}
                title={destination.alt}
                width={800}
                height={300}
                style={{ objectFit: "cover" }}
              />
            </Link>
            <div className="p-4">
              <h3 className="text-2xl font-bold">{destination.title}</h3>
              <p>{destination.desc}</p>
              <Link
                className="font-semibold color3 hover:text-blue-700"
                href={destination.link}
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
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
