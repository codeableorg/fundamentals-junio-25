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

function getUser(email, password, callback) {
  setTimeout(() => {
    const user = users.find((u) => u.email === email);
    if (!user || user.password !== password) {
      const error = new Error("Credenciales invalidas");
      callback(error);
    } else {
      console.log(user);
      callback(null, user); // Bienvenido Pepe!
    }
  }, 2000);
}

getUser("pepe@mail.com", "supersecret", function (error, user) {
  if (error) {
    console.log(error.message);
  } else {
    console.log("¡Bienvenid@ " + user.name + "!");
  }
});

const githubPublicRepos = [
  { id: 1, owner: "pepe-20", name: "hello-world" },
  { id: 2, owner: "pepe-20", name: "say-hi" },
  { id: 3, owner: "anita-dev", name: "first-repo" },
  { id: 4, owner: "anita-dev", name: "codeable" },
  { id: 5, owner: "anita-dev", name: "example" },
];

function getPublicRepos(username, callback) {
  setTimeout(() => {
    // Simulamos un posible error de conexión con Github
    const hasConnectionError = Math.random() > 0.9;
    if (hasConnectionError) {
      const error = new Error("Error de conexión");
      callback(error);
    } else {
      const repos = githubPublicRepos.filter((repo) => repo.owner === username);

      callback(null, repos);
    }
  }, 2000);
}

getPublicRepos("anita-dev", (error, repos) => {
  if (error) {
    console.log(error.message);
  } else {
    repos.forEach((repo) => console.log(repo.name));
  }
});
