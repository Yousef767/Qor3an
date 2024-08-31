var swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 400,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".c-button-prev",
    prevEl: ".c-button-next" ,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.25,
    },
    600: {
      slidesPerView: 1.5,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".swiper-container2", {
  loop: true,
  freeMode:true,
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 400,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".c-button-prev2",
    prevEl: ".c-button-next2",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.25,
    },
    600: {
      slidesPerView: 1.5,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
