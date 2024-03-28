import React, { useEffect, useState } from "react"
import HandleDelete from "./HandleDelete"
import useFetchData from "./FetchData"

export default function FormDisplay() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [data, refetch] = useFetchData()
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
      const res = await response.json()
      console.log(res)
    }

    useEffect(() => {
    }, [])
    
    return (
        <div className="m-auto justify-center items-center">
          <div className="m-auto justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="p-8 m-auto bg-white rounded-2xl shadow-xl w-full sm:max-w-[400px]"
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
          <div>
            <div className="flex flex-row">
              {data &&
                data.map((person, index) => (
                  <div
                    key={index}
                    className="relative p-4 m-4 bg-white rounded-2xl shadow-xl"
                  >
                    <button onClick={()=>HandleDelete(person._id)} className="absolute top-0 right-0 mt-2 mr-2">
                      <svg
                        className="h-3 w-3 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
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
  