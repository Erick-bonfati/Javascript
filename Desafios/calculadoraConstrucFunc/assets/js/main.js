
function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.pressionaEnter();
  };

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const elemento = event.target;
      if(elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
      if(elemento.classList.contains('btn-clear')) this.clear();
      if(elemento.classList.contains('btn-del')) this.del();
      if(elemento.classList.contains('btn-eq')) this.realizaConta();

      this.display.focus();
    })
  }

  this.addNumDisplay = elemento => this.display.value += elemento.innerText;

  this.clear = () => this.display.value = '';

  this.del = () => this.display.value = this.display.value.slice(0, -1);

  this.realizaConta = () => {
    let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          this.display.value = '';
          return;
        }

        this.display.value = conta;
      } catch(e) {
        alert('Conta inválida');
        this.display.value = '';
        return;
      }
  };

  this.pressionaEnter = () => {
    this.display.addEventListener('keyup', e => {
      if(e.keyCode === 13) {
        this.realizaConta();
      }
    })
  }
}

const calculadora = new Calculadora();

calculadora.inicia();