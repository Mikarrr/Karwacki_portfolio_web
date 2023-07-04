gsap.registerPlugin(ScrollTrigger);

const mainBanner = document.querySelectorAll(".main_banner");
const mainDescription = document.querySelectorAll(".main_description");
const logo = document.querySelectorAll(".logo");
const hamburger = document.querySelectorAll(".hamburger");
const mainProjects = document.querySelectorAll(".main_projects");
const icons = document.querySelectorAll(".js_icon_pop");
const description = document.querySelectorAll(".js_description_pop");
mainBanner.forEach((section) => {
  gsap.fromTo(
    section.children,
    { x: "+=1000", y: "+=1000", opacity: 0 },
    {
      x: 0,
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 5,
      ease: "back",
      scrollTrigger: {
        trigger: section,
        start: "top 40%",
        end: "center 40%",
        markers: false,
        scrub: 2.5,
      },
    }
  );
});

logo.forEach((section) => {
  gsap.fromTo(
    section.children,
    { x: "-=1000", opacity: 0 },
    {
      x: 0,
      opacity: 1,
      stagger: 3,
      duration: 10,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 30%",
        markers: false,
        scrub: 3,
      },
    }
  );
});

hamburger.forEach((section) => {
  gsap.fromTo(
    section.children,
    { x: "+=1000", opacity: 0 },
    {
      x: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 10,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 30%",
        markers: false,
        scrub: 0,
      },
    }
  );
});

mainProjects.forEach((section) => {
  gsap.fromTo(
    section.children,
    { y: "+=200", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 5,
      ease: "back",
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "top 30%",
        markers: false,
        scrub: 2.5,
      },
    }
  );
});

icons.forEach((section) => {
  gsap.fromTo(
    section.children,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 5,
      ease: "back",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "top 90%",
        markers: false,
        scrub: 2.5,
      },
    }
  );
});

description.forEach((div) => {
  gsap.fromTo(
    div.children,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 1,
      duration: 5,
      ease: "back",
      scrollTrigger: {
        trigger: div,
        start: "top 40%",
        end: "top 60%",
        markers: true,
        scrub: 4.5,
      },
    }
  );
});
