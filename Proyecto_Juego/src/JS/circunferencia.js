var ctx;
var canvas;
var angulo = 0
var speed = 4;
const imagenBola = new Image();
imagenBola.src = '../media/LOL_logo.png';
window.onload = function () {
     canvas = document.getElementById("canvas1");
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext("2d");
        animacion();
    }
}


function drawBall() {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(400, 400, 200, 0, 2 * Math.PI);
    ctx.stroke();

}

function drawSmallerBall() {

    var innerX = 400 + (320 - 200) * Math.cos(angulo);
    var innerY = 400 + (320 - 200) * Math.sin(angulo);

    ctx.save(); // Guardar el estado actual del contexto
    ctx.beginPath();
    ctx.arc(innerX, innerY, 80, 0, 2 * Math.PI);
    ctx.clip(); // Establecer la región de recorte según el círculo interior

    // Dibujar la imagen dentro del círculo interior
    ctx.drawImage(imagenBola, innerX - 80, innerY - 80, 160, 160);

    ctx.restore(); // Restaurar el estado del contexto para evitar que la región de recorte afecte otras operaciones de dibujo
}

function animacion() {
    ctx.clearRect(0, 0, 800, 800);
    drawBall();
    drawSmallerBall();
    angulo += speed / 100;
    requestAnimationFrame(animacion);

}


const speedRange = document.getElementById('speedRange');
const speedValue = document.getElementById('speedValue');

speedRange.addEventListener('input', (evento) => {
    speed = parseInt(evento.target.value);
    speedValue.textContent = speed;
});






