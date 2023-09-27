// Oczekaj na załadowanie strony
window.addEventListener("load", () => {
  // Pobierz element preloadera
  const preloader = document.querySelector(".preloader");

  // Opcjonalnie, możesz opóźnić animację na kilka sekund
  setTimeout(() => {
    // Dodaj klasę z animacją po opóźnieniu
    preloader.classList.add("animate-preloader");
  }, 1000); // 2000 milisekund (2 sekundy) opóźnienia
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});
