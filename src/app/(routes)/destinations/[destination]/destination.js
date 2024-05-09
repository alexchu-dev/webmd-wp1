/*
Author: Alex Chu up2244885
University of Portsmouth
This is the destination page that displays particular destination details.
All the client side components are controlled here.
*/
"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image.js"
import { Modal, Box } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import Loading from "./loading.js"
import { data } from "autoprefixer"

export default function Destination({ slug }) {
  const [destination, setDestination] = useState(null)
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/destinations?slug=${slug}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        if (data) {
          setDestination(data)
          console.log("Destination data fetched", data)
        } else {
          console.log("No data returned from API")
        }
      })
      .catch((error) => {
        console.error("Failed to fetch destination data:", error)
      })
  }, [slug])

  const handleOpen = (image) => {
    setSelectedImage(image)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  if (!destination) {
    return <Loading />
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: { xs: "90%", sm: "80%", md: "50%", lg: "40%" },
    maxWidth: { xs: "90%", sm: "80%", md: "90%" },
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 2,
    outline: "none",
  }

  return (
    <section>
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
                      {destination.description}
                      <sub className="text-3xl leading-3">”</sub>
                    </p>
                  </div>
                </>
              )}
              <div className="gallery-card relative overflow-hidden content-center justify-center items-center flex">
                <Image
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  title={image.alt}
                  width={640}
                  height={400}
                  className="rounded-xl mb-4 cursor-pointer object-cover h-[400px]"
                  onClick={() => handleOpen(image.url)}
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
