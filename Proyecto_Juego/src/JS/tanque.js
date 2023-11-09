var ctx;
var canvas;
var angulo = 0;
var bolas = []; // Array para almacenar las bolas disparadas
var puedeDisparar = true; // Variable para controlar si se puede disparar

window.onload = function () {
    canvas = document.getElementById("canvas1");
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext("2d");
        if (ctx) {
            tanque();
            document.addEventListener('keydown', function (e) {
                if (e.key == 'ArrowRight') {
                    angulo += 0.05;
                    tanque();
                }
                else if (e.key == 'ArrowLeft') {
                    console.log('pulsa down');
                    angulo -= 0.05;
                    tanque();
                } else if (e.key === 's' && puedeDisparar) {
                    dispararBola();
                }
            });
            animate();
        } else {
            alert("Error al crear el lienzo");
        }
    }
}

function tanque() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    //base abajo
    ctx.beginPath();
    ctx.fillRect(50, 450, 150, 30);
    ctx.strokeRect(50, 450, 150, 30);
    //centro
    ctx.beginPath();
    ctx.fillRect(90, 390, 75, 60);
    ctx.strokeRect(90, 390, 75, 60);
    // base arriba
    ctx.beginPath();
    ctx.fillRect(50, 360, 150, 30);
    ctx.strokeRect(50, 360, 150, 30);
    //Cañon
    dibujarLinea(127, 420, 60, angulo);
    //Circulo
    ctx.lineWidth = 2;
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(127, 420, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function dibujarLinea(x, y, longitud, angulo) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 20;

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + (Math.cos(angulo) * longitud), y + (Math.sin(angulo) * longitud))
    ctx.stroke()
    ctx.closePath()
}

function dispararBola() {
    var bolaX = 127 + (Math.cos(angulo) * 60);
    var bolaY = 420 + (Math.sin(angulo) * 60);

    if (bolas.length === 0) {
        // Hasta que no haya bolas en el lienzo no deja disparar otra bola
        bolas.push({ x: bolaX, y: bolaY, angulo: angulo, velocidadX: Math.cos(angulo) * 2, velocidadY: Math.sin(angulo) * 2 });
        puedeDisparar = false;
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tanque();

    // Actualiza y dibuja las bolas
    for (var i = 0; i < bolas.length; i++) {
        var bola = bolas[i];
        ctx.beginPath();
        ctx.arc(bola.x, bola.y, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        // Mueve las bolas en linea recta
        bola.x += bola.velocidadX;
        bola.y += bola.velocidadY;

        // Si la bola sale fuera del canvas, se elimina del array
        if (bola.x < 0 || bola.x > canvas.width || bola.y < 0 || bola.y > canvas.height) {
            bolas.splice(i, 1);
            i--;
            puedeDisparar = true; // Habilitar disparo cuando la bola anterior sale del lienzo
        }
    }

    requestAnimationFrame(animate);
}
