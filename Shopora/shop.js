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
sidebar_overlay.addEventListener("click",()=>{
    sidebar.classList.remove("show");
    sidebar_overlay.classList.remove("active");
    document.body.style.overflow = "";
});
// products filters
document.addEventListener("DomContentLoaded",()=>{
    const productGrid = document.getElementById("productGrid");
    const productCount = document.getElementById("productCount");
    const search = document.getElementById("searchInput");
    const categoryFilters = document.getElementById("categoryFilters");
    const brandFilters = document.getElementById("brandFilters");
    const genderFilters = document.getElementById("genderFilters");
    const colorFilters = document.getElementById("colorFilters");
    const priceRange = document.getElementById("priceRange");
    const priceValue = document.getElementById("priceValue");
    const sortOptions = document.getElementById("sortOptions");
    const resetFiltersBtn = document.getElementById("resetFiltersBtn");
});