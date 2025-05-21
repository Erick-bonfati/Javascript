
// Construtora - molde (classe)

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome;
}

// instancia - aqui estamos criando uma instancia da função construtora
const pessoa1 = new Pessoa('Luiz', 'O.');
console.log(pessoa1.nomeCompleto())
const pessoa2 = new Pessoa('Maria', 'A.');