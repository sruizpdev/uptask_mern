import express from "express";
import {
  autenticar,
  registrar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,perfil
} from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);

router.get("/perfil", checkAuth, perfil);

export default router;
