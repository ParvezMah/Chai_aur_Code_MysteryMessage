// Step-8

import {z} from "zod";

export const signInSchema = z.object({
    identifier: z.string(),
    password: z.string(),
})