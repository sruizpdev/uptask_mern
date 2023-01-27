import express from "express";
import { autenticar, registrar, confirmar,olvidePassword,comprobarToken , nuevoPassword} from "../controllers/usuarioController.js";
const router = express.Router();

router.post("/", registrar);
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmar)
router.post('/olvide-password', olvidePassword)
router.get('/olvide-password/:token', comprobarToken)
router.post('/olvide-password/:token', nuevoPassword)

export default router;
