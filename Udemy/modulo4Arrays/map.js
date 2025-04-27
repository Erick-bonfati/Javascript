

// Dobre os números

// Map -> o map é parecido com o filter, porem ele sempre vai ter o mesmo tamanho do array original

// O map sempre mexe no array original, a não ser que a gente não copie os objetos do array original

const numeros = [23, 87, 14, 56, 92, 3, 78, 45, 67, 99, 12, 34, 58, 71, 6];

const numerosEmDobro = numeros.map(function(valor, indice, array) {
  return  valor * 2;
});

console.log(numerosEmDobro) // Retorna o dobro dos valores do array original

// Para cada elemento, retorna apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  {nome: 'Luiz', idade: 67},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Leticia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(function(obj) {
  return obj.nome;
});

const idades = pessoas.map(function(obj) {
  const newObj = {...obj};
   delete newObj.idade
  return newObj;
})

const comIds = pessoas.map(function(obj, indice) { // cria um objeto "id" e atribui o valor do indice dele para ser referenciado por uma chave
  const newObj = {...obj}; // copia o objeto para um outro objeto
   newObj.id = indice;
  return newObj;
})

console.log(idades)

console.log(nomes); // [ 'Luiz', 'Maria', 'Eduardo', 'Leticia', 'Rosana', 'Wallace' ]

console.log(comIds);


