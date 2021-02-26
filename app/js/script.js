const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const fadeElements = document.querySelectorAll(".has-fade");
const headerMobileMenu = document.querySelector(".header__menu");

// Close the hamburger menu
function closeMobileMenu() {
  body.classList.remove("noscroll");
  header.classList.remove("open");
  fadeElements.forEach((item) => {
    item.classList.remove("fade-in");
    item.classList.add("fade-out");
  });
}

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    closeMobileMenu();
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

// Close the mobile menu when click on the overlay
const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    closeMobileMenu();
  }
});
