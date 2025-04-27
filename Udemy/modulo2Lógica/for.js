
// existem tres tipo de for, classico, for of e for in, ambos fazem as mesmas coisas, porem utilizados em diferentes contextos

// For clássico - Geralmente com iteráveis (array, strings)

// For in -> Retorna o índice ou chave (string, array ou objetos)

// For of -> Retorna o valor em si (iteráveis, arrays ou strings)


const frutas = ["Pera", "Maçã", "Uva"];

for(let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

for(let i in frutas) { // a diferença aqui é que conseguimos simplicar o código
  console.log(frutas[i]);
}

const pessoa = {
  nome: "Luiz",
  sobrenome: "Otavio",
  idade: 30
}

for(let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`); // retorna cada chave individualmente
}

const nome = "Erick bonfati";

for(let valor of nome) { // percebe-se que aqui não não precisamos chamar a variavel junto do indice, retornamos diretamente o valor
  console.log(valor); // E r i c k  b o n f a t i
}


const nomesArray = ["Mario", "Roberto", "Henrique"];

for(let valor of nomesArray) { // mesma situação, retorna apenas o valor em vez de o indice
  console.log(valor); // Mario Roberto Henrique
}