function ejecutarPaso1(f) {
  setTimeout(() => {
    console.log("Paso 1: Precalienta el horno a 180 °C.");
    f();
  }, 3000);
}
function ejecutarPaso2(siguientePaso) {
  setTimeout(() => {
    console.log("Paso 2: Engrasa y enharina un molde.");
    siguientePaso();
  }, 1000);
}
function ejecutarPaso3(siguientePaso) {
  setTimeout(() => {
    console.log(
      "Paso 3: Mezcla los ingredientes secos: harina, cacao, polvo de hornear, bicarbonato y sal."
    );
    siguientePaso();
  }, 1500);
}
function ejecutarPaso4(siguientePaso) {
  setTimeout(() => {
    console.log(
      "Paso 4: En otro bowl, bate los huevos con el azúcar hasta que esté cremoso."
    );
    siguientePaso();
  }, 2000);
}
function ejecutarPaso5(siguientePaso) {
  setTimeout(() => {
    console.log(
      "Paso 5: Agrega el aceite, la leche y la vainilla; mezcla bien."
    );
    siguientePaso();
  }, 800);
}
function ejecutarPaso6(siguientePaso) {
  setTimeout(() => {
    console.log(
      "Paso 6: Incorpora los ingredientes secos a la mezcla líquida poco a poco."
    );
    siguientePaso();
  }, 1000);
}
function ejecutarPaso7(siguientePaso) {
  setTimeout(() => {
    console.log(
      "Paso 7: Vierte la masa en el molde y hornea 35-40 minutos (prueba con palillo)."
    );
    siguientePaso();
  }, 3500);
}
function ejecutarPaso8(_siguientePaso) {
  setTimeout(() => {
    console.log(
      "Paso 8: Deja enfriar y decora con azúcar glas, ganache o crema."
    );
  }, 500);
}

ejecutarPaso1(() =>
  ejecutarPaso2(() =>
    ejecutarPaso3(() =>
      ejecutarPaso4(() =>
        ejecutarPaso5(() =>
          ejecutarPaso6(() => ejecutarPaso7(() => ejecutarPaso8()))
        )
      )
    )
  )
);
