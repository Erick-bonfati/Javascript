const express = require("express");

const app = express(); 

const PORT = 3000; 

// http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=seila = ISSO SÃO QUERY STRINGS

app.use(express.urlencoded({ extended: true })) // ISSO SERVE PARA TRATAR REQUISIÇÕES POST

app.get('/', (req, res) => { 

  res.send(`
      <form action="/res" method="POST"> 
      Nome: <input type="text" name="nome">
      <button>Enviar</button>
    `)
})

app.get('/testes/:idUsuarios/:parametro', (req, res) => {
  console.log((req.params)); // pega os parametro da requisição
  //res.send(req.params); // exibe os valores do parametro dentro de um json
  console.log(req.query); // exibe os parametros da query, ex: nome=erick, sobrenome=bonfati
  //res.send(req.params.idUsuarios); // exibe na tela os parametro de id de usuarios
})

app.post('/res', (req, res) => { 
  console.log(req.body); // EXIBE UM JSON DA REQUISIÇÃO POST ENVIADA
  res.send(`Recebi o form: ${req.body.nome}`)
})

app.get('/contato', (req, res) => {
  res.send("Obrigado por entrar em contato")
})

app.listen(PORT, () => {
  console.log(`Servidor executando na porta http://localhost:${PORT}`) 
}); 


