function funcao() {
  let total = 0;
  for (let argumento of arguments) { // arguments -> recebe os argumentos que foram passados para a função
    total  += argumento;
  }

  console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f); // 1 2 3 undefined undefined undefined -> quando não temos um valor para o parametro ele fica como undefined
}

funcao2(1, 2, 3);

function funcao3(a, b = 2, c = 4) { // caso não tiver valor declarado, este vai ser o valor padrão
  console.log(a + b + c); // 6
}

funcao3(1, undefined, 3); // declaramos o segundo valor como undefined pois estamos colocando um valor padrão nos parametros da função

// Desestrutura vai atribuição com funções e com um objeto, a mesma coisa serveria para um array-vetor

function funcao4({nome, sobrenome, idade}) { 
  console.log(nome, sobrenome, idade); // Erick Bonfati 20
}

let obj = { nome: 'Erick', sobrenome: 'Bonfati', idade: 20};

funcao4(obj);


function conta(operador, acumulador, numeros) {
  for(let numero of numeros) {
    if(operador === '+') acumulador += numero;
    if(operador === '-') acumulador -= numero;
    if(operador === '*') acumulador *= numero;
    if(operador === '/') acumulador /= numero;
  }

  console.log(acumulador);
  //
}

conta('+', 1, [20, 30, 40, 50]);