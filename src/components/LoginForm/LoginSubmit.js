import React from "react"
import Swal from "sweetalert2"
import Link from "next/link"

const LoginSubmit = ({
  email,
  password,
  setEmail,
  setPassword,}
) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
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
    } catch (error) {
      console.error("Login Failed:", error)
      Swal.fire({
        title: "Login Failed",
        text: "Cannot connect to the API. Please try again later.",
        icon: "warning",
        confirmButtonText: "OK",
      })
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-white rounded-2xl shadow-xl w-full sm:max-w-[400px]"
    >
      <h2 className="font-bold text-2xl text-center mb-4">Login</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm mb-2">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
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
          required
          type="password"
          name="password"
          id="password"
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
        <div className="mt-2"><Link href="/signup" className="underline">
          Sign Up Now
        </Link></div>
      </div>
    </form>
  )
}

export default LoginSubmit