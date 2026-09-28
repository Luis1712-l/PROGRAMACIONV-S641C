import { Router } from "express";
import {
  listMaterias,
  getMateria,
  createMateria,
  replaceMateria,
  updateMateria,
  deleteMateria,
} from "../controllers/materias.controller.js";

const router = Router();

router.get("/", listMaterias);
router.get("/:id", getMateria);
router.post("/", createMateria);
router.put("/:id", replaceMateria);
router.patch("/:id", updateMateria);
router.delete("/:id", deleteMateria);
// Asegúrese de importar getTareasByMateria desde el controlador
router.get("/:id/tareas", getTareasByMateria);
export default router;