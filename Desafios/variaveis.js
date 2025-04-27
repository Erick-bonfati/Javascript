let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// let varATemp = varA;
// varA = varB;
// varB = varC;
// varC = varATemp;

// console.log(varA, varB, varC); // B C A


[varA, varB, varC] = [varB, varC, varA]; // Aqui estamos reatribuindo os valores das variaveis por meio de um array

console.log(varA, varB, varC); // B C A