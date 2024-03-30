import React from "react"
import { Toaster } from 'react-hot-toast';
import FormDisplay from "./_components/FormDisplay"

export default function ToDoList() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <Toaster containerStyle={{top:80}} reverseOrder={false} />
      <FormDisplay />
    </main>
  )
}
 