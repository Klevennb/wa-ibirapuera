"use server"

import { RegisterForm } from "@/components/register/register-form"
import { FormEvent } from "react"

export default function RegisterPage() {
    const handleSubmit = (data: FormEvent<HTMLFormElement>) => {
        data.preventDefault()
        console.log('Form Data: ', data)
    }

    const registerWithGoogle = () => {
        return
    }


    return (
        <>
            <RegisterForm handleGoogleRegister={registerWithGoogle} handleSubmit={handleSubmit} />
        </>
    )
}