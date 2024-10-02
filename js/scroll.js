const container = document.querySelector('div#main');
const canvas = document.querySelector('canvas#maincnv');

container.addEventListener('wheel', (event) => {
  event.preventDefault();
  container.scrollBy({
    top: event.deltaY,
    behavior: 'smooth',
  });
});

const updateCanvasVisibility = () =>
  canvas.className = (container.scrollTop < window.innerHeight) ? "fadeincontainer" : "fadeoutcontainer";
updateCanvasVisibility();
container.addEventListener('scroll', updateCanvasVisibility);
