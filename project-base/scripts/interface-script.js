// INTERFACE PAGE

const swiperContainer = document.querySelector('.swiper-container')


  const swiper = new Swiper(swiperContainer, {
    slidesPerView: 1,

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
