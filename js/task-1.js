const categoriesList = document.querySelectorAll("#categories .item");

const categories = document.querySelectorAll(".item");
console.log(`Number of categories:${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const categoryItems = category.querySelectorAll("ul > li");
  categoryItems.forEach((categoryItem) => {
    categoryItem.style.width = "360px";
    categoryItem.style.height = "40px";
    categoryItem.style.padding = "8px 16px";
    categoryItem.style.display = "flex";
    categoryItem.style.justifyContent = "space-between";
    categoryItem.style.alignItems = "center";
    categoryItem.style.borderRadius = "4px";
    categoryItem.style.border = "1px solid #808080";
  });
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);

  category.style.display = "flex";
  category.style.padding = "16px";
  category.style.flexDirection = "column";
  category.style.alignItems = "flex-start";
  category.style.gap = "16px";
  category.style.borderRadius = "8px";
  category.style.background = "#f6f6fe";
});
