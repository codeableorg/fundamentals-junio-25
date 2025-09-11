import express from "express";
import fs from "node:fs/promises";

const app = express();
const port = 5500;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

async function getNotes() {
  const content = await fs.readFile("./src/notes.json", "utf8");
  return JSON.parse(content);
}

async function saveNotes(notes) {
  await fs.writeFile("./src/notes.json", JSON.stringify(notes, null, 2));
}

function homeHandler(_req, res) {
  res.render("index");
}

async function notesHandler(_req, res) {
  const notes = await getNotes();
  res.render("notes", { notes });
}

async function noteHandler(req, res) {
  const noteId = Number(req.params.id);
  const notes = await getNotes();
  const note = notes.find((note) => note.id === noteId);

  if (note) {
    res.render("note", { note });
  } else {
    res.status(404).render("404");
  }
}

function formHandler(_req, res) {
  res.render("new-note");
}

async function createNoteHandler(req, res) {
  const notes = await getNotes();
  const noteId = notes.length + 1;
  const noteContent = req.body["new-note"];
  const newNote = { id: noteId, content: noteContent };
  notes.push(newNote);
  await saveNotes(notes);
  res.redirect(303, "/notes");
}

async function deleteNoteHandler(req, res) {
  const notes = await getNotes();
  const noteId = Number(req.params.id);
  const position = notes.findIndex((note) => note.id === noteId);
  notes.splice(position, 1);
  await saveNotes(notes);
  res.redirect(303, "/notes");
}

app.get("/", homeHandler);
app.get("/notes", notesHandler);
app.get("/notes/:id", noteHandler);
app.get("/new-note", formHandler);
app.post("/notes", createNoteHandler);
app.post("/notes/:id/delete", deleteNoteHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

/*
Objeto: RegEx Regular Expression
const datePattern = /^\/blog\/(\d{4})\/(\d{2})\/(\d{2})$/;

app.get(datePattern, (req, res) => {
  // console.log(req.params);
  const year = req.params[0]; // Año (4 dígitos)
  const month = req.params[1]; // Mes (2 dígitos)
  const day = req.params[2]; // Día (2 dígitos)

  res.send(
    `Mostrando entradas del blog para la fecha: ${year}-${month}-${day}`
  );
});

app.get("/blog/:year/:month/:day", dateHandler);

function dateHandler(req, res) {
  const year = req.params.year;
  const month = req.params.month;
  const day = req.params.day;

  res.send(
    `Mostrando entradas del blog para la fecha: ${year}-${month}-${day}`
  );
}



{ notes }

{ note }
 {
  name: name,
  year: year,
  password: password
 }
 {
  name,
  year,
  password
 }


*/
