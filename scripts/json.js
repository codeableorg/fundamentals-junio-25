/*
const escuela = {
  nombre: "Codeable",
  fundacion: 2019,
};

JSON: JavaScript Object Notation
1. Dar el formato correcto a la data
const escuelaEnFormatoJSON = '{"nombre":"Codeable","fundacion":2019}';
const json = JSON.stringify(escuela);

2. Escribir la informacion en el archivo .json

const jsonData = '["manzana", "pera", "fresa"]';
const frutas = JSON.parse(jsonData);
*/

// JSON.parse(jsonData)

function getUsers() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      // leer el archivo users.json
      // const json =  readFile("/users.json");
      const json = `[
        {"id": 1, "name": "Leanne Graham", "email": "Sincere@april.biz"},
        {"id": 2, "name": "Ervin Howell", "email": "Shanna@melissa.tv"}
        ]`;
      resolve(json);
    }, 300);
  });
}

const userPromise = getUsers();
userPromise
  .then((userString) => {
    const usersArray = JSON.parse(userString);
    usersArray.forEach((user) =>
      console.log(`<div>Nombre: ${user.name}, Email: ${user.email}</div>`)
    );
  })
  .catch((error) => console.log(error.message));
