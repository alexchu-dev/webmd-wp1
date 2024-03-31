/*
Author: Alex Chu up2244885
University of Portsmouth
*/
"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { specialDeals } from "./data.js" // Adjust the path as necessary

export default function SpecialDeals() {
  return (
    <section id="special-deals" className="border rounded-xl p-4 mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">SPECIAL DEALS</h2>
      <div className="grid grid-cols-1 gap-4">
        {specialDeals.map((deal) => (
          <div
            key={deal.id}
            className="deal-card rounded-lg overflow-hidden shadow-lg relative"
          >
            <div className="relative w-full h-[400px]">
              <Link href={deal.link}>
                <Image
                  src={deal.image}
                  alt={deal.alt}
                  title={deal.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
              </Link>
            </div>
            <div className="p-4 absolute top-1/3 left-0 bg-white/50 w-1/2 md:w-1/3">
              <h3 className="text-xl md:text-2xl font-semibold italic">
                {deal.title}
              </h3>
              <p className="md:mb-2">{deal.desc}</p>
              <p className="line-through">£{deal.price}</p>
              <p className="font-bold text-red-600">£{deal.discountedPrice}</p>
              <Link
                href={deal.link}
                className="md:mt-4 font-semibold color3 hover:text-blue-700"
              >
                View Deal
              </Link>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .deal-card {
          transition: transform 0.2s;
        }

        .deal-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  )
}
