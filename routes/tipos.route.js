import { Router } from "express";
import { ValidateTipoForm } from "../middlewares/validateForm.js";
import { CrearTipo, GetTipos } from "../controllers/tipos.controller.js";


const router = Router();


router.post("/",ValidateTipoForm,CrearTipo);
router.get("/",GetTipos);


export default router;