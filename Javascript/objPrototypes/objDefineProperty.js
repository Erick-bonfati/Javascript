
// defineProperty
// defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // definindo valor da chave
    writable: false, // permitir alterar valor da chave ou não
    configurable: true, // setando a chave como configuravel, ex abaixo...
  })

  // Aqui estamos reconfigurando a chave pois setamos ela como configurable na ultima definição
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    value: function() { // fazendo que o value seja uma função, então para acessar o valor dela agora, precisamos chamar ela com crases
      return estoque; 
    },
    writable: true,
    configurable: false, 
  })
}

const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = 40000
delete p1.estoque; // como definimos o configurable como "false" a chave não ser alterada, ou seja, não podemos deletar ela
console.log(p1); // Produto { nome: 'Camiseta', preco: 20, estoque: [Function: value] }
console.log(p1.estoque()); // 3
console.log(Object.keys(p1)); // Mostra as chaves que são enumerables, ou seja, que vão ou não aparecer na execução

for(let chave in p1) {
  console.log(chave);
}

function Produtos(nome, preco, estoque) {
  Object.defineProperties(this, {
    nome: {
      enumerable: true, 
      value: nome, 
      writable: false,
      configurable: true,
    },
    preço: {
      enumerable: true, 
      value: preco, 
      writable: true,
      configurable: true,
    },
    estoque: {
      enumerable: false, 
      value: estoque, 
      writable: false,
      configurable: true,
    }
  })

}

const p2 = new Produtos('Calça', 40, 10);

p2.nome = 'Legging';
p2.preço = 35;
p2.estoque = 100 // esse não aparece pois o enumerable está como false

console.log(Object.keys(p2)); //[ 'nome', 'preço' ]
console.log(p2); // Produtos { nome: 'Calça', 'preço': 35 }