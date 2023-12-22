import { Router } from "express";
import { authRequired } from "../middlewares/valideToken.js";
import {
  getTask,
  getTasks,
  updateTask,
  createTask,
  deleteTask,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", authRequired, getTasks); //obtener todas las tareas
router.get("/task/:id", authRequired, getTask); //obtener una tarea
router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
); //crear una tarea
router.delete("/task/:id", authRequired, deleteTask); //borrar una tarea
router.put("/task/:id", authRequired, updateTask); //actualizar una tarea

export default router;
