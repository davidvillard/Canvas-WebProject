var ctx
var canvas
var angulo = 0
var puntaCañon = {
  x: 0,
  y: 0
}
var balas = []
var maxBalas = 10
const Bicho = {
  img: new Image(),
  x: getRandomNumber(350, 750),
  y: getRandomNumber(50, 550)
}


window.onload = () => {
  canvas = document.getElementById("canvas1")
  Bicho.img.src = '../media/werlyb.jpg'
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d")
    animate()
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  dibujarBicho(Bicho.x, Bicho.y)
  balasRestantes()
  dibujarTanque(50, 200, angulo)

  if (balas.length > 0) {
    balas.forEach((bala) => {
      bala.x += 15 * Math.cos(bala.angulo)
      bala.y += 15 * Math.sin(bala.angulo)

      if (bala.x >= Bicho.x && bala.x <= Bicho.x + Bicho.img.width && bala.y >= Bicho.y && bala.y <= Bicho.y + Bicho.img.height) {
        bala.x = 1000
        Bicho.x = getRandomNumber(350, 750)
        Bicho.y = getRandomNumber(50, 550)
      }     

      const nuevasBalas = balas.filter((bala) => {
        return (bala.x < 800 && bala.y < 600 && bala.y > 0)
      })
      
      balas = (balas !== nuevasBalas) ? nuevasBalas : balas
      disparBala(bala.x, bala.y)
    })
  }
  requestAnimationFrame(animate)
}

function dibujarTanque(x, y, angulo) {
    dibujarRectanguloRedondeado(x, y, 200, 40, 10, "#000", "#a6a6a6", 0.1);
    dibujarRectanguloRedondeado(x + 20, y + 40, 160, 120, 5, "green", "#a6a6a6", 0.1);
    dibujarRectanguloRedondeado(x, y + 160, 200, 40, 10, "#000", "#a6a6a6", 0.1);
    dibujarCirculo(x + 100, y + 100, 40, "#000", "#4d4d4d");
    dibujarLinea(x + 100, y + 100, 110, angulo, "#4d4d4d", 30); // Modificado el valor de longitud y el grosor
  }
  
  
  function dibujarRectanguloRedondeado(x, y, width, height, cornerRadius, fillColor, borderColor, borderWidth) {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
  
    ctx.beginPath();
    ctx.moveTo(x + cornerRadius, y);
    ctx.lineTo(x + width - cornerRadius, y);
    ctx.arcTo(x + width, y, x + width, y + cornerRadius, cornerRadius);
    ctx.lineTo(x + width, y + height - cornerRadius);
    ctx.arcTo(x + width, y + height, x + width - cornerRadius, y + height, cornerRadius);
    ctx.lineTo(x + cornerRadius, y + height);
    ctx.arcTo(x, y + height, x, y + height - cornerRadius, cornerRadius);
    ctx.lineTo(x, y + cornerRadius);
    ctx.arcTo(x, y, x + cornerRadius, y, cornerRadius);
  
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
  
  function dibujarCirculo(x, y, radio, borderColor, fillStyle) {
    ctx.strokeStyle = borderColor;
    ctx.fillStyle = fillStyle;
    ctx.lineWidth = 5;
  
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  
  function dibujarLinea(x, y, longitud, angulo, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
  
    puntaCañon.x = x + Math.cos(angulo) * longitud;
    puntaCañon.y = y + Math.sin(angulo) * longitud;
  
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(puntaCañon.x, puntaCañon.y);
    ctx.stroke();
    ctx.closePath();
  }
  

function disparBala(x, y) {
  dibujarCirculo(x, y, 3, "#000", "#000")
}

function balasRestantes(){
  ctx.font = "bold 20px serif"
  ctx.fillStyle = 'black'
  ctx.fillText("Munición: " + (maxBalas - balas.length) , 10, 20)
}

function dibujarBicho(x, y) {
  ctx.drawImage(Bicho.img, x, y)
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    angulo -= 0.05
    angulo = (angulo <= -1.55) ? -1.55 : angulo
    angulo = (angulo >= 1.55) ? 1.55 : angulo
  } else if (event.key === "ArrowRight") {
    angulo += 0.05
    angulo = (angulo <= -1.55) ? -1.55 : angulo
    angulo = (angulo >= 1.55) ? 1.55 : angulo
  } else if (event.key === "s") {
    if (balas.length >= maxBalas) return
    const bolax = puntaCañon.x
    const bolay = puntaCañon.y
    balas.push({ x: bolax, y: bolay, angulo })
  }
})