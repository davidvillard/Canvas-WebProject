var brazos = 150;
var boca = true;
var ctx;
var animal = false;
window.onload = function () {

    canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            Luis();          
        }
    }
}

document.addEventListener('keypress', function (e) {
    e.preventDefault();
    if (e.key == 32 || e.code == "Space") {
        animal = !animal;
        if (animal) {

            a = setInterval(() => {
                brazos = (brazos == 60) ? 150 : 60;
                boca = !boca;
                animar()
            },
                200);
        } else {
            clearInterval(a)
        }
    }
})
function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Luis();
}


function Luis() {
    // Cabeza
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(100, 50, 30, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(90, 45, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(110, 45, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    //boca
    if (boca == true) {
        ctx.beginPath();
        ctx.arc(100, 50, 20, 1 * Math.PI, 2 * Math.PI, true);
        ctx.stroke();
    } else {
        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(100, 65, 5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }

    // Cuerpo
    ctx.lineWidth = 9;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(100, 75);
    ctx.lineTo(100, 200);
    ctx.stroke();

    //brazos
    ctx.lineWidth = 9;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(100, 90);
    ctx.lineTo(150, brazos);
    ctx.stroke();
    ctx.lineWidth = 9;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(100, 90);
    ctx.lineTo(50, brazos);
    ctx.stroke();

    //Piernas
    ctx.lineWidth = 9;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(100, 195);
    ctx.lineTo(130, 270);
    ctx.stroke();
    ctx.lineWidth = 9;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(100, 195);
    ctx.lineTo(70, 270);
    ctx.stroke();
}

