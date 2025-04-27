
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
}, []); // valor inicial do acumulador

console.log(total2)