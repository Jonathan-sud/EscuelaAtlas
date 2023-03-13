"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _alumnoController = require("../controllers/alumnoController");
var _asignaturaController = require("../controllers/asignaturaController");
var _profesorController = require("../controllers/profesorController");
var router = (0, _express.Router)();
router.get("/", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          res.render("index");
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

//muestra la lista de lo que hay en cada una de las colecciones
router.get("/alumnos/agregar", _alumnoController.renderAlumno);
router.get("/asignaturas/agregar", _asignaturaController.renderAsignatura);
router.get("/profesor/agregar", _profesorController.renderProfesor);

//ejecuta el codigo para almacenar los documentos en cada una de las colecciones
router.post("/alumnos/agregar", _alumnoController.añadirAlumno);
router.post("/asignaturas/agregar", _asignaturaController.añadirAsignatura);
router.post("/profesor/agregar", _profesorController.createProfesor);

//ACTUALIZAR DATOS DE LOS DOCUMENTOS QUE HAY EN LAS COLECCIONES
router.get("/updateAlumnos/:id", _alumnoController.renderEditAlumno);
router.post("/updateAlumnos/:id", _alumnoController.updateAlumno);
router.get("/updateAsignaturas/:id", _asignaturaController.renderEditAsignatura);
router.post("/updateAsignaturas/:id", _asignaturaController.updateAsignatura);
router.get("/updateProfesores/:id", _profesorController.renderEditProfesor);
router.post("/updateProfesores/:id", _profesorController.updateProfesor);

//ELIMINAR DATOS DE los docuemtos que hay en cada coleccion
router.get("/deleteAlumnos/:id", _alumnoController.deleteAlumno);
router.get("/deleteAsignaturas/:id", _asignaturaController.deleteAsignatura);
router.get("/deleteProfesores/:id", _profesorController.deleteProfesor);

//MUESTRA EL STATUS DE LOS DOCUMENTOS QUE HAY EN LAS COLECCIONES
router.get("/statusAsignaturas/:id", _asignaturaController.statusAsignatura);
router.get("/statusProfesor/:id", _profesorController.statusProfesor);
router.get("/statusAlumno/:id", _alumnoController.statusAlumno);

//obtiene la vista de lo que hay en alumnoaAgregar.hbs
router.get("/alumnos/agregar", function (req, res) {
  res.render("alumnoAgregar");
});

//obtiene la vista de lo que hay en asignaturaAgregar.hbs
router.get("/asignaturas/agregar", function (req, res) {
  res.render("asignaturaAgregar");
});

//obtiene la vista de lo que hay en profesorAgregar.hbs
router.get("/profesor/agregar", function (req, res) {
  res.render("profesorAgregar");
});
var _default = router;
exports["default"] = _default;