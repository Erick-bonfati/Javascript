
// Escreva uma função que recebe 2 numero e retorna o maior deles

function biggestNum(val1, val2) {
  // if(val1 > val2) {
  //   console.log(`O maior valor é ${val1}`);
  // } else {
  //   console.log(`O maior valor é ${val2}`);
  // }
  return val1 > val2 ? val1 : val2;
}

let valor1 = 30;
let valor2 = 60;

// biggestNum(valor1, valor2);
console.log(biggestNum(valor1, valor2));