"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import DestinationForm from "./DestinationForm"
import { Modal, Box } from "@mui/material"
import Swal from "sweetalert2"
import Link from "next/link"

export default function DestinationsList() {
  const [destinations, setDestinations] = useState([])
  const [editingDestinationId, setEditingDestinationId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [addingNew, setAddingNew] = useState(false)

  useEffect(() => {
    fetch("/api/destinations")
      .then((res) => res.json())
      .then(setDestinations)
  }, [])

  const handleSave = async (data) => {
    const method = data.dest_id ? "PUT" : "POST"
    const response = await fetch("/api/destinations", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    const savedData = await response.json()
    if (method === "POST") {
      setDestinations([...destinations, savedData])
    } else {
      setDestinations(
        destinations.map((d) =>
          d.dest_id === savedData.dest_id ? savedData : d
        )
      )
    }
    setIsModalOpen(false)
    setEditingDestinationId(null)
    setAddingNew(false)
  }

  const handleDelete = async (destId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`/api/destinations?dest_id=${destId}`, { method: "DELETE" })
        setDestinations(destinations.filter((dest) => dest.dest_id !== destId))
        Swal.fire("Deleted!", "Your destination has been deleted.", "success")
      }
    }
    )
  }

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setEditingDestinationId(null)
            setAddingNew(true)
            setIsModalOpen(true)
          }}
          className="bg-green-500 text-white p-2 rounded my-4"
        >
          Add New Destination
        </button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center m-auto">
        {destinations.map((dest) => (
          <div key={dest.dest_id}>
            <div className="relative">
              <Link href="#" passHref legacyBehavior>
                <a
                  onClick={() => {
                    setEditingDestinationId(dest.dest_id)
                    setIsModalOpen(true)
                    setAddingNew(false)
                  }}
                >
                  <Image
                    src={dest.banner}
                    title={dest.name}
                    alt={dest.name}
                    width={400}
                    height={200}
                    className="h-[200px] rounded object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-black rounded-bl-xl rounded-tr-xl font-bold bg-opacity-50 text-white p-4">
                    {dest.name}
                  </div>
                </a>
              </Link>
            </div>
            <div className="flex flex-row gap-2">
              <button
                onClick={() => {
                  setEditingDestinationId(dest.dest_id)
                  setIsModalOpen(true)
                  setAddingNew(false)
                }}
                className="bg-blue-500 text-white p-2 mt-2 rounded w-1/2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(dest.dest_id)}
                className="bg-red-500 text-white p-2 mt-2 rounded w-1/2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            minWidth: { xs: "90%", sm: "80%", md: "50%", lg: "40%" },
            maxWidth: { xs: "90%", sm: "80%", md: "90%" },
            maxHeight: "90vh",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 2,
            overflowY: "auto",
          }}
        >
          <DestinationForm
            initialData={
              editingDestinationId
                ? destinations.find(
                    (dest) => dest.dest_id === editingDestinationId
                  )
                : {}
            }
            onSave={handleSave}
            onCancel={() => {
              setIsModalOpen(false)
              setEditingDestinationId(null)
              setAddingNew(false)
            }}
            edit={editingDestinationId != null || addingNew}
          />
        </Box>
      </Modal>
    </div>
  )
}
