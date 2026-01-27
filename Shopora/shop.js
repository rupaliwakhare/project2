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
        item.forEach((item)=>{
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
    };
    // create color for product
    const createColorOption = (colors)=>{
        if(!colors || colors.length === 0) return "";
        return colors
        .map((color,index)=>`
        <button 
        class="color-option ${index === 0 ? "selected" : ""}"
        style = "background-color:${color};"
        data-color="${color}"
        aria-label="Select color $(color)">
        </button>
        
        `)
        .join("");
    };

    // crate sized for product

   const createSizeOptions = (sizes) => {
    if(!sizes || sizes.length === 0) return "";
    const sizeButtons = sizes
    .map(
        (size,index) =>`
        <button class="size-option ${
            index === 0 ? "selected" : ""
   }">
   ${size}
   </button>
   `
    )
    .join("");

    return `
    <div class="size-options-container">
    <div class = "size-selecter">
    ${sizeButtons}
    </div>
    </div>
    `;
   };

   const renderProducts = (productsToRender) => {
    productGrid.innerHTML = "";
    productsToRender.forEach((product) => {
        const productCart = document.createElement("div");
        productCart.className = "product-card";
        productCart.innerHTML = `
        <div class="product-image-container">
        <img 
        class = "product-image"
        src="${product.images[0]}"
        alt="${product.name}"
        >
        <button class = "favorite-btn" arial-label="Add to favorites">
        <i class="fa-regular fa-heart"></i>
        </button>
        </div>
        <div class="product-details">
        <div class="product-info">
        <div class="meta-info">
        <p class="brand">${product.brand}</p>
        <div class="rating">
        <i class="fa-solid fa-start"></i>
        <span class="rating-score">${product.avgRating}
        </span>
        <span class="rating-reviews">(${product.numReviews})
        </span>
        </div>
        </div>
        <h4 class="product-name">
        <a href="product.html?slug=${
            product.slug
        }">${product.name}</a></h4>
        <div class="colors">
        <p class="option-label">Colors : </p>`
    })
   };

});