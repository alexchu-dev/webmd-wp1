"use client"

import React, { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"
import ContactForm from "@/app/_components/ContactForm"
import Map from "@/app/_components/Map"

export default function Contacts() {
  const googleMapRef = useRef(null)
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_MAPS_API_KEY,
      version: "weekly",
    })

    async function initMap() {
      const { Map } = await loader.importLibrary("maps")
      const { AdvancedMarkerElement } = await loader.importLibrary("marker")
      const beachFlagImg = document.createElement("img")
      const logo = "/android-icon-48x48.png"
      beachFlagImg.src = logo
      const map = new Map(document.getElementById("map"), {
        center: { lat: 50.7955, lng: -1.0936 },
        zoom: 16,
        mapId: "1eb95b6624c06404",
      })
      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 50.7955, lng: -1.0936 },
        title: "Ports Travel",
        content: beachFlagImg,
      })
    }

    initMap()
  }, [])

  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-semibold m-2 text-center">Contacts</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-start text-center p-4">
        <div className="text-box">
          <div className="text-title">Address:</div>
          <address className="text-content not-italic">
            Winston Churchill Ave, Southsea, Portsmouth PO1 2UP, UK
          </address>
        </div>
        <div className="text-box">
          <div className="text-title">Opening Hours:</div>
          <div className="text-content">9am - 5pm</div>
        </div>
        <div className="text-box">
          <div className="text-title">Phone:</div>
          <div className="text-content">
            <a href="tel:+442392848484">023 9284 8484</a>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <ContactForm />
        <Map />
        <div>
          <h2 className="text-xl font-bold mb-2">Our Location</h2>
          <div
            id="map"
            ref={googleMapRef}
            style={{ width: "100%", height: "400px" }}
          ></div>
        </div>
      </div>
    </main>
  )
}
