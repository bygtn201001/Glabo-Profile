const renderAboutBtn = document
  .getElementById("about-me")
  .addEventListener("click", () => renderImage());

const backToMainBtn = document
  .getElementById("backBtn")
  .addEventListener("click", () => backToMain());

const imageContainer = document.getElementById("about-container");
const main = document.getElementById("main");

function renderImage() {
  imageContainer.style.display = "flex";
  main.style.display = "none";
}

function backToMain() {
  main.style.display = "flex";
  imageContainer.style.display = "none";
}
