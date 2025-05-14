
//new Object ->  Object.prototype
const objA = {
  chaveA: 'A'
  //___proto___: Object.prototype
};


const objB = {
  chaveB: 'B'
  //___proto___: objA
};

const objC = {
  chaveC: 'C'
  //___proto___: objA
};

Object.setPrototypeOf(objB, objA); // Seta para o objB a propriedade do objA

Object.setPrototypeOf(objC, objB); // Seta para o objC a propriedade do objB que também tem o objA

console.log(objB.chaveA);
console.log(objC.chaveA);

function Produto(nome, preco, quantidade) {
  this.nome = nome;
  this.preco = preco;
  this.quantidade = quantidade

}

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Banana', 100, 1000);

//p1.desconto(100); // diminui o preço do produto em 100%
p1.aumento(100); // aumenta o preço do produto em 100%

console.log(p1); // Produto { nome: 'Banana', preco: 200 }

const p2 = {
  nome: 'Caneca',
  preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype); // aqui nós copiamos o prototype de produto para nosso objeto p2, ele também considera que o construtor desse p2 agora é o "Produto"

p2.aumento(100); // e assim podemos reutilizar os métodos que criamos nele
p2.quantidade = 100; // como o nosso construtor virou o "Produto", podemos usar as propriedades declaradas lá

console.log(p2)

const p3 = Object.create(Produto.prototype); // podemos fazer um objeto vazio usar o contrutor Produto como parametro
p3.preco = 100;
p3.nome = 'Maça';
p3.quantidade = 50;
console.log(p3);