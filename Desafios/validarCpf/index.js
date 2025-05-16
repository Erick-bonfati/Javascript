
// 705.484.450-52 070.987.720-03
let cpf = "144.360.799"
let limpaCpf = cpf.replace(/\D+/g, '');
let cpfIncompleto = Array.from(limpaCpf)
let contador = 10
let soma = 0
let acumulador = 0

for(let numero in cpfIncompleto) {
  acumulador = cpfIncompleto[numero] * contador
  contador--;
  soma += acumulador
}

function pegarNum1(total) {
  let calculaTotal = 11 - (total % 11)
  if(calculaTotal > 9) {
    return 0;
  } else {
    return calculaTotal;
  }
}

const digito1 = pegarNum1(soma)

cpfIncompleto.push(digito1);

contador = 11
soma = 0
acumulador = 0

for(let numero in cpfIncompleto) {
  acumulador = cpfIncompleto[numero] * contador
  contador--;
  soma += acumulador
}

function pegarNum2(total) {
  let calculaTotal = 11 - (total % 11)
  if(calculaTotal > 9) {
    return 0;
  } else {
    return calculaTotal;
  }
}

const digito2 = pegarNum2(soma);

cpfIncompleto.push(digito2);

console.log(cpfIncompleto.join(''))
