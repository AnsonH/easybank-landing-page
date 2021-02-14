const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const fadeElements = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Close hamburger menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElements.forEach((item) => {
      item.classList.remove("fade-in");
      item.classList.add("fade-out");
    });
  } else {
    // Open hamburger menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElements.forEach((item) => {
      item.classList.add("fade-in");
      item.classList.remove("fade-out");
    });
  }
});
