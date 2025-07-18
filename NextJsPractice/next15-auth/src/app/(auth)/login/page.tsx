// app/signin/page.tsx
"use client"

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          signIn("credentials", {
            redirect: true,
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value,
            callbackUrl: "/backends", // or wherever
          })
        }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold">Login</h2>
        <input name="username" type="text" placeholder="Username" className="border p-2" />
        <input name="password" type="password" placeholder="Password" className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Sign In
        </button>
      </form>
    </div>
  )
}
