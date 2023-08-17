const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navmenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("flex");
});
