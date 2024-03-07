"use client"

import React, { useState, useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"

export default function Contacts() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const googleMapRef = useRef(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    })

    const mapOptions = {
      center: {
        lat: 50.7955,
        lng: -1.0936,
      },
      zoom: 15,
    }

    async function initMap() {
      const { Map } = await loader.importLibrary("maps")
      const { AdvancedMarkerElement } = await loader.importLibrary("marker")
      const map = new Map(document.getElementById("map"), {
        center: { lat: 50.7955, lng: -1.0936 },
        zoom: 16,
        mapId: "1eb95b6624c06404",
      })
      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 50.7955, lng: -1.0936 },
        title: "University of Portsmouth",
      })
    }

    initMap()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form not submitted. This will be implemented in wp2")
    console.log("Submitted data: ", { name, email, message })
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Contacts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-start text-center p-4">
        <div className="text-box"><div className="text-title">Address:</div><div className="text-content">Winston Churchill Ave, Southsea, Portsmouth PO1 2UP, UK</div></div>
        <div className="text-box"><div className="text-title">Opening Hours:</div><div className="text-content">9am - 5pm</div></div>
        <div className="text-box"><div className="text-title">Phone:</div><div className="text-content"><a href="tel:+442392848484">023 9284 8484</a></div></div>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Send us a message:</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name:
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message:
              </label>
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Location</h2>
          <div
            id="map"
            ref={googleMapRef}
            style={{ width: "100%", height: "400px" }}
          ></div>
        </div>
      </div>
      <style jsx>{`
        .text-box {
          padding: 1.5rem;
          min-height: 130px;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background-color: #f7fafc;
        }
        .text-title {
          font-size: 1.5rem;
          font-weight: 600;
        }
      `}</style>
    </main>
  )
}
