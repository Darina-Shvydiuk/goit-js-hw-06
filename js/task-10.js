function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const box = document.querySelector("#boxes");
const newBox = document.createElement("div");
newBox.style.width = "30px";
newBox.style.height = "30px";
newBox.style.backgroundColor = "tomato";

let step = 30;

function createBoxes(amount) {
  amount = input.value;
  step += 10;
  newBox.style.width = step + "px";
  newBox.style.height = step + "px";
  newBox.style.backgroundColor = getRandomHexColor();
  box.append(newBox);
  amount += 1;
}
btnCreate.addEventListener("click", handlerTargetBtn);
function handlerTargetBtn() {
  createBoxes();
}
function destroyBoxes() {
  box.remove(newBox);
}
btnDestroy.addEventListener("click", handlerTargetBtnDestroy);
function handlerTargetBtnDestroy() {
  destroyBoxes();
}

input.addEventListener("input", handlerInput);
function handlerInput() {
  console.log(input.value);

  // input.value.length;
}
