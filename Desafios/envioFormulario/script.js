const form = document.querySelector('.form');

let pessoa = [];

function enviar() {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.querySelector('.nome').value;
    const sobrenome = document.querySelector('.sobrenome').value;
    const idade = document.querySelector('.idade').value;
    const peso = document.querySelector('.peso').value;
    const altura = document.querySelector('.altura').value;
    const resultado = document.querySelector('.resultado');

    pessoa.push({
      nome: nome,
      sobrenome: sobrenome,
      idade: idade,
      peso: peso,
      altura: altura
    });

    console.log(pessoa);

    resultado.innerHTML = `<p> Seu nome é ${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso} quilos e tem ${altura}cm de altura`;
  })
}

enviar();
