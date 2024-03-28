"use client"
import React, { useState } from "react"
import HandleDelete from "./HandleDelete"
import FormSubmit from "./FormSubmit"
import EditModal from "./EditModal"
import { Edit as EditIcon } from "@mui/icons-material"
import useFetchData from "./hook/useFetchData"

export default function FormDisplay() {
  const [title, setTitle] = useState("")
  const [task, setTask] = useState("")
  const [data, refetch] = useFetchData()
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [currentToDo, setCurrentToDo] = useState(null)
  const handleOpenEditModal = (todo) => {
    setCurrentToDo(todo)
    setEditModalOpen(true)
  }

  return (
    <div className="m-auto justify-center items-center">
      <div className="m-auto justify-center items-center">
        <FormSubmit
          title={title}
          task={task}
          setTitle={setTitle}
          setTask={setTask}
          onFormSubmitSuccess={refetch}
        />
      </div>
      <div>
        <div className="flex flex-wrap max-w-screen-xl">
          {data &&
            data.map((todo, index) => (
              <div
                key={index}
                className="relative p-4 m-4 bg-white rounded-2xl shadow-xl justify-between items-center flex flex-col"
              >
                <HandleDelete id={todo._id} onDeleteSuccess={refetch} />
                <button
                  onClick={() => handleOpenEditModal(todo)}
                  className="absolute top-0 right-0 mr-6"
                >
                  <EditIcon fontSize="6px"/>
                </button>
                <h1>Title: {todo.title}</h1>
                <p>Task: {todo.task}</p>
              </div>
            ))}
        </div>
      </div>
      {currentToDo && (
                <EditModal
                    open={editModalOpen}
                    handleClose={() => setEditModalOpen(false)}
                    todo={currentToDo}
                    onEditSuccess={refetch}
                />
            )}
    </div>
  )
}
