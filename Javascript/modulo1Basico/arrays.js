
// Nos arrays, nos acessamos o indice determinado pela virgula e não por cada caractere como nas strings

//                0        1       2
const alunos = ['Luiz', 'Maria', 'Joao'];

console.log(alunos[1])

//alunos[0] = 'Eduardo';

alunos.push("Erick"); // push -> adiciona um novo elemento no final do array
alunos.push("Rods"); 
alunos.unshift("Josefina"); //unshifs -> adiciona um novo elemento no começo do array
alunos.pop(); // pop -> remove o elemento final do array, nesse caso o "Rods"
alunos.shift(); // shift -> remove o elemento do começo do array, nesse caso a "Josefina"
delete alunos[1]; // deleta um indice especifico, porem o lugar onde foi deletado o indice, ficara vazio = undefined

console.log(alunos.slice(0, 3)); // fatia o array e retorna apenas do indice zero até o indice 2, lembrando que o ultimo não conta por isso colocamos 3 ali

console.log(alunos);