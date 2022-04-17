let inputRef = document.querySelector(`#name-input`);
const outputRef = document.querySelector(`#name-output`);
inputRef.addEventListener(`input`, changeOutput);

function changeOutput(input) {
  inputRef = input.target.value.trim();
  if (inputRef) {
    outputRef.textContent = input.target.value;
  } else {
    outputRef.textContent = "Anonymous";
  }
}
