const express = require('express');

const route = express.Router();

const home = require('./src/controllers/homeController')

//Rotas da homePage
route.get('/', home.paginaInicial);

route.post('/res', home.recebeForm);

module.exports = route;