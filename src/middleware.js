import { withAuth } from "next-auth/middleware"

export default withAuth(
  {
    callbacks: {
      authorized({ req , token }) {
        if(token) return true // If there is a token, the user is authenticated
      }
    },
    pages: {
      signIn: '/auth/login',
      error: '/auth/login'
    }
  }
)

// import { NextResponse } from "next/server"

// export function middleware(request) {
//   const res = NextResponse.next()

//   // // add the CORS headers to the response
//   // res.headers.append('Access-Control-Allow-Credentials', "true")
//   // res.headers.append('Access-Control-Allow-Origin', '*')
//   // res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
//   // res.headers.append(
//   //     'Access-Control-Allow-Headers',
//   //     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//   // )
//       return res
// //    return NextResponse.json({ message: "Auth required" }, { status: 401 })
// }

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin",
    "/admin/:path*",
    "/api/:path*"
  ],
}
