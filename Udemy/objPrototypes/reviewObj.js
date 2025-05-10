
// Um objeto é formado por par, chave e valor
const pessoa = {
  nome: "Luiz",
  sobrenome: "Bonfati"
};

// Mesmo tipos de retorno de chave com seus respectivos valores
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);

// Podemos acessar com a notação de colchete
const chave = 'nome';

console.log(pessoa[chave]); // pega a referencia da chave pelo valor declarado na variavel "chave"

// Com uma construtor de array

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 20;
pessoa1.falarNome = function() {
  console.log(`${this.nome} está falando seu nome.`);
}
pessoa1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1);

console.log(pessoa1.getDataNascimento());

delete pessoa1.sobrenome;

//console.log(pessoa1);

const pessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Oliveira'
}

for (let chave in pessoa2) {
  console.log(pessoa2[chave])
}

// Factory function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
  }
}

const p1 = criaPessoa('Erick', 'Bonfati');
console.log(p1.nomeCompleto());


//Função construtora
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// new = cria uma chave {} e atrela a palavra "this" ao objeto vazio, sendo possivel referenciar os argumento no objeto, e por fim retorne esse this
const p2 = new Pessoa('Erick', 'Bonfati');
p2.sobrenome = 'Josefino'
console.log(p2);
const p3 = new Pessoa('Maria', 'Jose');
Object.freeze(p3); // Isso proibe do objeto p3 ter seu valor alterado
p3.nome = 'Roberto';
console.log(p3); // nome: 'Maria', sobrenome: 'Jose'