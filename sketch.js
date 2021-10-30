var raqueteJogador, raqueteComputador, bolaJogo;

function setup() {
  createCanvas(400, 400);
  raqueteJogador = new raquete();
  raqueteComputador = new raquete();
  bolaJogo = new bola();
}

function draw() {
  background('green');
  
  // Criando a Raquete do Jogador: 
  raqueteJogador.posicaoX = 390;
  raqueteJogador.posicaoY = mouseY;
  raqueteJogador.display ();
  
  // Criando a Raquete do Computador:
  raqueteComputador.posicaoX = 0;
  raqueteComputador.posicaoY = 160;
  raqueteComputador.display ();
  
  //Criando a Bola: 
  bolaJogo.posicaoX = 195;
  bolaJogo.posicaoY = 195;
  bolaJogo.display ();
  
  

}