/*
Author: Alex Chu up2244885
University of Portsmouth
Footer component with Sitemap and Contact form.
*/
"use client"
import React from "react"
import Link from "next/link"
import ContactForm from "../ContactForm"

export default function Footer() {
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
                  <Link href="/journals">Journals</Link>
                </li>
                <li>
                  <Link href="/tips">Travel Tips</Link>
                </li>
                <li>
                  <Link href="/trip-builder">Trip Builder</Link>
                </li>
                <li>
                  <Link href="/auth/login">Login/ Sign Up</Link>
                </li>
                <li>
                  <Link href="/auth/login">My Cart</Link>
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
        <div>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <ContactForm />
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
    </footer>
  )
}
