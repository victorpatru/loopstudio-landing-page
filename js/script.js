const menuBtn = document.getElementById("menu-btn");
const menuBar = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");
});
