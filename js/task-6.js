function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls input"); // Doğru input seçici
controls.style.display = "flex";
controls.style.flexDirection = "row"; // Elemanları yatay hizala
controls.style.alignItems = "center"; // Dikey hizalamayı ortala
controls.style.gap = "10px"; // Elemanlar arasında boşluk bırak
controls.style.justifyContent = "center"; // Buton ve input'u ortala
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
const buttons = document.querySelectorAll("button");

createBtn.addEventListener("click", () => {
  const amount = Number(inputNumber.value.trim()); // Boşlukları temizleyerek al
  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert("Please enter a number between 1 and 100!");
    return;
  }
  createBoxes(amount);
  inputNumber.value = ""; // Input içini temizle
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxesContainer.innerHTML = ""; // Önceki kutuları temizle
  let size = 30; // İlk kutunun boyutu

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxesContainer.appendChild(box);
    size += 10; // Bir sonraki kutu 10px daha büyük olacak
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = ""; // Tüm kutuları temizle
}

// ✅ Input tasarımı
inputNumber.style.padding = "10px";
inputNumber.style.borderRadius = "8px";
inputNumber.style.border = "1px solid #ccc";
inputNumber.style.fontSize = "16px";
inputNumber.style.top = "8px";

// ✅ Container (kutu alanı) tasarımı
boxesContainer.style.marginTop = "16px";
boxesContainer.style.display = "flex";
boxesContainer.style.flexDirection = "row";
boxesContainer.style.alignItems = "center";
boxesContainer.style.gap = "10px";
boxesContainer.style.borderRadius = "8px";
boxesContainer.style.background = "#F6F6FE";
boxesContainer.style.padding = "10px";
boxesContainer.style.minHeight = "50px";
boxesContainer.style.flexWrap = "wrap"; // ✅ Kutuların taşmasını önler
boxesContainer.style.justifyContent = "center";
boxesContainer.style.alignItems = "flex-start";

// ✅ Düğme tasarımları
buttons.forEach((button) => {
  button.style.width = "120px";
  button.style.display = "flex";
  button.style.justifyContent = "center";
  button.style.alignItems = "center";
  button.style.padding = "8px 16px";
  button.style.borderRadius = "8px";
  button.style.border = "none";
  button.style.color = "#FFF";
  button.style.fontFamily = "'Montserrat', sans-serif";
  button.style.fontSize = "16px";
  button.style.fontWeight = "500";
  button.style.marginBottom = "8px"; // Butonları alt alta getirme
});

// ✅ Create butonu hover efekti
createBtn.style.background = "#4E75FF";
createBtn.addEventListener("mouseenter", () => {
  createBtn.style.background = "#6C8CFF";
});
createBtn.addEventListener("mouseleave", () => {
  createBtn.style.background = "#4E75FF";
});

// ✅ Destroy butonu hover efekti
destroyBtn.style.background = "#FF4E4E";
destroyBtn.addEventListener("mouseenter", () => {
  destroyBtn.style.background = "#FF7070";
});
destroyBtn.addEventListener("mouseleave", () => {
  destroyBtn.style.background = "#FF4E4E";
});
