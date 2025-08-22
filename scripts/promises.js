// const promesa = new Promise((resolve, reject) => {
//   const hasConnectionError = Math.random() > 0.9;
//   setTimeout(() => {
//     if (hasConnectionError) {
//       reject("Disculpas");
//     } else {
//       resolve("PS5");
//     }
//   }, 2000);
// });

// promesa
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

const users = [
  {
    email: "pepe@mail.com",
    password: "supersecret",
    name: "Pepe",
    githubUsername: "pepe-20",
  },
  {
    email: "ana@mail.com",
    password: "letmein",
    name: "Ana",
    githubUsername: "anita-dev",
  },
];

function onUserSuccess(user) {
  console.log("¡Bienvenid@ " + user.name + "!");
}

function onUserError(error) {
  console.log(error.message);
}

function getUser(email, password) {
  // retornamos una promesa...
  return new Promise((resolve, reject) => {
    // que después de 2 segundos...
    setTimeout(() => {
      const user = users.find((u) => u.email === email);
      if (!user || user.password !== password) {
        const error = new Error("Credenciales invalidas");
        // se rechaza si las credenciales son invalidas
        reject(error);
      }

      // se cumple pasando la información del usuario
      resolve(user);
    }, 2000);
  });
}

const userPromise = getUser("pepe@mail.com", "supersecret");

userPromise.then(onUserSuccess).catch(onUserError);
