import NextAuth from "next-auth/next"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const myNextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  session:{
    jwt: false,
  },
  database: process.env.MONGODB_URI,
}

export async function GET(req, res) {
  return NextAuth(req, res, myNextAuthOptions)
}

export async function POST(req, res) {
  return NextAuth(req, res, myNextAuthOptions)
}
