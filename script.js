const canvas = document.getElementById("meuCanvas");// Obtendo o elemento canvas do HTML pelo ID
const ctx = canvas.getContext("2d");// Obtendo o contexto de renderização 2D do canvas
const Img = new Image();// Criando um novo objeto de imagem
Img.src = "aeronave.png"; // Carrega a imagem da nave
let bottomRightPos = { x: canvas.width - 100, y: canvas.height - 100 }; // Define a posição inicial da imagem no canto inferior direito do canvas
const imgWidth = 100; // Define a largura da imagem da nave

function movimentacaoNave(timestamp) {
  if (bottomRightPos.x >= 0 && bottomRightPos.y >= 0) {
    bottomRightPos.x -= 0; // Movimento horizontal da nave (não muda)
    bottomRightPos.y -= 5; // Movimento vertical da nave (descendo 5 pixels a cada frame)
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
  ctx.drawImage(Img, bottomRightPos.x, bottomRightPos.y, imgWidth, Img.height * (imgWidth / Img.width)); // Desenha a imagem da nave na nova posição
  requestAnimationFrame(movimentacaoNave); // Continua o ciclo de animação
}

requestAnimationFrame(movimentacaoNave); // Inicia a animação da nave