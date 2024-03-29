import React from "react"
import SignupForm from "@/app/_components/SignupForm"

export const metadata = {
  title: "Sign Up | Ports Travel - Best Travel Agency in Portsmouth and Beyond",
  description: "Sign Up to enjoy all the benefits © Alex Chu 2024",
}

export default function SignUpPage() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <SignupForm />
    </main>
  )
}
