exports.paginaInicial = (req, res) => {
  res.render('index'); // usamos o render por conta dos views, ele encontra o arquivo "index.ejs" independente do local q estiver
}

exports.recebeForm = (req, res) => {
  res.send("Recebi o dado")
}