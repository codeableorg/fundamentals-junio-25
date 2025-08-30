import http from "node:http";

// Base de datos
const notes = [
  { id: 1, content: "Hacer la cama" },
  { id: 2, content: "Lavar los platos" },
  { id: 3, content: "Estudiar JavaScript" },
  { id: 4, content: "Hacer las compras" },
  { id: 5, content: "Limpiar mi habitación" },
  { id: 6, content: "Almorzar a tiempo" },
];

function validateUrl(url) {
  const segments = url.split("/"); // ['', 'notes', '4']
  segments.shift(); // ['notes', '4']

  return segments[0] === "notes" && segments.length === 2;
}

function requestListener(request, response) {
  console.log(request.url);

  if (request.url === "/") {
    response.writeHead(200);
    response.write("Bienvenido a Notas");
    response.end();
  } else if (request.url === "/notes") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(notes));
    response.end();
  } else if (validateUrl(request.url)) {
    const segments = request.url.split("/");
    segments.shift();
    const noteId = Number(segments.at(1));
    const note = notes.find((note) => note.id === noteId);

    if (note) {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(note));
      response.end();
    } else {
      response.writeHead(400, { "Content-Type": "application/json" });
      response.write(JSON.stringify({ error: "Not found" }));
      response.end();
    }
  }
}

const server = http.createServer(requestListener);
server.listen(5500);

// response.writeHead(200, { "Content-Type": "text/plain" } );
// response.writeHead(200, { "Content-Type": "text/html" } );
