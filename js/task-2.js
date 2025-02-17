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

images.forEach((imageData) => {
  // yeni <li> olustur ve css sınıfını ekle
  const imageItem = document.createElement("li");
  imageItem.classList.add("gallery-item");

  // yeni  <img> olustur ve src ile alt değerlerini ayarla
  const image = document.createElement("img");
  image.src = imageData.url;
  image.alt = imageData.alt;

  image.style.width = "360px";
  image.style.height = "300px";
  image.style.left = "156px";
  image.style.top = "100px";
  image.style.objectFit = "cover";

  // <img> yi <li> ye ekle, ardından <li> yi galerinin içine  ekle
  imageItem.appendChild(image);
  gallery.appendChild(imageItem);
});
gallery.style.width = "100%"; // Galeri genişliği tüm ekranı kapsar
gallery.style.height = "auto"; // Galerinin yüksekliği otomatik olur, içerik arttıkça boyu değişir
