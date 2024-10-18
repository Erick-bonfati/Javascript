// Relembrando o que ainda lembro em programação, após 3 meses sem estudar, obs: estou trabalhando como desenvolvedor


console.log("Hello world")


// Criar lista de tarefas



let listaComidas = ["Maça", "Banana", "Apples", "Chocolate", "Limão"]

listaComidas.push("Carne")

for(let i = 0; i < listaComidas.length; i++) {
  console.log(listaComidas[i]);
}


function returnCompleteName() {
  const userName = "Erick bonfati"
  if(userName.length > 10) {
    console.log(`Your name is: '${userName}', and have '${userName.length}' characters`)
  }
}

returnCompleteName();


class Aves {
  constructor(nome, cor) {
    this.nome = nome;
    this.cor = cor;
  }

  voar() {
    console.log("Estou voando")
  }

  corAnimal() {
    if(this.cor === "Branco") {
      console.log("Sou da familia do pombo")
    } else {
      console.log("Sou de outra familia")
    }
  }
}

ave = new Aves("Pombo", "Branco");


ave.voar();

ave.corAnimal();