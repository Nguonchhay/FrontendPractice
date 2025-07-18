import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username or Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials): Promise<User | null> {
                const mockUsers = [
                    { id: "1", name: "Admin", email: "admin@gmail.com", password: "12345678" },
                    { id: "2", name: "User 1", email: "user1@gmail.com", password: "12345678"},
                    { id: "3", name: "User 2", email: "user2@gmail.com", password: "12345678"},
                ];

                console.log("Credentials:", credentials);

                const user = mockUsers.find(user => 
                    user.email === credentials?.username && user.password === credentials?.password
                );
                return user ? { id: user.id, name: user.name, email: user.email } : null;
            },
        }),
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    }
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
