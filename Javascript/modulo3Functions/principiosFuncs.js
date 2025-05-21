
// Escopo léxico -> é uma função que consegue ter acesso as váriaveis declaradas dentro ou fora dela, e também até acessar as variaveis das funções vizinhas, caso a variavel não existes em nenhum lugar
// e nem mesmo no escopo global, ai sim ele gera um erro.

const nome = 'Erick';

function falaNome() {
  const nome = 'Luiz' // sempre da prioridade para a função que foi declarada dentro do pai
  console.log(nome);
}

function usaFalaNome() {
  falaNome();
}

usaFalaNome(); // Luiz

// Closures -> São funções que tem acesso a todos escopos, que são: o próprio escopo, do da mãe dela e ao escopo global

function retornaFuncao(nome) {
  return function () {
    return nome;
  }
}

const nome1 = retornaFuncao('Erick');
const nome2 = retornaFuncao('Maria');

console.log(nome1(), nome2()); // tipo anonima 

// Funções imediatas - (IIFE) -> Immediately invoked function expression = Funções invocadas de imediato, sem a necessidade de chamar ela

(function(idade, peso, altura) {
  const sobrenome = 'Miranda';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Erick'))
  }

  falaNome(); // Erick Miranda
  console.log(idade, peso, altura); // 20 113 1.8

}) (20, 112, 1.80);