let counterValue = 0;
const minusButton = document.querySelector(`[data-action="decrement"]`);
const plusButton = document.querySelector(`[data-action="increment"]`);
const value = document.querySelector("#value");

const handleTargetBtnPlusClick = () => {
  value.textContent = counterValue;

  return (counterValue += 1);
};

plusButton.addEventListener("click", handleTargetBtnPlusClick);

const handleTargetBtnMinusClick = () => {
  value.textContent = counterValue;
  return (counterValue -= 1);
};

minusButton.addEventListener("click", handleTargetBtnMinusClick);
