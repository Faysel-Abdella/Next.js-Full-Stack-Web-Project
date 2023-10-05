import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!

        })
    ]
}


const handler = NextAuth(authOptions)

// export the handler function with two d/t name, GET and POST
// so, any GET or POST request to this end point will be handled inside this function
export {handler as GET, handler as POST}