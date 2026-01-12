// Theme toggle
const html = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
  themeIcon.textContent = savedTheme === "dark" ? "🌙" : "☀️";
}

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeIcon.textContent = next === "dark" ? "🌙" : "☀️";
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

navToggle?.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Custom cursor: small solid dot + bubble slightly below, smooth trailing
const dot = document.querySelector(".cursor-dot");
const bubble = document.querySelector(".cursor-bubble");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Bubble offset (slightly below the cursor)
const offsetY = 10;

// For smooth trailing
let bubbleX = mouseX;
let bubbleY = mouseY + offsetY;

const lerp = (a, b, n) => (1 - n) * a + n * b;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  // Dot snaps to cursor
  dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

function animate() {
  // Bubble trails towards cursor with offset
  bubbleX = lerp(bubbleX, mouseX, 0.18);
  bubbleY = lerp(bubbleY, mouseY + offsetY, 0.18);

  bubble.style.transform = `translate(${bubbleX}px, ${bubbleY}px)`;

  requestAnimationFrame(animate);
}
animate();

// Subtle interactions: bubble fades on click, brightens on release
document.addEventListener("mousedown", () => {
  bubble.style.opacity = "0.6";
});
document.addEventListener("mouseup", () => {
  bubble.style.opacity = "0.9";
});

// Accessibility: show native cursor when focusing inputs (optional)
document.addEventListener("focusin", (e) => {
  if (e.target.matches("input, textarea, select")) {
    document.body.style.cursor = "auto";
  }
});
document.addEventListener("focusout", () => {
  document.body.style.cursor = "none";
});
