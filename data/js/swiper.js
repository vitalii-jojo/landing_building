// import Swiper JS
import Swiper from 'swiper';

    
    var swiper = new Swiper(".mySwiper", {
      effect: "flip",
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".feature-next",
        prevEl: ".feature-prev",
      },
    });
