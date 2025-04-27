
//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];

nomes[2] = 'Joao';

console.log(nomes); // [ 'Eduardo', 'Maria', 'Joao' ]

delete nomes[2];

console.log(nomes) // [ 'Eduardo', 'Maria', <1 empty item> ]


console.log("##########")


const nomes2 = ['Eduardo', 'Maria', 'Joana'];
console.log(nomes2.length)

const novo = [...nomes2]; // estamos copiando as propriedades do nomes e sem alterar as prioriedades de nomes caso a gente alterar algo de novo

const removidoFinal = novo.pop(); // exclui ultimo
const removidoComeco = novo.shift(); // exclui a primeiro

console.log(nomes2); // [ 'Eduardo', 'Maria', 'Joana' ]
console.log(novo, removidoComeco, removidoFinal ); // [ 'Maria' ] Eduardo, Joana -> aqui exibimos tanto o array que teve seus elementos removidos quanto o proprio elemento removido que salvamos numa const

novo.unshift('Rods'); // Adiciona começo
novo.push('Erick'); // Adiciona final

//                       0        1        2
console.log(novo); // ['Rods', 'Maria', 'Erick' ]


