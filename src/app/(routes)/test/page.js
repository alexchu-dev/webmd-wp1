import React from "react"
import { Toaster } from 'react-hot-toast';
import FormDisplay from "./FormDisplay"

export default function About() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <Toaster containerStyle={{top:80}} reverseOrder={false} />
      <FormDisplay />
    </main>
  )
}
 