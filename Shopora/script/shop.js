
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
  navLogo.src = "../images/dark_logo1.png";
  footerLogo.src = "../images/dark_logo1.png";
} else {
  body.classList.remove("dark-mode");
  darktoggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  mobileDarkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  navLogo.src = "../images/light_logo1.png";
  footerLogo.src = "../images/light_logo1.png";
}

function toggleDarkMode() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    darktoggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    mobileDarkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    navLogo.src = "../images/light_logo1.png";
    footerLogo.src = "../images/light_logo1.png";
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    darktoggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    mobileDarkToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    navLogo.src = "../images/dark_logo1.png";
    footerLogo.src = "i../mages/dark_logo1.png";
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



function toggleDropdown(e) {
  e.preventDefault(); 
  e.stopPropagation(); 
  const mobileMegaMenu = document.getElementById("mobile-mega-menu");
  const shopChevron = document.getElementById("shop-chevron");

  mobileMegaMenu.classList.toggle("active");
  shopChevron.classList.toggle("fa-chevron-down");
  shopChevron.classList.toggle("fa-chevron-up");
}


// ================= SIDEBAR =================
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");

openSidebar.addEventListener("click", () => {
  sidebar.classList.add("show");
  sidebarOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

const closeSidebarFn = () => {
  sidebar.classList.remove("show");
  sidebarOverlay.classList.remove("active");
  document.body.style.overflow = "";
};

closeSidebar.addEventListener("click", closeSidebarFn);
sidebarOverlay.addEventListener("click", closeSidebarFn);

// ================= SHOP PAGE =================
document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");
  const productCount = document.getElementById("productCount");
  const searchInput = document.getElementById("searchInput");

  const categoryFilters = document.getElementById("categoryFilters");
  const brandFilters = document.getElementById("brandFilters");
  const genderFilters = document.getElementById("genderFilters");
  const colorFilters = document.getElementById("colorFilters");

  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");
  const sortOptions = document.getElementById("sortOptions");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");

  let allProducts = products; // your products array
  const filters = {
    search: "",
    category: new Set(),
    brand: new Set(),
    gender: new Set(),
    color: new Set(),
    maxPrice: 0,
    sort: "default",
  };

  // -------- SETUP FILTERS --------
  function setupFilters() {
    const categories = [...new Set(allProducts.map(p => p.category))];
    const brands = [...new Set(allProducts.map(p => p.brand))];
    const genders = [...new Set(allProducts.map(p => p.gender))];
    const colors = [...new Set(allProducts.flatMap(p => p.color))];

    createCheckboxes(categoryFilters, categories, "category");
    createCheckboxes(brandFilters, brands, "brand");
    createCheckboxes(genderFilters, genders, "gender");
    createColorSwatches(colors);

    const maxPrice = Math.ceil(Math.max(...allProducts.map(p => p.price)));
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    filters.maxPrice = maxPrice;
    priceValue.textContent = `₹${maxPrice}`;
  }

  function createCheckboxes(container, items, type) {
    container.innerHTML = "";
    items.forEach(item => {
      container.innerHTML += `
        <label>
          <input type="checkbox" value="${item}" data-type="${type}"> ${item}
        </label>
      `;
    });
  }

  function createColorSwatches(colors) {
    colorFilters.innerHTML = "";
    colors.forEach(color => {
      const div = document.createElement("div");
      div.className = "color-swatch";
      div.style.backgroundColor = color;
      div.dataset.color = color;
      colorFilters.appendChild(div);
    });
  }

  // -------- RENDER PRODUCTS --------
  function renderProducts(list) {
    productGrid.innerHTML = "";

    if (list.length === 0) {
      productGrid.innerHTML = "<p>No products found.</p>";
      productCount.textContent = "0 Products";
      return;
    }

    list.forEach(p => {
      productGrid.innerHTML += `
        <div class="product-card" data-id="${p.id}">
          <img src="${p.images[0]}" alt="${p.name}">
          <h4>${p.name}</h4>
          <p class="brand">${p.brand}</p>
          <p class="price">₹${p.price}</p>
          <div class="sizes">
            ${p.sizes.map(size => `<button class="size-btn">${size}</button>`).join("")}
          </div>
          <button class="add-to-cart-btn"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        </div>
      `;
    });

    productCount.textContent = `${list.length} Product(s) found`;
  }

  // -------- SIZE SELECTION & ADD TO CART --------
  productGrid.addEventListener("click", (e) => {
    const target = e.target;

    // SIZE BUTTON
    if (target.classList.contains("size-btn")) {
      const sizeContainer = target.parentElement;
      sizeContainer.querySelectorAll(".size-btn").forEach(btn => btn.classList.remove("active"));
      target.classList.add("active");
    }

    // ADD TO CART
    if (target.classList.contains("add-to-cart-btn")) {
      const productCard = target.closest(".product-card");
      const productId = productCard.dataset.id;
      const selectedSize = productCard.querySelector(".size-btn.active");

      if (!selectedSize) {
        alert("Please select a size first");
        return;
      }

      const cartItem = {
        productId,
        name: productCard.querySelector("h4").innerText,
        price: Number(productCard.querySelector(".price").innerText.replace("₹","")),
        size: selectedSize.innerText,
        quantity: 1,
        image: productCard.querySelector("img").src
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Product added to cart!");
    }
  });

  // -------- APPLY FILTERS --------
  function applyFilters() {
    let filtered = [...allProducts];

    if (filters.search) filtered = filtered.filter(p => p.name.toLowerCase().includes(filters.search));
    if (filters.category.size) filtered = filtered.filter(p => filters.category.has(p.category));
    if (filters.brand.size) filtered = filtered.filter(p => filters.brand.has(p.brand));
    if (filters.gender.size) filtered = filtered.filter(p => filters.gender.has(p.gender));
    if (filters.color.size) filtered = filtered.filter(p => p.color.some(c => filters.color.has(c)));
    filtered = filtered.filter(p => p.price <= filters.maxPrice);

    if (filters.sort === "price-asc") filtered.sort((a,b) => a.price - b.price);
    if (filters.sort === "price-desc") filtered.sort((a,b) => b.price - a.price);
    if (filters.sort === "name-asc") filtered.sort((a,b) => a.name.localeCompare(b.name));
    if (filters.sort === "name-desc") filtered.sort((a,b) => b.name.localeCompare(a.name));

    renderProducts(filtered);
  }

  // -------- EVENTS --------
  document.addEventListener("change", e => {
    const type = e.target.dataset.type;
    if (!type) return;

    if (e.target.checked) filters[type].add(e.target.value);
    else filters[type].delete(e.target.value);

    applyFilters();
  });

  colorFilters.addEventListener("click", e => {
    const swatch = e.target.closest(".color-swatch");
    if (!swatch) return;

    const color = swatch.dataset.color;
    swatch.classList.toggle("selected");
    filters.color.has(color) ? filters.color.delete(color) : filters.color.add(color);

    applyFilters();
  });

  priceRange.addEventListener("input", e => {
    filters.maxPrice = Number(e.target.value);
    priceValue.textContent = `₹${filters.maxPrice}`;
    applyFilters();
  });

  sortOptions.addEventListener("change", e => {
    filters.sort = e.target.value;
    applyFilters();
  });

  resetFiltersBtn.addEventListener("click", () => {
    filters.search = "";
    filters.category.clear();
    filters.brand.clear();
    filters.gender.clear();
    filters.color.clear();
    filters.sort = "default";
    filters.maxPrice = priceRange.max;

    document.querySelectorAll("input[type=checkbox]").forEach(i => i.checked = false);
    document.querySelectorAll(".color-swatch").forEach(c => c.classList.remove("selected"));

    searchInput.value = "";
    priceRange.value = priceRange.max;
    priceValue.textContent = `₹${priceRange.max}`;
    sortOptions.value = "default";

    applyFilters();
  });

  // SEARCH FORM - submit type (reloads page with query param)
  const searchForm = document.querySelector("form[action='shop.html']");
  if (searchForm) {
    searchForm.addEventListener("submit", e => {
      filters.search = searchInput.value.toLowerCase();
      applyFilters();
      e.preventDefault(); // remove this if you want page reload
    });
  }

  // -------- INIT --------
  setupFilters();
  applyFilters();
});
