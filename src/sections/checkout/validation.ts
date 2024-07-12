import { z } from "zod";

export const schema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).email(),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(11, { message: "Phone must be contains 11 charecture" })
    .max(11, { message: "Phone must be contains 11 charecture" })
    .regex(/^\+?[0-9]+$/),
  address: z.string({ required_error: "Address is required" }),
});
