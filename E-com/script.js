// Fetch products for homepage
async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const container = document.getElementById("products");
  if (!container) return;
  container.innerHTML = "";
  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p>$${p.price}</p>
      <a href="product.html?id=${p.id}">View Details</a>
      <button onclick="addToCart(${p.id}, '${p.title}', ${p.price})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// Fetch category products
async function fetchCategory(category) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const products = await res.json();
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p>$${p.price}</p>
      <a href="product.html?id=${p.id}">View Details</a>
      <button onclick="addToCart(${p.id}, '${p.title}', ${p.price})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// Product detail
async function fetchProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  const container = document.getElementById("product-detail");
  container.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <p><strong>$${product.price}</strong></p>
    <button onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Add to Cart</button>
  `;
}

// Cart management
function addToCart(id, title, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ id, title, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${title} added to cart!`);
}

function loadCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  container.innerHTML = "";
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `${item.title} - $${item.price}`;
    container.appendChild(div);
  });
}

function goToCheckout() {
  window.location.href = "checkout.html";
}

// Payment simulation
function processPayment(e) {
  e.preventDefault();
  localStorage.removeItem("cart");
  window.location.href = "payment-success.html";
}

// Auto-load depending on page
window.onload = () => {
  if (document.getElementById("products")) fetchProducts();
  if (document.getElementById("product-detail")) fetchProductDetail();
  if (document.getElementById("cart-items")) loadCart();
};
