// Configuração inicial
const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const imagem = new Image();
imagem.src = "assets/personagem.png"; // Caminho da imagem

// Tamanho da imagem
const largura = 40;
const altura = 40;

// Posição inicial no centro
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// Atualiza posição com base no mouse dentro do canvas
canvas.addEventListener("mousemove", function (e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Impede que a imagem ultrapasse os limites do canvas
    mouseX = Math.min(Math.max(x, largura / 2), canvas.width - largura / 2);
    mouseY = Math.min(Math.max(y, altura / 2), canvas.height - altura / 2);
});

// Loop de animação
function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imagem, mouseX - largura / 2, mouseY - altura / 2, largura, altura);
    requestAnimationFrame(animar);
}

// Inicia animação assim que a imagem carregar
imagem.onload = () => animar();
