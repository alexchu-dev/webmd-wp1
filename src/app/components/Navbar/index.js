"use client"
import React, { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import Image from "next/image"
import { Menu, MenuItem } from "@mui/material"
// import { useAtom } from "jotai"
// import { atomWithStorage } from "jotai/utils"
// import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"

// const darkModeAtom = atomWithStorage("darkMode", false)

export default function Nav() {
  /* Hamburger Button state */
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  /* Handler for Drop Down Menu */
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  /* Handle route change */
  const pathname = usePathname(); 

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* Dark Mode */
  // const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  return (
    <>
      {/* <h1 className="">Welcome to {darkMode ? "dark" : darkMode} mode!</h1> */}
      {/* Nav for mobile/tablet screens */}
      <div className="md:hidden">
        {/* Hamburger button */}
        <div
          id="topbar-mobile"
          className="flex h-[50px] justify-between items-center content-center"
        >
          <Link href="/">
            <Image
              src="/logo_w.png"
              alt="Ports Travel"
              width={125}
              height={33}
            />
          </Link>
          <button
            onClick={toggleNav}
            className="flex flex-col absolute top-0 right-0 mt-4 mr-4 justify-center items-center z-10"
            style={{ outline: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={`md:flex md:items-center lg:justify-between text-md font-semibold fixed inset-0 z-20 ${
            isOpen ? "flex" : "hidden"
          } bg-white transition-opacity duration-500 ease-in-out`}
          style={{ opacity: isOpen ? 1 : 0 }}
        >
          {/* "x" button to close the menu */}
          <button
            onClick={toggleNav}
            className="absolute top-0 right-0 mt-4 mr-4"
          >
            <svg
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav
            id="menu-mobile"
            className="h-full w-full flex flex-col items-center justify-center"
          >
            <Link href="/">
              <Image
                className="my-4"
                src="/logo.png"
                alt="Ports Travel"
                width={200}
                height={53}
              />
            </Link>
            <ul className="text-center">
              <li className="mb-4">
                <Link href="/">Home</Link>
              </li>
              <li className="mb-4">
                <Link href="/destinations">Destinations</Link>
              </li>
              <li className="mb-4">
                <Link href="/packages">Packages</Link>
              </li>
              <li className="mb-4">
                <Link href="/journal">Journal</Link>
              </li>
              <li className="mb-4">
                <Link href="/tips">Tips</Link>
              </li>
              <li className="mb-4 relative group">
                <button onClick={handleMenuOpen}>About</button>

                <Menu
                  id="about-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    "aria-labelledby": "about-menu-button",
                    onMouseLeave: handleMenuClose,
                  }}
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "skyblue",
                      color: "white",
                    },
                  }}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <Link href="/about/">About Us</Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link href="/about/refund">Refund Policy</Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link href="/about/privacy">Privacy Policy</Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link href="/about/careers">Careers</Link>
                  </MenuItem>
                </Menu>
              </li>

              <li className="mb-4">
                <Link href="/contacts">Contacts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Nav for large screens */}
      <nav
        id="menu-screen"
        className="hidden md:flex h-12 z-50 max-w-screen-xl w-full items-center text-sm text-white m-auto px-8"
      >
        <Link href="/">
          <Image src="/logo_w.png" alt="Ports Travel" width={150} height={50} />
        </Link>
        <ul className="flex gap-8 w-full justify-center">
          <li className="ml-4 relative group">
            <Link href="/destinations">Destinations</Link>
          </li>
          <li className="ml-4">
            <Link href="/packages">Packages</Link>
          </li>
          <li className="ml-4">
            <Link href="/journal">Journal</Link>
          </li>
          <li className="ml-4">
            <Link href="/tips">Tips</Link>
          </li>
          <li className="ml-4 relative group">
            <button onClick={handleMenuOpen}>About</button>

            <Menu
              id="about-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "about-menu-button",
                onMouseLeave: handleMenuClose,
              }}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "skyblue",
                  color: "white",
                },
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link href="/about/">About Us</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/about/refund">Refund Policy</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/about/privacy">Privacy Policy</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/about/careers">Careers</Link>
              </MenuItem>
            </Menu>
          </li>
          <li className="ml-4">
            <Link href="/contacts">Contacts</Link>
          </li>
          <li className="ml-4">
            <Link href="/login">Login</Link>
          </li>
          {/* <li>
            {darkMode ? (
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-lg dark:text-yellow-200"
              />
            ) : (
              <BsFillSunFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-lg dark:text-yellow-200"
              />
            )}
          </li> */}
        </ul>
      </nav>
    </>
  )
}
