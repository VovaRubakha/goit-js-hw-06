const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("ul#ingredients");

const markup = ingredients.map((ingredient) => {
  let listRef = document.createElement("li");
  listRef.textContent = ingredient;
  listRef.classList.add(`item`);
  return listRef;
});
ingredientsRef.append(...markup);
