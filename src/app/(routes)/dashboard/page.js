import { getServerSession } from "next-auth/next"
import { options } from "../../api/auth/[...nextauth]/options"
import DisplayJournal from "./components/displayJournal"

export default async function Dashboard() {
  const session = await getServerSession(options)
  console.log("Server Session ", session)
  return (
    <section>
      <h1 className="text-3xl font-semibold m-2 text-center">Dashboard</h1>
      {session?.user.role === "admin" && (<h2>Admin Panel</h2>)}
      <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />

      <div className="flex">
        <DisplayJournal />
      </div>
    </section>
  )
}
