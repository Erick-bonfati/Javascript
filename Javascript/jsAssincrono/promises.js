
function rand(min, max) {
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => { // resolve = código executado com sucesso, reject = código com falha, não execute!
    if(typeof msg !== 'string') reject(new Error('Tipo de dado precisa ser string')); // se o tipo do parametros for diferente de string, nós vamos rejeitar
    setTimeout(() => {
      resolve(msg);
    }, tempo)
  });

}

esperaAi('Conexão com o BD', rand(1, 3)) // sempre que chamarmos um resolve e ele executar com sucesso, nós chamamos o then(), e quando o status for reject, nós chamamos o catch()
.then(resposta => { // aqui retornamos o parametro que obtivemos dentro da função espera ai, dentro do resolve(msg)
  console.log(resposta); // Conexão com o BD
  return esperaAi('Buscando dados na BASE', rand(1, 3)); // proximo resolve
})
.then(resposta => {
  console.log(resposta); // Buscando dados na BASE
  return esperaAi(2, rand(1, 3)); // proximo resolve
})
.then(resposta => {
  console.log(resposta) // Tratando os dados da BASE
})
.then(() => {
  console.log("Exibe dados na tela")
})
.catch(e => {
  console.log(e)
}); 

console.log('Isso sera exibido primeiro que qualquer coisa'); // percebemos que isso sempre será exibido primeiro que as promises, pois as promises precisam esperar uma condição para dar um retorno, e aqui nós damos um retorno direto