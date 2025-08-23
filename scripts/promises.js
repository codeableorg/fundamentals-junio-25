/*
const promesa = new Promise((resolve, reject) => {
  const hasConnectionError = Math.random() > 0.9;
  setTimeout(() => {
    if (hasConnectionError) {
      reject("Disculpas");
    } else {
      resolve("PS5");
    }
  }, 2000);
});

promesa
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
*/

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

const githubPublicRepos = [
  { id: 1, owner: "pepe-20", name: "hello-world" },
  { id: 2, owner: "pepe-20", name: "say-hi" },
  { id: 3, owner: "anita-dev", name: "first-repo" },
  { id: 4, owner: "anita-dev", name: "codeable" },
  { id: 5, owner: "anita-dev", name: "example" },
];

// Funcion que se ejecuta cuando la promesa del User se resuelve
// Parametro user es un objeto { email, password, name, githubUsername }
// Valor de retorno es un objeto Promise proporciona por la ejecucion de la funcion getPublicRepost
function onUserSuccess(user) {
  console.log("¡Bienvenid@ " + user.name + "!");

  return getPublicRepost(user.githubUsername);
}

// Funcion que se ejecuta cuando la promesa del User se rechaza
// Parametro error es un objeto de tipo Error
function onUserError(error) {
  console.log(error.message);
}

// Funcion que se ejecuta cuando la promesa reposPromise se resuelve
// Parametro repos es un objeto array con los repositorios de 1 usuario
function onReposSuccess(repos) {
  repos.forEach((repo) => console.log(repo.name));
}

// Funcion que se ejecuta cuando la promesa reposPromise se rechaza
// Parametro error es un objeto de tipo Error
function onReposError(error) {
  console.log(error.message);
}

// Funciones Asincronas: ambas retornan de manera inmediata un objeto Promise
function getUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.email === email);
      if (!user || user.password !== password) {
        const error = new Error("Credenciales invalidas");
        reject(error);
      }

      resolve(user);
    }, 2000);
  });
}

function getPublicRepost(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hasConnectionError = Math.random() > 0.9;
      if (hasConnectionError) {
        const error = new Error("Error de conexión");
        reject(error);
      } else {
        const repos = githubPublicRepos.filter(
          (repo) => repo.owner === username
        );

        resolve(repos);
      }
    }, 2000);
  });
}

// userPromise es un objeto Promise en estado "pendiente"
const userPromise = getUser("pepe@mail.com", "supersecret");
// la ejecucion del callback onUserSuccess retorna un nuevo objeto Promise manejado por el segundo then
userPromise.then(onUserSuccess).then(onReposSuccess).catch(onUserError);
