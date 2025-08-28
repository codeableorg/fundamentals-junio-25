import { obtenerTareas, agregarTarea, borrarTareas } from "./back-end.js";

const input = document.getElementById("nueva-tarea");
const buttonAgregar = document.getElementById("agregar");
const buttonBorrar = document.getElementById("borrar");
const ul = document.getElementById("tareas");

function handleAgregar(_event) {
  const nuevaTarea = input.value;
  if (nuevaTarea === "") return;

  agregarTarea(nuevaTarea);
  input.value = "";
  mostrarTareas();
}

function handleBorrar(_event) {
  ul.innerHTML = "";
  borrarTareas();
}

function mostrarTareas() {
  ul.innerHTML = "";
  const tareas = obtenerTareas();

  for (const tarea of tareas) {
    const li = document.createElement("li");
    li.textContent = tarea;
    ul.append(li);
  }
}

buttonAgregar.onclick = handleAgregar;
buttonBorrar.onclick = handleBorrar;

mostrarTareas();
