function tabs(tabsBlockselector) {
  const tabsAll = document.querySelectorAll(tabsBlockselector + " [data-tab]");
  const contentAll = document.querySelectorAll(
    tabsBlockselector + " [data-tab-content]"
  );

  tabsAll.forEach(function (item) {
    item.addEventListener("click", function (event) {
      if (item.classList.contains("activeb")) return;

      tabsAll.forEach(function (i) {
        i.classList.remove("activeb");
      });
      item.classList.add("activeb");

      contentAll.forEach(function (content) {
        content.classList.remove("active");
      });
      document
        .querySelector("#" + event.target.dataset.tab)
        .classList.add("active");
    });
  });
}
tabs(".tab1");
