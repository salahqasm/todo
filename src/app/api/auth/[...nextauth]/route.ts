import NextAuth from "next-auth"
import GoogleProvieder from "next-auth/providers/google"
export const authOptions = {
    // Configure one or more authentication providers
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvieder({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.NEXT_GOOGLE_SECRET ?? "",
        }),
        // ...add more providers here
    ],
}
export const handler= NextAuth(authOptions)
export {handler as GET, handler as POST}
