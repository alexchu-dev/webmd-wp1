/*
Author: Alex Chu up2244885
University of Portsmouth
*/
"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image.js"
import { blogs } from "../data.js"
import { Modal, Box } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"

const fetchBlogData = (slug) => {
  return blogs.find((blog) => blog.slug === slug)
}
export default function Blog({slug}) {
  const [blog, setBlog] = useState(null)
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")
  useEffect(() => {
    const data = fetchBlogData(slug)
    console.log(data)
    setBlog(data)
  }, [slug])

  const handleOpen = (image) => {
    setSelectedImage(image)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  if (!blog) {
    return  <main className="max-w-screen-xl mx-auto p-20">Loading...</main>
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "2/3",
    minWidth: "400px",
    maxWidth: "90%",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 2,
    outline: "none",
  }
console.log(blog.images[0].url)
  return (
    <main className="max-w-screen-xl mx-auto p-4">
        <div className="items-center justify-center mb-4">
          <h1 className="text-3xl font-semibold text-center">
            {blog.title}
          </h1>
        </div>
      <section className="mb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="gallery-card relative overflow-hidden content-center justify-center items-center flex">
                <Image
                  src={blog.images[0].url}
                  alt={`${blog.title}`}
                  title={`${blog.title}`}
                  width={640}
                  height={400}
                  className="rounded-xl mb-4 cursor-pointer object-cover h-[400px]"
                  onClick={() => handleOpen(image)}
                />
              </div>
              <div className="gallery-card relative overflow-hidden content-center justify-center items-center flex">
                    <p className="mb-2 p-4 leading-loose">
                      {blog.content}
                    </p>
                  </div>
        </div>
      </section>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Expanded view"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Modal>
    </main>
  )
}
