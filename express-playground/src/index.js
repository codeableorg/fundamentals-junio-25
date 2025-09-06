import express from "express";
import fs from "node:fs/promises";

const app = express();
const port = 3000;

function homeHandler(req, res) {
  console.log(`${req.method} ${req.url}`);
  res.send("Bienvenidos a Notas!");
}

function notesHandler(_req, res) {
  const fileContentPromise = fs.readFile("./src/notes.json", "utf8");
  fileContentPromise.then((content) => {
    res.send(content);
  });
  //   fs.readFile("./src/notes.json", "utf8").then((content) => {
  //     res.send(content);
  //   });
}

function noteHandler(req, res) {
  console.log(req.params.id);
  const noteId = req.params.id;
  res.send(`Detalle de la nota #${noteId}`);
}

app.get("/", homeHandler);
app.get("/notes", notesHandler);
app.get("/notes/:id", noteHandler);

// app.get("/new-note", cb);
// app.post("/notes", cb);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
