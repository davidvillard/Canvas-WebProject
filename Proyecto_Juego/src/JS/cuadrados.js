var ctx;
var canvas;
var speed = 10;
const slider = document.getElementById('slider');
const speedValue = document.getElementById('speedValue');
const colores = [
    'rgba(255, 0, 0, 0.7)',     // Rojo
    'rgba(0, 255, 0, 0.7)',     // Verde
    'rgba(0, 0, 255, 0.7)',     // Azul
    'rgba(255, 255, 0, 0.7)',   // Amarillo
    'rgba(255, 0, 255, 0.7)',   // Magenta
    'rgba(0, 255, 255, 0.7)',   // Cian
    'rgba(128, 0, 0, 0.7)',     // Marrón
    'rgba(0, 128, 0, 0.7)',     // Verde oscuro
    'rgba(0, 0, 128, 0.7)',     // Azul oscuro
    'rgba(128, 128, 0, 0.7)',   // Oliva
    'rgba(128, 0, 128, 0.7)',   // Púrpura
    'rgba(0, 128, 128, 0.7)',   // Turquesa
    'rgba(255, 128, 0, 0.7)',   // Naranja
    'rgba(128, 255, 0, 0.7)',   // Lima
    'rgba(128, 0, 255, 0.7)',   // Rosado
    'rgba(0, 128, 255, 0.7)',   // Celeste
    'rgba(255, 128, 128, 0.7)', // Rosa claro
    'rgba(128, 255, 128, 0.7)', // Verde claro
    'rgba(128, 128, 255, 0.7)', // Azul claro
    'rgba(192, 192, 192, 0.7)'  // Gris
  ];
  
  
  function iniciarIntervalo() {
    intervalId = setInterval(dibujarCuadrados, speed);
  }
  
  window.onload = function () {
    canvas = document.getElementById("canvas1");
    if (canvas && canvas.getContext) {
      ctx = canvas.getContext("2d");
      iniciarIntervalo();
    }
  }
  
  function dibujarCuadrados() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    for (var i = 0; i < 7; i++) {
      var x = i * 75;
      var y = i * 75;
      var color = colores[Math.floor(Math.random() * colores.length)];
  
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.fillRect(x, y, 150, 150);
    }
  }
  
  slider.addEventListener('input', (evento) => {
    speed = parseInt(evento.target.value);
    speedValue.textContent = speed;
  
    // Detén el intervalo actual y comienza uno nuevo
    clearInterval(intervalId);
    iniciarIntervalo();
  });
  


