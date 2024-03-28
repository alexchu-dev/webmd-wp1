"use client"
import React, { useState } from "react"
import HandleDelete from "./HandleDelete"
import FormSubmit from "./FormSubmit"
import useFetchData from "./hook/useFetchData"

export default function FormDisplay() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [data, refetch] = useFetchData()

  return (
    <div className="m-auto justify-center items-center">
      <div className="m-auto justify-center items-center">
        <FormSubmit name={name} age={age} setName={setName} setAge={setAge} onFormSubmitSuccess={refetch} />
      </div>
      <div>
        <div className="flex flex-wrap max-w-screen-xl">
          {data &&
            data.map((person, index) => (
              <div
                key={index}
                className="relative p-4 m-4 bg-white rounded-2xl shadow-xl"
              >
                <HandleDelete id={person._id} onDeleteSuccess={refetch} />
                <h1>{person.name}</h1>
                <p>{person.age}</p>
                <p>{person._id}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
