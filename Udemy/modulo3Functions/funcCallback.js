
// Funções callback são funções que são executadas quando uma ação ocorre ou finalizada a gente executa ela

function random(min = 1000, max = 3000) {
  return Math.floor(Math.random() * (max - min) + min);
}

function f1(callback) {
  setTimeout(function() { // isso é uma função callback
    console.log('f1');
    if(callback) callback(); // este é um callback que verifica se existe um callback dentro do argumento da funcao f1, e caso existir ele vai rodando um atras do outro na sequencia que for declarado
  }, random());
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if(callback) callback();
  }, random());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if(callback) callback();
  }, random());
}

// espera terminar f1 e começa f2 e espera terminar f2 para começar f3 e apos terminar o f3 ele executa o "Ola mundo"
// f1(function() {
//   f2(function() {
//     f3(function() {
//       console.log('Ola mundo');
//     });
//   })
// });

// outra maneira mais simples de fazer isso, seria criando uma função callback para cada callback

f1(f1Callback);

function f1Callback() {
  f2(f2Callback); 
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {{
  console.log('Olá mundo');
}}