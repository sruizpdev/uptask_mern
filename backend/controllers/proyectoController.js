import Proyecto from "../models/Proyecto.js";
const obtenerProyectos = async (req, res) => {
  const proyectos = await Proyecto.find().where('creador').equals(req.usuario);
  res.json(proyectos);
};
const nuevoProyecto = async (req, res) => {
  const proyecto = new Proyecto(req.body);
  proyecto.creador = req.usuario._id;
  try {
    const proyetoAlmacenado = await proyecto.save();
    res.json(proyetoAlmacenado);
  } catch (error) {
    console.log(error);
  }
};
const obtenerProyecto = async (req, res) => {};
const editarProyecto = async (req, res) => {};
const eliminarProyecto = async (req, res) => {};
const agregarColaborador = async (req, res) => {};
const eliminarColaborador = async (req, res) => {};
const obtenerTareas = async (req, res) => {};
export {
  obtenerProyectos,
  obtenerProyecto,
  nuevoProyecto,
  editarProyecto,
  eliminarProyecto,
  agregarColaborador,
  eliminarColaborador,
  obtenerTareas,
};
