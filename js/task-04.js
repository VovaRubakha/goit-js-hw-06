const value = document.querySelector(`#value`);
let counterValue = 0;

const decreaseBtn = document.querySelector(`[data-action="decrement"]`);
const increaseBtn = document.querySelector(`[data-action="increment"]`);

decreaseBtn.addEventListener(`click`, counterDecrease);
increaseBtn.addEventListener(`click`, counterIncrease);

function counterDecrease() {
  counterValue += 1;
  value.textContent = counterValue;
}
function counterIncrease() {
  counterValue -= 1;
  value.textContent = counterValue;
}
