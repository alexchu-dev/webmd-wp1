import React from "react"
import { getServerSession } from "next-auth/next"
import { options } from "../../api/auth/[...nextauth]/options"
import Dashboard from "../../../components/(member)/Dashboard"

const UserPage = async () => {
  const session = await getServerSession(options)

  if (!session) {
    redirect(
      `/api/auth/signin?callbackUrl=${process.env.NEXT_PUBLIC_API_URL}/member/`
    )
  }

  return (
    <section>
      <h1 className="text-3xl font-semibold m-2 text-center">
        Dashboard
      </h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-4" />
      <Dashboard />
    </section>
  )
}

export default UserPage
