// sidebar
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const sidebar_overlay = document.getElementById("sidebar-overlay");

openSidebar.addEventListener("click", () => {
  sidebar.classList.add("show");
  sidebar_overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar_overlay.classList.remove("active");
  document.body.style.overflow = "";
});
sidebar_overlay.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar_overlay.classList.remove("active");
  document.body.style.overflow = "";
});

// products filters
document.addEventListener("DOMContentLoaded", () => {
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
    searchQuery: "",
    category: new Set(),
    brand: new Set(),
    gender: new Set(),
    color: new Set(),
    maxPrice: 5000,
    sort: "default",
  };

  const initialize = () => {
    allProducts = allProducts;
    setupFilters();
    readFiltersFromUrl();
    updateUIFromFilters();
    addEventListeners();
    applyFiltersAndSort();
  };

  const setupFilters = () => {
    const category = [...new Set(allProducts.flatMap((p) => p.category))];
    const genders = [...new Set(allProducts.flatMap((p) => p.gender))];
    const brands = [...new Set(allProducts.flatMap((p) => p.brand))];
    const colors = [...new Set(allProducts.flatMap((p) => p.color))];
    createCheckboxFilters(genderFilters, genders, "gender");
    createCheckboxFilters(categoryFilters, category, "category");
    createCheckboxFilters(brandFilters, brands, "brand");
    createColorSwatches(colorFilters, colors, "color");
    const maxPrice = Math.ceil(Math.max(...allProducts.map((p) => p.price)));
    priceRange.max = maxPrice;
  };

  const createCheckboxFilters = (container, items, type) => {
    container.innerHTML = "";
    items.forEach((item) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="checkbox" data-filter-type="${type}" value="${item}">${item}`;
      container.appendChild(label);
    });
  };

  const createColorSwatches = (container, colors, type) => {
    container.innerHTML = "";
    colors.forEach((color) => {
      const swatch = document.createElement("div");
      swatch.className = "color-swatch";
      swatch.style.backgroundColor = color;
      swatch.dataset.filterType = type;
      swatch.dataset.value = color;
      container.appendChild(swatch);
    });
  };

  const createColorOption = (colors) => {
    if (!colors || colors.length === 0) return "";
    return colors
      .map(
        (color, index) => `
        <button 
        class="color-option ${index === 0 ? "selected" : ""}"
        style="background-color:${color};"
        data-color="${color}"
        aria-label="Select color ${color}">
        </button>
        `,
      )
      .join("");
  };

  const createSizeOptions = (sizes) => {
    if (!sizes || sizes.length === 0) return "";
    const sizeButtons = sizes
      .map(
        (size, index) => `
        <button class="size-option ${index === 0 ? "selected" : ""}">
          ${size}
        </button>
        `,
      )
      .join("");

    return `
    <div class="size-options-container">
      <div class="size-selecter">
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
            class="product-image"
            src="${product.images[0]}"
            alt="${product.name}"
          >
          <button class="favorite-btn" aria-label="Add to favorites">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
        <div class="product-details">
          <div class="product-info">
            <div class="meta-info">
              <p class="brand">${product.brand}</p>
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                <span class="rating-score">${product.avgRating}</span>
                <span class="rating-reviews">(${product.numReviews})</span>
              </div>
            </div>
            <h4 class="product-name">
              <a href="product.html?slug=${product.slug}">${product.name}</a>
            </h4>
            <div class="colors">
              <p class="option-label">Colors : </p>
              <div class="color-selecter">
                ${createColorOption(product.colors)}
              </div>
            </div>
            ${createSizeOptions(product.sizes)}
          </div>
          <div class="product-actions">
            <p class="price">${product.price}</p>
            <button class="add-to-cart-btn">
              <i class="fa-solid fa-cart-shopping"></i>
              Add
            </button>
          </div>
        </div>
      `;
      productGrid.appendChild(productCart);
    });
    productCount.textContent = `${productsToRender.length} Product(s) found`;

    productGrid.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (!button) return;

      const handleSection = (selector, selectedClass) => {
        const optionsContainer = button.closest(selector);
        if (optionsContainer) {
          const options = optionsContainer.querySelectorAll(
            `.${button.classList[0]}`,
          );
          options.forEach((opt) => opt.classList.remove(selectedClass));
          button.classList.add(selectedClass);
        }
      };
      if (button.classList.contains("color-option")) {
        handleSection(".color-selecter", "selected");
      } else if (button.classList.contains("size-option")) {
        handleSection(".size-selecter", "selected");
      }
    });
  };

  const applyFiltersAndSort = () => {
    let filteredProducts = [...allProducts];

    const urlParams = new URLSearchParams(window.location.search);
    const searchQueryFormURL = urlParams.get("search");

    if (searchQueryFormURL) {
      filters.searchQuery = searchQueryFormURL.toLowerCase();
      filteredProducts = filteredProducts.filter((p) =>
        p.name.toLowerCase().includes(filters.searchQuery),
      );
    }
    if (filters.gender.size > 0) {
      filteredProducts = filteredProducts.filter((p) =>
        filters.gender.has(p.gender),
      );
    }
    if (filters.category.size > 0) {
      filteredProducts = filteredProducts.filter((p) =>
        filters.category.has(p.category),
      );
    }
    if (filters.brand.size > 0) {
      filteredProducts = filteredProducts.filter((p) =>
        filters.brand.has(p.brand),
      );
    }
    if (filters.color.size > 0) {
      filteredProducts = filteredProducts.filter((p) =>
        p.colors.some((color) => filters.color.has(color)),
      );
    }
    filteredProducts = filteredProducts.filter(
      (p) => p.price <= filters.maxPrice,
    );

    const sortValue = filters.sort;
    if (sortValue === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === "name-asc") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === "name-desc") {
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    renderProducts(filteredProducts);
    updateUIFromFilters();
  };

  const updateUIFromFilters = () => {
    const params = new URLSearchParams();

    if (filters.searchQuery) params.set("search", filters.searchQuery);
    if (filters.gender.size > 0)
      params.set("gender", [...filters.gender].join(","));
    if (filters.category.size > 0)
      params.set("category", [...filters.category].join(","));
    if (filters.brand.size > 0)
      params.set("brand", [...filters.brand].join(","));
    if (filters.color.size > 0)
      params.set("color", [...filters.color].join(","));
    if (parseInt(priceRange.value) < parseInt(priceRange.max))
      params.set("price", filters.maxPrice);
    if (filters.sort !== "default") params.set("sort", filters.sort);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    history.pushState(null, "", newUrl);
  };

  const readFiltersFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    filters.searchQuery = params.get("search") || "";
    filters.gender = new Set(params.get("gender")?.split(",") || []);
    filters.category = new Set(params.get("category")?.split(",") || []);
    filters.brand = new Set(params.get("brand")?.split(",") || []);
    filters.color = new Set(params.get("color")?.split(",") || []);
    filters.maxPrice = Number(params.get("price")) || priceRange.max;
    filters.sort = params.get("sort") || "default";
  };

  const addEventListeners = () => {
    search.addEventListener("input", (e) => {
      filters.searchQuery = e.target.value.toLowerCase();
      applyFiltersAndSort();
    });

    categoryFilters.addEventListener("change", (e) => {
      const checkbox = e.target;
      if (checkbox.checked) {
        filters.category.add(checkbox.value);
      } else {
        filters.category.delete(checkbox.value);
      }
      applyFiltersAndSort();
    });

    brandFilters.addEventListener("change", (e) => {
      const checkbox = e.target;
      if (checkbox.checked) {
        filters.brand.add(checkbox.value);
      } else {
        filters.brand.delete(checkbox.value);
      }
      applyFiltersAndSort();
    });

    genderFilters.addEventListener("change", (e) => {
      const checkbox = e.target;
      if (checkbox.checked) {
        filters.gender.add(checkbox.value);
      } else {
        filters.gender.delete(checkbox.value);
      }
      applyFiltersAndSort();
    });

    colorFilters.addEventListener("click", (e) => {
      const swatch = e.target.closest(".color-swatch");
      if (!swatch) return;
      const value = swatch.dataset.value;
      if (filters.color.has(value)) {
        filters.color.delete(value);
        swatch.classList.remove("selected");
      } else {
        filters.color.add(value);
        swatch.classList.add("selected");
      }
      applyFiltersAndSort();
    });

    priceRange.addEventListener("input", (e) => {
      filters.maxPrice = Number(e.target.value);
      priceValue.textContent = filters.maxPrice;
      applyFiltersAndSort();
    });

    sortOptions.addEventListener("change", (e) => {
      filters.sort = e.target.value;
      applyFiltersAndSort();
    });

    resetFiltersBtn.addEventListener("click", () => {
      filters.searchQuery = "";
      filters.category.clear();
      filters.brand.clear();
      filters.gender.clear();
      filters.color.clear();
      filters.maxPrice = priceRange.max;
      filters.sort = "default";
      search.value = "";
      priceRange.value = priceRange.max;
      priceValue.textContent = priceRange.max;
      document
        .querySelectorAll(
          "#categoryFilters input, #brandFilters input, #genderFilters input",
        )
        .forEach((input) => (input.checked = false));
      document
        .querySelectorAll("#colorFilters .color-swatch")
        .forEach((swatch) => swatch.classList.remove("selected"));
      sortOptions.value = "default";
      applyFiltersAndSort();
    });
  };

  
  initialize();
});
