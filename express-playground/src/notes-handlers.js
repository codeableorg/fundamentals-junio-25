import { saveNotes } from "./notes-storage.js";
import { nanoid } from "nanoid";

export function notesHandler(req, res) {
  const notes = req.notes;
  const emptyMessage = "No tienes notas por ahora.";
  const title = "Notas";
  res.render("notes", {
    notes,
    emptyMessage,
    title,
  });
}

export function noteHandler(req, res) {
  const notes = req.notes;
  const noteId = req.params.id;
  const note = notes.find((note) => note.id === noteId);

  if (note) {
    res.render("note", { note, title: "Notas | Detalle" });
  } else {
    res.status(404).render("404", { title: "Notas | Error" });
  }
}

export function newNoteHandler(_req, res) {
  res.render("new", { title: "Notas | Nueva nota" });
}

export async function createNoteHandler(req, res) {
  const notes = req.notes;
  const noteId = nanoid();
  const noteContent = req.body["new-note"];
  const newNote = { id: noteId, content: noteContent };
  notes.push(newNote);
  await saveNotes(notes);
  res.redirect(303, "/notes");
}

export async function deleteNoteHandler(req, res) {
  const notes = req.notes;
  const noteId = req.params.id;
  const position = notes.findIndex((note) => note.id === noteId);
  notes.splice(position, 1);
  await saveNotes(notes);
  res.redirect(303, "/notes");
}

export function editNoteHandler(req, res) {
  const notes = req.notes;
  const noteId = req.params.id;
  const note = notes.find((note) => note.id === noteId);
  res.render("edit", { note, title: "Notas | Editar" });
}

export async function updateNoteHandler(req, res) {
  const notes = req.notes;
  const noteId = req.params.id;
  const newContent = req.body["new-content"];
  const note = notes.find((note) => note.id === noteId);
  note.content = newContent;
  await saveNotes(notes);
  res.redirect(303, "/notes");
}
