const nameInput = document.querySelector("#name-input");
const heading = document.querySelector("h1");
const greetings = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const value = event.currentTarget.value.trim();
  greetings.textContent = value ? value : "Anonymous";
});

const wrapper = document.createElement("div");
nameInput.parentNode.insertBefore(wrapper, nameInput);
wrapper.appendChild(nameInput);
wrapper.appendChild(heading);

heading.style.margin = "0";
heading.style.color = "#2E2F42";
heading.style.fontFamily = "Montserrat";
heading.style.fontSize = "24px";
heading.style.fontStyle = "normal";
heading.style.fontWeight = "600";
heading.style.lineHeight = "32px"; /* 133.333% */
heading.style.letterSpacing = "0.96px";
