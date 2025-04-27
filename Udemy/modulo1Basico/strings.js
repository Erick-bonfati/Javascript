

// Variavel de escape: \texto\

let umaString = "Um \"texto\"";

console.log(umaString);

// Strings também recebem indices;

//                01234567
let novaString = "Um texto";

console.log(novaString[4]); // e
console.log(novaString[2]); // " " -> retorna um espaço em branco, pois esse foi o valor do indice 2 que foi um espaço.

// concat -> concatena strings

let outraString = "Um texto";
let string2 = "bem grande";

// Ambas as opções aqui funcionariam
console.log(outraString.concat(' ', string2)); // "Um texto bem grande"
console.log(outraString.concat(' ', 'de', ' ', 'programação', ' ', string2)); // "Um texto de programação bem grande"
console.log(`${outraString} de programação ${string2}`); // "Um texto de programação bem grande"

// indexOf -> busca exatamente o indice do texto que estamos buscando 

let string3 = "Um texto";

console.log(string3.indexOf("e")); // 4 -> busca qual o indice que tem a palavra ou numero que especificamos
console.log(string3.indexOf("texto")); // 3 -> também retorna o primeiro indice que encontrar do texto que colocarmos
console.log(string3.indexOf("Um", 3)); // -1 -> tenta buscar o indice partindo do indice que indicarmos, aqui retorna -1, pois não encontrou nada
console.log(string3.indexOf("o", 3)); // 7

// lastIndexOf() = começa buscando o final da string para tras

// replace -> substitui uma coisa por outra

console.log(string3); // Um texto
console.log(string3.replace("Um", "Outro")); // Outro texto

// lenght -> retorna o tamanho total da string, mas esse não considera como um indice e sim o tamanho total, se o texto tem 9 caracteres, ele vai retornar 9 e não 8, porque não conta o zero

//                 012345678910234
const stringTam = "Eu sou um texto"

console.log(stringTam.length); // 15

for(let i = 0; i < stringTam.length; i++) {
  console.log(stringTam[i], i); //14
}

// split() -> Divide uma string em varias partes e junta num array com o delimitador especificado

let stringSeparada = "O rato roeu a roupa do rei de roma";

console.log(stringSeparada.split()); [ 'O rato roeu a roupa do rei de roma' ]; // [ 'O rato roeu a roupa do rei de roma' ]
console.log(stringSeparada.split(" ")); // ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'roma']
console.log(stringSeparada.split(" ", 2)); // ['O', 'rato'] -> aqui limitamos para ele cortar os indices apenas duas vezes

// toUpperCase() e toLowerCase() = retorna a string em maisculo ou minusculo