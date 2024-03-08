"use client"
import React, { useState } from "react"
import Swal from 'sweetalert2'

export default function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    Swal.fire({
        title: 'Notice',
        text: 'Form not submitted. This will be implemented in wp2',
        icon: 'info',
        confirmButtonText: 'Cool'
      })
    console.log(`Email: ${email}, Password: ${password}`)
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 m-4 bg-white rounded-2xl shadow-xl w-full sm:max-w-[400px]">
      <h2 className="text-center text-2xl font-semibold mb-4">Sign In</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-sm mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </div>
    </form>
  )
}
