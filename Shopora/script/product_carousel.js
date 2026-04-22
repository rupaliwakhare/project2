
// // // DOM
// // const carousel = document.getElementById("carousel");
// // const filterButtons = document.querySelectorAll(".filter-button");

// // // ⭐ STAR FUNCTION (Reusable)
// // function getStars(rating) {
// //   let stars = "";
// //   for (let i = 1; i <= 5; i++) {
// //     if (i <= Math.floor(rating)) {
// //       stars += `<i class="fas fa-star"></i>`;
// //     } else if (i - rating < 1) {
// //       stars += `<i class="fas fa-star-half-alt"></i>`;
// //     } else {
// //       stars += `<i class="far fa-star"></i>`;
// //     }
// //   }
// //   return stars;
// // }

// // // 🛒 ADD TO CART FUNCTION
// // function addToCart(product) {
// //   let cart = JSON.parse(localStorage.getItem("cart")) || [];

// //   const existing = cart.find((item) => item.id === product.id);

// //   if (existing) {
// //     existing.qty += 1;
// //   } else {
// //     cart.push({ ...product, qty: 1 });
// //   }

// //   localStorage.setItem("cart", JSON.stringify(cart));
// //   alert("Added to cart 🛒");
// // }

// // // 🧱 PRODUCT CARD TEMPLATE (Reusable)
// // function createProductCard(product) {
// //   const card = document.createElement("div");
// //   card.className = "product-card";

// //   // 👉 Open detail page
// //   card.addEventListener("click", () => {
// //     window.location.href = `product.html?id=${product.id}`;
// //   });

// //   card.innerHTML = `
// //     ${product.discount ? `<div class="discount-badge">${product.discount}% OFF</div>` : ""}

// //     <div class="product-image-container">
// //       <img src="${product.images[0]}" alt="${product.name}" class="product-image">
// //     </div>

// //     <h3 class="product-title">${product.name.slice(0, 25)}...</h3>

// //     <div class="product-rating">${getStars(product.avgRating)}</div>

// //     <div class="product-price">
// //       <span class="new-price">₹${product.price}</span>
// //       <del class="old-price">₹${product.listPrice}</del>
// //     </div>
// //  <button class="add-to-cart-btn">
// //         <i class="fa-solid fa-cart-shopping"></i> Add to Cart
// //       </button> 
// //   `;

// //   // 👉 Add to cart click
// //   const btn = card.querySelector(".add-to-cart-btn");
// //   btn.addEventListener("click", (e) => {
// //     e.stopPropagation(); // prevent redirect
// //     addToCart(product);
// //   });

// //   return card;
// // }

// // // 🎯 RENDER PRODUCTS (FILTER)
// // function renderProducts(filterTag) {
// //   carousel.innerHTML = "";

// //   let filtered = !filterTag
// //     ? products
// //     : products.filter((p) => p.tags.includes(filterTag));

// //   if (filtered.length === 0) {
// //     carousel.innerHTML = `<p style="padding:20px;">No products found 😢</p>`;
// //     return;
// //   }

// //   filtered.forEach((product) => {
// //     carousel.appendChild(createProductCard(product));
// //   });
// // }

// // // 🎯 FILTER BUTTONS
// // filterButtons.forEach((btn) => {
// //   btn.addEventListener("click", () => {
// //     filterButtons.forEach((b) => b.classList.remove("active"));
// //     btn.classList.add("active");

// //     const filterTag = btn.dataset.filter;
// //     renderProducts(filterTag === "All" ? "" : filterTag);
// //   });
// // });

// // // 🚀 INITIAL LOAD
// // document.addEventListener("DOMContentLoaded", () => {
// //   renderProducts("");
// // });

// // // 🔁 SCROLL
// // function scrollCarousel(amount) {
// //   carousel.scrollBy({ left: amount, behavior: "smooth" });
// // }

// // // 👨‍🦱👩 WOMEN & MEN CAROUSEL
// // function renderCarouselProducts(containerId, gender) {
// //   const container = document.getElementById(containerId);
// //   container.innerHTML = "";

// //   const filtered = products.filter((p) => p.gender === gender);

// //   filtered.forEach((product) => {
// //     container.appendChild(createProductCard(product));
// //   });
// // }

// // function menWomenScrollCarousel(id, offset) {
// //   document.getElementById(id).scrollBy({ left: offset, behavior: "smooth" });
// // }

// // // 🚀 LOAD MEN/WOMEN
// // renderCarouselProducts("womenCarousel", "Women");
// // renderCarouselProducts("menCarousel", "Men");




// // ================= DOM =================
// const carousel = document.getElementById("carousel");
// const filterButtons = document.querySelectorAll(".filter-button");

// // ================= ⭐ STAR =================
// function getStars(rating) {
//   let stars = "";
//   for (let i = 1; i <= 5; i++) {
//     if (i <= Math.floor(rating)) {
//       stars += `<i class="fas fa-star"></i>`;
//     } else if (i - rating < 1) {
//       stars += `<i class="fas fa-star-half-alt"></i>`;
//     } else {
//       stars += `<i class="far fa-star"></i>`;
//     }
//   }
//   return stars;
// }

// // ================= 🛒 ADD TO CART =================
// function addToCart(product) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const existing = cart.find((item) => item.productId === product.id);

//   if (existing) {
//     existing.quantity += 1;
//   } else {
//     cart.push({
//       productId: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.images[0],
//       quantity: 1,
//     });
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert("Added to cart 🛒");
// }

// // ================= 🧱 PRODUCT CARD =================
// function createProductCard(product) {
//   const card = document.createElement("div");
//   card.className = "product-card";

//   // ✅ IMPORTANT (ID store karo)
//   card.dataset.id = product.id;

//   card.innerHTML = `
//     ${product.discount ? `<div class="discount-badge">${product.discount}% OFF</div>` : ""}

//     <div class="product-image-container">
//       <img src="${product.images[0]}" alt="${product.name}">
//     </div>

//     <h3>${product.name.slice(0, 25)}...</h3>

//     <div>${getStars(product.avgRating)}</div>

//     <div>
//       <span>₹${product.price}</span>
//       <del>₹${product.listPrice}</del>
//     </div>

//     <button class="add-to-cart-btn">Add to Cart</button>
//   `;

//   return card;
// }

// // ================= 🎯 RENDER =================
// function renderProducts(filterTag) {
//   carousel.innerHTML = "";

//   let filtered = !filterTag
//     ? products
//     : products.filter((p) => p.tags.includes(filterTag));

//   if (filtered.length === 0) {
//     carousel.innerHTML = `<p>No products found 😢</p>`;
//     return;
//   }

//   filtered.forEach((product) => {
//     carousel.appendChild(createProductCard(product));
//   });
// }

// // ================= 🎯 FILTER =================
// filterButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     filterButtons.forEach((b) => b.classList.remove("active"));
//     btn.classList.add("active");

//     const tag = btn.dataset.filter;
//     renderProducts(tag === "All" ? "" : tag);
//   });
// });

// // ================= 🧠 EVENT DELEGATION =================
// carousel.addEventListener("click", (e) => {
//   const target = e.target;

//   // 🛒 ADD TO CART
//   if (target.closest(".add-to-cart-btn")) {
//     e.stopPropagation();

//     const card = target.closest(".product-card");
//     const id = card.dataset.id;

//     const product = products.find((p) => p.id == id);
//     addToCart(product);
//     return;
//   }

//   // 📄 PRODUCT PAGE OPEN
//   const card = target.closest(".product-card");
//   if (card) {
//     const id = card.dataset.id;
//     window.location.href = `product.html?id=${id}`;
//   }
// });

// // ================= 👨‍🦱👩 MEN / WOMEN =================
// function renderCarouselProducts(containerId, gender) {
//   const container = document.getElementById(containerId);
//   container.innerHTML = "";

//   const filtered = products.filter((p) => p.gender === gender);

//   filtered.forEach((product) => {
//     container.appendChild(createProductCard(product));
//   });

//   // 👉 SAME EVENT FOR THIS CAROUSEL
//   container.addEventListener("click", (e) => {
//     const target = e.target;

//     if (target.closest(".add-to-cart-btn")) {
//       e.stopPropagation();

//       const card = target.closest(".product-card");
//       const id = card.dataset.id;

//       const product = products.find((p) => p.id == id);
//       addToCart(product);
//       return;
//     }

//     const card = target.closest(".product-card");
//     if (card) {
//       const id = card.dataset.id;
//       window.location.href = `html/product.html?id=${id}`;
//     }
//   });
// }

// // ================= 🔁 SCROLL =================
// function scrollCarousel(amount) {
//   carousel.scrollBy({ left: amount, behavior: "smooth" });
// }

// // ================= 🚀 LOAD =================
// document.addEventListener("DOMContentLoaded", () => {
//   renderProducts("");
//   renderCarouselProducts("womenCarousel", "Women");
//   renderCarouselProducts("menCarousel", "Men");
// });


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