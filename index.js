window.addEventListener(
  "DOMContentLoaded",
  () => {
    var Swipes = new Swiper(".swiper-container", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 3000,
      },
    });
  },
  {
    once: true,
  }
);
