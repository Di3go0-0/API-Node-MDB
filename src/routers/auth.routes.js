import { Router } from "express"; //se importa el modulo Router de express
import {
  login,
  register,
  logout,
  profile,
} from "../controllers/auth.controller.js"; //se importan las funciones de los controladores
import { authRequired } from "../middlewares/valideToken.js"; //se importa el middleware para validar el token
import { validateSchema } from "../middlewares/validator.middleware.js"; //se importa el middleware para validar el schema
import { registerSchema, loginSchema } from "../schemas/auth.shema.js"; //se importa el schema de validación

const router = Router(); //se crea una instancia de Router

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);

export default router; //se exporta el router para poder usarlo en otros archivos
