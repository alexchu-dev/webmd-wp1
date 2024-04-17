"use client"
import React, { useState, useRef } from "react"
import { Editor } from "@tinymce/tinymce-react"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

export default function JournalEditor() {
  const editorRef = useRef(null)
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    destination: "",
    image: { url: "", alt: "" },
    excerpt: "",
    content: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === "title") {
      const slug = value.toLowerCase().replace(/[\s\W-]+/g, "-")
      setFormData((prev) => ({ ...prev, title: value, slug }))
    } else if (name === "image.alt") {
      setFormData((prev) => ({
        ...prev,
        image: { ...prev.image, alt: value },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleFileChange = async (event) => {
    const file = event.target.files[0]
    if (file) {
      try {
        const url = await uploadFile(file, "banner")
        setFormData((prev) => ({
          ...prev,
          image: { ...prev.image, url: url },
        }))
      } catch (error) {
        console.log("Upload image failure: " + error.message)
        Swal.fire({
          title: "Error",
          text: "Cannot upload banner this time. Please try again later.",
          icon: "error",
          confirmButtonText: "Ok",
        })
      }
    }
  }

  const uploadFile = async (blobInfo, banner, progress) => {
    console.log("Uploading file: ", blobInfo)
    const formData = new FormData()
    if (banner === "banner") {
      formData.append("file", blobInfo)
    } else {
      formData.append("file", blobInfo.blob(), blobInfo.filename())
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/member/upload`,
        {
          method: "POST",
          body: formData,
        }
      )
      const data = await res.json()
      console.log(data)
      if (res.ok) {
        console.log("Image uploaded to: " + data.location)
        return data.location
      } else {
        console.log("Upload image failure: " + data.message)
        Swal.fire({
          title: "Error",
          text: "Cannot upload banner this time. Please try again later.",
          icon: "error",
          confirmButtonText: "Ok",
        })
      }
    } catch (error) {
      onsole.log("Upload image failure: " + error.message)
      Swal.fire({
        title: "Error",
        text: "Cannot upload banner this time. Please try again later.",
        icon: "error",
        confirmButtonText: "Ok",
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    const completeFormData = { ...formData }
    console.log(completeFormData)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/member/myJournal`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(completeFormData),
        }
      )
      if (response.ok) {
        console.log("Journal saved...")
        router.push("/member/my-journals")
      } else {
        const data = await response.json()
        console.log("Failed to save journal: " + data.message)
        Swal.fire({
          title: "Error",
          text: "Cannot submit journal. Please try again later.",
          icon: "error",
          confirmButtonText: "Ok",
        })
      }
    } catch (error) {
      console.error("Error submitting journal:", error.message)
      Swal.fire({
        title: "Error",
        text: "Cannot submit journal. Please try again later.",
        icon: "error",
        confirmButtonText: "Ok",
      })
    }
  }

  return (
    <div className="border-neutral-200 ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mb-1 p-2 w-full border rounded-md"
          placeholder="Add title"
        />
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
          className="mb-1 p-2  w-full border rounded-md"
          placeholder="Destination"
        />
        <input
          type="file"
          onChange={handleFileChange}
          required
          className="mb-1 p-2 w-full border rounded-md"
        />
        <input
          type="text"
          name="image.alt"
          value={formData.image.alt}
          onChange={handleChange}
          required
          className="mb-1 p-2 w-full border rounded-md"
          placeholder="Image Alt Text"
        />
        <Editor
          id="tinymce-editor"
          tinymceScriptSrc={
            process.env.NEXT_PUBLIC_API_URL + "/tinymce/tinymce.min.js"
          }
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue=""
          init={{
            height: 500,
            menubar: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "preview",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            image_title: true,
            automatic_uploads: true,
            file_picker_types: "image",
            relative_urls: false,
            remove_script_host: true,
            document_base_url: `${process.env.NEXT_PUBLIC_API_URL}/`,
            images_upload_handler: uploadFile,
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            setup: (editor) => {
              editor.on("Change", (e) => {
                setFormData((prev) => ({
                  ...prev,
                  content: editor.getContent(),
                  excerpt:
                    editor
                      .getContent()
                      .replace(/<[^>]*>?/gm, "")
                      .substring(0, 200) + "...",
                }))
              })
            },
          }}
        />
        <button
          type="submit"
          className={`${
            isSubmitting
              ? "bg-gray-300 cursor-wait"
              : "bg-blue-500 hover:bg-blue-700"
          } my-2 px-4 py-2 text-white rounded`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  )
}
