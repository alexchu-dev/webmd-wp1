"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image.js"
import { usePathname } from "next/navigation"
import { destinations } from "../data.js"
import { Modal, Box } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"

/* Since NextJS 13 the getStaticProps and getStaticPaths are no longer working, therefore I am using another method in here, before creating an API for fetching. */
const fetchDestinationData = (slug) => {
  return destinations.find((destination) => destination.slug === slug)
}

export default function DestinationPage() {
  const [destination, setDestination] = useState(null)
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")
  const pathname = usePathname()
  const slug = pathname.split("/").pop()

  useEffect(() => {
    const data = fetchDestinationData(slug)
    setDestination(data)
  }, [slug])

  const handleOpen = (image) => {
    setSelectedImage(image)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  if (!destination) {
    return  <main className="max-w-screen-xl mx-auto p-20">Loading...</main>
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "2/3",
    maxWidth: "90%",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    outline: "none",
  }

  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <div className="relative mb-4">
        <Image
          src={destination.banner}
          alt={destination.name}
          width={1280}
          height={200}
          className="w-full h-[120px] md:h-[200px] object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex items-center justify-center rounded-xl">
          <h1 className="text-5xl font-semibold text-white">
            {destination.name}
          </h1>
        </div>
      </div>
      <section className="mb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {destination.images.map((image, index) => (
            <>
              {index === 1 && (
                <>
                  <div className="gallery-card relative overflow-hidden content-center justify-center items-center flex">
                    <p className="mb-2 p-4 leading-loose">
                      <sub className="text-3xl leading-3">“</sub>
                      {destination.text1}
                      <sub className="text-3xl leading-3">”</sub>
                    </p>
                  </div>
                </>
              )}
              <div className="gallery-card relative overflow-hidden content-center justify-center items-center flex">
                <Image
                  key={index}
                  src={image}
                  alt={`${destination.name} ${index + 1}`}
                  title={`${destination.name} ${index + 1}`}
                  width={640}
                  height={400}
                  className="rounded-xl mb-4 cursor-pointer object-cover h-[400px]"
                  onClick={() => handleOpen(image)}
                />
              </div>
            </>
          ))}
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
