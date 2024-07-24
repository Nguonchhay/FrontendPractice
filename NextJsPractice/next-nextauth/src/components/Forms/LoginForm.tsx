"use client";

import { signIn } from "next-auth/react";

export default function LoginForm() {

    return (
        <div>
            <div>LoginForm</div>
            <p>
                <button onClick={() => signIn('google')} className="button bg-slate-400 p-1 rounded">
                    Google Sing In
                </button>
            </p>
        </div>
    )
}
