import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Invalid email address!!!" }),
  password: z
    .string()
    .min(8, { message: "Must be 5 or more characters long!!!!" }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
