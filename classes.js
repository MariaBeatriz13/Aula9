 class raquete {
  constructor() {
    this.posicaoX = 0;
    this.posicaoY = 0;
    this.largura = 10;
    this.altura = 80;
  }
  
  display () {
    rect (this.posicaoX, this.posicaoY, this.largura, this.altura);
  }
   
 }

class bola {
  constructor (){
    this.posicaoX = 0;
    this.posicaoY = 0;
    this.largura = 15;
    this.altura = 15;
    this.raio = 15;
  }
  display (){
    rect (this.posicaoX, this.posicaoY, this.largura, this.altura, this.raio);
  }
  
}