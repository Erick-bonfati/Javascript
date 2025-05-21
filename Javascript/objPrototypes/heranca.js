// Produto
// Camiseta, caneca, lapis

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco); // Aqui nós linkamos o construtor produto com essa função camiseta, passamos o this para referenciar que estamos utilizando o this.nome, this.preco e etc... 
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); // criamos um objeto que recebe como prototype o prototype de produto
Camiseta.prototype.constructor = Camiseta; // E aqui nós fazemos com que o construtor de camiseta seja ele mesmo, pois ao copiar o prototype de produto, o construtor de camiseta vira "Produto"

const camiseta = new Camiseta('Regata', 17.5, 'Preta');

camiseta.aumento(10);

console.log(camiseta);

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },

    set: function(valor) {
      if(typeof valor !== 'number') return;
      estoque = valor;
    }
  }) 
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Xicará', 6, 'Porcelana', 10);
caneca.estoque = 100;

caneca.aumento(5);

console.log(caneca);
console.log(caneca.estoque);