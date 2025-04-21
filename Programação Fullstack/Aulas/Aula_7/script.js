let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');

//retangulo 1
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(0,0,40,40);
ctx.closePath();

//retangulo 2
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(360,0,40,40);
ctx.closePath();

//retangulo 3
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(0,360,40,40);
ctx.closePath();

//retangulo 4
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.fillRect(360,360,40,40);
ctx.closePath();

//texto
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'yellow';
ctx.font = "26px Arial"
ctx.textAlign = "center";
ctx.fillText("Desenvolvimento Web",200,70);
ctx.closePath();

//circulo central
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(200,200,50,0*Math.PI,1*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//linha 1
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'red';
ctx.moveTo(0,0);
ctx.lineTo(400,400);
ctx.stroke();
ctx.closePath();

//linha 2
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'blue';
ctx.moveTo(0,400);
ctx.lineTo(360,40);
ctx.stroke();
ctx.closePath();

//linha 3
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.moveTo(0,200);
ctx.lineTo(400,200);
ctx.stroke();
ctx.closePath();

// circulo 1
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(75,130,20,0*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// circulo 2
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc((400-75),130,20,0*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();