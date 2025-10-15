// const HomeModel = require('../model/HomeModel');

// HomeModel.create({
//   titulo: "Um titulo de testes",
//   descricao: 'Uma descrição de testes'
// })
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e))

// HomeModel.find()
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e))
  
exports.paginaInicial = (req, res) => {
  // req.session.usuario = { nome: 'Erick', logado: true};
  // req.flash('info', 'Ola mundo');
  // req.flash('error', 'testeeeee de erro');
  // req.flash('success', 'Finalizei com sucesso');
  // console.log(req.flash('error'), req.flash('success'), req.flash('info')); // Retorno: testeeeee de erro, Finalizei com sucesso e Ola mundo!
  // console.log(req.session.usuario);

  res.render('index', { // linkamos um render com a pagina ejs
    titulo: 'Este será o titulo da página',
    numeros : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }); // usamos o render por conta dos views, ele encontra o arquivo "index.ejs" independente do local q estiver
  return;
}

exports.recebeForm = (req, res) => {
  res.send("Recebi o dado");
  return;
}