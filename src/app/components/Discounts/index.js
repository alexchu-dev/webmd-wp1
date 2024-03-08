/*
Author: Alex Chu up2244885
University of Portsmouth
Discounts Section
*/
"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { discountData } from "./data"

export default function DiscountsSection() {
  return (
    <section id="discounts" className="border rounded-xl p-4 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        <div className="bg-slate-200 col-span-1 rounded-xl h-[500px] text-center justify-center items-center content-center flex flex-col relative">
          <Image
            src="/img/okinawa/_DSC9420.jpg"
            alt="Okinawa Aquarium"
            title="Okinawa Aquarium"
            fill
            className="object-cover rounded-xl"
            style={{ objectPosition: "center" }}
          />
          <div className="overlay-content absolute text-white">
            <h3 className="text-4xl font-bold">☀️Summer Sale⛱️</h3>
            <p>🏄‍♂️Get your swimming suits ready🏊🐬</p>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2 min-h-[500px]">
          {discountData.map((data) => (
            <div
              key={data.id}
              className="discount-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-[300px]">
                <Link href={data.link}>
                  <Image
                    src={data.image}
                    title={data.alt}
                    alt={data.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center" }}
                  />
                </Link>
              </div>
              <div className="p-3">
                <h3 className="text-2xl font-semibold mb-2">{data.title}</h3>
                <p>
                  <span className="line-through mr-2">
                    £{data.price}
                  </span>
                  {data.discount * 100}% off
                </p>
                <p className="font-bold text-red-600">
                  £{(data.price * (1 - data.discount)).toFixed(0)}
                </p>
                <Link href={data.link} className="mt-4 font-semibold color3 hover:text-blue-700">
                    Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`

          .discount-card {
            transition: transform 0.2s;
          }

          .discount-card:hover {
            transform: translateY(-5px);
          }
        `}</style>
      </div>
    </section>
  )
}
