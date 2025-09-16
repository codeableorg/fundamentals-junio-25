import { getNotes, saveNotes } from "./notesStorage.js";
import { nanoid } from "nanoid";

export async function notesHandler(_req, res) {
  const notes = await getNotes();
  const emptyMessage = "No tienes notas por ahora.";
  res.render("notes", { notes: notes, emptyMessage: emptyMessage });
}

export async function noteHandler(req, res) {
  const noteId = req.params.id;
  const notes = await getNotes();
  const note = notes.find((note) => note.id === noteId);

  if (note) {
    res.render("note", { note });
  } else {
    res.status(404).render("404");
  }
}

export function newNoteHandler(_req, res) {
  res.render("new");
}

export async function createNoteHandler(req, res) {
  const notes = await getNotes();
  const noteId = nanoid();
  const noteContent = req.body["new-note"];
  // const createdAt = Date.now();
  const newNote = { id: noteId, content: noteContent };
  notes.push(newNote);
  await saveNotes(notes);
  res.redirect(303, "/notes");
}

export async function deleteNoteHandler(req, res) {
  const notes = await getNotes();
  const noteId = req.params.id;
  const position = notes.findIndex((note) => note.id === noteId);
  notes.splice(position, 1);
  await saveNotes(notes);
  res.redirect(303, "/notes");
}

export async function editNoteHandler(req, res) {
  const noteId = req.params.id;
  const notes = await getNotes();
  const note = notes.find((note) => note.id === noteId);
  res.render("editform", { note });
}

export async function updateNoteHandler(req, res) {
  const noteId = req.params.id;
  const newContent = req.body["new-content"];
  const notes = await getNotes();
  const note = notes.find((note) => note.id === noteId);
  note.content = newContent;
  await saveNotes(notes);
  res.redirect(303, "/notes");
}
