const inputEl = document.querySelector("input");

const lengthInput = document.querySelector(`input[data-length="6"]`);

inputEl.addEventListener("blur", (event) => {
  if (event.target.value.length === Number(lengthInput.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});

// inputEl.addEventListener("blur", handlerOfFocus);

// function handlerOfFocus() {
//
//   if (inputEl.value.length === Number(lengthInput.dataset.length)) {
//     inputEl.classList.remove("invalid");
//     inputEl.classList.add("valid");
//   } else {
//     inputEl.classList.remove("valid");
//     inputEl.classList.add("invalid");
//   }
// }
