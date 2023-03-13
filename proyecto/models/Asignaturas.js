"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var asignaturaEsquema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  creditos: {
    type: String,
    required: true
  },
  horas: {
    type: String,
    required: true
  },
  opcion: {
    type: Boolean
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)("Asignatura", asignaturaEsquema);
exports["default"] = _default;