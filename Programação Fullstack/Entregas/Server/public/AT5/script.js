const canvas1 = document.getElementById("meuCanvas");
const ctx1 = canvas1.getContext("2d");

const canvas2 = document.getElementById("meuCanvas2");
const ctx2 = canvas2.getContext("2d");

function desenhar_quadrado(ctx, x, y, cor, tamanho = 50) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, tamanho, tamanho);
}

function desenhar_linha(ctx, x1, y1, x2, y2, cor) {
    ctx.strokeStyle = cor;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function desenhar_arco(ctx, x, y, raio, cor, inicio = 0, fim = Math.PI * 2) {
    ctx.strokeStyle = cor;
    ctx.beginPath();
    ctx.arc(x, y, raio, inicio, fim);
    ctx.stroke();
}

function escrever(ctx, texto, x, y) {
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(texto, x, y);
}

function desenhar_circulo(ctx, x, y, raio, corPreenchimento, corContorno = null) {
    ctx.beginPath();
    ctx.arc(x, y, raio, 0, Math.PI * 2);
    if (corPreenchimento) {
        ctx.fillStyle = corPreenchimento;
        ctx.fill();
    }
    if (corContorno) {
        ctx.strokeStyle = corContorno;
        ctx.stroke();
    }
}

function desenhar_setor(ctx, x, y, raio, anguloInicio, anguloFim, corPreenchimento = null, corContorno = null) {
    ctx.beginPath();
    ctx.moveTo(x, y); // Centro
    ctx.arc(x, y, raio, anguloInicio, anguloFim); // Arco
    ctx.closePath(); // Fecha o caminho de volta ao centro

    if (corPreenchimento) {
        ctx.fillStyle = corPreenchimento;
        ctx.fill();
    }
    if (corContorno) {
        ctx.strokeStyle = corContorno;
        ctx.stroke();
    }
}

function desenhar_retangulo(ctx, x, y, largura, altura, corPreenchimento = null, corContorno = null) {
    ctx.beginPath();
    ctx.rect(x, y, largura, altura);
    
    if (corPreenchimento) {
        ctx.fillStyle = corPreenchimento;
        ctx.fill();
    }
    if (corContorno) {
        ctx.strokeStyle = corContorno;
        ctx.stroke();
    }
}

function desenhar_triangulo(ctx, x1, y1, x2, y2, x3, y3, corPreenchimento = null, corContorno = null) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Primeiro vértice
    ctx.lineTo(x2, y2); // Segundo vértice
    ctx.lineTo(x3, y3); // Terceiro vértice
    ctx.closePath(); // Fecha o triângulo

    if (corPreenchimento) {
        ctx.fillStyle = corPreenchimento;
        ctx.fill();
    }
    if (corContorno) {
        ctx.strokeStyle = corContorno;
        ctx.stroke();
    }
}



// ------------------- DESENHO NO CANVAS 1 ---------------------
escrever(ctx1, "Canvas", 120, 45);
desenhar_quadrado(ctx1, 0, 0, "blue");
desenhar_quadrado(ctx1, 250, 0, "red");
desenhar_quadrado(ctx1, 0, 250, "yellow");
desenhar_quadrado(ctx1, 25, 250, "white", 25);
desenhar_quadrado(ctx1, 250, 250, "black");
desenhar_quadrado(ctx1, 250, 250, "white", 25);
desenhar_linha(ctx1, 0, 0, 150, 150, "blue");
desenhar_linha(ctx1, 300, 0, 150, 150, "red");
desenhar_quadrado(ctx1, 0, 125, "cyan", 25);
desenhar_quadrado(ctx1, 0, 150, "cyan", 25);
desenhar_quadrado(ctx1, 287.5, 137.5, "cyan", 12.5);
desenhar_quadrado(ctx1, 275, 137.5, "cyan", 12.5);
desenhar_quadrado(ctx1, 287.5, 150, "cyan", 12.5);
desenhar_quadrado(ctx1, 275, 150, "cyan", 12.5);
desenhar_quadrado(ctx1, 110, 150, "red", 40);
desenhar_linha(ctx1, 150, 150, 150, 300, "gray");
desenhar_arco(ctx1, 150, 150, 50, "green", Math.PI, Math.PI * 2);
desenhar_arco(ctx1, 150, 150, 80, "green", Math.PI, 3.94);
desenhar_arco(ctx1, 150, 150, 80, "green", 5.5, 0);
desenhar_arco(ctx1, 150, 300, 80, "green", Math.PI, 4.71);
desenhar_arco(ctx1, 150, 300, 60, "green", 4.7, 0);
desenhar_arco(ctx1, 150, 300, 40, "green", Math.PI, Math.PI * 2);
desenhar_circulo(ctx1, 150, 300, 40, "cyan", "green");
desenhar_circulo(ctx1, 150, 120, 13, "cyan", "blue");
desenhar_circulo(ctx1, 225, 220, 13, "yellow", "green");
desenhar_circulo(ctx1, 75, 220, 13, "yellow", "green");
desenhar_linha(ctx1, 0, 150, 300, 150, "green");

// ------------------- DESENHO NO CANVAS 2 ---------------------
desenhar_quadrado(ctx2, 0, 0, "#8ffdd4", 400);
desenhar_quadrado(ctx2, 0, 300, "#808080", 400);
desenhar_circulo(ctx2, 300, 90, 50, "yellow");
desenhar_setor(ctx2, 0, 300, 50, Math.PI, Math.PI*2, "#458efc");

desenhar_quadrado(ctx2, 0, 300, "#458efc", 50);
desenhar_quadrado(ctx2, 0, 345, "#458efc", 80);
desenhar_quadrado(ctx2, 45, 345, "#458efc", 100);
desenhar_setor(ctx2, 150, 400, 55, Math.PI, Math.PI*2, "#458efc");

//Arvore 1
desenhar_retangulo(ctx2, 50, 240, 15, 60, "#86471a");
desenhar_circulo(ctx2, 57.5, 240, 25, "green");

//Arvore 2
desenhar_retangulo(ctx2, 330, 280, 15, 60, "#86471a");
desenhar_circulo(ctx2, 337.5, 280, 25, "green");


//Casa
desenhar_quadrado(ctx2, 140, 210, "#86471a", 90);
desenhar_triangulo(ctx2, 185, 160, 140, 210, 230, 210, "#f5694d");
desenhar_retangulo(ctx2, 175, 250, 22, 50, "#624423");
desenhar_quadrado(ctx2, 195, 225, "#47bdfd", 25);
desenhar_quadrado(ctx2, 150, 225, "#47bdfd", 25);
