let mouseCursor = document.querySelector(".cursor");
let transText = document.querySelectorAll(".transText .anim, .transText h1");
let changeIndex = document.querySelectorAll(".changeIndex");
window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

transText.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("scaleText");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("scaleText");
    link.classList.add("hovered-link");
  });
});

changeIndex.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    link.classList.remove("main_header_index");
    mouseCursor.classList.remove("cursor_index");
  });
  link.addEventListener("mouseover", () => {
    link.classList.add("main_header_index");
    mouseCursor.classList.add("cursor_index");
  });
});
