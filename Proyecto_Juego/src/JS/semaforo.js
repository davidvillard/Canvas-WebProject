var ctx;
var canvas;
window.onload = function () {
    canvas = document.getElementById("canvas1");
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext("2d");
        if (ctx) {
            Semaforo();
            setTimeout(function () {
                circuloVerde();
            }, 5000);

            setTimeout(function () {
                circuloAmarillo();
            }, 8000);

            setTimeout(function () {
                circuloRojo();
            }, 10000);
            Semaforo();
            
        } else {
            alert("Error al crear el lienzo");
        }
    }
}

function Semaforo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    //base abajo
    ctx.beginPath();
    ctx.fillRect(370, 400, 30, 130);
    ctx.strokeRect(370, 400, 30, 130);
    ctx.stroke();
    //Semaforo
    ctx.beginPath();
    ctx.fillRect(315, 50, 140, 350);
    ctx.strokeRect(315, 50, 140, 350);
    ctx.stroke();
    //bola roja
    ctx.fillStyle = "#b81414";
    ctx.beginPath();
    ctx.arc(385, 110, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    //bola amarilla
    ctx.fillStyle = "#b8b814";
    ctx.beginPath();
    ctx.arc(385, 220, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    //bola verde
    ctx.fillStyle = "#0a5c0a";
    ctx.beginPath();
    ctx.arc(385, 330, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}


function circuloRojo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Luces rojas encendidas
    Semaforo();
    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.arc(385, 110, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function circuloAmarillo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //bola amarilla
    Semaforo();
    ctx.fillStyle = "#ffff11";
    ctx.beginPath();
    ctx.arc(385, 220, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function circuloVerde() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //bola verde
    Semaforo();
    ctx.fillStyle = "#00a135";
    ctx.beginPath();
    ctx.arc(385, 330, 50, 0, 2 * Math.PI);
    ctx.fill();
}


/*
function cambiarLuzSemaforo() {

    // Lógica para cambiar las luces del semáforo
    setTimeout(function () {
        // Luces verdes encendidas

        ctx.fillStyle = "#008000";
        ctx.beginPath();
        ctx.arc(385, 330, 50, 0, 2 * Math.PI);
        ctx.fill();
    }, 5000);

    setTimeout(function () {
        // Luces amarillas encendidas

        ctx.fillStyle = "ffff11";
        ctx.beginPath();
        ctx.arc(385, 220, 50, 0, 2 * Math.PI);
        ctx.fill();
    }, 7000);

    setTimeout(function () {
        // Luces rojas encendidas
        ctx.fillStyle = "#ff0000";
        ctx.beginPath();
        ctx.arc(385, 110, 50, 0, 2 * Math.PI);
        ctx.fill();
    }, 5000);
}*/