const multiplicacao = require('./mod1')

console.log(multiplicacao(2, 3));

//__filename - NOME DO ARQUIVO ATUAL = app.js

//__dirname - NOME DA PASTA ATUAL = AULA2

console.log(__filename); // c:\Users\usuario\Desktop\Cursos\EstudosJS\Javascript\NodeJs\aula2\app.js
console.log(__dirname); // c:\Users\usuario\Desktop\Cursos\EstudosJS\Javascript\NodeJs\aula2

const path = require('path');

console.log(path.resolve(__dirname)); // Essa é a maneira mais correto, pois ele pega o caminho da pasta atual e não o caminho completo, caso estejamos trabalhando com windows e linux

//RESULTADO: c:\Users\usuario\Desktop\Cursos\EstudosJS\Javascript\NodeJs\aula2

console.log(path.resolve(__dirname, "..", "..")); // Podemos retornar páginas de acordo com o path atual

//Resultado: c:\Users\usuario\Desktop\Cursos\EstudosJS\Javascript