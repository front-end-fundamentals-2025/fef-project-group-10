document.addEventListener("DOMContentLoaded", function () {
    const products = [
      { id: 1, name: "Acne wash", img: "Assets/Acne wash.jpeg", description: "A deep cleansing acne wash." },
      { id: 2, name: "Blush", img: "Assets/blush.jpeg", description: "Adds a healthy glow to your cheeks." },
      { id: 3, name: "Brow & lash gel", img: "Assets/brow & lash gel.jpeg", description: "Shapes and sets brows and lashes." },
      { id: 4, name: "Cloud cleanser", img: "Assets/Cloud cleanser.jpeg", description: "Gentle and hydrating cleanser for all skin types." },
      // Add the rest...
    ];
  
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
  
    const product = products.find(p => p.id === productId);
  
    const container = document.getElementById("product-detail");
  
    if (product) {
      container.innerHTML = `
        <div class="product-section">
          <div class="product-image">
            <img src="${product.img}" alt="${product.name}">
          </div>
          <div class="product-info">
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <div class="quantity-container">
              <button onclick="decreaseQuantity()">-</button>
              <span id="quantity-${product.id}">1</span>
              <button onclick="increaseQuantity()">+</button>
            </div>
            <button class="add-cart" onclick="addToCart()">Add to Cart</button>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = `<p>Product not found.</p>`;
    }
  
    window.increaseQuantity = function () {
      const quantityElement = document.getElementById(`quantity-${product.id}`);
      quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
    };
  
    window.decreaseQuantity = function () {
      const quantityElement = document.getElementById(`quantity-${product.id}`);
      if (parseInt(quantityElement.textContent) > 1) {
        quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
      }
    };
  
    window.addToCart = function () {
      alert(`${product.name} added to cart!`);
    };
  });
  