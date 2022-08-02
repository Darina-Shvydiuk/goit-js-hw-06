const inputEl = document.querySelector("input");
const span = document.querySelector("#text");

inputEl.addEventListener("input", handlerTargetBtn);
function handlerTargetBtn() {
  span.style.fontSize = inputEl.value + "px";
}
