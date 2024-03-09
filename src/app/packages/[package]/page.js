/*
Author: Alex Chu up2244885
University of Portsmouth
This is the package page (slug) that displays particular package details.
A Calendar component is created separately to be used and call back states are used to store the selected dates.
*/
"use client"
import React, { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { packages } from "../data.js"
import { Modal, Box, Typography } from "@mui/material"
import Carousel from "@/app/components/Carousel/index.js"
import Calendar from "@/app/components/Calendar/index.js"
import Swal from "sweetalert2"

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
  /* Date range selection for callback states*/
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  })

  const handleDateSelect = (startDate, endDate) => {
    setSelectedDates({ startDate, endDate })
  }

  /* This function is for the onClick event and supposed to pass data to API.
   Since there is no API and database set in wp1, I will just use console log. */
  const submitDate = () => {
    Swal.fire({
      title: "Selected Dates",
      html: `Start Date: ${selectedDates.startDate.toDateString()}<br>End Date: ${selectedDates.endDate.toDateString()}<br>Note: To be implemented in coursework 2.`,
      icon: "success",
      confirmButtonText: "OK",
    })
    console.log("Start Date:", selectedDates.startDate)
    console.log("End Date:", selectedDates.endDate)
  }

  return (
    <main className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Carousel data={packageData.images} className="rounded-xl" />
      </div>
      <div>
        <h3 className="font-bold text-2xl">Choose Your Dates</h3>
        <Calendar onDateSelect={handleDateSelect} />
        <div className="border-b border-gray-100 w-4/5 text-center mx-auto my-2"></div>
        <div className="flex justify-end pr-4">
          <button
            onClick={submitDate}
            className="bg-blue-500 text-white p-2 rounded-md w-[100px] hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
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
