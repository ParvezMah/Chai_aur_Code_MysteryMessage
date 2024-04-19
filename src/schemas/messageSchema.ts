// Step-10


import {z} from "zod";

export const MessageSchema = z.object({
    content: z
    .string()
    .min(10, {message:"content must be at least 10 characters"})
    .max(300, {message:"content must be no more longer than at least 300 characters"})
})