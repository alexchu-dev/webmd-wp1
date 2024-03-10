/*
Author: Alex Chu up2244885
University of Portsmouth
Footer component with Sitemap and Contact form.
*/
"use client"
import React from "react"
import Link from "next/link"
import Swal from 'sweetalert2'

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Notice',
      text: 'Form not submitted. This will be implemented in wp2',
      icon: 'info',
      confirmButtonText: 'Cool'
    })
  }

  return (
    <footer className="flex flex-col items-center justify-center mx-auto bg-[#01afd1] text-white h-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full max-w-screen-lg mx-auto text-left justify-start">
        <div className="footer-links col-span-2">
          <h2 className="text-xl font-bold mb-2">Sitemap</h2>
          <div className="grid grid-cols-2">
            <div className="links-left">
              <ul className="gap-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/destinations">Destinations</Link>
                </li>
                <li>
                  <Link href="/packages">Packages</Link>
                </li>
                <li>
                  <Link href="/journal">Journal</Link>
                </li>
                <li>
                  <Link href="/tips">Travel Tips</Link>
                </li>
                <li>
                  <Link href="/trip-builder">Trip Builder</Link>
                </li>
                <li>
                  <Link href="/signin">Sign In/ Sign Up</Link>
                </li>
                <li>
                  <Link href="/signin">My Cart</Link>
                </li>
              </ul>
            </div>
            <div className="links-right">
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/rewards">Rewards</Link>
                </li>
                <li>
                  <Link href="/referral">Referral</Link>
                </li>
                <li>
                  <Link href="/about/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/about/refund">Refund Policy</Link>
                </li>
                <li>
                  <Link href="/about/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/contacts">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="p-2 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="copyright inline-block">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://alexchu.dev">Alexchu.dev</a> (up2244885) | All Rights
        Reserved
      </div>
      <div className="p-2">
        <Link href="/credits" className="underline">
          Photo credits
        </Link>
      </div>
      <style jsx>{`
        input,
        textarea {
          color: #000;
          width: 100%;
        }
        li {
          padding: 0.2rem 0;
        }
      `}</style>
    </footer>
  )
}
