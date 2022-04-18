let sliderRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

sliderRef.addEventListener("input", function () {
  let size = sliderRef.value;
  textRef.style.fontSize = size + "px";
});
