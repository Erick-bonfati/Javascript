
// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos que o array original.


const numeros = [23, 87, 14, 56, 92, 3, 78, 45, 67, 99, 12, 34, 58, 71, 6];

// const maiorQueDez = numeros.filter((valor, indice, array) => {
//   console.log(valor, indice);
//   return valor > 10;
// });

// Da maneira mais resumida possivel
const maiorQueDez = numeros.filter(valor => valor > 50); // retorna tudo que for maior que 50

console.log(maiorQueDez);

const pessoas = [
  {nome: 'Leticia', idade: 62},
  {nome: 'Luiz', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Maria', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const pessoaNomeGrande = pessoas.filter(obj => obj.nome.length >= 7); // retorna pessoas que tem o nome mais do que 7 caracteres
const pessoaMais50Anos = pessoas.filter(obj => obj.idade >= 50); // retorna pessoas que tem mais de 50 anos
const pessoaTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a')); // retorna apenas pessoas que o nome termina com a letra 'a'

console.log(pessoaNomeGrande); // [ { nome: 'Leticia', idade: 62 }, { nome: 'Eduardo', idade: 55 }, { nome: 'Wallace', idade: 47 } ]
console.log(pessoaMais50Anos); // [ { nome: 'Leticia', idade: 62 }, { nome: 'Eduardo', idade: 55 } ]
console.log(pessoaTerminaComA); // [ { nome: 'Leticia', idade: 62 }, { nome: 'Maria', idade: 19 }, { nome: 'Rosana', idade: 32 } ]