// let carro = {
//     cor: 'green',
//     modelo: 'SUV',
//     marca: 'Toyota',
//     buzina: function() {
//         return 'bii bii';
//     }
// }

// let carro2 = {
//     cor: 'black',
//     modelo: 'SUV',
//     marca: 'Ford',
//     buzina: function() {
//         return 'fom fom';
//     }
// }

//console.log(carro);
//console.log(carro.cor);

//console.log(carro.buzina());
//console.log(carro2.buzina());

let carros = []
//carros.push(carro);
//carros.push(carro2);
for (let i = 0; i < carros.length; i++) {
    console.log(carro.buzina());
}


class Carro {
    constructor(cor, modelo, marca) {
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
    }
    buzina() {
        return 'bii bii';
    }
}

let carro1 = new Carro ('green', 'SUV', 'Toyota');
let carro2 = new Carro('Black','SUV','Ford')
console.log(carro1);
console.log(carro2);



class Retangulo {
    constructor(cor_linha, cor_preenchimento, espessura_linha, x, y, largura, altura) {
        this.cor_linha = cor_linha;
        this.cor_preenchimento = cor_preenchimento;
        this.espessura_linha = espessura_linha;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }
    desenhe(contexto) {
        contexto.beginPath();
        contexto.lineWidth = this.espessura_linha;
        contexto.fillStyle = this.cor_preenchimento;
        contexto.strokeStyle = this.cor_linha;
        contexto.fillRect(this.x,this.y,this.largura,this.altura);
        contexto.strokeRect(this.x,this.y,this.largura,this.altura);
        contexto.closePath();
    }
}


let canvas = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');
let retangulo_1 = new Retangulo('blue', 'red', 3, 0, 0, 20, 20);
retangulo_1.desenhe(ctx1);

let retangulo_2 = new Retangulo('green', 'blue', 3, 200, 200, 20, 20);
retangulo_2.desenhe(ctx1);

function animacao(contexto) {
    retangulo_1.x += 1;
    ctx1.clearRect(0,0,400,400);
    retangulo_1.desenhe(ctx1);
    retangulo_2.desenhe(ctx1);

    requestAnimationFrame(animacao)
}

animacao(ctx1)


document.addEventListener('keydown', function(evento) {
    let tecla = evento.key;
    console.log(tecla);

    let velocidade = 5;
    if(tecla == 'ArrowUp') {retangulo_2.y -= velocidade}
    if(tecla == 'ArrowDown') {retangulo_2.y += velocidade}
    if(tecla == 'ArrowRight') {retangulo_2.x += velocidade}
    if(tecla == 'ArrowLeft') {retangulo_2.x -= velocidade}
})

document.addEventListener('mousemove', function(evento) {
    let rect = canvas1.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    
    console.log(x_mouse, y_mouse)
})