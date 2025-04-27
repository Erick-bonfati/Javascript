
// NaN - Not a number -> valor retornado quando fazemos alguma conta incorreta ou quando o valores que deveriam ser numbero não batem

const num1 = 10;
const num2 = 'L5';

console.log(num1 + num2); // concatena o numero com a string: 10L5
console.log(num1 * num2); // retorna: NaN

// Para resolver esse problema de tipos de dados, podemos apenas declarar o tipo da variavel que estamos usando, ex:


const num3 = 10;

const num4 = parseInt("20"); // Converte para int

console.log(num3 + num4); //retorn: 30 --> percebe que neste caso as strings não são concatenadas

// Também podemos converter para os outros tipos de dados restantes, como:

const convert = 1020.15032;
const float = parseFloat("10.15002")
const string = convert.toString(); // Converte o numero para string

console.log(float, string); // a string vira float e o float vira string, retorno: "10.15002" 1020.15032