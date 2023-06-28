import { Router } from "express";
import { ActualizarMascota, CrearMascota, EliminarMascota, GetTipos, ObtenerMascota, ObtenerMascotas } from "../controllers/mascotas.controller.js";
import { ValidateForm } from "../middlewares/validateForm.js";


const router = Router();


router.post("/mascotas",ValidateForm,CrearMascota);
router.get("/mascotas",ObtenerMascotas);
router.get("/mascotas/:id",ObtenerMascota);
router.put("/mascotas/:id",ActualizarMascota);
router.delete("/mascotas/:id",EliminarMascota);
router.get("/tipos",GetTipos);

export default router;