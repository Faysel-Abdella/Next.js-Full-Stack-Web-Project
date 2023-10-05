import { z } from 'zod'

const schema = z.object(
    //Give an object that defined the shape of your user object
    {
    name: z.string().min(3),
    //email: z.string().email(),
    //age: z.number()
    }
    //The object returns a schema
)

export default schema;