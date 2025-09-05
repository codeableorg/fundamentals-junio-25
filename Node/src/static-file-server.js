import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log(__dirname);
// console.log(__filename);

// "/Users/andore/Desktop/Fundamentals-Junio-25/Node/src/../public"
const publicDirectory = path.join(__dirname, "..", "public");

function requestListener(req, res) {
  if (req.method !== "GET") {
    res.writeHead(405);
    res.end("Method Not Allowed");
    return;
  }

  if (!req.url) {
    res.writeHead(400);
    res.end("Bad Request");
    return;
  }

  const requestedFile = req.url === "/" ? "index.html" : req.url;
  // "/Users/andore/Desktop/Fundamentals-Junio-25/Node/src/../public/index.html"
  // "/Users/andore/Desktop/Fundamentals-Junio-25/Node/src/../public/${req.url}"
  let filePath = path.join(publicDirectory, requestedFile);

  // ".html", ".css", ".txt"
  const ext = path.extname(filePath);
  console.log(ext);
  let contentType = "text/html";

  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".jpg":
    case ".jpeg":
      contentType = "image/jpeg";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.log(err);
      if (err.code === "ENOENT") {
        res.writeHead(404);
        res.end("Not Found");
      } else {
        res.writeHead(500);
        res.end("Internal Server Error");
      }
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
}

const server = http.createServer(requestListener);

server.listen(5500, () =>
  console.log("Servidor ejecutándose en http://localhost:5500/")
);

/*
  if (req.url === "/index.html") {
    // "/Users/andore/Desktop/Fundamentals-Junio-25/Node/src/../public/index.html"
    const pathToIndexHTML = path.join(__dirname, "..", "public", "index.html");

    fs.readFile(pathToIndexHTML, (err, content) => {
      if (err) {
        console.log(err);
        res.writeHead(500);
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } else {
    // En caso la url no apunte a /index.html
    res.writeHead(404);
    res.end("Not Found");
  }
    */
