window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector(".nav_top").classList.add("visible");
  } else {
    document.querySelector(".nav_top").classList.remove("visible");
  }
}
