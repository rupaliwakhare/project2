
// ================= DOM =================
const carousel = document.getElementById("carousel");
const filterButtons = document.querySelectorAll(".filter-button");

// ================= ⭐ STAR =================
function getStars(rating) {
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

// ================= 🛒 ADD TO CART =================
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.productId === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 🛒");
}

// ================= 🧱 PRODUCT CARD =================
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  // ✅ ID store
  card.dataset.id = product.id;

  card.innerHTML = `
    ${product.discount ? `<div class="discount-badge">${product.discount}% OFF</div>` : ""}

    <div class="product-image-container">
      <img src="${product.images[0]}" alt="${product.name}">
    </div>

    <h3 class="product-title">${product.name.slice(0, 25)}...</h3>

    <div class="product-rating">${getStars(product.avgRating)}</div>

    <div class="product-price">
      <span>₹${product.price}</span>
      <del class="old-price">₹${product.listPrice}</del>
    </div>

    <button class="add-to-cart-btn">Add to Cart</button>
  `;

  return card;
}

// ================= 🎯 RENDER =================
function renderProducts(filterTag) {
  carousel.innerHTML = "";

  let filtered = !filterTag
    ? products
    : products.filter((p) => p.tags.includes(filterTag));

  if (filtered.length === 0) {
    carousel.innerHTML = `<p>No products found 😢</p>`;
    return;
  }

  filtered.forEach((product) => {
    carousel.appendChild(createProductCard(product));
  });
}

// ================= 🎯 FILTER =================
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const tag = btn.dataset.filter;
    renderProducts(tag === "All" ? "" : tag);
  });
});

// ================= 🧠 CLICK EVENTS =================
carousel.addEventListener("click", (e) => {
  const target = e.target;

  // 🛒 ADD TO CART
  if (target.closest(".add-to-cart-btn")) {
    e.stopPropagation();

    const card = target.closest(".product-card");
    const id = card.dataset.id;

    const product = products.find((p) => p.id == id);
    addToCart(product);
    return;
  }

  // 📄 OPEN PRODUCT PAGE
  const card = target.closest(".product-card");
  if (card) {
    const id = card.dataset.id;

    // ✅ FIXED PATH
    window.location.href = `html/product.html?id=${id}`;
  }
});

// ================= 👨‍🦱👩 MEN / WOMEN =================
function renderCarouselProducts(containerId, gender) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const filtered = products.filter((p) => p.gender === gender);

  filtered.forEach((product) => {
    container.appendChild(createProductCard(product));
  });

  container.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest(".add-to-cart-btn")) {
      e.stopPropagation();

      const card = target.closest(".product-card");
      const id = card.dataset.id;

      const product = products.find((p) => p.id == id);
      addToCart(product);
      return;
    }

    const card = target.closest(".product-card");
    if (card) {
      const id = card.dataset.id;

      // ✅ FIXED PATH
      window.location.href = `html/product.html?id=${id}`;
    }
  });
}

// ================= 🚀 LOAD =================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("");
  renderCarouselProducts("womenCarousel", "Women");
  renderCarouselProducts("menCarousel", "Men");
});