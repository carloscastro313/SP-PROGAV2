import { Router } from "express";
import { ObtenerUsuario, login } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/middleware.js";

const router = Router();

router.post("/",login);
router.post("/relog",verifyToken,ObtenerUsuario);

export default router;