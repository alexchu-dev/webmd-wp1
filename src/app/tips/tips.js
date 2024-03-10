"use client"

import Image from "next/image"
import { useState } from "react"
import { Typography } from "@mui/material"

const initialChecklist = {
  passport: false,
  digitalCopyOfDocuments: false,
  outfits: false,
  toiletries: false,
  hat: false,
  sleepSet: false,
  portableCharger: false,
  cashAndCreditCards: false,
  tripod: false,
  chargers: false,
  simCard: false,
  portableWifi: false,
}

const formatLabel = (key) => {
  return key
    .split(/(?=[A-Z])/)
    .join(" ")
    .replace(/^\w/, (c) => c.toUpperCase())
}

export default function Tips() {
  const [checklist, setChecklist] = useState(initialChecklist)

  const handleCheck = (item) => {
    setChecklist((prev) => ({ ...prev, [item]: !prev[item] }))
  }

  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-semibold m-2 text-center">Travel Tips</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-1 justify-start align-top items-start">
        <div className="col-span-1">
          <Image
            src="/img/traveltips.jpg"
            alt="Under Construction"
            width={600}
            height={400}
            className="object-cover md:max-h-[400px] rounded-xl"
          />
          <p className="text-xs">
            Image by{" "}
            <a href="https://pixabay.com/users/darkmoon_art-1664300/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3502188">
              Dorothe
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3502188">
              Pixabay
            </a>
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="font-semibold text-lg">
            A simple checklist for you to pack your stuff:
          </h4>
          <ul>
            {Object.entries(checklist).map(([key, value]) => (
              <li key={key}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => handleCheck(key)}
                    className="mr-2"
                  />
                  {formatLabel(key)}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="py-4 text-lg">
            Here is some general travel tips for you to prepare.
          </p>
          <div className="mb-4">
            <Typography variant="h6">Pack Smart</Typography>
            <ul className="list-disc list-inside">
              <li>
                <b>Essentials First</b>: Always start with essentials like
                passport, travel documents, medications, and necessary
                electronics.
              </li>
              <li>
                <b>Roll, Don&apos;t Fold</b>: Rolling clothes instead of folding can
                save space and reduce wrinkles.
              </li>
              <li>
                <b>Pack Light</b>: Bring only what you need to avoid heavy
                luggage. Remember, most places have laundry facilities.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <Typography variant="h6">Stay Organized</Typography>
            <ul className="list-disc list-inside">
              <li>
                <b>Digital Backups</b>: Keep digital copies of important
                documents like your passport, ID, and travel insurance in your
                email or a secure cloud storage.
              </li>
              <li>
                <b>Itinerary Copies</b>: Give a copy of your itinerary to a
                family member or friend. It&apos;s helpful for someone to know your
                whereabouts.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <Typography variant="h6">Money Matters</Typography>
            <ul className="list-disc list-inside">
              <li>
                <b>Local Currency</b>: Have some local currency for immediate
                expenses upon arrival, like transportation from the airport.
              </li>
              <li>
                <b>Notify Your Bank</b>: If necessary, inform your bank of your
                travel dates and destination to prevent your cards from being
                frozen for suspicious activity.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <Typography variant="h6">Stay Connected</Typography>
            <ul className="list-disc list-inside">
              <li>
                <b>SIM Card or Wi-Fi</b>: Consider buying a local SIM card or renting a portable Wi-Fi device to stay connected affordably.
              </li>
              <li>
                <b>Download Offline Maps</b>: Use apps like Google Maps that allow you to download maps for offline use.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <Typography variant="h6">Health and Safety</Typography>
            <ul className="list-disc list-inside">
              <li>
                <b>Travel Insurance</b>: Always travel with insurance that covers health emergencies, cancellations, and lost items.
              </li>
              <li>
                <b>Vaccinations and Medications</b>: Check if your destination requires any vaccinations and ensure you have an adequate supply of prescription medications.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <Typography variant="h6">Cultural Sensitivity and Local Laws</Typography>
            <ul className="list-disc list-inside">
              <li>
                <b>Research Local Customs</b>: Learn about local customs, etiquette, and dress codes to respect local culture and avoid misunderstandings.
              </li>
              <li>
                <b>Be Aware of Local Laws</b>: Familiarize yourself with local laws to avoid unintentional offences.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
