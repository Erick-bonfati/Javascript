

function verificaDivisao(numero) {
  if(typeof numero !== "number") return numero;

  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if(numero % 5 === 0) return "Buzz";
  if(numero % 3 === 0) return "Fizz";
  return numero;

}

console.log(verificaDivisao("a")); // return: a

for(let n = 0; n < 100; n++) {
  console.log(n, verificaDivisao(n));
}