"use strict";

const menuIcon = document.getElementById("menu-icon");

if (menuIcon) {
  const menuList = document.getElementById("header__menu-list");
  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("active");
    menuList.classList.toggle("active");
  });
}
