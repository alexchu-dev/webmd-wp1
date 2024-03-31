"use client"

import { SessionProvider } from "next-auth/react"

const NextAuthProvider = ({ children, Session }) => {
  return <SessionProvider session={Session}>{children}</SessionProvider>
}
export default NextAuthProvider
