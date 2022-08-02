const input = document.querySelector("input");
console.log(input);
const span = document.querySelector("span");
console.log(span);

input.addEventListener("input", (event) => {
  if (input) {
    span.textContent = event.target.value;
  } else {
    span.textContent = "Anonymous";
  }
});
