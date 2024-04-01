import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import dbConnect from "@/db/mongoose"
import User from "@/db/User"
import bcryptjs from "bcryptjs"

export const options = {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect()
        try {
          const user = await User.findOne({ email: credentials.email })
          console.log(user)
          if (
            user &&
            (await bcryptjs.compare(credentials.password, user.password))
          ) {
            user.password = undefined
            return user
          } else {
            return null
          }
        } catch (error) {
          console.log(error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {

      if (account.provider === "credentials") {
        return true
      }
      if (account.provider === "github" || account.provider === "google") {
        await dbConnect()
        console.log("DB connected")
        try {
          const userExists = await User.findOne({ email: user.email })
          console.log(`Exist? ${userExists}`)
          if (!userExists) {
            const newUser = new User({
              email: user.email,
              name: user.name,
              image: user.image,
              provider: account.provider,
            })
            await newUser.save()
          } else {
            await User.findOneAndUpdate({email: user.email },{image: user.image, name: user.name, provider: account.provider})
          }
          return true
        } catch (error) {
          console.log(error)
          return false
        }
      }
      return false
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  database: process.env.MONGODB_URI,
}

// export async function GET(req, res) {
//   return NextAuth(req, res, myNextAuthOptions)
// }

// export async function POST(req, res) {
//   return NextAuth(req, res, myNextAuthOptions)
// }
