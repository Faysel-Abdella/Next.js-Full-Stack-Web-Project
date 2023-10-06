import NextAuth from "next-auth"

const handler = NextAuth({})

// export the handler function with two d/t name, GET and POST
// so, any GET or POST request to this end point will be handled inside this function
export {handler as GET, handler as POST}