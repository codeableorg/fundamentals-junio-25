import express from "express";
import { router as notesRouter } from "./notes-router.js";

const port = 5500;
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // req.body

// Routing
app.get("/", (_req, res) => res.render("index")); // home
app.use("/notes", notesRouter); // notas

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

/*
app.get("/", (req, res, next) => {
  // hacer algo interesante y luego...
  req.body = "algo";
  req.algoMas = "algo mas";

  // pasar control al siguiente handler
  next();
});

app.get("/", (req, res) => {
  req.body;
  req.algoMas;
  res.send("Hola Mundo!");
});
*/
