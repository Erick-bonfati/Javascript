
// Reduce -> reduz o array para um unico elemento, meio que retorna uma soma de todos os elementos


// Some todos os números (reduce)
// Retorna um array com os pares (filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [23, 87, 14, 56, 92, 3, 78, 45, 67, 99, 12, 34, 58, 71, 6];

const total = numeros.reduce(function(acumulador, valor, indice, array) {
  acumulador = acumulador + valor;
  console.log(acumulador, valor);
  return acumulador;
}, 0); // valor inicial do acumulador

console.log(total)

const total2 = numeros.reduce(function(acumulador, valor, indice, array) {
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);

console.log(total2);

// Retorna apenas numeros pares encontrados no array
const total3 = numeros.reduce(function(acumulador, valor, indice, array) {
   if(valor % 2 === 0) acumulador.push(valor);
   return acumulador
}, []);

console.log(total3);


//Retorne array com o dobro dos valores
const total4 = numeros.reduce(function(acumulador, valor) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);

console.log(total4);

//Some todos os valores do array
const total5 = numeros.reduce(function(acumulador, valor) {
  acumulador += valor;
  return acumulador;
});

console.log(total5);

//Some todos os valores pares do array
const total6 = numeros.reduce(function(acumulador, valor) {
  if(valor % 2 === 0) {
    acumulador += valor;
  }
  return acumulador;
}, 0); // neste caso precisamos passar o valor inicial do acumulador como zero pois senão ele primeiro faz a adição do primeiro indice do array antes de começar a pensar na lógica

console.log(total6);



const pessoas = [
  {nome: 'Luiz', idade: 67},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Leticia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

//Retorne a pessoa mais velha
const maisVelho = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador; // aqui o acumulador começa sendo o primeiro indice, pois não passamos o valor inicial do acumulador, já o valor passa a ser o segundo indice do array
  return valor; // e aqui caso a primeira lógica ali não seja a correta, ele vai cair aqui como se fosse um else e só retornar o resultado
});

console.log(maisVelho)