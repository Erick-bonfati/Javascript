const horario = document.querySelector(".horario");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  })
}

function iniciaRelogio() {
  timer = setInterval(function() {
    segundos++;
    horario.innerHTML = criaHoraDosSegundos(segundos)
  }, 1000);
}


document.addEventListener('click', function(e) {
  const el = e.target;

  if(el.classList.contains('iniciar')) { // se existe a classe, executamos...
    horario.classList.remove('pausado');
    horario.classList.remove('zerado');
    clearInterval(timer);
    iniciaRelogio();
  }

  if(el.classList.contains('pausar')) { // se existe a classe, executamos...
    horario.classList.add('pausado');
    horario.classList.remove('zerado');
    clearInterval(timer);
  }

  if(el.classList.contains('zerar')) { // se existe a classe, executamos...
    horario.classList.add('zerado');
    clearInterval(timer);
    segundos = 0;
    horario.innerHTML = "00:00:00";
  }
})