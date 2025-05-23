

function teste() {
  console.log('Este é meu teste.');
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste(); // Tudo que está dentro do construtor é executa, então mesmo sem passar nenhum objeto nessa classe, ele vai ser executado.
  }

  //Método de instancia
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  //Método estático = são métodos que chamamos eles direto na classe, sem criar um novo objeto, e métodos estaticos não tem acesso a dados da classe, volume, tv e etc...
  static trocaPilha() {
    console.log('Ok, vou trocar.');
  }

  static soma(x, y) {
    console.log(x + y);
  }
}

const controle1 = new ControleRemoto('LG');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();

console.log(controle1);

ControleRemoto.trocaPilha(); 

ControleRemoto.soma(2, 5); 