import express from "express";
import { router as notesRouter } from "./notes-router.js";
import expressEjsLayouts from "express-ejs-layouts";

const port = 5500;
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // req.body
app.use(express.static("./public"));
app.use(expressEjsLayouts);
app.set("layout", "layout");

// Routing
app.get("/", (_req, res) => res.render("index", { title: "Notas | Inicio" })); // home
app.use("/notes", notesRouter); // notas

// Error-Handling Middleware
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send("Algo salio mal en el Servidor!");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
