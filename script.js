const header = document.querySelector('header');
const ball = document.getElementsByClassName('ball');
const answer = document.getElementById('answer');
const button = document.getElementById('reset-game');
let contador = 0;

function randomColors() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

let color = randomColors();
function stringColorGuess() {
  const paragrafo = document.createElement('p');
  paragrafo.innerText = color.replace('rgb', '');
  paragrafo.setAttribute('id', 'rgb-color');
  header.appendChild(paragrafo);
}
stringColorGuess();

function ballRandomColors() {
  for (let i = 0; i < ball.length; i += 1) {
    ball[i].style.backgroundColor = randomColors();
  }
  ball[Math.round(Math.random() * 5)].style.backgroundColor = color;
}
ballRandomColors();

function score() {
  const paragrafo = document.createElement('p');
  paragrafo.innerText = `placar: ${0}`;
  paragrafo.setAttribute('id', 'score');
  header.appendChild(paragrafo);
}
score();

const placar = document.getElementById('score');
function answerColor(event) {
  if (event.target.style.backgroundColor === color) {
    answer.innerText = 'Acertou!';
    contador += 3;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
  placar.innerText = `placar: ${contador}`;
}
for (let i = 0; i < ball.length; i += 1) {
  ball[i].addEventListener('click', answerColor);
}

const rgbColor = document.getElementById('rgb-color');
function resetGame() {
  color = randomColors();
  rgbColor.innerText = color.replace('rgb', '');
  ballRandomColors();
  answer.innerText = 'Escolha uma cor';
}
button.addEventListener('click', resetGame);
