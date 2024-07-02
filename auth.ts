import NextAuth from "next-auth"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import bcrypyt from "bcryptjs"
 
const prisma = new PrismaClient().$extends(withAccelerate())


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Credentials({
    credentials: {
      email: {
        label: "Email",
        type: "email",
        placeholder: "Email",
      },
      password: {
        label: "Password",
        type: "password",
        placeholder: "Password",
      },
    },
  })],
})

