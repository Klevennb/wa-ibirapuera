"use client"

import { LoginForm } from "@/components/login/login-form";
import { FormEvent } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { login } from "../actions/auth/auth";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/dashboard';

  const handleSubmit = async (data: FormEvent<HTMLFormElement>) => {
    data.preventDefault();
    const formData = new FormData(data.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const status = await login({ email, password });
      console.log("Login status:", status);
      
      if (status.success) {
        router.push('/dashboard')
      } 
    } catch (error) {
      console.error('Login failed:', error);
      // You might want to show an error message to the user here
    }
  }

  const loginWithGoogle = () => {
    router.push(from);
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm handleSubmit={handleSubmit} handleGoogleSignIn={loginWithGoogle} />
      </div>
    </div>)
}