/*
Author: Alex Chu up2244885
University of Portsmouth
This is the package page (slug) that displays particular package details.
A Calendar component is created separately to be used and call back states are used to store the selected dates.
*/
"use client"
import React, { useState, useEffect } from "react"
import { packages } from "../data.js"
import Carousel from "@/components/Carousel/index.js"
import Calendar from "@/components/Calendar/index.js"
import Swal from "sweetalert2"

const fetchPackageData = (packageId) => {
  return packages.find((p) => p.id === packageId)
}

export default function Package({ packageId }) {
  const [packageData, setPackageData] = useState(null)
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  })

  useEffect(() => {
    const data = fetchPackageData(packageId)
    setPackageData(data)
  }, [packageId])

  const handleDateSelect = (startDate, endDate) => {
    setSelectedDates({ startDate, endDate })
  }

  if (!packageData) {
    return (
      <section className="max-w-screen-xl mx-auto p-20">Loading...</section>
    )
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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </section>
  )
}
