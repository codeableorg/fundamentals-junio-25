import http from "node:http";

// console.log(http);
// console.log(typeof http);

function requestListener(_request, response) {
  // procesar el request

  // configurar el response
  response.end("Hola Mundo! (desde mi primer Server)");
}

const server = http.createServer(requestListener);
server.listen(5500);

// CONTROL + C
