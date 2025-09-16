import express from "express";
import {
  notesHandler,
  createNoteHandler,
  newNoteHandler,
  noteHandler,
  deleteNoteHandler,
  editNoteHandler,
  updateNoteHandler,
} from "./notes-handlers.js";

export const router = express.Router();

// "/notes" +
router.get("/", notesHandler); // todas las notas
router.post("/", createNoteHandler); // creacion de una nueva nota
router.get("/new", newNoteHandler); // formulario para crear una nueva nota
router.get("/:id", noteHandler); // detalle de una nota
router.post("/:id/delete", deleteNoteHandler); // eliminar una nota
router.get("/:id/edit", editNoteHandler); // formulario para editar una nota
router.post("/:id/update", updateNoteHandler); // actualizacion de la nota
