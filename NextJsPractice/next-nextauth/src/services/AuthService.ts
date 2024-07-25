import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const { 
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const fakeUser = {
                    email: 'test@example.com',
                    password: '12345678'
                };

                let user = null;
                if (fakeUser.email === credentials.email && fakeUser.password === credentials.password) {
                    user = { 
                        id: "1", 
                        name: "Test user", 
                        email: fakeUser.email
                    };
                }
                return user;
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
});