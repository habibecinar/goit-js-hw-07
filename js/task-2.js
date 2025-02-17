const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
gallery.style.background = "#FFF";
gallery.style.width = "1440px";
gallery.style.height = "848px";
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "48px 24px";
gallery.style.listStyle = "none";
gallery.style.padding = "100px 156px";
gallery.style.margin = "0";

const galleryMarkup = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item">
        <img src="${url}" alt="${alt}" width="360" height="300" style="border-radius: 8px; object-fit: cover;">
      </li>`
  )
  .join(""); // 🔹 Dizi elemanlarını string olarak birleştir

gallery.innerHTML = galleryMarkup; // 🔹 Tek seferde DOM'a ekle
