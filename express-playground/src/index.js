import express from "express";
import {
  homeHandler,
  notesHandler,
  noteHandler,
  formHandler,
  createNoteHandler,
  deleteNoteHandler,
  editNoteHandler,
  updateNoteHandler,
} from "./notesHandlers.js";

const port = 5500;
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", homeHandler);
app.get("/notes", notesHandler);
app.get("/notes/:id", noteHandler);
app.get("/new-note", formHandler);
app.post("/notes", createNoteHandler);
app.post("/notes/:id/delete", deleteNoteHandler);
app.get("/notes/:id/edit", editNoteHandler);
app.post("/notes/:id/update", updateNoteHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
