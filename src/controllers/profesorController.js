import Profesores from "../models/Profesores";

export const renderProfesor = async (req, res) => {
  const profesor = await Profesores.find().lean();
  res.render("profesorAgregar", { profesor: profesor });
};

export const createProfesor = async (req, res) => {
  const profesor = Profesores(req.body);
  await profesor.save();
  res.redirect("/profesor/agregar");
};

export const renderEditProfesor = async (req, res) => {
  try {
    const profesor = await Profesores.findById(req.params.id).lean();
    res.render("editarProfesores", { profesor });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProfesor = async (req, res) => {
  const { id } = req.params;
  await Profesores.findByIdAndUpdate(id, req.body);
  res.redirect("/profesor/agregar");
};

export const deleteProfesor = async (req, res) => {
  const { id } = req.params;
  await Profesores.findByIdAndDelete(id);
  res.redirect("/profesor/agregar");
};

export const statusProfesor = async (req, res) => {
  const { id } = req.params;
  const profesor = await Profesores.findById(id);
  //la propiedad creditos está en modelo
  profesor.opcion = !profesor.opcion;
  await profesor.save();
  res.redirect("/profesor/agregar");
};
