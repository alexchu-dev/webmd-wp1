import { getServerSession } from "next-auth/next"
import { options } from "../../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(options)

  if (!session) {
    redirect(
      `/api/auth/signin?callbackUrl=${process.env.NEXT_PUBLIC_API_URL}/admin/`
    )
  }

  if (session?.user.role === "admin") {
    return <p>You are an admin, welcome!</p>
  } else {
    redirect("/dashboard/")
  }
  return null
}
