// Step-5 install zod
//        Then create schemas folder with 5 file

// Step-6

import { z } from "zod";

export const userNameValidation = z
    .string()
    .min(2, "User name must be at least 2 characters")
    .max(10, "User name must be no more than 20 charactaers")
    .regex(/.+\@.+\..+/, "Email must not contain these special characters")

export const signUpSchema = z.object({
    username:userNameValidation,
    email: z.string().email({message:"email should be validate"}),
    password: z.string().min(6, {message: "password must be at least 6 character"})
})