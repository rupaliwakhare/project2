// sidebar

const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const sidebar_overlay = document.getElementById("sidebar-overlay");

openSidebar.addEventListener("click",()=>{
    sidebar.classList.add("show");
    sidebar_overlay.classList.add("active");
    document.body.style.overflow = "hidden";
});
closeSidebar.addEventListener("click",()=>{
    sidebar.classList.remove("show");
    sidebar_overlay.classList.remove("active");
    document.body.style.overflow = "";
});