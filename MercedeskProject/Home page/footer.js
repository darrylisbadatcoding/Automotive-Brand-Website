const jumpToTopButton = document.getElementById("jumpToTop");


window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    jumpToTopButton.style.display = "block";
  } else {
    jumpToTopButton.style.display = "none";
  }
};


jumpToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
