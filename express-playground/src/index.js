import express from "express";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log(__dirname);

const app = express();
const port = 5500;

function homeHandler(_req, res) {
  const pathToHome = path.join(__dirname, "..", "public", "index.html");
  res.sendFile(pathToHome);
}

function notesHandler(_req, res) {
  const fileContentPromise = fs.readFile("./src/notes.json", "utf8");
  fileContentPromise.then((content) => {
    const notes = JSON.parse(content);
    // res.json(notes);
    const pathToNotes = path.join(__dirname, "..", "public", "notes.html");
    res.sendFile(pathToNotes);
  });
}

function noteHandler(req, res) {
  // console.log(req.params.id);
  const noteId = Number(req.params.id);

  const fileContentPromise = fs.readFile("./src/notes.json", "utf8");
  fileContentPromise.then((content) => {
    const notes = JSON.parse(content);
    const note = notes.find((note) => note.id === noteId);
    res.json(note);
  });
}

function formHandler(_req, res) {
  const pathToForm = path.join(__dirname, "..", "public", "new-note.html");
  res.sendFile(pathToForm);
}

app.get("/", homeHandler);
app.get("/notes", notesHandler);
app.get("/notes/:id", noteHandler);
app.get("/new-note", formHandler);
// app.post("/notes", cb);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Objeto: RegEx Regular Expression
// const datePattern = /^\/blog\/(\d{4})\/(\d{2})\/(\d{2})$/;

// app.get(datePattern, (req, res) => {
//   // console.log(req.params);
//   const year = req.params[0]; // Año (4 dígitos)
//   const month = req.params[1]; // Mes (2 dígitos)
//   const day = req.params[2]; // Día (2 dígitos)

//   res.send(
//     `Mostrando entradas del blog para la fecha: ${year}-${month}-${day}`
//   );
// });

// app.get("/blog/:year/:month/:day", dateHandler);

// function dateHandler(req, res) {
//   const year = req.params.year;
//   const month = req.params.month;
//   const day = req.params.day;

//   res.send(
//     `Mostrando entradas del blog para la fecha: ${year}-${month}-${day}`
//   );
// }
