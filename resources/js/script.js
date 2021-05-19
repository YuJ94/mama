// MENU BUTTON VARIABLES
const menuToggler = document.querySelector(".menu-toggle");
const body = document.querySelector("body");

// MENU BUTTON FUNCTIONS
menuToggler.addEventListener('click', function () {
    body.classList.toggle("open");
});

// CAROUSEL VARIABLES

const carouselBox = document.querySelector('.carousel-box');
const carouselText = document.querySelectorAll('.carousel-text');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//COUNTER

let counter = 1;
const size = carouselText[0].clientWidth;

carouselBox.style.transform = 'translateX(' + (-size * counter) + 'px)';

//BUTTON LISTENERS

nextBtn.addEventListener('click', () => {
    if (counter >= carouselText.length - 1) return;
    carouselBox.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselBox.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselBox.addEventListener('transitionend', () => {
    if (carouselText[counter].id === 'lastClone') {
        carouselBox.style.transition = "none";
        counter = carouselText.length - 2;
        carouselBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselText[counter].id === 'firstClone') {
        carouselBox.style.transition = "none";
        counter = carouselText.length - counter;
        carouselBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});