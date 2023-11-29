var ctx;
var bola = new Image();
var canvas;
var raqx = 400;
var radio = 32;
var bolax = 100;
var bolay = 150;
var ancho, alto;
var limiteder, limiteizq, limiteup, limitedown;
var dx = 3;
var dy = 3;
var velo = 25;
var puntos = 0;
window.onload = function () {

    canvas = document.getElementById('canvas1');
    bola.src = '../media/sonic-logo.png';
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            ancho = canvas.width;
            alto = canvas.height;
            limiteder = ancho - radio;
            limiteizq = -3;
            //calcular limites arriba y abajo
            limiteup = -3;
            limitedown = alto - radio;
            ctx.lineWidth = radio;
            ctx.fillStyle = 'red';
            document.addEventListener('keydown', function (e) {
                if (e.key == 'ArrowLeft') {
                    console.log('pulsa iz');
                    if (raqx > 0) {
                        raqx = raqx - 20;
                    }
                }
            });
            document.addEventListener('keydown', function (e) {
                if (e.key == 'ArrowRight') {
                    console.log(raqx);
                    if (raqx < 720) {
                        raqx = raqx + 20;
                        raqueta();
                    }
                }
            });
            // beep();
            mueve();
            id = setInterval(mueve, velo);
        }
        else {
            alert('error en el codigo o en ctx');
        }
    }
}

function mueve() {
    clearInterval();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bola, bolax, bolay);
    dibujapuntos();
    console.log("Puntuacion:", puntos)
    verifica();
    bolax += dx;
    bolay += dy;
    raqueta();
}
/*
function beep()  {
    var beep = document.getElementById('beepSound');
    beep.play();
  }
*/
function raqueta() {
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(raqx, 550);
    ctx.lineTo(raqx + 80, 550);
    ctx.stroke();

}

function verifica() {
    var nbolax = bolax + dx;
    var nbolay = bolay + dy;

    if (nbolax > limiteder) {
        dx *= -1;
        nbolax = limiteder;
    }
    if (nbolax <= limiteizq) {
        dx *= -1;
        nbolax = limiteizq;
    }
    if (nbolay >= 515 && nbolax >= raqx && nbolax <= raqx + 75) {
        dy *= -1;
        nbolay = 515;
        puntos += 1;
        //beep();
    }

    if (nbolay >= 600) {
        window.confirm("GAME OVER " + puntos + " puntos");
        clearInterval(id);
    }

    if (nbolay <= limiteup) {
        dy *= -1;
        nbolay = limiteup;
    }

    bolax = nbolax;
    bolay = nbolay;

}

function dibujapuntos(){
    ctx.font = "bold 15px serif";
    ctx.fillText("PUNTUACION: " + puntos,20,30);
}
