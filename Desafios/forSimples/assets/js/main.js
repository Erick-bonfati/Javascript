
const elementos = [
  {tag: 'p', texto: "Frase 1"},
  {tag: 'div', texto: "Frase 2"},
  {tag: 'footer', texto: "Frase 3"},
  {tag: 'section', texto: "Frase 4"}
]

const body = document.querySelector(".container")

for(let i = 0; i < elementos.length; i++) {
  body.innerHTML += `<${elementos[i].tag}> ${elementos[i].tag} : ${elementos[i].texto} <${elementos[i].tag}>`
}

// Outro método um pouco mais complexo

const elementos2 = [
  {tag: 'p', texto: "Frase 1"},
  {tag: 'div', texto: "Frase 2"},
  {tag: 'footer', texto: "Frase 3"},
  {tag: 'section', texto: "Frase 4"}
]

const container2 = document.querySelector(".container2")
const div = document.createElement('div'); // cria um elemento "div"

for(let i = 0; i < elementos2.length; i++) {
  let {tag, texto } = elementos2[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerHTML = texto;
  div.appendChild(tagCriada); // appendChild = adiciona dentro de um elemento alguma coisa, aqui estamos adicionando as tags que criamos
}

container2.appendChild(div);