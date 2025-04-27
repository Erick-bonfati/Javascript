let teste = document.getElementsByName('teste');

// document.write("") ou window.document.write("") --> escreve alguma coisa na janela do navegador

//document.write("Olá");

// document.body.innerHTML = conteudo --> mesmo exemplo porem aqui conseguimos manipular melhor

const nome = prompt("Digite seu nome:");

teste.innerHTML  = `O seu nome é ${nome}`;


document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA A no seu nome? ${nome.indexOf("a")}<br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA A no seu nome? ${nome.lastIndexOf("a")}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3, nome.length)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()}<br />`;
