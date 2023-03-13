import Alumnos from "../models/Alumnos";

export const añadirAlumno = async (req, res) => {
  try {
    const alumnos = Alumnos(req.body);
    await alumnos.save();
    res.redirect("/alumnos/agregar");
  } catch (error) {
    console.log(error);
  }
};

export const renderAlumno = async (req, res) => {
  const alumnos = await Alumnos.find().lean();
  res.render("alumnoAgregar", { alumnos: alumnos });
};

export const renderEditAlumno = async (req, res) => {
  try {
    const alumnos = await Alumnos.findById(req.params.id).lean();
    res.render("editarAlumnos", { alumnos });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAlumno = async (req, res) => {
  const { id } = req.params;
  await Alumnos.findByIdAndUpdate(id, req.body);
  res.redirect("/alumnos/agregar");
};

export const deleteAlumno = async (req, res) => {
  const { id } = req.params;
  await Alumnos.findByIdAndDelete(id);
  res.redirect("/alumnos/agregar");
};

export const statusAlumno = async (req, res) => {
  const { id } = req.params;
  const alumno = await Alumnos.findById(id);
  //la propiedad creditos está en modelo
  alumno.opcion = !alumno.opcion;
  await alumno.save();
  res.redirect("/alumnos/agregar");
};
