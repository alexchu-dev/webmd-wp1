"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { destinations } from "../data.js";
import { Modal, Box, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const fetchDestinationData = (slug) => {
  return destinations.find((destination) => destination.slug === slug);
};

export default function DestinationPage() {
  const [destination, setDestination] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  useEffect(() => {
    const data = fetchDestinationData(slug);
    setDestination(data);
  }, [slug]);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  if (!destination) {
    return <div>Loading...</div>;
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '2/3',
    maxWidth: '90%',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    outline: 'none'
  };

  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <div className="relative mb-4">
        <img src={destination.banner} alt={destination.name} className="w-full h-[200px] object-cover rounded-xl" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex items-center justify-center rounded-xl">
          <h1 className="text-5xl font-semibold text-white">{destination.name}</h1>
        </div>
      </div>
      <p>{destination.text1}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {destination.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${destination.name} ${index + 1}`}
            className="w-full h-auto rounded-xl mb-4 cursor-pointer"
            onClick={() => handleOpen(image)}
          />
        ))}
      </div>

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
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <img src={selectedImage} alt="Expanded view" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Modal>
    </main>
  );
}