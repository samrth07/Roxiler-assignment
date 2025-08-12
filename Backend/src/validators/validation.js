import { email, string, z } from 'zod'

export const passwordSchema = z
  .string()
  .trim()
  .nonempty({ message: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(64, { message: "Password cannot exceed 64 characters" })
  .regex(/[A-Z]/, {
    message: "Password must include at least one uppercase letter",
  })
  .regex(/[a-z]/, {
    message: "Password must include at least one lowercase letter",
  })
  .regex(/\d/, { message: "Password must include at least one number" })
  .regex(/[^A-Za-z0-9]/, {
    message: "Password must include at least one special character",
  });

export const CreateUserSchema = z.object({
    name : z.string(20).max(60),
    email : z.email(),
    password : passwordSchema,
    role   : z.string().optional(),
    city : z.string(),
    pincode : z.string().max(6),
    state : z.string(),
    country : z.string(),
    streat : z.string()
})

export const createStoreSchema = z.object({
    name : z.string(20).max(60),
    email : z.email(),
    city : z.string(),
    pincode : z.string().max(6),
    state : z.string(),
    country : z.string(),
    streat : z.string(),
    owner : z.email()
})

export const signInschema = z.object({
    email : z.email(),
    password : passwordSchema
})