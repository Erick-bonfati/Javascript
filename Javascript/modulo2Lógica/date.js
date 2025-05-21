

// datas em javascript

const data = new Date(); // busca a data atual com todas infos, data, hora, minuto, sec, milisec

const data2 = new Date(0); // 01/01/1970 Timestamp unix ou época unix

console.log(data.toString()); // convertemos a data para string

console.log('Dia:', data.getDate()); // Pega o dia do mes
console.log('Dia semana:', data.getDay()); // Pega o indice do dia da semana, 0 - Domingo, 6 - Sábado
console.log('Ano:', data.getFullYear()); // Pega o ano atual
console.log('Hora atual:', data.getHours()); // Pega o horario atual com base no horario UTC Brasilia
console.log('Minuto atual:', data.getMinutes()); // Pega os minutos atuais
console.log('Mês atual:', data.getMonth()); // Pega o mês, 0 - Janeiro, 11 - Dezembro
console.log('Milisegundo atual:', data.getMilliseconds()); // Pega o milissegundos atuais


function formataData() {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const sec = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano}/ ${hora}:${min}:${sec}`;
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

console.log(formataData());