exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variavel local.';
  next();
} // MIDDLEWARES SERVEM PARA EXECUTAR CÓDIGOS EM TODO ESCOPO DO PROJETO, E PODEMOS EXECUTAR UM DE CADA VEZ SEPERANDO O TEMPO DE EXECUÇÃO COM NEXT()

exports.outroMiddleware = (req, res, next) => {
  next();
}

exports.checkCsurfError = (err, req, res, next) => { // SE O TOKEN ENVIADO ESTIVER COM ESSA NA VALIDAÇÃO ELE ENVIA ESSE ERRO NO FRONTEND
  if(err && "EBADCSRFTOKEN" === err.code) {
    return res.render('404'); // exibe a pagina 404.ejs
  }
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}