let num1 = 10.323212311; //number
let num2 = 2.5 // number

// console.log(num1.toString() + num2); // retorno: 102.5 -> concatena a string com o numero

// num1 = num1.toString();

// console.log(typeof num1); // string

console.log(num1.toFixed(2)); // 10.32

console.log(Number.isInteger(num1)); // false -> retorna verdadeiro ou falso para ver se o numero é inteiro ou não

let temp = num1 * "Ola";

console.log(Number.isNaN(temp)); // true -> verifica se o numero é um NaN - Not a number

// sobre o retorno de numeros

let n1 = 0.7;
let n2 = 0.1;

console.log( n1 + n2); // 0.7999999999999999

n1 += n2;

n1 = parseFloat(n1.toFixed(2)); // Convertemos para float e usamos toFixed para fixar o valor mais preciso, como um 0.8

console.log(n1); // 0.8
console.log(Number.isInteger(n1)); // false

// Objetos Math

let numero1 = 9.52165;
// let numero2 = Math.floor(numero1); // Arredonda para o numero inteiro mais baixo, ex: 9.52165 == 9
// let numero2 = Math.ceil(numero1); // Arredonda para cima, ex: 9.52165 == 10
let numero2 = Math.round(numero1); // Arredonda para o numero mais proximo, se for 9.6 vira 10, se for 9.4 vira 9

console.log(numero2); 

console.log(Math.max(1,2,3,4,5, 60, 540, 20, 204, 1000, 2314512431, 23131, 2100)); // 2314512431 -> Retorna o maior numero entre os que ele encontrou
console.log(Math.min(1,2,3,4,5, 60, 540, 20, 204, 1000, 2314512431, 23131, 2100)); // 1 -> Retorna o menor numero entre os que ele encontrou

console.log(Math.random()); //Gera um numero aleatorio com varias casas decimais

let aleatorio = Math.round(Math.random() * (100 - 1) + 1); // logica para gerar um numero aleatorio entre 100 e 1 e também para arredondar para o numero mais proximo

//aleatorio = parseInt(aleatorio); // converte para int

console.log(aleatorio);


let raizNum = 25;
console.log(raizNum ** 0.5); // 5 -> Pega a raiz quadrada de qualquer numero