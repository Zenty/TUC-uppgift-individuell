// Toggle Hamburger Menu
var header = document.getElementsByTagName("header")[0];
var hamburger = document.getElementById("hamburger");
var hamburgerexit = document.getElementById("hamburgerexit");
var nav = document.getElementsByClassName("menu")[0];

hamburger.addEventListener("click", function(){
  hamburger.style.display = "none";
  hamburgerexit.style.display = "block";
  nav.style.display = "block";
});

hamburgerexit.addEventListener("click", function(){
  hamburger.style.display = "block";
  hamburgerexit.style.display = "none";
  nav.style.display = "none";
});

// Toggle Navigation Sub Menu
var menu_button = document.getElementById("submenu-toggle");
var arrow_icon = document.getElementById("submenu-arrow");
var subnav = document.getElementsByClassName("sub-menu")[0];

menu_button.addEventListener("click", function(){
  arrow_icon.classList.toggle("fa-chevron-right");
  arrow_icon.classList.toggle("fa-chevron-down");
  subnav.classList.toggle("toggle_menu");
});