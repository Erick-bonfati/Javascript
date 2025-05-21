
const pessoas = [
  {id: 2, nome: 'Maria'},
  {id: 3, nome: 'Luiz'},
  {id: 1, nome: 'Helena'},
];

// const novasPessoas = {};

// for(const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map();

for(const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa }); // aqui setamos a chave que queremos colocar e de qual valor buscar isso
}

console.log(novasPessoas); // Resultado abaixo:                                                                
// Map(3) {
//   2 => { id: 2, nome: 'Maria' },
//   3 => { id: 3, nome: 'Luiz' },
//   1 => { id: 1, nome: 'Helena' }
// }

console.log(novasPessoas.get(2)); // { id: 2, nome: 'Maria' } = retorna o id da pessoa "2"

for(const pessoas of novasPessoas) { // Retorna os valores dentro de um array separado
  console.log(pessoas);
}

for(const [identifier, {id, nome}] of novasPessoas) { // Retorna os valores fora de um array, ja formatado
  console.log(identifier, id, nome); // 2 2 Maria  /  3 3 Luiz  /  1 1 Helena 
}

for(const pessoas of novasPessoas.values()) { // Retorna apenas os valores
  console.log(pessoas);
}

for(const pessoas of novasPessoas.keys()) { // Retorna apenas as chaves geradas
  console.log(pessoas);
}

novasPessoas.delete(2); // Também podemos eliminar uma chave

console.log(novasPessoas)