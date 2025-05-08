const numeros = [5, 7, 14, 56, 92, 3, 78, 45, 67, 99, 12, 34, 58, 71, 6];
const numerosPares = numeros.filter(valor => valor % 2 === 0) //Obter numeros pares
.map(valor => valor * 2) //Dobrar os valores pares
.reduce((acumulador,valor) => acumulador + valor) // Reduzir (somar tudo que foi dobrado)

console.log(numerosPares)