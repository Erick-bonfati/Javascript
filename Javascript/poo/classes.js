

// Classes é mais uma maneira de criar uma função construtora, e ambas tem exatamente a mesma estrutura e funcionalidade

// O diferencial das classes é que os métodos já são automaticamente linkados ao prototype dela, então não temos a necessidade de ficar fazendo, Pessoa.prototype.falar = function()....
class Pessoa {
  constructor(nome, sobrenome) { // o construtor é onde passamos os parametros da nossa classe
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`)
  }

  comer() {
    console.log(`${this.nome} está comendo`)
  }

  beber() {
   console.log(`${this.nome} está bebendo`)
  }
}

const p1 = new Pessoa('Erick', 'Bonfati');

console.log(p1);
p1.falar();