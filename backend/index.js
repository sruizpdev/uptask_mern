import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoute.js'

const app = express();
dotenv.config();

conectarDB();

app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
