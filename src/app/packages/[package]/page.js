"use client"

import React, { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { packages } from "../data.js"
import { Modal, Box, Typography } from "@mui/material"
import Carousel from "@/app/components/Carousel/index.js"
import Calendar from "@/app/components/Calendar/index.js"

const fetchPackageData = (packageId) => {
  return packages.find((p) => p.id === packageId)
}

export default function PackagePage() {
  const pathname = usePathname()
  const packageId = pathname.split("/").pop()
  const packageData = fetchPackageData(packageId)

  if (!packageData) {
    return (
      <main className="max-w-screen-xl mx-auto p-20">Package Not Found.</main>
    )
  }
  console.log("package", packageData.images)
  return (
    <main className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Carousel data={packageData.images} className="rounded-xl" />
      </div>
      <div>
        <h3 className="font-bold text-2xl">Choose Your Dates</h3>
        <Calendar />
      </div>
      <div className="md:col-span-2">
        <h1 className="font-bold text-3xl">{packageData.title}</h1>
        <p>{packageData.description}</p>
        <div className="itinerary-details">
          <h3 className="text-xl font-semibold"> Itinerary:</h3>
          <ul>
            {packageData.itinerary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="price my-2 font-semibold">
            Price: From £{packageData.price}
          </div>
        </div>
      </div>
    </main>
  )
}
