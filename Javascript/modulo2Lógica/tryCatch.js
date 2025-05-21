

try {
  console.log(naoExisto);
} catch(err) {
  console.log("Não existe não existe");
  console.log(err);
}


function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números"); // exibe um erro no terminal, caso bater com a condição que setamos
  }

  return x + y;
}

try {
  console.log(soma(1, 2)); // 3
  console.log(soma(1, "2"));
} catch(err) {
  console.log(err); // Error: x e y precisam ser números...
}


function retornaHora(data) {
  if(data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if(!data) {
    data = new Date();
  }

  return data.toLocaleString('pt-BR', {hour12: false});
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora(data); // caso não tivermos parametros aqui, ele vai apenas pegar do dia atual

  console.log(hora); //01/01/1970, 12:58:12
} catch(err) {
  console.log(err);
} finally {
  console.log("Tenha um bom dia");
}
