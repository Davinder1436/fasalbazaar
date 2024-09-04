import { z } from "zod";

const FarmerRegistrationSchema = z.object({
  name: z
    .string()
    .min(1)
    .refine((val) => val.trim().length > 0, { message: "Name is required" }),
  address: z
    .string()
    .min(10, { message: "Address must be at least 10 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^[0-9]{10}$/, {
    message: "Phone number must be a 10-digit number",
  }),
  avatarURL: z
    .string()
    .url({ message: "Avatar URL must be a valid URL" })
    .optional(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "Password must contain at least one number",
    })
    .refine((val) => /[!@#$%^&*]/.test(val), {
      message: "Password must contain at least one special character",
    }),
});

const LoginSchema = z.object({
  phone: z.string().regex(/^[0-9]{10}$/, {
    message: "Phone number must be a 10-digit number",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "Password must contain at least one number",
    })
    .refine((val) => /[!@#$%^&*]/.test(val), {
      message: "Password must contain at least one special character",
    }),
});
const FarmerUpdateSchema = z.object({
  name: z
    .string()
    .min(1)
    .refine((val) => val.trim().length > 0, { message: "Name is required" }),
  address: z
    .string()
    .min(10, { message: "Address must be at least 10 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^[0-9]{10}$/, {
    message: "Phone number must be a 10-digit number",
  }),
  avatarURL: z
    .string()
    .url({ message: "Avatar URL must be a valid URL" })
    .optional(),
});

const ContractorRegistrationSchema = z.object({
  name: z
    .string()
    .min(1)
    .refine((val) => val.trim().length > 0, { message: "Name is required" }),
  address: z
    .string()
    .min(10, { message: "Address must be at least 10 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^[0-9]{10}$/, {
    message: "Phone number must be a 10-digit number",
  }),
  avatarURL: z
    .string()
    .url({ message: "Avatar URL must be a valid URL" })
    .optional(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "Password must contain at least one number",
    })
    .refine((val) => /[!@#$%^&*]/.test(val), {
      message: "Password must contain at least one special character",
    }),
});
export {
  FarmerRegistrationSchema,
  LoginSchema,
  FarmerUpdateSchema,
  ContractorRegistrationSchema,
};
