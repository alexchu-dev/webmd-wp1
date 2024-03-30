import React from "react"
import toast from "react-hot-toast"

const FormSubmit = ({
  title,
  task,
  setTitle,
  setTask,
  onFormSubmitSuccess,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, task }),
    })

    if (res.ok) {
      const log = await res.json()
      console.log(log)
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
    setTitle('')
    setTask('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 m-auto bg-white rounded-2xl shadow-xl w-full sm:max-w-[400px]"
    >
      <h2 className="font-bold text-2xl text-center">To Do List</h2>
      <label htmlFor="name">Enter Title</label>
      <input
        required
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
      <label htmlFor="age">Enter Task</label>
      <input
        type="text"
        name="task"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
      <div className="text-center">
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default FormSubmit
