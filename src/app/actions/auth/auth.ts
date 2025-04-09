"use server"

import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { hashPassword } from "@/app/actions/auth/password"
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

export { signUp }
