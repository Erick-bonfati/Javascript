

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1.concat(a2, 'Erick'); // concatenando o a1 com o a2 e também adicionando um nome no fim

console.log(a3); // [ 1, 2, 3, 4, 5, 6, 'Erick' ]

// Também podemos concatenar com ... rest operator

const a4 = [...a1, ...a2];

console.log(a4); // [ 1, 2, 3, 4, 5, 6 ]