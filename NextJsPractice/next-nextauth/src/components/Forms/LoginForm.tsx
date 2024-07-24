"use client";

import { signIn } from "next-auth/react";

export default function LoginForm() {

    const onSignIn = () => {
        console.log('Processing...');
        signIn('google');
    }

    return (
        <div>
            <div>LoginForm</div>
            <p>
                <button onClick={onSignIn} className="button bg-slate-400 p-1 rounded">
                    Google Sing In
                </button>
            </p>
        </div>
    )
}
