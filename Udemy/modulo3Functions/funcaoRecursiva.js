
// Função recursiva é uma função que ela mesma se chama de volta

function recursiva(max) {
  if(max >= 10) return; // se for maior que 10, para a função
  max++; // adiciona 1 no valor
  console.log(max); // exibe
  recursiva(max); // chama novamente a função com o novo valor maximo, então caso o valor inicial fosse 1, agora vai ser dois, e depois vamos ir fazendo a lógica para ela ir se chamando
}

recursiva(0);  // primeiro valor