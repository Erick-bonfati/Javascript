require('dotenv').config();

const express = require("express");
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');
const app = express(); 
const mongoose = require('mongoose');
const connectionString = process.env.DATABASE_CONNECTION;

mongoose.connect(connectionString)
  .then(() => {
    console.log('Conectei a base de dados')
    app.emit('pronto'); // emit - indica que o banco de dados está pronto para aceitar requisições
  })
  .catch(e => console.log(e))

// Esses três serviços abaixo servem para salvar dados no cliente no cache da pagina, ou seja o cliente fez login, e sempre que ele voltar na pagina
// o sistema vai identificar que o cache que foi enviado é do cliente tal tal tal....
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const PORT = 3000; 

app.use(express.urlencoded({ extended: true })) // ISSO SERVE PARA TRATAR REQUISIÇÕES POST

app.use(express.static(path.resolve(__dirname, 'public'))) // AQUI NOS SETAMOS A PASTA PUBLIC COMO UMA PASTA DE CAMINHOS ESTATICOS

const sessionOptions = session({
  secret: '12039761809731209783198276',
  store: MongoStore.create({
    mongoUrl: connectionString
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // Total de 7 dias
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

// NPM I EJS - Para instalar o EJS
app.set('views', path.resolve(__dirname, 'src', 'views')) // SET E CARREGA CAMINHO PARA AS VIEWS
app.set('view engine', 'ejs') // SETA ENGINE QUE OS VIEWS VÃO UTILIZAR

app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => { // assim que receber o emit 'pronto' ele permite executar o server
  app.listen(PORT, () => {
  console.log(`Servidor executando na porta http://localhost:${PORT}`) 
  });
})

 


