import React from "react"
import toast from "react-hot-toast"

const FormSubmit = ({ name, age, setName, setAge, onFormSubmitSuccess }) => {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const ageValue = parseInt(age)
    if (isNaN(ageValue)) {
      toast.error("Age must be a number!", {
        position: "top-center",
        duration: 1500,
      })
      return
    }
    const response = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    })

    if (response.ok) {
      const res = await response.json()
      console.log(res)
      toast.success("Submission Successful!", {
        position: "top-center",
        duration: 1500,
      })
      onFormSubmitSuccess()
    } else {
      toast.error("Submission Failed!", {
        position: "top-center",
        duration: 1500,
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 m-auto bg-white rounded-2xl shadow-xl w-full sm:max-w-[400px]"
    >
      <label htmlFor="name">Enter Name </label>
      <input
        required
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
      <label htmlFor="age">Enter Age </label>
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
  )
}

export default FormSubmit
