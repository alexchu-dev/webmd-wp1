import React from "react"
import SignInForm from "../components/SignInForm"

export const metadata = {
  title: "Sign Up | Ports Travel - Best Travel Agency in Portsmouth and Beyond",
  description: "Sign Up to enjoy all the benefits © Alex Chu 2024",
}

export default function SignUpPage() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <SignInForm />
    </main>
  )
}
