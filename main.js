// Variables
var body = document.getElementsByTagName("body")[0];
var header = document.getElementsByTagName("header")[0];
var logotype = document.getElementById("logotype");
var nav = document.getElementsByClassName("menu")[0];
var subnav = document.getElementsByClassName("sub-menu")[0];
var main = document.getElementsByTagName("main")[0];
var footer = document.getElementsByTagName("footer")[0];

var hamburger = document.getElementById("hamburger");
var hamburgerexit = document.getElementById("hamburgerexit");

var menu_button = document.getElementById("submenu-toggle");
var arrow_icon = document.getElementById("submenu-arrow");

var arrow_left = document.getElementById("arrow-left");
var arrow_right = document.getElementById("arrow-right");

// Toggle Hamburger Menu
hamburger.addEventListener("click", function(){
  hamburger.style.display = "none";
  hamburgerexit.style.display = "block";
  nav.style.display = "block";
  nav.parentElement.style.display = "block";
});

hamburgerexit.addEventListener("click", function(){
  hamburger.style.display = "block";
  hamburgerexit.style.display = "none";
  nav.style.display = "none";
  nav.parentElement.style.display = "none";
});

// Toggle Arrow Menu
arrow_left.addEventListener("click", function() {
  arrow_left.style.display = "none";
  arrow_right.style.display = "block";

  arrow_left.style.left = "30px";
  arrow_right.style.left = "30px";

  arrow_left.style.animation = "toleft 0.5s ease-in-out";
  arrow_right.style.animation = "toleft 0.5s ease-in-out";

  body.style.gridTemplateColumns = "[col-start] 30px [main] auto [col-end]";

  header.classList.toggle("toggle-header");
  header.style.transition = "width 0.5s ease-in-out";

});

arrow_right.addEventListener("click", function() {
  arrow_left.style.display = "block";
  arrow_right.style.display = "none";

  arrow_left.style.left = "300px";
  arrow_right.style.left = "300px";

  arrow_left.style.animation = "toright 0.5s ease-in-out";
  arrow_right.style.animation = "toright 0.5s ease-in-out";

  body.style.gridTemplateColumns = "[col-start] 300px [main] auto [col-end]";

  header.classList.toggle("toggle-header");
  header.style.transition = "width 0.5s ease-in-out";

});

// Toggle Navigation Sub Menu
menu_button.addEventListener("click", function(){
  arrow_icon.classList.toggle("fa-chevron-right");
  arrow_icon.classList.toggle("fa-chevron-down");
  subnav.classList.toggle("toggle_menu");
});
