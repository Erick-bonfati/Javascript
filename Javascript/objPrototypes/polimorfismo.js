

// Polimorfismo é uma maneira de fazer métodos se comportarem de maneira diferente em subclasses(filhas de uma classe mãe ou classe pai)


// Superclasse = responsavel por toda a estrutura
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}


Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insufiente: R$${this.saldo}`)
    return
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function() {
  console.log(`Ag/c: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`
  )
};

// const conta1 = new Conta(1, 255, 1020);

// conta1.depositar(10);
// conta1.sacar(1040);
// conta1.verSaldo();

// console.log(conta1)

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insufiente: R$${this.saldo}`)
    return
  }

  if(valor > this.limite) {
    console.log(`Limite de: R$${this.limite} foi atingido`);
    return
  }

  this.saldo -= valor;
  this.verSaldo();
};

const cc = new ContaCorrente(2, 340, 1000, 950);

cc.sacar(1000);

cc.sacar(1050);