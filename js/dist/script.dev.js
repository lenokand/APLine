"use strict";

var burger = document.getElementById('burger-menu');
var shadow = document.getElementById('shadow');
var menu = document.getElementById('menu_bar');

var toggleMenu = function toggleMenu() {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
  shadow.classList.toggle('open');
};

burger.addEventListener('click', toggleMenu);
shadow.addEventListener('click', toggleMenu);