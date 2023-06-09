import { Schema, model } from "mongoose";

const alumnoEsquema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    paterno: {
      type: String,
      required: true,
      trim: true,
    },
    materno: {
      type: String,
      required: true,
      trim: true,
    },
    fechaNac: {
      type: String,
      required: true,
      trim: true,
    },
    sexo: {
      type: String,
      required: true,
    },
    celular: {
      type: String,
      required: true,
      trim: true,
    },
    direccion: {
      type: String,
      required: true,
      trim: true,
    },
    opcion: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Alumnos", alumnoEsquema);
