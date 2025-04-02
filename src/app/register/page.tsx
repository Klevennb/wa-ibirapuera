"use server"

import { RegisterForm } from "@/components/register/register-form"

export default async function RegisterPage() {
    // const handleSubmit = (data: FormEvent<HTMLFormElement>) => {
    //     data.preventDefault()
    //     console.log('Form Data: ', data)
    // }

    // const async registerWithGoogle = () => {
    //     return
    // }


    return (
        <>
            <RegisterForm />
        </>
    )
}