import { Router } from "express";
import { ActualizarMascota, CrearMascota, EliminarMascota, ObtenerMascota, ObtenerMascotas } from "../controllers/mascotas.controller.js";
import { ValidateForm } from "../middlewares/validateForm.js";
import { verifyToken } from "../middlewares/middleware.js";


const router = Router();


router.post("/",[verifyToken,ValidateForm],CrearMascota);
router.get("/",[verifyToken],ObtenerMascotas);
router.get("/:id",[verifyToken],ObtenerMascota);
router.put("/:id",[verifyToken,ValidateForm],ActualizarMascota);
router.delete("/:id",[verifyToken],EliminarMascota);

export default router;