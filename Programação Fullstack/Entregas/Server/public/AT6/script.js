const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const imagem = new Image();
imagem.src = "assets/personagem.png";

const largura = 40;
const altura = 40;


let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;


canvas.addEventListener("mousemove", function (e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;


    mouseX = Math.min(Math.max(x, largura / 2), canvas.width - largura / 2);
    mouseY = Math.min(Math.max(y, altura / 2), canvas.height - altura / 2);
});


function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imagem, mouseX - largura / 2, mouseY - altura / 2, largura, altura);
    requestAnimationFrame(animar);
}


imagem.onload = () => animar();
