"use strict";

const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav__menu");
toggle.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});
