

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque; // trabalhando com uma estoque não referenciado pelo this, para não obter um loop infinito, pois o get já exibe o valor do estoque, então se repetir duas vezes o this ele vai gerar erro
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,
    get: function() { // serve para apenas pegar e te mostrar o valor
      return estoquePrivado;
    },
    // esse set é uma maneira de criar uma lógica para manipular o valor do getter que foi recebido, ou seja, o get, ele pega o valor declarado no argumento "3", o setter é quando tentamos reatribuir o valor do estoque para outro que desejamos, e a partir dai podemos modificar ele como preferir
    set: function(valor) { 
      if(typeof valor !== 'number') {
        throw new Error('Voce deve digitar apenas numeros');
      }
        estoquePrivado = valor;
    }
  })

}

const p1 = new Produto('Camiseta', 20, 3);

p1.estoque = 10

console.log(p1);
console.log(p1.estoque); // O valor que eu quero

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },

    set nome(valor) {
      valor = valor.replace('aleatorio', '');
      nome = valor
    }
  }
}

const p2 = criaProduto('Calça');

p2.nome = 'Outro nome aleatorio'

console.log(p2);
console.log(p2.nome);