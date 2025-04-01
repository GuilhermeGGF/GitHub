




let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');

/*//contorno preto
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.moveTo(0,0);
ctx.lineTo(0,300);
ctx.lineTo(300,300);
ctx.stroke();
ctx.closePath();

//contorno preto
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.moveTo(300,300);
ctx.lineTo(300,0);
ctx.lineTo(0,0);
ctx.stroke();
ctx.closePath(); */

//retangulo 1
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,50,50);
ctx.closePath();

//retangulo 2
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(250,0,50,50);
ctx.closePath();

//texto
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'yellow';
ctx.fillStyle = 'black'
ctx.font = "22px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",150,50);
ctx.closePath();

//retangulo 3
ctx.beginPath();
ctx.fillStyle = 'cyan';
ctx.fillRect(0,125,25,50);
ctx.closePath();

//retangulo 3
ctx.beginPath();
ctx.fillStyle = 'cyan';
ctx.fillRect(275,137.5,25,25);
ctx.closePath();

//linha central
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.moveTo(0,150);
ctx.lineTo(300,150);
ctx.stroke();
ctx.closePath();
















