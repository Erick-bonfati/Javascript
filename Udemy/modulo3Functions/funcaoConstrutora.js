
// Função construtora -> retorna objetos

// Função fábrica -> constroe objetos

// Construtora -> new Pessoa() = é a maneira que criamos uma função construtora


function Pessoa(nome, sobrenome) {
  
  //Privados = só temos acesso a eles dentro da função
  const id = 123456;
  const metodoInterno = function() {
    console.log('Olá esse é meu ID privado: ' + id)
  }


  // Atributos ou métodos publicos = podem ser acessados fora da função
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': Sou um método')
    metodoInterno();
  }
}

const pessoa1 = new Pessoa('Erick', 'Bonfati'); // a palavra new -> cria um novo objeto vazio e faz o this do objeto apontar para a variavel que criamos
const pessoa2 = new Pessoa('Maria', 'Oliveira'); 

console.log(pessoa1.nome);
pessoa1.metodo();

console.log(pessoa2.nome);