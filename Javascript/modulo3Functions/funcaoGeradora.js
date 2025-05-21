

// As funções geradoras são como executar o código com determinadas pausas


function* geradora1() { // usamos o * para simbolizar que é uma func geradora
  // Código qualquer...
  yield 'Valor 1'; // em vez de return usamos yield, e cada vez que passarmos um "next" ele vai para o proximo yield
  // Código qualquer...
  yield 'Valor 2';
  // Código qualquer...
  yield 'Valor 3';
}

const g1 = geradora1();

// console.log(g1.next()); // { value: 'Valor 1', done: false } // valor e o done verifica se ja terminamos o gerador, e como temos mais dois geradores lá dentro ele passa false;
// console.log(g1.next()); // { value: 'Valor 2', done: false }
// console.log(g1.next()); // { value: 'Valor 3', done: false }
// console.log(g1.next()); // { value: undefined, done: true } // a partir daqui acabaa os yield


// Também podemos iterar sobre os valores
for (let valor of g1) {
  console.log(valor); // Valor 1, Valor 2, Valor 3, ele entrega até o ultimo valor que ele encontra
};

console.log("###########")

// Criando um gerador infinito, aqui o yield sempre aumenta a cada repetição
function* geradora2() {
  let i = 0;
  
  while(true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next().value); // 0 
console.log(g2.next().value); // 1
console.log(g2.next().value); // 2
console.log(g2.next().value); // 3

console.log("###########")


// Criando um gerador que delega tarefas para outro gerador
function* geradora3() { 
  yield 0; 
  yield 1;
  yield 2;
}

function* geradora4() { 
  yield* geradora3(); // aqui primeiro vamos executar todos os yields da geradora 3 e depois vai continuar gerando os yields na geradora 4
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();

for(let valor of g4) {
  console.log(valor);
}

function* geradora5() {
  yield function() {
    console.log('Vim do y1');
  }

  yield function() {
    console.log('Vim do y2');
  }
}

const g5 = geradora5();

const func1 = g5.next().value;
const func2 = g5.next().value;

func1(); // Vim do y1
func2(); // Vim do y2