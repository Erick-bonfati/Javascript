function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} está falando`)
    },
    comer() {
      console.log(`${this.nome} está comendo`)
    },
    beber() {
      console.log(`${this.nome} está bebendo`)
    }
  };
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = criaPessoa('Maria', 'A.');
const p3 = criaPessoa('Junior', 'Roberto');

p1.comer();
p2.falar();
p3.beber();

//Outra maneira fazendo com que o metodo fique fora da função e possa ser chamado por qualquer função depois:

const falar = {
  falar() {
    console.log(`${this.nome} está falando`)
  }
}

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`)
  }
}
    
const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`)
  }
}

const pessoaPrototype = { ...falar, ...comer, ...beber} // OU
// const pessoaPrototype = {Object.assign({}, falar, comer, beber)}

function criaPessoa2(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: {value: nome},
    sobrenome: {value: sobrenome}
  })
}

const pessoa = new criaPessoa2('Erick', 'Bonfati');

pessoa.falar()