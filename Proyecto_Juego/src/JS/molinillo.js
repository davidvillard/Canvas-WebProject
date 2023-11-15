var ctx;
var canvas;
const colores = ['yellow', 'green', 'red', 'blue'];
let indiceColor = 0; // Índice para seguir el sentido horario

window.onload = function () {
    canvas = document.getElementById("canvas1");
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext("2d");
        dibujarMolinillo();
        var intervalo = setInterval(dibujarMolinillo, 500);
    }
}

function siguienteColor(indice) {
    return (indice - 1 + colores.length) % colores.length;
}

function dibujarMolinillo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(400, 800);
    ctx.lineTo(400, 250);
    ctx.stroke();

    

    ctx.beginPath();
    ctx.fillStyle = colores[indiceColor];
    ctx.moveTo(400, 400);
    ctx.lineTo(550, 400);
    ctx.lineTo(400, 250);
    ctx.lineTo(400, 250);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = colores[siguienteColor(indiceColor)];
    ctx.moveTo(400, 250);
    ctx.lineTo(550, 250);
    ctx.lineTo(550, 100);
    ctx.lineTo(400, 250);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = colores[siguienteColor(siguienteColor(indiceColor))];
    ctx.moveTo(400, 250);
    ctx.lineTo(400, 100);
    ctx.lineTo(250, 100);
    ctx.lineTo(400, 250);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = colores[siguienteColor(siguienteColor(siguienteColor(indiceColor)))];
    ctx.moveTo(400, 250);
    ctx.lineTo(250, 250);
    ctx.lineTo(250, 400);
    ctx.lineTo(400, 250);
    ctx.fill();

    indiceColor = siguienteColor(indiceColor); // Actualizar el índice para el próximo ciclo
}
