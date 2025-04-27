// Atribuição via desestruturação com objetos

const pessoa = {
  nome: "Erick",
  sobrenome: "Bonfati",
  idade: 20,
  endereco: {
    rua: "Rua Ronaldo",
    numero: 230
  }
}

const { nome = "Luiz", sobrenome, endereco } = pessoa; // aqui estamos criando a pessoa e atribuindo um valor padrão caso o nome não exista

console.log(nome, sobrenome, endereco, endereco.rua, endereco.numero); // chamando o objeto que criamos