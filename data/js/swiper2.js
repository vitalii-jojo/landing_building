var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    pagination: {
      el: ".Pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".SwiperBtnNext",
      prevEl: ".SwiperBtnPrev",
    },
  });
