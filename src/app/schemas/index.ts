import * as z from "zod";

export const SigninSchema = z.object({
    email: z.string()
    .email("Invalid email format.")
    .refine((value) => /^.+@um5(\.[\w-]+)*\.[a-z]{2,}$/.test(value), {
      message: "Must be an institutional email",
    }),
    password: z.string()
});