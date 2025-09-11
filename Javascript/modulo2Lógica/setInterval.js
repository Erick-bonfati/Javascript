// Funções para controlar datas

function mostraHora() {
  let data = new Date();

  return data.toLocaleString("pt-BR", {hour12: false});
}

const timer = setInterval(function() { // seta um interval que executa determinada funcao a cada tanto tempo...
  console.log(mostraHora());
}, 1000);

setTimeout(function() { // seta um timeout para parar de executar o setInterval, aqui colocamos para parar daqui a 3 segundos
  clearInterval(timer);
}, 3000);

setTimeout(function() { // também podemos usar para apenas executar uma vez apenas o que definirmos
  console.log("Olá mundo!");
}, 5000);