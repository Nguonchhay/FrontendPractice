"use client";

import { useSession, signIn, signOut } from "next-auth/react"

const UserInfo = () => {
    const { data: session } = useSession();

    return (
        <div className="user-info">
            {session ? (
                <div>
                    <h2>Logged in as {session.user?.name}</h2>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => signOut()}>Sign Out</button>
                </div>
            ) : (
                <div>
                    <h2>Not logged in</h2>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => signIn()}>Sign In</button>
                </div>
            )}
        </div>
    );

};

export default UserInfo;