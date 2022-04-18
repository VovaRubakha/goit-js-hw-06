const inputRef = document.querySelector("#validation-input");
let inputLength = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", (input) => {
  const text = input.target.value;

  if (text.length !== inputLength) {
    classRef("invalid", "valid");
  } else {
    classRef("valid", "invalid");
  }
});
function classRef(addClass, removeClass) {
  inputRef.classList.remove(removeClass);
  inputRef.classList.add(addClass);
}
