import express from "express";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5500;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

function homeHandler(_req, res) {
  res.render("index");
}

function notesHandler(_req, res) {
  const fileContentPromise = fs.readFile("./src/notes.json", "utf8");
  fileContentPromise.then((content) => {
    const notes = JSON.parse(content);
    res.render("notes", { notes });
  });
}

function noteHandler(req, res) {
  const noteId = Number(req.params.id);

  const fileContentPromise = fs.readFile("./src/notes.json", "utf8");
  fileContentPromise.then((content) => {
    const notes = JSON.parse(content);
    const note = notes.find((note) => note.id === noteId);

    if (note) {
      res.render("note", { note });
    } else {
      res.status(404).render("404");
    }
  });
}

function formHandler(_req, res) {
  res.render("new-note");
}

function createNoteHandler(req, res) {
  console.log(req.body);
  // lectura del notes.json
  const fileContentPromise = fs.readFile("./src/notes.json", "utf8");
  fileContentPromise
    .then((content) => {
      // parsear el contenido
      const notes = JSON.parse(content);
      // crear un nuevo objeto con la data enviada en el request
      const noteId = notes.length + 1;
      const noteContent = req.body["new-note"];
      const newNote = { id: noteId, content: noteContent };
      // agregar la nueva nota al arreglo
      notes.push(newNote);
      // sobrescribir el archivo json con el nuevo arreglo
      return fs.writeFile("./src/notes.json", JSON.stringify(notes));
    })
    .then(() => {
      res.redirect(303, "/notes");
    })
    .catch((error) => {
      console.log(error.message);
    });
}

app.get("/", homeHandler);
app.get("/notes", notesHandler);
app.get("/notes/:id", noteHandler);
app.get("/new-note", formHandler);
app.post("/notes", createNoteHandler);

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
