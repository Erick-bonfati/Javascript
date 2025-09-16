
// O BABEL É UM COMPILAR E "TRADUTOR" do nosso código, ele serve para daptar nosso código a diferentes tipos de navegadores

// Em navegadores mais antigos, existem algumas funcionalidades que ainda não estão adaptadas para usar o javascript moderno, então neste caso, precisamos de alguma
//ferramenta para poder traduzir nosso código moderno para um código antigo

//TESTES e COMPILAÇÃO - para compilar e traduzir nosso código, utilize o comando: npx babel main.js -o bundle.js --presets=@babel/env

// PARA MONITORAR AS MUDANÇAS DO BABEL AO VIVO, ADICIONE ESTA LINHA NO PACKAGE.JSON: "babel": "babel ./main.js -o ./bundle.js --presets=@babel/env -w"
//e depois "NPM RUN BUILD"


const nome = "Luiz";
const obj = { nome };
const novoObj = { ...obj};

console.log(novoObj);

const novoTeste = "Olaaaa"