

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') {
      reject(false);
      return;
    } 
    setTimeout(() => {
      resolve(msg);
      return;
    }, tempo)
  });

}

// Promise.all 
// Promise.race
// Promise.resolve
// Promise.reject

function baixaPagina() {
  const emCache = true;

  if(emCache) {
    return Promise.resolve('Página em cache'); // Aqui nós ja entregamos a promesa resolvida, aqui ela cai no then()
    //return Promise.reject('Página em cache'); // aqui rejeitamos a promesa, então ela cai no catch()
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
.then(dadosPagina => {
  console.log(dadosPagina)
})
.catch(e => console.log(e))

const promises = [
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
];

Promise.all(promises) // retorna todas as promises de uma vez, então ele espera o retorno de cada uma, e retorna na sequencia declarada no array
  .then(function(valor) {
    console.log(valor);
  })
  .catch(function(erro) {
    console.log(erro);
  })

Promise.race(promises) // retorna todas o primeiro valor que for resolvido, porem ele ainda executa o restante das promesas, só não exibe
  .then(function(valor) {
    console.log(valor);
  })
  .catch(function(erro) {
    console.log(erro);
  })