const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerSubmitForm);
function handlerSubmitForm(event) {
  event.preventDefault();
  console.log(event.target.elements);
  let { email, password } = event.target.elements;
  console.dir(email);
  console.dir(password);
  email = email.value;
  password = password.value;
  const object = { email, password };

  if (email === "") {
    console.log(alert("Всі поля повинні бути заповнені."));
  } else if (password === "") {
    console.log(alert("Всі поля повинні бути заповнені."));
  } else if (event.target.elements) {
    console.log(object);
  }
}
