function criaCalculadora() {
  return {
    	
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),


    // Métodos ficam abaixo:
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    cliqueBotoes() {
      // this -> o this aqui é a calculadora
      document.addEventListener('click', (e) => { // usamos arrowFunction pois ele impede de mudarmos qual é o this principal
        // this -> o this aqui é o #document, caso a gente crie com uma função normal
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        this.display.focus();
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
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
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if(e.keyCode === 13) {
          this.realizaConta();
        }
      })
    }
  };
}

const calculadora = criaCalculadora();

calculadora.inicia();