"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var profesorEsquema = new _mongoose.Schema({
  rfc: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
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
  profesion: {
    type: String,
    required: true,
    trim: true
  },
  numEmpleado: {
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
var _default = (0, _mongoose.model)("Profesor", profesorEsquema);
exports["default"] = _default;