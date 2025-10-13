const HomeModel = require('../model/HomeModel');

HomeModel.create({
  titulo: "Um titulo de testes",
  descricao: 'Uma descrição de testes'
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e))

HomeModel.find()
  .then(dados => console.log(dados))
  .catch(e => console.log(e))
  
exports.paginaInicial = (req, res) => {
  res.render('index'); // usamos o render por conta dos views, ele encontra o arquivo "index.ejs" independente do local q estiver
}

exports.recebeForm = (req, res) => {
  res.send("Recebi o dado")
}