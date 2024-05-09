"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"

export default function DestinationForm({
  onSave,
  onCancel,
  initialData = {},
  edit,
}) {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    banner: "",
    description: "",
    images: [{ url: "", alt: "" }],
    ...initialData,
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === "name") {
      const slug = value.toLowerCase().replace(/[\s\W-]+/g, "-")
      setFormData((prev) => ({ ...prev, name: value, slug }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const defaultImage = "/logo.png"

  const handleImageChange = (index, field, value) => {
    const updatedImages = [...formData.images]
    updatedImages[index][field] = value
    setFormData((prev) => ({ ...prev, images: updatedImages }))
  }

  const handleImageError = (event) => {
    event.target.src = defaultImage;
  };

  const addImageField = () => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, { url: "", alt: "" }],
    }))
  }

  const removeImageField = (index) => {
    const filteredImages = formData.images.filter((_, idx) => idx !== index)
    setFormData((prev) => ({ ...prev, images: filteredImages }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Formdata", formData)
    onSave(formData)
  }

  return (
    <form className="flex flex-col mx-auto" onSubmit={handleSubmit}>
      {edit ? (
        <h2 className="text-xl text-center font-semibold">Edit Destination</h2>
      ) : (
        <h2 className="text-xl text-center font-semibold">
          Add New Destination
        </h2>
      )}
      <label htmlFor="name" className="">
        Name
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter the name of the destination"
        className="border border-gray-300 p-1 mb-4"
        required
      />
      <label htmlFor="image" className="">
        Banner URL
      </label>
      <input
        type="text"
        name="banner"
        value={formData.banner}
        onChange={handleChange}
        placeholder="Enter the URL of the Banner Image"
        className="border border-gray-300 p-1 mb-4"
        required
      />
      {formData.banner && (
        <Image
          src={formData.banner || defaultImage}
          alt="Banner Image Preview"
          onError={handleImageError}
          width={400}
          height={200}
          className="w-full mb-4 max-h-80 object-cover"
        />
      )}
      <label htmlFor="desc" className="">
        Description
      </label>
      <textarea
        name="description"
        rows={4}
        value={formData.description}
        onChange={handleChange}
        placeholder="The content you want to display on the destination page."
        className="border border-gray-300 p-1 mb-4"
        required
      />
      {formData.images.map((image, index) => (
        <div key={index} className="flex flex-col">
          <label htmlFor="image.url">
            Image {index + 1}
            {index >= 1 && (
              <button
                type="button"
                onClick={() => removeImageField(index)}
                className="text-sm ml-4"
              >
                [Remove]
              </button>
            )}
          </label>

          <input
            type="text"
            value={image.url}
            onChange={(e) => handleImageChange(index, "url", e.target.value)}
            placeholder="Image URL"
            className="border border-gray-300 p-1 mb-2"
            required
          />

          <input
            type="text"
            value={image.alt}
            onChange={(e) => handleImageChange(index, "alt", e.target.value)}
            placeholder="Image Alt Text"
            className="border border-gray-300 p-1 mb-6"
            required
          />

          {image.url && (
            <Image
              src={image.url || defaultImage}
              alt={image.alt || "Image preview"}
              onError={handleImageError}
              width={400}
              height={200}
              className="w-full mb-4 max-h-80 object-cover"
            />
          )}
        </div>
      ))}
      <button
        className="bg-green-500 text-white p-2 mb-4 rounded-md"
        type="button"
        onClick={addImageField}
      >
        Add more images
      </button>
      <div className="grid md:grid-cols-2 gap-4">
        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
          Save
        </button>
        <button
          className="bg-gray-500 text-white p-2 rounded-md"
          onClick={onCancel}
          type="button"
        >
          Cancel
        </button>
      </div>
      <style jsx>{`
        label {
          font-weight: bold;
        }
      `}</style>
    </form>
  )
}
