// Podemos retornar varias funções dentro de uma função


function duplica(n) {
  return n * 2;
}

function triplica(n) {
  return n * 3;
}

function quadriplica(n) {
  return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// Aqui fazemos a repetição do mesmo código praticamente, que podemos evitar chamando uma dentro da outra

function criaMultiplicador(multiplicador) { // aqui criamos uma func com um multiplicador dentro
  function multiplicacao(n) {
    return n * multiplicador;
  }

  return multiplicacao;
}

const duplica2 = criaMultiplicador(2); // aqui chamamos a func e passando que a const sera a func que faz a multiplicacao
const triplica2 = criaMultiplicador(3);
const quadriplica2 = criaMultiplicador(4);

console.log(duplica2(2));
console.log(triplica2(2));
console.log(quadriplica2(2));

