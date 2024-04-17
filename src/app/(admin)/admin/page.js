import { getServerSession } from "next-auth/next"
import { options } from "../../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"

export default async function AdminPage() {
  const session = await getServerSession(options)

  if (!session) {
    redirect(
      `/api/auth/signin?callbackUrl=${process.env.NEXT_PUBLIC_API_URL}/admin/`
    )
  }

  if (session?.user.role === "admin") {
    return <section>
    <h1 className="text-3xl font-semibold m-2 text-center">Admin Panel</h1>
    <div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-6" />
    <div className="flex">
    </div>
  </section>
  } else {
    redirect("/member/")
  }
  
  return null
}
