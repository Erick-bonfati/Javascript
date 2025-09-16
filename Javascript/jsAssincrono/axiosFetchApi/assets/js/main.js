
// fetch('pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json => carregaElementosPage(json));

// Axios ajuda para resumir o fetch, ele ja retorna a resposta com os dados sendo enviados para a nossa função, então não precisamos especificar mais uma requisição para capturar o json
axios('pessoas.json')
   .then(resposta => carregaElementosPage(resposta.data))

  
function carregaElementosPage(json) {
  const table = document.createElement('table');
  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    table.appendChild(tr)
  }

  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table)

}