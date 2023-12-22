import { Router } from "express";
import { authRequired } from "../middlewares/valideToken.js";
import {
  getTask,
  getTasks,
  updateTask,
  createTask,
  deleteTask,
} from "../controllers/tasks.controller.js";
const router = Router();

router.get("/tasks", authRequired, getTasks); //obtener todas las tareas
router.get("/task/:id", authRequired, getTask); //obtener una tarea
router.post("/tasks", authRequired, createTask); //crear una tarea
router.delete("/task/:id", authRequired, deleteTask); //borrar una tarea
router.put("/task/:id", authRequired, updateTask); //actualizar una tarea

export default router;
