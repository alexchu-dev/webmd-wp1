import React from "react"
import Link from "next/link"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function DashboardLayout({ children }) {
  return (
    <section>
      <nav id="user-nav" className="m-auto w-full text-lg font-semibold">
        <ul className="flex gap-8 w-full">
          <li >
            <Link href="/member/"><KeyboardArrowRightIcon /> Dashboard</Link>
          </li>
          <li>
            <Link href="/member/my-journals"><KeyboardArrowRightIcon /> My Journals</Link>
          </li>
          <li>
            <Link href="/member/new-journal"><KeyboardArrowRightIcon /> New Journal</Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  )
}
