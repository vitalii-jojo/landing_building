var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 150,
  loop: false,

  // mousewheel: {
  //   enabled: true,
  // },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  pagination: {
    el: ".Pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".SwiperBtnNext",
    prevEl: ".SwiperBtnPrev",
  },
});

// -------

const tabsAll = document.querySelectorAll("[data-tab]");
const btnAll = document.querySelectorAll("[data-btn]");
const nextButton = document.querySelector(".SwiperBtnNext");
const prevButton = document.querySelector(".SwiperBtnPrev");

function updateBtn() {
  tabsAll.forEach((tab, index) => {
    if (tab.classList.contains("swiper-slide-active")) {
      btnAll[index].classList.add("activeb");
    } else {
      btnAll[index].classList.remove("activeb");
    }
  });
}

nextButton.addEventListener("click", updateBtn);
prevButton.addEventListener("click", updateBtn);
