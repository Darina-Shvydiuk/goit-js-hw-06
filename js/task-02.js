const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arr = ingredients.map((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  item.className = "item";
  return item;
});

const addLink = document.querySelector("#ingredients");

addLink.append(...arr);
