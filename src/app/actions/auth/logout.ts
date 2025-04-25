"use server"

import { deleteSessionCookie } from "./cookie"
import { redirect } from "next/navigation"

export async function logout() {
  await deleteSessionCookie()
  redirect("/login")
}
