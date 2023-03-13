import { Router } from "express";
import {
  añadirAlumno,
  deleteAlumno,
  renderAlumno,
  renderEditAlumno,
  statusAlumno,
  updateAlumno,
} from "../controllers/alumnoController";
import {
  añadirAsignatura,
  deleteAsignatura,
  renderAsignatura,
  renderEditAsignatura,
  statusAsignatura,
  updateAsignatura,
} from "../controllers/asignaturaController";
import {
  createProfesor,
  deleteProfesor,
  renderEditProfesor,
  renderProfesor,
  statusProfesor,
  updateProfesor,
} from "../controllers/profesorController";

const router = Router();

router.get("/", async (req, res) => {
  res.render("index");
});

//muestra la lista de lo que hay en cada una de las colecciones
router.get("/alumnos/agregar", renderAlumno);
router.get("/asignaturas/agregar", renderAsignatura);
router.get("/profesor/agregar", renderProfesor);

//ejecuta el codigo para almacenar los documentos en cada una de las colecciones
router.post("/alumnos/agregar", añadirAlumno);
router.post("/asignaturas/agregar", añadirAsignatura);
router.post("/profesor/agregar", createProfesor);

//ACTUALIZAR DATOS DE LOS DOCUMENTOS QUE HAY EN LAS COLECCIONES
router.get("/updateAlumnos/:id", renderEditAlumno);
router.post("/updateAlumnos/:id", updateAlumno);

router.get("/updateAsignaturas/:id", renderEditAsignatura);
router.post("/updateAsignaturas/:id", updateAsignatura);

router.get("/updateProfesores/:id", renderEditProfesor);
router.post("/updateProfesores/:id", updateProfesor);

//ELIMINAR DATOS DE los docuemtos que hay en cada coleccion
router.get("/deleteAlumnos/:id", deleteAlumno);
router.get("/deleteAsignaturas/:id", deleteAsignatura);
router.get("/deleteProfesores/:id", deleteProfesor);

//MUESTRA EL STATUS DE LOS DOCUMENTOS QUE HAY EN LAS COLECCIONES
router.get("/statusAsignaturas/:id", statusAsignatura);
router.get("/statusProfesor/:id", statusProfesor);
router.get("/statusAlumno/:id", statusAlumno);

//obtiene la vista de lo que hay en alumnoaAgregar.hbs
router.get("/alumnos/agregar", (req, res) => {
  res.render("alumnoAgregar");
});

//obtiene la vista de lo que hay en asignaturaAgregar.hbs
router.get("/asignaturas/agregar", (req, res) => {
  res.render("asignaturaAgregar");
});

//obtiene la vista de lo que hay en profesorAgregar.hbs
router.get("/profesor/agregar", (req, res) => {
  res.render("profesorAgregar");
});

export default router;
