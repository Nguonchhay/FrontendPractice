"use client";

import { signOutUser } from "@/app/actions";
import { useRouter } from 'next/navigation';

export default function LogoutForm() {
    const router = useRouter();

    const onLogout = () => {
        signOutUser().then(() => {
            router.push('/');
        });
    }

    return (
        <form
          action={onLogout}
        >
          <button type="submit">Sign out</button>
        </form>
    );
}
