
// objetos em javascript são uma maneira de simplificar a criação de varias variaveis com diferentes valores, quando em objetos podemos resumir tudo na mesma variavel, ex:

const pessoa = {
  nome: "Erick",
  sobrenome: "Mario",
  idade: 25
}

console.log(pessoa);

// podemos criar uma função que nos cria um objeto completo

// Function factory
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  }
}

const pessoa1 = criaPessoa("Erick", "Bonfati", 19);

console.log(pessoa1);

// Objetos com métodos

const pessoa2 = {
  nome: 'Erick',
  sobrenome: 'Bonfati',
  idade: 19,

  fala() { // este é um método de objeto, em resumo seria como uma função de um objeto que faz um retorno de determinada coisa
    console.log(`${this.nome} ${this.sobrenome} está falando Oi`); // usamos a referencia this, para dizer que estamos procurando um valor que se encontra dentro do objeto pai
  },

  incrementaIdade() {
    this.idade++; // adiciona 1 de idade
    console.log(`Agora você tem: ${this.idade} anos.`)
  }
}

pessoa2.fala();
pessoa2.incrementaIdade();