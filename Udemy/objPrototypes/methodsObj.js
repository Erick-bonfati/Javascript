
/*

Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já foi visto
Object.keys (retorna chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)

*/

// spread
const produto = {nome: 'Calça', preco: 20}
const novoProduto = { ...produto, material: 'algodão' };
//assign
const outroProduto = Object.assign({quantidade: 100}, produto ); // criando um objeto vazio ou com algumas propriedades e copiando o objeto produto para ele

produto.preco = 30;

novoProduto.preco = 100;

outroProduto.preco = 1000;

console.log(produto); // { nome: 'Calça', preco: 30 }
console.log(novoProduto); // { nome: 'Calça', preco: 100, material: 'algodão' }
console.log(outroProduto); // { quantidade: 100, nome: 'Calça', preco: 1000 }

const p1 = { nome: 'Produto', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
  writable: true,
})

console.log(Object.getOwnPropertyDescriptor(p1, 'nome')) // mostra as propriedades do Objeto

console.log(Object.values(p1)); // Produto, 1.8 - mostra os valores dentro do objeto, apenas valor não nome 

console.log(Object.entries(p1)) // [ [ 'nome', 'Produto' ], [ 'preco', 1.8 ] ] - mostra o nome das propriedades e valores dos objetos declarados no objeto

const p2 = { nome: 'Produto', preco: 1.8, material: 'porcelana' };

for(let entry of Object.entries(produto)) { // retorna em um array separado, as propriedades e valores do objeto
  console.log(entry)
}

for(let [chave, valor] of Object.entries(produto)) { // outra maneira, porem com o retorna sem estar com as chaves
  console.log(chave, valor)
}