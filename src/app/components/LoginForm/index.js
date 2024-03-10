"use client"
import React, { useState } from "react"
import Swal from "sweetalert2"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()
    if (res.ok) {
      console.log("Login Success:", data.message)
      Swal.fire({
        title: "Login Successful",
        text: data.message,
        icon: "success",
        confirmButtonText: "OK",
      })
    } else {
      console.error("Login Failed:", data.message)
      Swal.fire({
        title: "Invalid Credentials",
        text: data.message,
        icon: "error",
        confirmButtonText: "Try Again",
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 m-4 bg-white rounded-2xl shadow-xl w-full sm:max-w-[400px]"
    >
      <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm mb-2">
          Email (demo@demo.com)
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
          Password (demo)
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
          Login
        </button>
      </div>
    </form>
  )
}
