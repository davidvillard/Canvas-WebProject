var ctx;
var ancho;
var alto;
var cero = 0;
var bicho = new Image();
var puntos = 0;
var tiempoRestante = 60; // Establece el tiempo inicial en segundos
var temporizadorInterval;
window.onload = function () {

    canvas = document.getElementById('canvas1');
    bicho.src = '../media/sonic.jpg';
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            ancho = canvas.width;
            alto = canvas.height;
            x = getRandomNumber(0, ancho);
            y = getRandomNumber(0, alto);
            console.log(alto);
            bicho.onload = function () {
                dibujaBicho(x, y);
                dibujapuntos();
                iniciarTemporizador();
            }
            console.log(x);
            canvas.addEventListener('click', function (e) {

                var rx = e.offsetX;
                var ry = e.offsetY;

                if (rx >= x && rx <= x + bicho.width && ry >= y && ry <= y + bicho.height) {
                    puntos +=1;
                    ctx.clearRect(0, 0, ancho, alto);
                    x = getRandomNumber(0, ancho - bicho.height);
                    y = getRandomNumber(0, alto - bicho.width);
                    dibujaBicho(x, y);
                    dibujapuntos();
                }
            }
            );
        }
        else {
            alert('error en el codigo o en ctx');
        }
    }
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


function dibujaBicho(x, y) {
    if (x + bicho.width > ancho) {
        x = ancho - bicho.width;
    }
    if (y + bicho.height > alto) {
        y = alto - bicho.height;
    }
    ctx.drawImage(bicho, x, y);
}


function dibujapuntos(){
    ctx.font = "bold 20px serif";
    ctx.fillStyle = 'red';
    ctx.fillText("Puntuación: " + puntos , 20, 40);
}


function iniciarTemporizador() {
    actualizarTemporizador();
    temporizadorInterval = setInterval(actualizarTemporizador, 1000);
}

function actualizarTemporizador() {
    document.getElementById("tiempo").textContent = tiempoRestante;
    if (tiempoRestante === 0) {
        clearInterval(temporizadorInterval);
        alert("¡Juego terminado! Puntuación total: " + puntos);
    }
    tiempoRestante--;
}



