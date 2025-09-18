const express = require("express");
const routes = require('./routes');
const path = require('path');

const app = express(); 
const PORT = 3000; 

app.use(express.urlencoded({ extended: true })) // ISSO SERVE PARA TRATAR REQUISIÇÕES POST

app.use(express.static(path.resolve(__dirname, 'public'))) // AQUI NOS SETAMOS A PASTA PUBLIC COMO UMA PASTA DE CAMINHOS ESTATICOS

// NPM I EJS - Para instalar o EJS
app.set('views', path.resolve(__dirname, 'src', 'views')) // SET E CARREGA CAMINHO PARA AS VIEWS
app.set('view engine', 'ejs') // SETA ENGINE QUE OS VIEWS VÃO UTILIZAR

app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor executando na porta http://localhost:${PORT}`) 
}); 


