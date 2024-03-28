import React from "react"
import LoginForm from "../../_components/LoginForm"

export const metadata = {
  title: "Login | Ports Travel - Best Travel Agency in Portsmouth and Beyond",
  description: "Login page to Ports Travel © Alex Chu 2024",
}

export default function LoginPage() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <LoginForm />
    </main>
  )
}
