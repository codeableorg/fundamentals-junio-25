import http from "node:http";
import fs from "node:fs";

function validateUrl(url) {
  const segments = url.split("/"); // ['', 'notes', '4']
  segments.shift(); // ['notes', '4']

  return segments[0] === "notes" && segments.length === 2;
}

function requestListener(request, response) {
  console.log(request.url);
  console.log(request.method); // "GET", "POST", etc

  const method = request.method;

  if (method === "GET") {
    if (request.url === "/") {
      // Flecha 1
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(`<!DOCTYPE html>
                      <html lang="en">
                        <head>
                          <meta charset="UTF-8" />
                          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                          <title>Notes | Inicio</title>
                        </head>
                        <body>
                          <h1>Hola!</h1>
                          <a href="/notes">Ver mis notas</a>
                        </body>
                      </html>`);
      response.end();
    } else if (request.url === "/notes") {
      // Flecha 2

      fs.readFile("./notes.json", "utf8", (e, content) => {
        if (e) {
          console.log(e.message);
          return;
        }

        const notes = JSON.parse(content);
        const liNotes = notes.map(
          (note) => `<li><a href="/notes/${note.id}">${note.content}</a></li>`
        );

        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(`<!DOCTYPE html>
                        <html lang="en">
                          <head>
                            <meta charset="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <title>Notes</title>
                          </head>
                          <body>
                            <h1>Notas</h1>
                            <ul>${liNotes.join("")}</ul>
                            <a href="/new-note">Crear nueva nota</a>
                          </body>
                        </html>`);
        response.end();
      });
    } else if (validateUrl(request.url)) {
      // Flecha 3
      const segments = request.url.split("/");
      segments.shift();
      const noteId = Number(segments.at(1));

      fs.readFile("./notes.json", "utf8", (e, content) => {
        if (e) {
          console.log(e.message);
          return;
        }

        const notes = JSON.parse(content);
        const note = notes.find((note) => note.id === noteId);

        if (note) {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(`<!DOCTYPE html>
                          <html lang="en">
                            <head>
                              <meta charset="UTF-8" />
                              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                              <title>Note</title>
                            </head>
                            <body>
                              <h1>Detalle de la nota:</h1>
                              <div>
                                <p>ID: ${note.id}</p>
                                <p>Contenido: ${note.content}</p>
                              </div>
                              <br>
                              <a href="/notes">Volver a todas las notas</a>
                            </body>
                          </html>`);
        } else {
          response.writeHead(400, { "Content-Type": "text/html" });
          response.write(`<!DOCTYPE html>
                          <html lang="en">
                            <head>
                              <meta charset="UTF-8" />
                              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                              <title>Error</title>
                            </head>
                            <body>
                              <h1>404</h1>
                              <p>Nota no encontrada</p>
                            </body>
                          </html>`);
        }
        response.end();
      });
    } else if (request.url === "/new-note") {
      // Flecha 4
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(`<!DOCTYPE html>
                      <html lang="en">
                        <head>
                          <meta charset="UTF-8" />
                          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                          <title>Notes | Inicio</title>
                        </head>
                        <body>
                          <h1>Nueva Nota</h1>
                          <form action="/notes" method="post">
                            <div>
                              <label for="new-note">Contenido:</label>
                              <input id="new-note" type="text" name="new-note" />
                            </div>
                            <button>Enviar</button>
                          </form>
                        </body>
                      </html>`);
      response.end();
    }
  } else if (method === "POST") {
    if (request.url === "/notes") {
      // Flecha 5
      let body = "";

      request.on("data", (chunk) => {
        body += chunk.toString();
      });

      request.on("end", () => {
        // console.log(body); // "new-note=mi+nueva+nota"
        fs.readFile("./notes.json", "utf8", (e, content) => {
          if (e) {
            console.log(e.message);
            return;
          }

          const notes = JSON.parse(content);
          const newId = notes.length + 1;
          const noteContent = body.substring(9).replaceAll("+", " ");
          const newNote = { id: newId, content: noteContent };
          notes.push(newNote);

          fs.writeFile("./notes.json", JSON.stringify(notes), (e) => {
            if (e) {
              console.log(e.message);
            }
          });
        });
      });

      response.writeHead(303, { Location: "/notes" });
      response.end();
    }
  }
}

const server = http.createServer(requestListener);
server.listen(5500, () => {
  console.log("El servidor ya esta escuchando!");
});
