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

    let allProducts = [];
    const filters = {
        searchQuery:"",
        category: new Set(),
        brand: new Set(),
        gender: new Set(),
        color: new Set(),
        gender: new Set(),
        maxPrice: 5000,
        sort:"default",
    };

    const initialize = ()=>{
        allProducts = allProducts;
        setupFilters();
        readFiltersFromUrl();
        updateUIFromFilters();
        addEventListeners();
        applyFiltersAndSort();
    };

    const setupFilters = ()=>{
        const category = [
            ...new Set(allProducts.flatMap((p) => p.category))
        ];
        const genders = [...new Set(allProducts.flatMap((p)=>p.gender))

        ];
        const brands = [...new Set(allProducts.flatMap((p)=> p.brand))

        ];
        const colors = [...new Set(allProducts.flatMap((p)=> p.color))

        ];
        createCheckboxFilters(genderFilters, genders, "gender");
        createCheckboxFilters(categoryFilters, categoryFilters, "category");
        createCheckboxFilters(brandFilters, brands, "brand");
        // createCheckboxFilters(genderFilters, genders, "gender");
        createColorSwatches(colorFilters, colors, "color");
        const maxPrice = Math.ceil(
            Math.max(...allProducts.map((p)=>p.price))
        );
        priceRange.max = maxPrice;
    };

    const createCheckboxFilters = (container, item, type)=>{
        container.innerHTML = ""; //Clear previous
        items.forEach((item)=>{
            const label = document.createElement("label");
            label.innerHTML = `<input type="checkbox" data-filter-type="${type}" value="${item}"
            >${item}`;
            container.appendChild(label);
        });
    }

    const createColorSwatches = (container, colors, type)=>{
        container.HTML = ""; //Clear previous
        colors.forEach((color)=>{
            const swatch = document.createElement("div");
            swatch.className("color-swatch");
            swatch.style.backgroundColor = color;
            swatch.dataset.filterType = type;
            swatch.dataset.value = color;
            container.appendChild(swatch);
        });
    }

});