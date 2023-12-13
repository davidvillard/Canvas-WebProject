const canv = document.getElementById("canvas1");
const ctx = canv.getContext("2d");

canv.width = 800;
canv.height = 600;

class rectangulo {
    x;
    y;
    angulo;
    angVelocidad;
    gradiente;

    constructor(x, y, angulo, angVelocidad, gradiente) {
        this.x = x;
        this.y = y;
        this.angulo = angulo;
        this.angVelocidad = angVelocidad;
        this.gradiente = gradiente;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x + 100, this.y + 100);
        ctx.rotate(toRad(360 - this.angulo));
        ctx.translate(-this.x - 100, -this.y - 100);
        drawrectangulo(this.x, this.y, 200, 200, this.gradiente);
        ctx.restore();

        this.angulo += this.angVelocidad;
    }
}

var rect = [];

rect.push(new rectangulo(100, 200, 0, -1, getGradient(100, 200, 200, 300, "green", "aquamarine")));
rect.push(new rectangulo(500, 200, 0, 1, getGradient(500, 200, 600, 300, "black", "lightgray")));

setInterval(update, 16);

function update() {
    ctx.clearRect(0, 0, canv.width, canv.height);
    rect.forEach(element => {
        element.draw();
    });
}

function drawrectangulo(x, y, width, height, color, angulo) {
    ctx.save()

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.rect(x, y, width, height);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
}

function toRad(deg) {
    return deg * Math.PI / 180;
}

function getGradient(xa, ya, xb, yb, col1, col2) {
    let gradiente = ctx.createLinearGradient(xa, ya, xb, yb);
    gradiente.addColorStop(0, col1);
    gradiente.addColorStop(1, col2);
    return gradiente;
}