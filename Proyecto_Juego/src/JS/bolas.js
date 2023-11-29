var ctx;
var bola = new Image();
var bola1 = new Image();
var canvas;
var radio = 32;
var bolax = 300;
var bolay = 100;
var bolax1 = 300;
var bolay1 = 0;
var ancho, alto;
var limiteder, limiteizq, limiteup, limitedown;
var dx = 9;
var dy = 5;
var dx1 = 8;
var dy1 = 4;
let puntoDeColision = radio;
window.onload = function () {

    canvas = document.getElementById('canvas1');
    bola.src = '../media/sonic-logo.png';
    bola1.src = '../media/sonic-logo.png';
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
            mueve();
            setInterval(mueve, 30);

        }
        else {
            alert('error en el codigo o en ctx');
        }
    }
}

function rebota() {
    console.log("CHOKHE!!");
    dx1*=-1;
    dy1*=-1;
    dx*=-1;
    dy*=-1;

}

function mueve() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bola, bolax, bolay);
    ctx.drawImage(bola1, bolax1, bolay1);
    verifica();
    bolax += dx;
    bolax1 += dx1;
    bolay += dy;
    bolay1 += dy1;
    
        let tempBolaX =bolax - bolax1 ;
        let tempBolaY =bolay - bolay1;
        
        if (tempBolaX<0) {
            tempBolaX*=-1;
        }
        if (tempBolaY<0) {
            tempBolaY*=-1;
        }
        console.log(tempBolaX, tempBolaY);
        
    if ( (tempBolaX < puntoDeColision && tempBolaY< puntoDeColision ) ) {
        rebota();

    }

}

function verifica() {
    var nbolax = bolax + dx;
    var nbolay = bolay + dy;
    var nbolay1 = bolay1 + dy1;
    var nbolax1 = bolax1 + dx1;
    if (nbolax > limiteder) {
        dx *= -1;
        nbolax = limiteder;
    }
    if (nbolax <= limiteizq) {
        dx *= -1;
        nbolax = limiteizq;
    }
    if (nbolay >= limitedown) {
        dy *= -1;
        nbolay = limitedown;
    }
    if (nbolay <= limiteup) {
        dy *= -1;
        nbolay = limiteup;
    }
    if (nbolax1 > limiteder) {
        dx1 *= -1;
        nbolax1 = limiteder;
    }
    if (nbolax1 <= limiteizq) {
        dx1 *= -1;
        nbolax1 = limiteizq;
    }
    if (nbolay1 >= limitedown) {
        dy1 *= -1;
        nbolay1 = limitedown;
    }
    if (nbolay1 <= limiteup) {
        dy1 *= -1;
        nbolay1 = limiteup;
    }
    bolax = nbolax;
    bolay = nbolay;
    bolay1 = nbolay1;
    bolax1 = nbolax1;
}