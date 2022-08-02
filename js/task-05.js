const input = document.querySelector("input");

const span = document.querySelector("span");

input.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;
  if (span.textContent === "") {
    span.textContent = "Anonymous";
  }
});
