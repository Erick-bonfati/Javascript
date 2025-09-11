const texto = "Hoje é um dia bonito, dia que ficara na minha memoria, um dia que hoje me sinto feliz, é muito legal que hoje posso me lembrar de tudo, e ficara para sempre guardado no coração"

const palavras = texto
  .toLowerCase()
  .replace(/[.,!?;:()"]/g, "") // remove sinais simples de pontuação
  .trim()
  .split(/\s+/); // split por qualquer sequência de espaços

const contaOcorrencia = {};

for (const palavra of palavras) { // for...of itera os valores (as palavras)
  contaOcorrencia[palavra] = (contaOcorrencia[palavra] || 0) + 1;
}

console.log("Número de caracteres:", texto.length);
console.log("Número de palavras:", palavras.length);
console.log("Ocorrências de cada palavra:", contaOcorrencia);
