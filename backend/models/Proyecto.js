import mongoose from "mongoose";

const proyectosShema = mongoose.Schema(
  {
    nombre: {
      type: String,
      reqired: true,
      trim: true,
    },
    descripcion: {
      type: String,
      reqired: true,
      trim: true,
    },
    fechaEntrega: {
      type: Date,
      default: Date.now(),
    },
    cliente: {
      type: String,
      reqired: true,
      trim: true,
    },
    creador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    colaboradores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }],
  },
  { timestamps: true }
);
const Proyecto = mongoose.model("Proyecto", proyectosShema);
export default Proyecto;