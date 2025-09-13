
document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href); // busca dados do href

    if(response.status !== 200) throw new Error("ERRO 404!"); // Caso a resposta da requisição seja difirente de 200, ou (status positivo), retorne um erro

    const html = await response.text(); // recebe dados de texto do href, que neste caso é o proprio HTML

    carregaResultado(html); // Exibe dados na pagina
  
  } catch(e) {
    console.log(e)
  }
  
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}


// FETCH JA RETORNA POR PADRÃO UM PROMISE
fetch('pagina2.html')
  .then(resposta => {
    if(resposta.status !== 200) throw new Error("ERRO 404")
      return resposta.text();
  })
  .then(html => console.log(html)) // lança o conteudo de texto do html
  .catch(e => console.error(e))