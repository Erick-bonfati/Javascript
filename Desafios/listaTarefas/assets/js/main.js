const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar');
  li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  criaBotaoApagar(li);
  salvarTarefas();
}

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

inputTarefa.addEventListener('keypress', function(e) {
  if(e.keyCode === 13) {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
  }
})

btnTarefa.addEventListener('click', function(e) {
  if(!inputTarefa.value) return;

  criaTarefa(inputTarefa.value);
  limpaInput();
})

document.addEventListener('click', function(e) {
  const el = e.target;

  if(el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
})

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for(let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;

    tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // remove o button apagar de qualquer li que a gente clicar e trim() -> remove qualquer espaço nas pontas do texto
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefaJSON = JSON.stringify(listaDeTarefas); // essa é uma string que é criada no formato JSON, convertemos ela em array e  usamos ela para conseguir salvar dados no nosso navegador

  localStorage.setItem('tarefas', tarefaJSON); // aqui nós setamos no localStorage do navegador que estamos setando um item com nome "tarefas" e que recebe o valor da variavel JSON que criamos
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas'); // buscando as tarefas que criamos na função salvarTarefas
  const listaDeTarefas = JSON.parse(tarefas); // convertendo nossa array para virar novamente uma string
  
  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

adicionaTarefasSalvas();

