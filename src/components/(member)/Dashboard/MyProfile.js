"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import EditIcon from "@mui/icons-material/Edit"
import { IconButton, TextField } from "@mui/material"
import Loading from "@/app/loading"

export default function MyProfile() {
  const { data: session, status } = useSession()
  const [profile, setProfile] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  })
  const [error, setError] = useState("")

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/member/myProfile`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data)
        setFormData({ name: data.name, password: "" })
      })
  }, [session])

  console.log("Profile: ", profile)
  // if (status === "loading") {
  //   return <Loading />
  // }

  const handleEdit = () => {
    setEditMode(true)
  }

  const handleCancel = () => {
    setEditMode(false)
    setFormData({ name: profile.name, password: "" })
  }

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/member/myProfile`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
    const data = await res.json()

    if (!res.ok) {
      setError(data.message || "Failed to update profile")
    } else {
      setProfile(data)
      setEditMode(false)
      setError("")
    }
  }

  return (
    <div className="border-neutral-200 border rounded-xl p-4">
      <h2 className="text-xl font-bold">
        My Profile
        {!editMode && (
          <IconButton onClick={handleEdit} aria-label="edit">
            <EditIcon sx={{ fontSize: 24, marginLeft: 2 }} />
          </IconButton>
        )}
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1">
        <div className="my-2">
          {editMode ? (
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
          ) : (
            <p>Name: {profile?.name}</p>
          )}
        </div>
        <div className="my-2">
          <p>Email: {profile?.email}</p>
        </div>
        <div className="my-2">
          {editMode ? (
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              helperText="Leave blank to keep the current password"
            />
          ) : (
            <p>Password: ******</p>
          )}{" "}
        </div>
        {editMode && (
          <div className="flex justify-end space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleCancel}>Cancel</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" type="submit" variant="contained" color="primary">
              Save
            </button>
          </div>
        )}
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
