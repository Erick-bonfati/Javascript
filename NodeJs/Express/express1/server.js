const express = require("express");

const app = express(); // express é uma maneira de executar um servidor na web

const PORT = 3000; // Define porta que vai ser usada no server express

// http://meusite.com/ <- GET -> Entregue a página raiz
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => { // TODA ROTA RECEBE UMA REQUISIÇÃO(cliente) E UMA RESPOSTA(servidor)
  //res.send("Hello world"); // envia resposta para o cliente assim q ele acessa a rota "/"
  res.send(`
      <form action="/res" method="POST"> 
      Nome: <input type="text" name="nome">
      <button>Enviar</button>
    `) // no formulario acima, nós criamos uma rota que o formulario iria enviar o método POST, o "/res"
})

app.post('/res', (req, res) => { // o post captura uma requisição da rota "/res"(que foi realizado com POST) e envia os dados, seja para um database, um html e etc...
  res.send("Recebi o form")
})

app.get('/contato', (req, res) => {
  res.send("Obrigado por entrar em contato")
})

app.listen(PORT, () => { // Coloca o express para executar na porta 3000 da nossa maquina
  console.log(`Servidor executando na porta http://localhost:${PORT}`) 
}); 

