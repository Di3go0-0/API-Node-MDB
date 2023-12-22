import { z } from "zod"; // import zod

// create a schema de validación para el registro
export const registerSchema = z.object({
  username: z.string({
    required_error: "Username is required",
  }), //Le decimos que el username es un string y que es requerido
  email: z
    .string({
      required_error: "Email is required",
      message: "Please enter a valid email",
    })
    .email(), //Le decimos que el email es un string y que es requerido y que debe ser un email
  password: z
    .string({
      required_error: "Password is required",
      message: "Password must be at least 6 characters",
    })
    .min(6), // le decimos que el password es un string y que es requerido y que debe tener al menos 6 caracteres
});

// create a schema de validación para el login
export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      required_error: "invalid email",
    }), //Le decimos que el email es un string y que es requerido y que debe ser un email
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }), //Le decimos que el password es un string y que es requerido y que debe tener al menos 6 caracteres
});
