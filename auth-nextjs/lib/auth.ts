import NextAuth from "next-auth";
import credentialsProvider from 'next-auth/providers/credentials';
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentialsProvider({
      credentials: {
        email: {}, password: {}
      }
    })
  ],
});