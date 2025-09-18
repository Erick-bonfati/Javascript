const express = require("express");
const routes = require('./routes');
const app = express(); 
const PORT = 3000; 

app.use(routes);

app.use(express.urlencoded({ extended: true })) // ISSO SERVE PARA TRATAR REQUISIÇÕES POST

app.listen(PORT, () => {
  console.log(`Servidor executando na porta http://localhost:${PORT}`) 
}); 


