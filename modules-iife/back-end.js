// importaciones (imports) No estan presentes en este Modulo

(function () {
  // código interno
  // variables y funciones para manejar tareas:
  var tareas = ["tarea 1", "tarea 2", "tarea 3"];

  function agregarTarea(tarea) {
    tareas.push(tarea);
  }

  function borrarTareas() {
    tareas = [];
  }

  function obtenerTareas() {
    return tareas;
  }

  // exportaciones (exports)
  APP.agregarTarea = agregarTarea;
  APP.borrarTareas = borrarTareas;
  APP.obtenerTareas = obtenerTareas;
})();
