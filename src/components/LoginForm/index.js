"use client"
import React, { useState } from "react"
import LoginSubmit from "./LoginSubmit"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
      <LoginSubmit
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
  )
}
