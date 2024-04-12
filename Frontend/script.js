"use strict";

const mobileNav = document.querySelector(".mobile-nav");
const mobileIcon = document.querySelector(".nav-open");

mobileIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("active");

  if (mobileNav.classList.contains("active")) {
    mobileIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    mobileIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

// This JS code segment simply toggles an active class that replaces an icon class with another on click
