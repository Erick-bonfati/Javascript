
const nome = "Erick";
const sobrenome = "Bonfati";

const falaNome = () => nome + ' ' + sobrenome;

exports.nome = nome; // AQUI ESTAMOS EXPORTANDO O MODULO INTEIRO, ASSIM NÃO PRECISAMOS DECLARAR DIRETO NA FUNÇÃO
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "O que eu quiser exportar" // TAMBÉM PODEMOS EXPORTAR O THIS, QUE POR PADRÃO JÁ É EXPORTADO SOZINHO

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;