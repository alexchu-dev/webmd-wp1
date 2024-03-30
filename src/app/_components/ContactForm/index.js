"use client"
import React, { useState } from "react"
import Swal from "sweetalert2"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Notice",
      text: "Form not submitted. This will be implemented in wp2",
      icon: "info",
      confirmButtonText: "Cool",
    })
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="contact-form">
      <h2 className="text-xl font-bold mb-2">Contact Us</h2>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="mb-4">
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block">
            Message:
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </div>
  )
}
