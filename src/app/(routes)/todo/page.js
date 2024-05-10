import React from "react"
import { Toaster } from 'react-hot-toast';
import FormDisplay from "./_components/FormDisplay"

export default function ToDoList() {
  return (
    <section className="flex justify-center items-center h-screen">
      <Toaster containerStyle={{top:80}} reverseOrder={false} />
      <FormDisplay />
    </section>
  )
}
 