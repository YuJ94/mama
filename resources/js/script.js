// MENU BUTTON VARIABLES
const menuToggler = document.querySelector(".menu-toggle");
const body = document.querySelector("body");

// MENU BUTTON FUNCTIONS
menuToggler.addEventListener('click', function () {
    body.classList.toggle("open");
});