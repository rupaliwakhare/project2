const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navlist");

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("active");
});
