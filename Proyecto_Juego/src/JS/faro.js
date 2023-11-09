var ctx;
window.onload = function () {
    var canvas = document.getElementById("canvas1");
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext("2d");
        if (ctx) {
            luzFaro();
            Faro();
            
        } else {
            alert("Error al crear el lienzo");
        }
    }
}

function Faro(){
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
    ctx.lineCap = "round";
    ctx.fillStyle = "blue"
    //Base
    ctx.beginPath();
    ctx.moveTo(300, 550);
    ctx.lineTo(500, 550);
    //esquina der
    ctx.lineTo(500, 520);
    //arriba
    ctx.lineTo(300, 520);
    //esquina izq
    ctx.lineTo(300, 550);
    ctx.fill();
    ctx.stroke();

    //Trapecio
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.moveTo(320, 520);
    //Esquina izq
    ctx.lineTo(330, 400);
    //arriba
    ctx.lineTo(470, 400);
    //esquina der
    ctx.lineTo(480, 520);
    ctx.fill();
    ctx.stroke();

    //Trapecio2
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "white"
    ctx.beginPath();
    ctx.moveTo(330, 400);
    //Esquina izq
    ctx.lineTo(340, 300);
    //Arriba
    ctx.lineTo(460, 300);
    //esquina izq
    ctx.lineTo(470, 400);
    ctx.fill();
    ctx.stroke();

    //Trapecio3
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.moveTo(340, 300);
    //Esquina izq
    ctx.lineTo(350, 200);
    //Arriba
    ctx.lineTo(450, 200);
    //esquina izq
    ctx.lineTo(460, 300);
    ctx.fill();
    ctx.stroke();


    //Trapecio4
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "white"
    ctx.beginPath();
    ctx.moveTo(350, 200);
    //Esquina izq
    ctx.lineTo(360, 100);
    //Arriba
    ctx.lineTo(440, 100);
    //esquina izq
    ctx.lineTo(450, 200);
    ctx.fill();
    ctx.stroke();

    
    //Base,Arriba
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
    ctx.lineCap = "round";
    ctx.fillStyle = "blue"
    //Base
    ctx.beginPath();
    ctx.moveTo(340, 100);
    ctx.lineTo(460, 100);
    //esquina der
    ctx.lineTo(460,90);
    //arriba
    ctx.lineTo(340,90);
    //esquina izq
    ctx.lineTo(340,100);
    ctx.fill();
    ctx.stroke();

    //Faro
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    //RECTANGULO
    ctx.fillRect(350,40,100,50);
    ctx.strokeRect(350,40,100,50);

    //Triangulo
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "blue"
    ctx.moveTo(340,40);
    //base
    ctx.lineTo(460,40);
    //esquina der
    ctx.lineTo(400,10);
    //esquina izq
    ctx.lineTo(340,40);
    ctx.fill();
    ctx.stroke();
}

function luzFaro(){
    var gradiente = ctx.createLinearGradient(300, 900, 900, 900);
    gradiente.addColorStop(0, 'yellow');
    gradiente.addColorStop(0.80, 'white');
    ctx.fillStyle = gradiente;
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(450, 40);
    ctx.lineTo(750, 50);
    ctx.lineTo(750, 450);
    ctx.lineTo(450, 90);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}