const loginForm = document.querySelector(".login-form");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector("button");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

  //Form verilerini nesneye dönüştür ve konsola yazdır
  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(formData);

  loginForm.reset();
});

loginForm.style.display = "inline-flex";
loginForm.style.padding = "24px";
loginForm.style.flexDirection = "column";
loginForm.style.gap = "8px";
loginForm.style.borderRadius = "8px";
loginForm.style.background = "#fff";

labels.forEach((label) => {
  label.style.display = "flex";
  label.style.flexDirection = "column";
  label.style.gap = "8px";
  label.style.color = "#2e2f42";
  label.style.fontFamily = "'Montserrat', sans-serif";
  label.style.fontSize = "16px";
  label.style.fontStyle = "normal";
  label.style.fontWeight = "400";
  label.style.lineHeight = "24px";
  label.style.letterSpacing = "0.64px";
});

inputs.forEach((input) => {
  input.style.outline = "none";
  input.style.width = "360px";
  input.style.height = "40px";
  input.style.borderRadius = "4px";
  input.style.border = "1px solid #808080";
  input.style.padding = "8px 16px";
  input.style.fontFamily = "'Montserrat', sans-serif";

  input.addEventListener("mouseenter", () => {
    input.style.border = "1px solid #000";
  });
  input.addEventListener("mouseleave", () => {
    input.style.border = "1px solid #808080";
  });
});

submitButton.style.outline = "none";
submitButton.style.marginTop = "8px";
submitButton.style.width = "86px";
submitButton.style.height = "40px";
submitButton.style.display = "flex";
submitButton.style.justifyContent = "center";
submitButton.style.alignItems = "center";
submitButton.style.padding = "8px 16px";
submitButton.style.borderRadius = "8px";
submitButton.style.border = "none";
submitButton.style.background = "#4E75FF";
submitButton.style.color = "#FFF";
submitButton.style.fontFamily = "'Montserrat', sans-serif";
submitButton.style.fontSize = "16px";
submitButton.style.fontStyle = "normal";
submitButton.style.fontWeight = "500";
submitButton.style.lineHeight = "24px";
submitButton.style.letterSpacing = "0.64px";

submitButton.addEventListener("mouseenter", () => {
  submitButton.style.background = "#6C8CFF";
});
submitButton.addEventListener("mouseleave", () => {
  submitButton.style.background = "#4E75FF";
});
