
//Vamos criar uma chave privada que só vai poder ser acessada dentro da nossa classe, vamos fazer isso para que não seja possivel manipular os dados que criamos dentro da classe, fora dela

const _velocidade = Symbol('velocidade'); // O symbol gera um ID aleatorio toda vez, então ele nunca tem um numero padrão

class Carro {
  constructor(nome, velocidade) {
    this.nome = nome;
    this[_velocidade] = 0; // chamando a variavel privada
  }

  set velocidade(valor) {
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    return this[_velocidade];
  }
  acelerar() {
    if(this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if(this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("Celta")

for(let i = 0; i <= 150; i++) {
  c1.acelerar();
}

c1.velocidade = 140;
console.log(c1)