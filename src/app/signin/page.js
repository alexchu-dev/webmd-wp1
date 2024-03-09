import React from "react"
import SignInForm from "../components/SignInForm"

export const metadata = {
  title: "Sign In | Ports Travel - Best Travel Agency in Portsmouth and Beyond",
  description: "Sign In page to Ports Travel © Alex Chu 2024",
}

export default function SignInPage() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <SignInForm />
    </main>
  )
}
