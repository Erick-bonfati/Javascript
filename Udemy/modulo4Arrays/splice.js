

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

nomes.splice(0, 2); // de onde vamos começar, quantos elementos vamos apagar e por ultimo quais são os elementos que vamos adicionar, ex: splice(indice, delete, elem1, elem2, elem3);

console.log(nomes); // [ 'Eduardo', 'Gabriel', 'Júlia' ] -> eliminamos Maria e João

nomes.splice(0, 0, 'Rods', 'Roberto'); // Começando do elementos zero de novo, vamos adicionar Rods e Roberto

console.log(nomes); // [ 'Rods', 'Roberto', 'Eduardo', 'Gabriel', 'Júlia' ]