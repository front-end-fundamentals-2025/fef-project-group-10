document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".products-container");

  // we get the selected product from localStorage
  const productData = localStorage.getItem("selectedProduct");

  if (!productData) {
    container.innerHTML = `
      <section class="hero">
        <div class="hero-content">
          <h1>No product selected</h1>
          <p>Please go back to the <a href="shop.html">shop page</a> and choose a product.</p>
        </div>
      </section>
    `;
    return;
  }

  const product = JSON.parse(productData);

  container.innerHTML = `
    <section class="hero">

      <!-- Left Side -->
        <div class="product">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
          <div class="quantity-container">
            <button onclick="decreaseQuantity()">-</button>
            <span id="quantity">1</span>
            <button onclick="increaseQuantity()">+</button>
          </div>

          <button class="add-cart" onclick="addToCart()">Add to Cart</button>
         </div>

      <!-- Right Side -->
      <div class="hero-content">
        <h2>About ${product.name}</h2>

        <p>
          Glosskin ${product.name} helps you achieve healthy, glowing skin.
          <br><br>
          Dermatologically tested and perfect for all skin types, this product offers hydration and lasting protection.
        </p>

        <button class="btn buy-now" onclick="buyNow()">Buy Now</button>
      </div>

    </section>
  `;

  // Quantity functions (shared by both buttons)
  window.increaseQuantity = function () {
    const quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity < 10) {
      quantityElement.textContent = quantity + 1;
    } else {
      alert("Maximum quantity is 10.");
    }
  };

  window.decreaseQuantity = function () {
    const quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantityElement.textContent = quantity - 1;
    }
  };

  window.addToCart = function () {
    const quantity = document.getElementById("quantity").textContent;
    alert(`You added ${quantity} of ${product.name} to your cart!`);
    // we'll add the logic here to update cart storage later
  };

  window.buyNow = function () {
    alert(`Buying ${product.name} now!`);
    // we'll Add logic here to redirect or process purchase
  };
});
