function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const inputRef = document.querySelector(".color");

function action(params) {
  let randomColor = getRandomHexColor();

  inputRef.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}
buttonRef.addEventListener(`click`, action);
