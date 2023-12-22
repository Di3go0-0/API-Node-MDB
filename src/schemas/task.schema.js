import { z } from "zod"; //Libreria para validar los datos de entrada

export const createTaskSchema = z.object({
  //Valida los datos de entrada
  title: z.string({
    required_error: "Title is required",
  }), //Valida que sea un string
  description: z.string({
    required_error: "Description must be a string",
  }),
  date: z.string().datetime().optional(), //Valida que sea una fecha
});
