import express from "express";
import { usuarios } from "../controllers/usuarioController.js";
const router = express.Router();

router.get("/", usuarios);

export default router;
