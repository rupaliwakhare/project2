

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


// PRODUCT DETAILS
const productDetail = document.getElementById("productDetail");

// GET ID FROM URL
const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

const productId = getQueryParam("id");

// FIND PRODUCT
const product = products.find((p) => p.id == productId);

// STAR
function getStars(rating = 0) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += `<i class="fas fa-star"></i>`;
    } else if (i - rating < 1) {
      stars += `<i class="fas fa-star-half-alt"></i>`;
    } else {
      stars += `<i class="far fa-star"></i>`;
    }
  }
  return stars;
}

function renderProductDetail() {
  if (!product) {
    productDetail.innerHTML = "<h2>Product not found 😢</h2>";
    return;
  }

  let selectedSize = product.sizes?.[0];
  let selectedColor = product.color?.[0];
  let qty = 1;

  // COLORS
  const colorHTML =
    product.color
      ?.map(
        (color, i) => `
      <div class="color-dot ${i === 0 ? "selected" : ""}" 
           style="background:${color}" 
           data-color="${color}">
      </div>
    `,
      )
      .join("") || "";

  // SIZES
  const sizeHTML =
    product.sizes
      ?.map(
        (size, i) => `
      <span class="size-option ${i === 0 ? "selected" : ""}" 
            data-size="${size}">
        ${size}
      </span>
    `,
      )
      .join("") || "";

  // HTML
  productDetail.innerHTML = `
  <div class="product-detail-page">

    <div class="left">
      <div class="main-image">
        <img id="mainImg" src="${product.images?.[0]}" />
      </div>

      <div class="thumbnail-container">
        ${product.images
          ?.map(
            (img, i) => `
          <img src="${img}" class="thumb ${i === 0 ? "active" : ""}">
        `,
          )
          .join("")}
      </div>
    </div>

    <div class="right">

      <div class="title-rating">
        <div>
          <h2>${product.name}</h2>
          <p class="brand">${product.brand}</p>
        </div>

   
        <div class="product-rating">
          ${getStars(product.avgRating ?? 0)}
          <span>(${product.numReviews ?? 0})</span>
        </div>
      </div>

      <h3>
        ₹${product.price}
        ${
          product.listPrice && product.listPrice > product.price
            ? `<del class="old-price">₹${product.listPrice}</del>`
            : ""
        }
      </h3>

      <p class="desc">${product.description || ""}</p>

      ${
        sizeHTML
          ? `
        <div class="sizes">
          <h4>Select Size:</h4>
          ${sizeHTML}
        </div>`
          : ""
      }

      ${
        colorHTML
          ? `
        <div class="colors">
          <h4>Select Color:</h4>
          ${colorHTML}
        </div>`
          : ""
      }

      <div class="qty-box">
        <button id="minus">-</button>
        <span id="qty">1</span>
        <button id="plus">+</button>
      </div>

      <div class="action-buttons">
        <button id="addToCartBtn" class="add-to-cart-btn">
          Add to Cart
        </button>
        <button class="buy-now">Buy Now</button>
      </div>

    </div>
  </div>
  `;

  // IMAGE SWITCH
  const mainImg = document.getElementById("mainImg");
  document.querySelectorAll(".thumb").forEach((img) => {
    img.addEventListener("click", () => {
      mainImg.src = img.src;
      document
        .querySelectorAll(".thumb")
        .forEach((i) => i.classList.remove("active"));
      img.classList.add("active");
    });
  });

  // SIZE
  document.querySelectorAll(".size-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".size-option")
        .forEach((b) => b.classList.remove("selected"));

      btn.classList.add("selected");
      selectedSize = btn.dataset.size;
    });
  });

  // COLOR
  document.querySelectorAll(".color-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      document
        .querySelectorAll(".color-dot")
        .forEach((d) => d.classList.remove("selected"));

      dot.classList.add("selected");
      selectedColor = dot.dataset.color;
    });
  });

  // QUANTITY
  const qtyEl = document.getElementById("qty");

  document.getElementById("plus").onclick = () => {
    qty++;
    qtyEl.innerText = qty;
  };

  document.getElementById("minus").onclick = () => {
    if (qty > 1) {
      qty--;
      qtyEl.innerText = qty;
    }
  };

  // ADD TO CART
  document.getElementById("addToCartBtn").addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(
      (item) =>
        item.productId == product.id &&
        item.size === selectedSize &&
        item.color === selectedColor,
    );

    if (existingItem) {
      existingItem.quantity += qty;
    } else {
      cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        color: selectedColor,
        quantity: qty,
        image: product.images[0],
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart ");
  });

  renderRelatedProducts();
}

// RELETED
function renderRelatedProducts() {
  const container = document.getElementById("relatedContainer");
  if (!product || !container) return;

  const related = products.filter(
    (p) => p.category === product.category && p.id != product.id,
  );

  container.innerHTML = related
    .map(
      (item) => `
    <div class="related-card" onclick="openProduct(${item.id})">
      <img src="${item.images[0]}">

      <div class="product-title">${item.name}</div>

    
      <div class="product-rating">
        ${getStars(item.avgRating ?? 0)}
      </div>

      <div class="product-price">
        ₹${item.price}
        ${
          item.listPrice && item.listPrice > item.price
            ? `<del class="old-price">₹${item.listPrice}</del>`
            : ""
        }
      </div>

      <button class="add-to-cart-btn">Add to Cart</button>
    </div>
  `,
    )
    .join("");
}

// NAVIGATION
function openProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

// RUN
renderProductDetail();