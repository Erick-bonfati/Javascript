
let listaNumeros = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let inverteLista = [];

for(let i = listaNumeros.length - 1; i >= 0; i--) {
  inverteLista.push(listaNumeros[i])
}

console.log(inverteLista);

// EXISTE UM MÉTODO MAIS SIMPLES PARA REALIZAR A INVERSÃO DE UM ARRAY
let listaNumeros2 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const listaInvertida = listaNumeros2.toReversed();

console.log(listaInvertida);

//INVERTENDO UMA STRING

let listaString = "erick";

let inverteLista3 = "";

for(let i = listaString.length - 1; i >= 0; i--) {
  inverteLista3 += listaString[i];
}

console.log(inverteLista3);
