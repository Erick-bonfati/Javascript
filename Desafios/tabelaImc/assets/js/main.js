const form = document.querySelector('.form');

function setImc(imc) {
  const imcs = ["Abaixo do peso", "Normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]

  return imcs[imc];
}

function calculaImc() {

  let peso = Number(document.querySelector('.peso').value);
  let altura = Number(document.querySelector('.altura').value);
  const resultado = document.querySelector('.resultado');
  const resultadoTeste = document.querySelector('.resultado-teste');

  if(isNaN(peso) || isNaN(altura) ) {
    resultado.innerHTML = `Você deve digitar um numero válido`;
    document.querySelector('.peso').value = "";
    document.querySelector('.altura').value = "";
    return;
  }

  const valorImc = peso / (altura ** 2);

  const imc = valorImc.toFixed(2);

  if(valorImc <= 18.4) {

    resultadoTeste.innerHTML = `Seu IMC é ${imc} (${setImc(0)})`;
  } else if(valorImc >= 18.5 && valorImc <= 24.9) {
    resultadoTeste.innerHTML = `Seu IMC é ${imc} (${setImc(1)})`;
  } else if(valorImc >= 25 && valorImc <= 29.9) {
    resultadoTeste.innerHTML = `Seu IMC é ${imc} (${setImc(2)})`;
  } else if(valorImc >= 30 && valorImc <= 34.9) {
    resultadoTeste.innerHTML = `Seu IMC é ${imc} (${setImc(3)})`;
  } else if(valorImc >= 35 && valorImc <= 39.9) {
    resultadoTeste.innerHTML = `Seu IMC é ${imc} (${setImc(4)})`;
  } else if(valorImc > 40)  {
    resultadoTeste.innerHTML = `Seu IMC é ${imc} (${setImc(5)})`;
  } else {
    resultadoTeste.innerHTML = `Você deve digitar um valor válido`;
  }

  document.querySelector('.peso').value = "";
  document.querySelector('.altura').value = "";
}


form.addEventListener("submit", function(e) {
  e.preventDefault();

  calculaImc();

})