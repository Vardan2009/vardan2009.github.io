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