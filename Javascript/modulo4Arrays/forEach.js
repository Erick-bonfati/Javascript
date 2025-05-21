
// Outra maneira de iterar e só funcionar em arrays

const a1 = [10,20,30,40,50,60,70,80,90];

// for(let valor of a1) {
//   console.log(valor);
// }

// É a mesma coisa que um for
a1.forEach(function(valor, indice, array){
  console.log(valor, indice)
});

let total = 0;

a1.forEach(valor => {
  total += valor;
})

console.log(total);