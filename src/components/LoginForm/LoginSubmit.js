import React from "react"
import Swal from "sweetalert2"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

const LoginSubmit = ({ email, password, setEmail, setPassword }) => {
  // useSession hook with next-auth
  const { data: session, status } = useSession()
  const renderAuthButtons = () => {
    if (session) {
      return (
        <>
          <div className="text-center my-8">
            Signed in as {session?.user?.name}
          </div>
          <button
            className="flex justify-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded m-auto mb-4"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </>
      )
    } else {
      return (
        <>
          <form onSubmit={handleSubmit}>
            <h2 className="font-bold text-2xl text-center mb-4">Login</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm mb-2">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div className="flex text-center gap-4">
              <button
                type="submit"
                className="basis-1/2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
              >
                Login
              </button>
              <Link
                href="/auth/signup"
                className="basis-1/2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
              >
                Sign Up
              </Link>
            </div>
          </form>
          <hr className="my-4 h-2 border-t-2 bg-slate-40" />
          <button
            className="flex justify-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded m-auto mb-4"
            onClick={() => signIn("github")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 1792 1792"
            >
              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
            </svg>
            Sign in with GitHub
          </button>
          <button
            className="flex justify-center px-4 py-2 bg-red-600 hover:bg-red-400 text-white rounded m-auto"
            onClick={() => signIn("google")}
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
            </svg>
            Sign in with Google
          </button>
        </>
      )
    }
  }

  // Actions when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      )
      const data = await res.json()
      if (res.ok) {
        console.log("Login Success:", data.message)
        Swal.fire({
          title: "Login Successful",
          text: data.message,
          icon: "success",
          confirmButtonText: "OK",
        })
      } else {
        console.error("Login Failed:", data.message)
        Swal.fire({
          title: "Invalid Credentials",
          text: data.message,
          icon: "error",
          confirmButtonText: "Try Again",
        })
      }
    } catch (error) {
      console.error("Login Failed:", error)
      Swal.fire({
        title: "Login Failed",
        text: "Cannot connect to the API. Please try again later.",
        icon: "warning",
        confirmButtonText: "OK",
      })
    }
  }
  return (
    <>
      <div className="m-auto p-8 bg-white rounded-2xl shadow-xl w-full sm:max-w-[400px]">
        <div className="items-center justify-center m-auto ">
          {renderAuthButtons()}
        </div>
      </div>
    </>
  )
}

export default LoginSubmit
