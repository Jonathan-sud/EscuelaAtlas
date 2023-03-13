import Asignaturas from "../models/Asignaturas";

export const renderAsignatura = async (req, res) => {
  const asignatura = await Asignaturas.find().lean();
  res.render("asignaturaAgregar", { asignatura: asignatura });
};

export const añadirAsignatura = async (req, res) => {
  try {
    const asignatura = Asignaturas(req.body);
    await asignatura.save();
    res.redirect("/asignaturas/agregar");
  } catch (error) {
    console.log(error);
  }
};

export const renderEditAsignatura = async (req, res) => {
  try {
    const asignatura = await Asignaturas.findById(req.params.id).lean();
    res.render("editarAsignaturas", { asignatura });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAsignatura = async (req, res) => {
  const { id } = req.params;
  await Asignaturas.findByIdAndUpdate(id, req.body);
  res.redirect("/asignaturas/agregar");
};

export const deleteAsignatura = async (req, res) => {
  const { id } = req.params;
  await Asignaturas.findByIdAndDelete(id);
  res.redirect("/asignaturas/agregar");
};

export const statusAsignatura = async (req, res) => {
  const { id } = req.params;
  const asignatura = await Asignaturas.findById(id);
  //la propiedad creditos está en modelo
  asignatura.opcion = !asignatura.opcion;
  await asignatura.save();
  res.redirect("/asignaturas/agregar");
};
