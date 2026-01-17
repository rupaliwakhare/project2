const darktoggle = document.getElementById("dark-toggle");
const mobileDarkToggle = document.getElementById("mobile-dark-toggle");
const body = document.body;
const navLogo = document.getElementById("nav-logo");

// Page load par check karo
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  darktoggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  mobileDarkToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  navLogo.src = "images/dark_logo1.png";
} else {
  body.classList.remove("dark-mode");
  darktoggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  mobileDarkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  navLogo.src = "images/logo (4).png";
}

function toggleDarkMode() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    darktoggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    mobileDarkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    navLogo.src = "images/logo (4).png";
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    darktoggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    mobileDarkToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    navLogo.src = "images/dark_logo1.png";
  }
}

// darktoggle.addEventListener("click", toggleDarkMode);
// mobileDarkToggle.addEventListener("click", toggleDarkMode);
