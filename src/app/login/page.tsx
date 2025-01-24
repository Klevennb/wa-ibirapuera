"use client"

import { LoginForm } from "@/components/login/login-form";
import { FormEvent } from "react";

export default function Login () {
    const handleSubmit = (data: FormEvent<HTMLFormElement>) => {
        data.preventDefault()
        console.log('Form Data: ', data)
    }

    const loginWithGoogle = () => {
      return
    }

    return(
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm handleSubmit={handleSubmit} handleGoogleSignIn={loginWithGoogle}/>
        </div>
      </div>    )
}