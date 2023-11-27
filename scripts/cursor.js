let mouseCursor = document.querySelector(".cursor");
let mouseCursorDot = document.querySelector(".dot_cursor");
let transText = document.querySelectorAll(".transText .anim, .transText h1");
let changeIndex = document.querySelectorAll(".changeIndex");
let allhref = document.querySelectorAll("body a");
window.addEventListener("mousemove", cursor);

function cursor(e) {
  const posX = e.clientX;
  const posY = e.clientY;

  mouseCursor.style.left = `${posX}px`;
  mouseCursor.style.top = `${posY}px`;
  mouseCursorDot.style.left = `${posX}px`;
  mouseCursorDot.style.top = `${posY}px`;

  mouseCursor.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 200, fill: "forwards" }
  );
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

allhref.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursorDot.classList.remove("scaleTextHref");
  });
  link.addEventListener("mouseover", () => {
    mouseCursorDot.classList.add("scaleTextHref");
  });
});

changeIndex.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    link.classList.remove("main_header_index");
    mouseCursor.classList.remove("cursor_index");
    mouseCursorDot.classList.remove("cursor_index");
  });
  link.addEventListener("mouseover", () => {
    link.classList.add("main_header_index");
    mouseCursor.classList.add("cursor_index");
    mouseCursorDot.classList.add("cursor_index");
  });
});
