console.log("Hello world");

// alert(); --> envia um alerta na numa caixa de visualização na pagina

alert("Olá, vá ao mercado!");

// confirm(); --> faz uma validação de envio de formulario, "OK ou cancelar"

//confirm("Deseja enviar os dados?");

// Objeto "window" --> tudo que está relacionado a janela do navegador, nós podemos manipular por aqui

//window.alert("Olá, de novo"); // mesmo alert porem com o objeto window

// prompt -> Cria um prompt de comando que o usuario para o usuario digitar alguma coisa

let num1 = prompt("Digite um numero: ");
let num2 = prompt("Digite outro numero: ");

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

alert(`A soma dos seus numeros é: ${resultado}`);


