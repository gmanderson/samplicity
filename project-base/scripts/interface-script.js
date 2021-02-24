//THIS FILE CONTAINS ONLY SCRIPTS SPECIFIC TO INTERFACE PAGE

const swiperContainer = document.querySelector('.swiper-container')

// Constructs carousel with arrows and pagination dots for control
const swiper = new Swiper(swiperContainer, {
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
