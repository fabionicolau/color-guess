const header = document.querySelector('#header');
const ball = document.getElementsByClassName('ball');

function randomColors() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}
function addColorGuess() {
  const paragrafo = document.createElement('p');
  paragrafo.innerText = randomColors().replace('rgb', '');
  paragrafo.setAttribute('id', 'rgb-color');
  header.appendChild(paragrafo);
}
addColorGuess();

function ballRandomColors() {
  for (let i = 0; i < ball.length; i += 1) {
    ball[i].style.backgroundColor = randomColors();
  }
}
ballRandomColors();
