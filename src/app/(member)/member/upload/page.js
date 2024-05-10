"use client"
import React from "react"

const handleFileChange = async (event) => {
  event.preventDefault();
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/member/upload`, {
    method: 'POST',
    body: formData,
  });
  const data = await res.json();
  if (res.ok) {
    // Store the returned image URL in state or process further as needed
    console.log('Image uploaded to:', data.location);
  } else {
    console.error('Failed to upload image:', data.message);
  }
};

const Upload = () => {
  return (
    <div>
      <form className="flex flex-col items-center justify-center" >
      <input type="file" onChange={handleFileChange}/>
      </form>
    </div>
  )
}

export default Upload
