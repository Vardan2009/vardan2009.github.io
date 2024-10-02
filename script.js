const container = document.querySelector('div#main');
const canvas = document.querySelector('canvas#maincnv');
const title = document.querySelector("span#typewrite");
const titleText = "vpetrosyan";
let i = 0;
typewriter();

function typewriter() {
  if (i < titleText.length) {
    title.innerHTML += titleText.charAt(i);
    i++;
    setTimeout(typewriter, Math.random() * 300);
  }
}


container.addEventListener('wheel', (event) => {
  event.preventDefault();
  container.scrollBy({
    top: event.deltaY,
    behavior: 'smooth',
  });
});

const updateCanvasVisibility = () => {
  if (container.scrollTop < window.innerHeight) {
      canvas.className = "fadeincontainer";
  } else {
      canvas.className = "fadeoutcontainer";
  }
};

updateCanvasVisibility();
let isScrolling;

container.addEventListener('scroll', () => {
  window.clearTimeout(isScrolling);

  isScrolling = setTimeout(() => {
      updateCanvasVisibility();
  }, 100);
});



ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var letters = '013456789ABCDEF'.split('');

var fontSize = 10,
columns = canvas.width / fontSize;

var drops = []
for (let i = 0; i < columns; i++)
  drops[i] = Math.floor(Math.random() * canvas.height)

function draw() {
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'rgba(0, 0, 0, .3)';
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

setInterval(draw, 200);