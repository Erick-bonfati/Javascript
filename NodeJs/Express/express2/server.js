const express = require("express");

const app = express(); 

const PORT = 3000; 


app.get('/', (req, res) => { 

  res.send(`
      <form action="/res" method="POST"> 
      Nome: <input type="text" name="nome">
      <button>Enviar</button>
    `)
})

app.post('/res', (req, res) => { 
  res.send("Recebi o form")
})

app.get('/contato', (req, res) => {
  res.send("Obrigado por entrar em contato")
})

app.listen(PORT, () => {
  console.log(`Servidor executando na porta http://localhost:${PORT}`) 
}); 


//INSTALANDO LIB NODEMOM - Serve para realizar as alterações ao vivo no nosso site

// Para executar, alterar "start" de node para "nodemon" e iniciar com " npm run start ou npm nodemon server.js"