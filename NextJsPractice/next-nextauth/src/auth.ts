import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { hashPassword } from "@/utils/password";

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credential: any) => {
        // Fake user
        let user = {
          email: 'fake@gmail.com',
          name: 'Fake User'
        };
 
        // logic to salt and hash password
        const pwHash = hashPassword(credential.password);
 
        // logic to verify if user exists
        // user = await getUserFromDb(credentials.email, pwHash);
 
        // if (!user) {
        //   // No user found, so this is their first attempt to login
        //   // meaning this is also the place you could do registration
        //   throw new Error("User not found.")
        // }
 
        // return user object with the their profile data
        return user
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
});