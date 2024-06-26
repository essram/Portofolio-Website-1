// JavaScript code for the dark mode toggle functionality
const toggleButton = document.querySelector(".dark-mode-toggle");
const bodyElement = document.body;
const navbar = document.querySelector(".navbar");

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
