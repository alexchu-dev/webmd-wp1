"use client"
import React, { useEffect, useState } from "react"

export default function About() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [data, setData] = useState("")
  async function handleSubmit(e) {
    e.preventDefault()
    console.log(name, age)
    const response = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    })

    const data = await response.json()
    // console.log(data)
  }

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
  }, [])

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-row">
        {data &&
          data.map((person, index) => (
            <div key={index} className="p-4 m-4 bg-white rounded-2xl shadow-xl">
              <h1>{person.name}</h1>
              <p>{person.age}</p>
            </div>
          ))}
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="p-8 m-4 bg-white rounded-2xl shadow-xl w-full sm:max-w-[400px]"
        >
          <label htmlFor="name">Enter Name </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />

          <label htmlFor="age"> Enter Age </label>
          <input
            type="text"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />

          <button type="submit" className="w-full px-3 py-2 border rounded">
            Submit
          </button>
        </form>
      </div>
    </main>
  )
}
