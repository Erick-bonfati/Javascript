
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
console.log(outroProduto);