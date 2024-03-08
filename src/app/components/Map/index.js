/*
Author: Alex Chu up2244885
University of Portsmouth
Google Maps component for the contact us page. The API key is stored in the .env file.
*/
"use client"
import { useEffect, useRef, useMemo } from "react"
import { Loader } from "@googlemaps/js-api-loader"
export default function Map({ address }) {
  const mapRef = useRef(null)
  const geocoder = useMemo(() => new google.maps.Geocoder(), [])
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_MAPS_API_KEY,
      version: "weekly",
    })
    loader.load().then(() => {
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const map = new google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 8,
          })
          const marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          })
        } else {
          console.error(
            `Geocode was not successful for the following reason: ${status}`
          )
        }
      })
    })
  }, [address, geocoder])
  return <div style={{ height: "400px" }} ref={mapRef} />
}
