

// Factory functions -> são funções que servem para a criação de objetos

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome, 
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    // Setter -> Ele seta o valor da variavel de acordo com o que o usuario passar na chamada dele. Obs.: O setter sempre é primeiro na verificação, então a ordem de getter e setter é indiferente...

    set nomeCompleto(valor) {
      valor = valor.split(' '); // separa todos os valores em um array, separados por um espaço
      this.nome = valor.shift(); // esse shift pega o primeiro valor do elemento que tem dentro do array
      this.sobrenome = valor.join(' '); // Aqui pegamos o restante dos elementos que restaram
      console.log(valor);
    },

    // quando uma função está dentro de um objeto, nós chamamos ela de método
    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,
    //Getter
    get imc() { // usando get, nós podemos fingir que o imc é como se fosse um atributo da classe, então podemos acessar ele sem as ()
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  }
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
const p2 = criaPessoa('Erick', 'Bonfati', 1.8, 111);
console.log(p1);
console.log(p1.fala('falando sobre JS')); // Luiz está falando sobre JS.
console.log(p1.nomeCompleto); // Luiz Otavio
console.log(p1.imc); // 24.69
console.log(p2.nomeCompleto); // Erick Bonfati
console.log(p2.imc); // 34.26

p1.nomeCompleto = "Maria dolores silva"; // ['dolores', 'silva'] -> retorna o restante do array pois pedimos um console.log

console.log(p1.nome); // Maria
console.log(p1.sobrenome); // dolores silva