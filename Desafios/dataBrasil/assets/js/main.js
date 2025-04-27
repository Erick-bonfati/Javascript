
// exibir data completa no formato brasileiro - dificuldade - média

const resultado = document.querySelector('.resultado');
const date = new Date();

let mesFormatado;
let diaFormatado;

const diaMes = date.getMonth();
const mesAno = date.getDay();
const diaAtual = date.getDate();
const ano = date.getFullYear();

function zeroEsquerda(valor) {
  return valor >= 10 ? valor : `0${valor}`;
}

const getHora = zeroEsquerda(date.getHours());
const getMinutos = zeroEsquerda(date.getMinutes());

const arrayDia = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo", ];
const meses = ["Dezembro", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro" ];

for(let i = 0; i < meses.length; i++) {
  let dataFormat = meses[i];
  switch(mesAno) {
    case i:
      mesFormatado = meses[i];
      break;
  }
}

for(let i = 0; i < arrayDia.length; i++) {
  switch(diaMes) {
    case i:
      diaFormatado = arrayDia[i];
      break;
  }
}


resultado.innerHTML = `${diaFormatado}, ${diaAtual} de ${mesFormatado} de ${ano} às ${getHora}:${getMinutos}`;


// Agora de uma maneira ainda mais simples

const novaData = new Date();
const opcoes = {
  dateStyle: 'full',
  timeStyle: 'short'
}
const resultadoSimples = document.querySelector('.resultado-simples');

resultadoSimples.innerHTML = novaData.toLocaleString('pt-BR', opcoes);