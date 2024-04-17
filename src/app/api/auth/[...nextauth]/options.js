import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import dbConnect from "@/lib/mongoose"
import User from "@/db/User"
import bcryptjs from "bcryptjs"

export const options = {
  providers: [
    GithubProvider({
      async profile(profile) {
        // console.log("Github Profile", profile)
        let userRole = "Github user"
        await dbConnect()
        try {
          const user = await User.findOne({ email: profile?.email })
          if (user) {
            userRole = user.role
          }
        } catch (error) {
          console.log(error)
        }
        return {
          ...profile,
          role: userRole,
        }
      },
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    GoogleProvider({
      async profile(profile) {
        // console.log("Google Profile", profile)
        let userRole = "Google user"
        await dbConnect()
        try {
          const user = await User.findOne({ email: profile?.email })
          if (user) {
            userRole = user.role
          }
        } catch (error) {
          console.log(error)
        }
        return {
          ...profile,
          id: profile.sub,
          image: profile.picture,
          role: userRole,
        }
      },
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
        console.log("User :", user)
        try {
          const userExists = await User.findOne({ email: user.email })
          console.log(`Exist? ${userExists}`)
          if (!userExists) {
            const newUser = new User({
              email: user.email,
              name: user.name,
              image: user.picture,
              provider: account.provider,
            })
            await newUser.save()
          } else {
            user.role = userExists.role
            await User.findOneAndUpdate(
              { email: user.email },
              { image: user.picture, name: user.name, provider: account.provider }
            )
          }
          return user
        } catch (error) {
          console.log(error)
          return false
        }
      }
      return false
    },
    async jwt({ token, user }) {
      if(user) {
        // token.email = user.email;
        token.role = user.role
      }
      return token
    },
    async session({ session, token, }) {
      if (session?.user) {
        // session.user.email = token.email;
        session.user.role = token.role
      }
      return session
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
