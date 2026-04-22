
const productDetail = document.getElementById("productDetail");

// GET ID FROM URL
const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

const productId = getQueryParam("id");

// ⚠️ DEBUG (optional)
console.log("ID:", productId);
console.log("Products:", products);

// FIND PRODUCT
const product = products.find((p) => p.id == productId);

function renderProductDetail() {
  if (!product) {
    productDetail.innerHTML = "<h2>Product not found 😢</h2>";
    return;
  }

  let selectedSize = product.sizes[0];
  let selectedColor = product.color[0];
  let qty = 1;

  // COLORS
  const colorHTML = product.color
    .map(
      (color, i) => `
      <div class="color-dot ${i === 0 ? "selected" : ""}" 
           style="background:${color}" 
           data-color="${color}">
      </div>
    `
    )
    .join("");

  // SIZES
  const sizeHTML = product.sizes
    .map(
      (size, i) => `
      <span class="size-option ${i === 0 ? "selected" : ""}" 
            data-size="${size}">
        ${size}
      </span>
    `
    )
    .join("");

  // HTML
  productDetail.innerHTML = `
  <div class="product-detail-page">

    <!-- LEFT -->
    <div class="left">
      <div class="main-image">
        <img id="mainImg" src="${product.images[0]}" />
      </div>

      <div class="thumbnail-container">
        ${product.images
          .map(
            (img, i) => `
          <img src="${img}" class="thumb ${i === 0 ? "active" : ""}">
        `,
          )
          .join("")}
      </div>
    </div>

    <!-- RIGHT -->
    <div class="right">

      <div class="title-rating">
  <div>
    <h2>${product.name}</h2>
    <p class="brand">${product.brand}</p>
  </div>

  <div class="rating">⭐⭐⭐⭐☆ (120 reviews)</div>
</div>
      <h3>₹${product.price}</h3>

      <p class="desc">${product.description || ""}</p>

      <div class="sizes">
        <h4>Select Size:</h4>
        ${sizeHTML}
      </div>

      <div class="colors">
        <h4>Select Color:</h4>
        ${colorHTML}
      </div>

      <!-- QUANTITY -->
      <div class="qty-box">
        <button id="minus">-</button>
        <span id="qty">1</span>
        <button id="plus">+</button>
      </div>

      <!-- BUTTONS -->
      <div class="action-buttons">
        <button id="addToCartBtn" class="btn">
          <i class="fa-solid fa-cart-shopping"></i> Add to Cart
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

      document.querySelectorAll(".thumb").forEach((i) =>
        i.classList.remove("active")
      );
      img.classList.add("active");
    });
  });

  // SIZE SELECT
  document.querySelectorAll(".size-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".size-option")
        .forEach((b) => b.classList.remove("selected"));

      btn.classList.add("selected");
      selectedSize = btn.dataset.size;
    });
  });

  // COLOR SELECT
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
        item.color === selectedColor
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
}

renderProductDetail();
