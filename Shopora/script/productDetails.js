// const productDetail = document.getElementById("productDetail");

// // GET ID FROM URL
// const getQueryParam = (param) => {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get(param);
// };

// const productId = getQueryParam("id");

// // ⚠️ DEBUG (optional)
// console.log("ID:", productId);
// console.log("Products:", products);

// // FIND PRODUCT
// const product = products.find((p) => p.id == productId);

// function renderProductDetail() {
//   if (!product) {
//     productDetail.innerHTML = "<h2>Product not found 😢</h2>";
//     return;
//   }

//   let selectedSize = product.sizes[0];
//   let selectedColor = product.color[0];
//   let qty = 1;

//   // COLORS
//   const colorHTML = product.color
//     .map(
//       (color, i) => `
//       <div class="color-dot ${i === 0 ? "selected" : ""}"
//            style="background:${color}"
//            data-color="${color}">
//       </div>
//     `,
//     )
//     .join("");

//   // SIZES
//   const sizeHTML = product.sizes
//     .map(
//       (size, i) => `
//       <span class="size-option ${i === 0 ? "selected" : ""}"
//             data-size="${size}">
//         ${size}
//       </span>
//     `,
//     )
//     .join("");

//   // HTML
//   productDetail.innerHTML = `
//   <div class="product-detail-page">

//     <!-- LEFT -->
//     <div class="left">
//       <div class="main-image">
//         <img id="mainImg" src="${product.images[0]}" />
//       </div>

//       <div class="thumbnail-container">
//         ${product.images
//           .map(
//             (img, i) => `
//           <img src="${img}" class="thumb ${i === 0 ? "active" : ""}">
//         `,
//           )
//           .join("")}
//       </div>
//     </div>

//     <!-- RIGHT -->
//     <div class="right">

//       <div class="title-rating">
//   <div>
//     <h2>${product.name}</h2>
//     <p class="brand">${product.brand}</p>
//   </div>

//   <div class="rating">⭐⭐⭐⭐☆ (120 reviews)</div>
// </div>
//       <h3>₹${product.price}</h3>

//       <p class="desc">${product.description || ""}</p>

//       <div class="sizes">
//         <h4>Select Size:</h4>
//         ${sizeHTML}
//       </div>

//       <div class="colors">
//         <h4>Select Color:</h4>
//         ${colorHTML}
//       </div>

//       <!-- QUANTITY -->
//       <div class="qty-box">
//         <button id="minus">-</button>
//         <span id="qty">1</span>
//         <button id="plus">+</button>
//       </div>

//       <!-- BUTTONS -->
//       <div class="action-buttons">
//        <button id="addToCartBtn" class="add-to-cart-btn">
//         <i class="fa-solid fa-cart-shopping"></i> Add to Cart
//         </button>
//         <button class="buy-now">Buy Now</button>
//       </div>

//     </div>
//   </div>
//   `;

//   // IMAGE SWITCH
//   const mainImg = document.getElementById("mainImg");
//   document.querySelectorAll(".thumb").forEach((img) => {
//     img.addEventListener("click", () => {
//       mainImg.src = img.src;

//       document
//         .querySelectorAll(".thumb")
//         .forEach((i) => i.classList.remove("active"));
//       img.classList.add("active");
//     });
//   });

//   // SIZE SELECT
//   document.querySelectorAll(".size-option").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       document
//         .querySelectorAll(".size-option")
//         .forEach((b) => b.classList.remove("selected"));

//       btn.classList.add("selected");
//       selectedSize = btn.dataset.size;
//     });
//   });

//   // COLOR SELECT
//   document.querySelectorAll(".color-dot").forEach((dot) => {
//     dot.addEventListener("click", () => {
//       document
//         .querySelectorAll(".color-dot")
//         .forEach((d) => d.classList.remove("selected"));

//       dot.classList.add("selected");
//       selectedColor = dot.dataset.color;
//     });
//   });

//   // QUANTITY
//   const qtyEl = document.getElementById("qty");

//   document.getElementById("plus").onclick = () => {
//     qty++;
//     qtyEl.innerText = qty;
//   };

//   document.getElementById("minus").onclick = () => {
//     if (qty > 1) {
//       qty--;
//       qtyEl.innerText = qty;
//     }
//   };

//   // ADD TO CART
//   document.getElementById("addToCartBtn").addEventListener("click", () => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     let existingItem = cart.find(
//       (item) =>
//         item.productId == product.id &&
//         item.size === selectedSize &&
//         item.color === selectedColor,
//     );

//     if (existingItem) {
//       existingItem.quantity += qty;
//     } else {
//       cart.push({
//         productId: product.id,
//         name: product.name,
//         price: product.price,
//         size: selectedSize,
//         color: selectedColor,
//         quantity: qty,
//         image: product.images[0],
//       });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));

//     alert("Product added to cart ");
//   });

//   renderRelatedProducts();
// }

// renderProductDetail();

// function renderRelatedProducts() {
//   const container = document.getElementById("relatedContainer");

//   if (!product) return;

//   const related = products.filter(
//     (p) => p.category === product.category && p.id != product.id,
//   );

//   container.innerHTML = related
//     .map(
//       (item) => `
//     <div class="related-card" onclick="openProduct(${item.id})">

//       <div class="product-image-container">
//         <img src="${item.images[0]}" alt="${item.name}">
//       </div>

//       <h3 class="product-title">${item.name.slice(0, 25)}...</h3>

//       <div class="product-rating">${getStars(item.avgRating)}</div>

//       <div class="product-price">
//         <span>₹${item.price}</span>
//         <del class="old-price">₹${item.listPrice}</del>
//       </div>

//       <button class="add-to-cart-btn">Add to Cart</button>
//     </div>
//   `,
//     )
//     .join("");
// }

const productDetail = document.getElementById("productDetail");

// GET ID FROM URL
const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

const productId = getQueryParam("id");

// FIND PRODUCT
const product = products.find((p) => p.id == productId);

// ⭐ STAR FUNCTION
function getStars(rating = 4) {
  return "⭐".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));
}

function renderProductDetail() {
  if (!product) {
    productDetail.innerHTML = "<h2>Product not found 😢</h2>";
    return;
  }

  let selectedSize = product.sizes[0];
  let selectedColor = product.color[0];
  let qty = 1;

  const colorHTML = product.color
    .map(
      (color, i) => `
    <div class="color-dot ${i === 0 ? "selected" : ""}" 
         style="background:${color}" 
         data-color="${color}">
    </div>
  `,
    )
    .join("");

  const sizeHTML = product.sizes
    .map(
      (size, i) => `
    <span class="size-option ${i === 0 ? "selected" : ""}" 
          data-size="${size}">
      ${size}
    </span>
  `,
    )
    .join("");

  productDetail.innerHTML = `
  <div class="product-detail-page">

    <div class="left">
      <img id="mainImg" src="${product.images[0]}" />
    </div>

    <div class="right">
      <h2>${product.name}</h2>
      <h3>₹${product.price}</h3>

      <div class="sizes">${sizeHTML}</div>
      <div class="colors">${colorHTML}</div>

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

  // SIZE
  document.querySelectorAll(".size-option").forEach((btn) => {
    btn.onclick = () => {
      document
        .querySelectorAll(".size-option")
        .forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedSize = btn.dataset.size;
    };
  });

  // COLOR
  document.querySelectorAll(".color-dot").forEach((dot) => {
    dot.onclick = () => {
      document
        .querySelectorAll(".color-dot")
        .forEach((d) => d.classList.remove("selected"));
      dot.classList.add("selected");
      selectedColor = dot.dataset.color;
    };
  });

  // QTY
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

  // CART
  document.getElementById("addToCartBtn").onclick = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(
      (item) =>
        item.productId == product.id &&
        item.size === selectedSize &&
        item.color === selectedColor,
    );

    if (existing) {
      existing.quantity += qty;
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
    alert("Added to cart ✅");
  };

  renderRelatedProducts();
}

// 🔥 RELATED PRODUCTS
function renderRelatedProducts() {
  const container = document.getElementById("relatedContainer");

  if (!product || !container) return;

  const related = products.filter(
    (p) => p.category === product.category && p.id != product.id,
  );

//   container.innerHTML = related
//     .map(
//       (item) => `
//     <div class="related-card" onclick="openProduct(${item.id})">
//       <div class="product-image-container">
//         <img src="${item.images[0]}" />
//       </div>

//       <div class="product-title">${item.name}</div>
//       <div class="product-price">
//         ₹${item.price}
//         <del class="old-price">₹${item.listPrice || ""}</del>
//       </div>
//     </div>
//   `,
//     )
//     .join("");

container.innerHTML = related
  .map(
    (item) => `
  <div class="related-card" onclick="openProduct(${item.id})">
    
    <!-- IMAGE -->
    <div class="product-image-container">
      <img src="${item.images?.[0]}" alt="${item.name}">
    </div>

    <!-- NAME -->
    <div class="product-title">
      ${item.name?.slice(0, 30)}...
    </div>

    <!-- RATING -->
    <div class="product-rating">
      ${getStars(item.avgRating)} (${item.avgRating || 4})
    </div>

    <!-- PRICE -->
    <div class="product-price">
      ₹${item.price}
      <del class="old-price">₹${item.listPrice || ""}</del>
    </div>

    <!-- SIZE -->
    <div class="product-size">
      Size: ${item.sizes?.join(", ") || "M"}
    </div>

    <!-- COLOR -->
    <div class="product-colors">
      ${item.color
        ?.map(
          (c) => `
        <span class="color-dot-small" style="background:${c}"></span>
      `,
        )
        .join("")}
    </div>

    <!-- BUTTON -->
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

renderProductDetail();