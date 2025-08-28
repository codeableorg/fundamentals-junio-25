let tareas = ["tarea 1", "tarea 2", "tarea 3"];

function agregarTarea(tarea) {
  tareas.push(tarea);
}

function borrarTareas() {
  tareas = [];
}

function obtenerTareas() {
  return tareas;
}

export { agregarTarea, borrarTareas, obtenerTareas };
