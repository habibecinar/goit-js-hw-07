function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.body.style.fontFamily = "'Montserrat', sans-serif";

const spanColor = document.querySelector("span.color");
const changeColorButton = document.querySelector(".change-color");
const body = document.body;
const widget = document.querySelector(".widget");

changeColorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
});

widget.style.width = "169px";
widget.style.height = "80px";
widget.style.display = "flex";
widget.style.flexDirection = "column";
widget.style.alignItems = "center"; // Öğeleri ortalar
widget.style.justifyContent = "center"; // Dikeyde ortalar

widget.style.gap = "16px";

changeColorButton.style.outline = "none";
changeColorButton.style.width = "148px";
changeColorButton.style.height = "40px";
changeColorButton.style.display = "flex";
changeColorButton.style.justifyContent = "center";
changeColorButton.style.alignItems = "center";
changeColorButton.style.padding = "8px 16px";
changeColorButton.style.borderRadius = "8px";
changeColorButton.style.border = "none";
changeColorButton.style.background = "#4E75FF";
changeColorButton.style.color = "#FFF";
changeColorButton.style.fontFamily = "'Montserrat', sans-serif";
changeColorButton.style.fontSize = "16px";
changeColorButton.style.fontStyle = "normal";
changeColorButton.style.fontWeight = "500";
changeColorButton.style.lineHeight = "24px";
changeColorButton.style.letterSpacing = "0.64px";

changeColorButton.addEventListener("mouseenter", () => {
  changeColorButton.style.background = "#6C8CFF";
});
changeColorButton.addEventListener("mouseleave", () => {
  changeColorButton.style.background = "#4E75FF";
});
