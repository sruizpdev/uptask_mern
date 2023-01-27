import express from "express";
import { autenticar, registrar, confirmar,olvidePassword } from "../controllers/usuarioController.js";
const router = express.Router();

router.post("/", registrar);
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmar)
router.post('/olvide-password', olvidePassword)

export default router;
