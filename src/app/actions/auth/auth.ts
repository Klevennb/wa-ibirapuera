"use server"

import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { hashPassword, verifyPasswordHash } from "@/app/actions/auth/password"
import {
  generateRandomSessionToken,
  createSession,
} from "@/app/actions/auth/session"
import { setSessionCookie } from "@/app/actions/auth/cookie"
import { SignUpFields } from "@/types/auth"

const signUp = async (formData: SignUpFields) => {
  if (formData.password !== formData.confirmPassword) {
    throw new Error("Passwords do not match")
  }

  try {
    const passwordHash = await hashPassword(formData.password)

    const user = await prisma.user.create({
      data: {
        email: formData.email,
        firstName: "",
        lastName: "",
        passwordHash,
      },
    })

    const sessionToken = generateRandomSessionToken()
    const session = await createSession(sessionToken, user.id)

    await setSessionCookie(sessionToken, session.expiresAt)
  } catch (error) {
    console.error(error)
  }

  redirect("/dashboard")
}

const login = async (formData: { email: string; password: string }) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: formData.email },
    })

    if (!user) {
      throw new Error("Invalid email or password")
    }

    const isPasswordValid = await verifyPasswordHash(
      user.passwordHash,
      formData.password
    )

    if (!isPasswordValid) {
      throw new Error("Invalid email or password")
    }

    const sessionToken = generateRandomSessionToken()
    const session = await createSession(sessionToken, user.id)
    await setSessionCookie(sessionToken, session.expiresAt)

    redirect("/dashboard")
  } catch (error) {
    console.error(error)
    throw error // Re-throw the error to be handled by the client
  }
}

export { signUp, login }
