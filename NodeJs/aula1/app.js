// EM VEZ DE IMPORTAR NOSSO ARQUIVO MOD1.JS não vamos requirir o módulo inteiro de exports

// const mod1 = require("./mod1");
// const sobrenome = mod1.sobrenome;

// OU

// const falaNome = require("./mod1").falaNome;

// MANEIRA IDEAL

const { nome, sobrenome, falaNome, Pessoa} = require("./mod1")

// console.log(mod1.nome, mod1.sobrenome); // Erick, Bonfati

// console.log(mod1.falaNome()); // Erick Bonfati

// console.log(falaNome()); // Erick Bonfati

console.log(nome, "+", sobrenome, "+", falaNome());


console.log(new Pessoa("Erick"))