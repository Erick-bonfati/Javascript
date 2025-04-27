
//Declaração de função - Function hoisting

function falaOi() {
  console.log('Oie');
}

falaOi();

// First-class objetos (Objetos de primeira classe)
// Function expression

const souUmDado = function() {
  console.log('Sou um dado.');
};

function executaFuncao(funcao) {
  console.log('Vou executar sua função abaixo:')
  funcao();
}

executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function')
}

funcaoArrow();

// Dentro de um objeto, consideramos como um método

const obj = {
  falar: function() {
    console.log('Estou falando...');
  }
}