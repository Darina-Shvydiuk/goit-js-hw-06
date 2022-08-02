let counterValue = 0;
const minusButton = document.querySelector(`[data-action="decrement"]`);
const plusButton = document.querySelector(`[data-action="increment"]`);
const value = document.querySelector("#value");

plusButton.addEventListener("click", handleTargetBtnPlusClick);
function handleTargetBtnPlusClick() {
  return (value.textContent = counterValue += 1);
}

minusButton.addEventListener("click", handleTargetBtnMinusClick);
function handleTargetBtnMinusClick() {
  return (value.textContent = counterValue -= 1);
}
