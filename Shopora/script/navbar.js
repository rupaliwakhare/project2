// toggle theme and logo

const darktoggle = document.getElementById("dark-toggle");
const mobileDarkToggle = document.getElementById("mobile-dark-toggle");
const body = document.body;
const navLogo = document.getElementById("nav-logo");
const footerLogo = document.getElementById("footer-logo");

// Page load par check karo
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  darktoggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  mobileDarkToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  navLogo.src = "images/dark_logo1.png";
  footerLogo.src = "images/dark_logo1.png";
} else {
  body.classList.remove("dark-mode");
  darktoggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  mobileDarkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  navLogo.src = "images/light_logo1.png";
  footerLogo.src = "images/light_logo1.png";
}

function toggleDarkMode() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    darktoggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    mobileDarkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    navLogo.src = "images/light_logo1.png";
    footerLogo.src = "images/light_logo1.png";
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    darktoggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    mobileDarkToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    navLogo.src = "images/dark_logo1.png";
    footerLogo.src = "images/dark_logo1.png";
  }
}




// menu

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const menuOverlay = document.getElementById("mobile-overlay"); // id match karo

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
});
menuOverlay.addEventListener("click",()=>{
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "auto"
})

// shop dropdown

// const shopChevron = document.getElementById("shop-chevron");
// const mobileMegaMenu = document.getElementById("mobile-mega-menu");


// shopChevron.addEventListener("click", (e) => {
//  e.preventDefault();
//  mobileMegaMenu.classList.toggle("active");
//  shopChevron.classList.toggle("fa-chevron-down");
//  shopChevron.classList.toggle("fa-chevron-up");
// });

function toggleDropdown(e) {
  e.preventDefault(); 
  e.stopPropagation(); 
  const mobileMegaMenu = document.getElementById("mobile-mega-menu");
  const shopChevron = document.getElementById("shop-chevron");

  mobileMegaMenu.classList.toggle("active");
  shopChevron.classList.toggle("fa-chevron-down");
  shopChevron.classList.toggle("fa-chevron-up");
}

// footer
