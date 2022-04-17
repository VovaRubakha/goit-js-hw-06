const formRef = document.querySelector("ul#categories");
const itemRef = formRef.querySelectorAll(".item");
console.log(`Number of categories: ${itemRef.length}`);
itemRef.forEach((item) => {
  console.log(`Category:`, item.querySelector(`h2`).textContent);
  console.log(`Elements:`, item.querySelectorAll(`li`).length);
});
