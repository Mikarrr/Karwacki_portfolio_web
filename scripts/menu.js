const mobileNav = document.querySelector(".list");
const burgerIcon = document.querySelector(".hamburger");
const menuItems = document.querySelectorAll(".list ul li");

burgerIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  burgerIcon.classList.toggle("active");
});

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Sprawdź, czy menu jest otwarte, a następnie je zamknij
    if (mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active");
      burgerIcon.classList.remove("active");
    }
  });
});
