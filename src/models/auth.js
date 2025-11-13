import { z } from 'zod'


export const createUserSchema = z.object({
    email: z.email(), 
    username: z.string()
    .min(1, 'username text is required')
    .max(30,'Username trop grand'),
    password: z.string()
    .min(6, 'pass text is trop petit')
    .max(100),
})
