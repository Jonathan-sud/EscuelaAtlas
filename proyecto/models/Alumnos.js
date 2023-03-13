"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var alumnoEsquema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  paterno: {
    type: String,
    required: true,
    trim: true
  },
  materno: {
    type: String,
    required: true,
    trim: true
  },
  fechaNac: {
    type: String,
    required: true,
    trim: true
  },
  sexo: {
    type: String,
    required: true
  },
  celular: {
    type: String,
    required: true,
    trim: true
  },
  direccion: {
    type: String,
    required: true,
    trim: true
  },
  opcion: {
    type: Boolean
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)("Alumnos", alumnoEsquema);
exports["default"] = _default;