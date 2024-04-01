import { getServerSession } from "next-auth/next"
import { options } from "../../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession(options)

  if (!session) {
    redirect("/auth/signup")
  }

  return (
    <section>
      <h1 className="text-3xl font-semibold m-2 text-center">Dashboard</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <p>Dashboard for users</p>
    </section>
  )
}