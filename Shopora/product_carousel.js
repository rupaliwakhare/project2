// const carousel = document.getElementById("carousel");
// const filterButtons = document.querySelectorAll(".filter-button");

// function renderProducts(filterTag) {
//   carousel.innerHTML = "";
//   let filterProducts = [];

//   if (!filterTag || filterTag === "") {
//     filterProducts = products; // show all products
//   } else {
//     filterProducts = products.filter((p) => p.tags.includes(filterTag));
//   }

//   if (filterProducts.length === 0) {
//     carousel.innerHTML = `<p style="padding:20px; color:#555;">No products found.</p>`;
//     return;
//   }

//   filterProducts.forEach((product) => {
//     const productCard = document.createElement("div");
//     productCard.className = "product-card";

//     let stars = "";
//     for (let i = 0; i < 5; i++) {
//       if (i < product.avgRating) {
//         stars += `<i class="fas fa-star"></i>`;
//       } else {
//         stars += `<i class="far fa-star"></i>`;
//       }
//     }

//     productCard.innerHTML = `
//         ${
//           product.discount
//             ? `<div class="discount-badge">${product.discount}% off</div>`
//             : ""
//         }
//         <div class="product-image-container">
//             <img src="${product.images[0]}" alt="${
//       product.name
//     }" class="product-image">
//         </div>
//         <h3 class="product-title">${product.name.slice(0, 30)}...</h3>
//         <div class="product-rating">${stars}</div>
//         <div class="product-price">${product.price.toFixed(2)}</div>
//         `;

//     carousel.appendChild(productCard);
//   });
// }

// function scrollCarousel(amount) {
//   carousel.scrollBy({ left: amount, behavior: "smooth" });
// }

// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     filterButtons.forEach((btn) => btn.classList.remove("active"));
//     button.classList.add("active");
//     const filterTag = button.dataset.filter;
//     renderProducts(filterTag);
//   });
// });

// renderProducts("");

// DOM elements
const carousel = document.getElementById("carousel");
const filterButtons = document.querySelectorAll(".filter-button");

// Render products
function renderProducts(filterTag) {
  carousel.innerHTML = "";
  let filterProducts = [];

  if (!filterTag || filterTag === "") {
    filterProducts = products; 
  } else {
    filterProducts = products.filter((p) => p.tags.includes(filterTag));
  }

  if (filterProducts.length === 0) {
    carousel.innerHTML = `<p style="padding:20px; color:#555;">No products found.</p>`;
    return;
  }

  filterProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += i < product.avgRating ? `<i class="fas fa-star"></i>` : `<i class="far fa-star"></i>`;
    }



  productCard.innerHTML = `
  ${product.discount ? `<div class="discount-badge">${product.discount}% off</div>` : ""}
  <div class="product-image-container">
    <img src="${product.images[0]}" alt="${product.name}" class="product-image">
  </div>
  <h3 class="product-title" style="color:${titleColor};">
    ${product.name.slice(0, 30)}...
  </h3>
  <div class="product-rating">${stars}</div>
  <div class="product-price">₹${product.price.toFixed(2)}</div>
`;


    carousel.appendChild(productCard);
  });
}

//  Scroll function
function scrollCarousel(amount) {
  carousel.scrollBy({ left: amount, behavior: "smooth" });
}

// Filter buttons click
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const filterTag = button.dataset.filter;
    renderProducts(filterTag === "All" ? "" :filterTag);
  });
});

//  Show all products by default on page load
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("");
});

