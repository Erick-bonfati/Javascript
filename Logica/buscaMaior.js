let listaNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let maiorNumero = 0;

for (let i = 1; i < listaNumeros.length; i++) {
  if (listaNumeros[i] > maiorNumero) {
    maiorNumero = listaNumeros[i];
  }
}

console.log(maiorNumero);