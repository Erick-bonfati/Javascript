// Valor por referência

//
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];

const novo = nomes.slice(1, 3); // fatia o array, começa do indice 1, e vai até o 3, porem ele nunca considera o ultimo indice, então se quiser o indice 2, coloque o final como 4

console.log(novo); // [ 'Maria', 'Joana' ]

const nome = 'Erick bonfati Farias';

const nomeSeparado = nome.split(' ');

console.log(nomeSeparado); // [ 'Erick', 'bonfati', 'Farias' ]

const novoNome = ['Erick', 'Bonfati', 'Farias'];
const nomeJunto = novoNome.join(' '); // Junta todo o array e o transforma numa string, separando por espaços

console.log(typeof nomeJunto, ' : ',  nomeJunto);