exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variavel local.';
  next();
} // MIDDLEWARES SERVEM PARA EXECUTAR CÓDIGOS EM TODO ESCOPO DO PROJETO, E PODEMOS EXECUTAR UM DE CADA VEZ SEPERANDO O TEMPO DE EXECUÇÃO COM NEXT()

exports.outroMiddleware = (req, res, next) => {
  next();
}