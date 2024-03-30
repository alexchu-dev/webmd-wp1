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
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_MAPS_API_KEY,
      version: "weekly",
    })
    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps")
      const { AdvancedMarkerElement } = await loader.importLibrary("marker")
      const map = new Map(document.getElementById("map2"), {
        center: { lat: 50.7955, lng: -1.0936 },
        zoom: 16,
        mapId: "1eb95b6624c06404",
      });
      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 50.7955, lng: -1.0936 },
      });
    })
  }, [])
  return <div style={{ height: "400px" }} id="map2" ref={mapRef} />
}
