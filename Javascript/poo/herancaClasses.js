class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(this.nome + " já ligado");
      return;
    }

    this.ligado = true;
  }

  desligar() {
     if(!this.ligado) {
      console.log(this.nome + " já desligado")
      return;
    }

    this.ligado = false;
  }
}

// const d1 = new DispositivoEletronico('Smartphone');

// d1.ligar();

// console.log(d1);

// d1.ligar();

// d1.desligar();

// console.log(d1);

class Smartphone extends DispositivoEletronico { // Herdando tudo que tem em DispositivoEletronico apra a classe smartphone
  constructor(nome, cor) {
    super(nome); // o "super" é o construtor da classe pai que nós estamos herdando que nesse caso é o DispositivoEletronico, e aqui nós estamos pegando apenas a propriedade nome do construtor pai
    this.cor = cor;
  }
} 

const s1 = new Smartphone('Motorola', 'Branco');

s1.ligar();

console.log(s1);