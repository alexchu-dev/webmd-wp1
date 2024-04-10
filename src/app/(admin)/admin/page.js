import { getServerSession } from "next-auth/next"
import { options } from "../../api/auth/[...nextauth]/options"

export default async function AdminPage() {
  const session = await getServerSession(options)

  if (session?.user.role === "admin") {
    return <p>You are an admin, welcome!</p>
  }

  return <p>You are not authorized to view this page!</p>
}
