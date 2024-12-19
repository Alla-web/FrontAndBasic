// Автоматический слайдер
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 2000);


// Карусель актеров
const carouselTrack = document.querySelector('.carousel-track');
let actorIndex = 0;

function moveCarousel() {
    actorIndex = (actorIndex + 1) % 10;
    carouselTrack.style.transform = `translateX(-${actorIndex * 25}%)`;
}

setInterval(moveCarousel, 2000);