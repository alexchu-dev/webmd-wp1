"use client"
import React, { useState } from "react"
import Swal from "sweetalert2"
import { useRouter } from 'next/navigation'

export default function SignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Password match checks
    if (formData.password !== formData.confirmPassword) {
      return Swal.fire("Error", "Passwords do not match!", "error")
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (res.ok) {
      Swal.fire("Success", "Account created successfully!", "success").then((result) => {
        if (result.isConfirmed) {
          router.push('/login');
        }
      });
    } else {
      Swal.fire(
        "Error",
        data.message || "An error occurred. Please try again.",
        "error"
      )
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto p-8 bg-white rounded-2xl shadow-xl w-full sm:max-w-[400px]"
    >
      <h2 className="text-center text-2xl font-semibold mb-4">Sign Up</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm mb-2">
          Name
        </label>
        <input
          type="name"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-sm mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </div>
    </form>
  )
}
