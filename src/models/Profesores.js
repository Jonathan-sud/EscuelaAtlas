import { Schema, model } from "mongoose";

const profesorEsquema = new Schema(
  {
    rfc: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
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
    profesion: {
      type: String,
      required: true,
      trim: true,
    },
    numEmpleado: {
      type: String,
      required: true,
      trim: true,
    },
    opcion : {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Profesor", profesorEsquema);
