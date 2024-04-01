import { getMySession } from "@/lib/getMySession"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getMySession()
  
  if (!session) {
    redirect("/auth/login")
  }

  return (
    <section>
      <h1 className="text-3xl font-semibold m-2 text-center">Dashboard</h1>
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
      <p>Dashboard for users</p>
    </section>
  )
}