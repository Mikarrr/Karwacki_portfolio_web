const mobileNav = document.querySelector(".list");
const burgerIcon = document.querySelector(".hamburger");

burgerIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  burgerIcon.classList.toggle("active");
});
