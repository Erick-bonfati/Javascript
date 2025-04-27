

console.log("Hello world");


// Tipo de dados em Javascript 


const nome = "Erick"; // string
const num1 = 10; // number
const num2 = 10.10; //number
let nomeAluno; // undefined = não aponta para nenhum local na memoria até ser dado algum valor
let sobrenomeAluno = null; // Nulo -> também não aponta para nenhum local na memoria
const aprovadoReprovado = true; // Boolean -> tipo de valor que retorna true ou false

// typeOf -> retorna o tipo do dado 

console.log(typeof aprovadoReprovado, aprovadoReprovado); // boolean
console.log(typeof sobrenomeAluno, sobrenomeAluno); // object -> valores nulos são considerados objetos
console.log(typeof nomeAluno, nomeAluno); // undefined

// Arrays -> é uma lista ordenadas de dados que podem ter diferente valores, porem normalemente elas constumam ser do mesmo valor, ex: number

         //0, 1, 2
const a = [1, 2, 3]; // array de numeros
console.log(typeof a, a); // todo array também é considerado um objeto

console.log(a[2]); // 3

const b = a; // atribuindo o valor de um array para outro array, uma observação é que sempre que a const a mudar a b também vai pois estamos apenas copiando tudo de a

     //3,  4,  5, 6 --> Como no outro array temos apenas 3 indices, a continuação do indices aqui seria a partir do ultimo de lá
b.push(30, 60, 2, 4);

console.log(b);

console.log(b[5]);

let c = 2;
let d = c;

c = 3;

console.log(c, d); // Retorno: 3, 2 --> isso acontece pois o valor de c ainda era 2 quando declaramos a let d;