import React from "react"
import ContactForm from "@/app/_components/ContactForm"
import Map from "@/app/_components/Map"

export default function Contacts() {
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
        <div className="contact-form">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <ContactForm />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Our Location</h2>
          <Map />
        </div>
      </div>
    </main>
  )
}
