
const nome = "Erick"


function saudacao(nome){
  return nome;
}

console.log(`Seu nome é ${saudacao(nome)}`);


function soma(x, y) {
  const resultado = x + y;
  return `O resultado da sua conta foi: ${resultado}`;
}


const valor1 = 230
const valor2 = 30

const valorFinal = soma(valor1, valor2);

console.log(valorFinal);

// ArrowFunctions -> também são funções, mas muda a maneira que escrevemos ela, por exemplo aqui nos criamos uma função como se fosse uma variavel
// elas vieram com proposito de facilitar a vida das pessoas, pois podemos simplificar ela usando apenas uma linha de código

const raiz = (n) => return n ** 0.5;

console.log(raiz(20).toFixed(2));