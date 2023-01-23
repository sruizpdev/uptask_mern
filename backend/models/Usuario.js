import mongoose from "mongoose";

const usuarioShema = mongoose.Schema(
  {
    nombre: {
      type: String,
      reqired: true,
      trim: true,
    },
    password: {
      type: String,
      reqired: true,
      trim: true,
    },
    email: {
      type: String,
      reqired: true,
      trim: true,
      unique: true,
    },
    token: {
      type: String,
      reqired: true,
    },
    confirmado: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Usuario = mongoose.model("Usuario", usuarioShema);
export default Usuario;
