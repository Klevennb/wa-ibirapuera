"use-client"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRef } from "react";

interface RegisterFormProps extends React.ComponentPropsWithoutRef<"div"> {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleGoogleRegister: () => void;
}

export function RegisterForm({
  className,
  handleSubmit,
  handleGoogleRegister,
  ...props
}: RegisterFormProps) {
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Enter your email</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Set Password</Label>
                </div>
                <Input
                  ref={passwordRef}
                  id="password"
                  type="password"
                  required
                />
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input
                  ref={confirmPasswordRef}
                  id="password-confirmation"
                  type="password"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={
                  passwordRef.current?.value !== "" &&
                  passwordRef === confirmPasswordRef
                }
              >
                Register
              </Button>
              <Button variant="outline" className="w-full">
                Register with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
