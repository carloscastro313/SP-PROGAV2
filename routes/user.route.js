import { Router } from "express";
import { CrearUsuario } from "../controllers/user.controller.js";
import { ValidateUser } from "../middlewares/validateForm.js";

const router = Router();

router.post("/",ValidateUser,CrearUsuario);

export default router;