/*
Author: Alex Chu up2244885
University of Portsmouth
*/
"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image.js"
import { blogs } from "../data.js"
import DOMPurify from "dompurify"
import parse from "html-react-parser"
import { Modal, Box } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import { Arvo, Parisienne } from "next/font/google"

const fetchBlogData = (slug) => {
  return blogs.find((blog) => blog.slug === slug)
}

const paris = Parisienne({
  weight: ["400"],
  subsets: ["latin"],
})

const arvo = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function Blog({ slug }) {
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
    return <main className="max-w-screen-xl mx-auto p-20">Loading...</main>
  }

  // Sanitize content
  blog.content = DOMPurify.sanitize(blog.content)

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "400px",
    maxWidth: "90%",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 2,
    outline: "none",
  }
  return (
    <section>
      <div className="items-center justify-center mb-4">
        <h1
          className={`${paris.className} text-3xl md:text-5xl my-4 md:my-12 font-semibold text-center`}
        >
          {blog.title}
        </h1>
      </div>
      <section className="mb-2">
        <div
          className="journal-banner max-w-screen-xl bg-center pb-96 relative"
          style={{
            backgroundImage: `url(${blog.image.url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <label
            className={`${arvo.className} text-lg absolute top-1/3 right-0 bg-[#fcf6e775] p-2 md:p-4 rounded-tl-lg rounded-bl-lg`}
          >
            {blog.destination.charAt(0).toUpperCase() +
              blog.destination.slice(1)}
          </label>
        </div>
        <div className="grid grid-cols-1 gap-4 max-w-screen-lg m-auto">
          <div className="gallery-card relative overflow-hidden content-center justify-center items-center flex">
            <p className="mb-2 p-4 leading-loose">{parse(blog.content)}</p>
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
          <Image
            src={selectedImage}
            alt="Expanded view"
            width={1280}
            height={960}
            objectFit="cover"
          />
        </Box>
      </Modal>
    </section>
  )
}
