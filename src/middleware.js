import { NextResponse } from "next/server"

export function middleware(request) {
  console.log("Middleware ", request.url)
  const res = NextResponse.next()
//   if (request.nextUrl.pathname.startsWith("/setCookie")) {
//     let cookieMessage = request.nextUrl.searchParams.get("message")
//     res.cookies.set("message", cookieMessage)
//   }

//   if (request.nextUrl.pathname.startsWith("/getCookie")) {
//     let cookie = request.cookies.get("message")
//     console.log(cookie)
//   }
  // // add the CORS headers to the response
  // res.headers.append('Access-Control-Allow-Credentials', "true")
  // res.headers.append('Access-Control-Allow-Origin', '*')
  // res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  // res.headers.append(
  //     'Access-Control-Allow-Headers',
  //     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  // )
      return res
//    return NextResponse.json({ message: "Auth required" }, { status: 401 })
}

export const config = {
  matcher: "/api/:path*",
}
