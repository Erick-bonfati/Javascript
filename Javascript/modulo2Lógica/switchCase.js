

const data = new Date();
const diaSemana = data.getDay();

let diaSemanaTexto;

switch (diaSemana) {
  case 0:
    diaSemanaTexto = "Domingo";
    break;
  case 1:
    diaSemanaTexto = "Segunda-feira";
    break;
  case 2:
    diaSemanaTexto = "Terça-feira";
    break;
  case 3:
    diaSemanaTexto = "Quarta-feira";
    break;
  case 4:
    diaSemanaTexto = "Quinta-feira";
    break;
  case 5:
    diaSemanaTexto = "Sexta-feira";
    break;
  case 6:
    diaSemanaTexto = "Sabado";
    break;
  default:
    diaSemanaTexto = "";
    break;
}

console.log(diaSemanaTexto);

const diaMes = data.getMonth();
let diaMesTexto;

switch (diaMes) {
  case 0:
    diaMesTexto = "Janeiro";
    break;
  case 1:
    diaMesTexto = "Fevereiro";
    break;
  case 2:
    diaMesTexto = "Março";
    break;
  case 3:
    diaMesTexto = "Abril";
    break;
  case 4:
    diaMesTexto = "Maio";
    break;
  case 5:
    diaMesTexto = "Junho";
    break;
  case 6:
    diaMesTexto = "Julho";
    break;
  case 7:
    diaMesTexto = "Agosto";
    break;
  case 8:
    diaMesTexto = "Setembro";
    break;
  case 9:
    diaMesTexto = "Outubro";
    break;
  case 10:
    diaMesTexto = "Novembro";
    break;
  case 11:
    diaMesTexto = "Dezembro";
    break;
  default:
    diaMesTexto = "";
    break;
}

console.log(diaMesTexto);

function datasFormatadas() {
  return `${diaSemanaTexto} dia ${data.getDate()} de ${diaMesTexto} de ${data.getFullYear()}`
}

console.log(datasFormatadas());


// Podemos fazer o retorno do switch case dentro de uma função também

function getDiaSemana(diaSemana) {
  let diaSemanaTexto2;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto2 = "Domingo";
      return diaSemanaTexto2;
    case 1:
      diaSemanaTexto2 = "Segunda-feira";
      return diaSemanaTexto2;
    case 2:
      diaSemanaTexto2 = "Terça-feira";
      return diaSemanaTexto2;
    case 3:
      diaSemanaTexto2 = "Quarta-feira";
      return diaSemanaTexto2;
    case 4:
      diaSemanaTexto2 = "Quinta-feira";
      return diaSemanaTexto2;
    case 5:
      diaSemanaTexto2 = "Sexta-feira";
      return diaSemanaTexto2;
    case 6:
      diaSemanaTexto2 = "Sabado";
      return diaSemanaTexto2;
    default:
      diaSemanaTexto2 = "";
      return diaSemanaTexto2;
  }
}

const novoDiaSemana = data.getDay();
const diaSemanaNovo = getDiaSemana(novoDiaSemana);

console.log(diaSemanaNovo);