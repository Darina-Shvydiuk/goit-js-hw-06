// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const minusButton = document.querySelector(`[data-action="decrement"]`);

const plusButton = document.querySelector(`[data-action="increment"]`);

const handleTargetBtnClick = () => {
  // if (minusButton.addEventListener) {
  //   return (counterValue += 1);
  // } else {
  //   return (counterValue -= 1);
  // }
};
minusButton.addEventListener("click", (handleTargetBtnClick) => {
  if (minusButton.addEventListener) {
    return (counterValue += 1);
  }
});
console.log("Натискаю на -");
plusButton.addEventListener("click", (handleTargetBtnClick) => {
  if (plusButton.addEventListener) {
    return (counterValue -= 1);
  }
});
console.log("Натискаю на +");
