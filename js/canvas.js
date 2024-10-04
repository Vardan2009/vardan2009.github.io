ctx = canvas.getContext('2d');

let drawIntervalId = -1;

regenerateCanvas();
function regenerateCanvas() {
  if(drawIntervalId != -1) clearInterval(drawIntervalId);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var letters = '013456789ABCDEF'.split('');

  var fontSize = 10,
  columns = canvas.width / fontSize;

  var drops = []
  for (let i = 0; i < columns; i++)
    drops[i] = Math.floor(Math.random() * canvas.height / fontSize)

  function draw() {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0, 0, 0, .2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'source-over';
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg1');
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
    }
  }

  for (let i = 0; i < 30; i++) draw()
  drawIntervalId = setInterval(draw, 200);
}

window.addEventListener("resize", regenerateCanvas);