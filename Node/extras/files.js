import fs from "node:fs";

// Lectura del archivo notes.json
// fs.readFile("./notes.json", "utf8", (error, content) => {
//   if (error) {
//     console.log(error.message);
//     return;
//   }

//   const notes = JSON.parse(content);
// });

const nuevaNota = { id: 9, content: "bla bla bla" };

// Escritura de una archivo
fs.writeFile("./notes.json", JSON.stringify(nuevaNota), (error) => {
  if (error) {
    console.log(error.message);
  }
});
