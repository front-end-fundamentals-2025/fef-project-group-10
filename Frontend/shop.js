document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { id: 1, name: "Acne wash", img: "Assets/Acne wash.jpeg" },
    { id: 2, name: "Blush", img: "Assets/blush.jpeg" },
    { id: 3, name: "Brow & lash gel", img: "Assets/brow & lash gel.jpeg" },
    { id: 4, name: "Cloud cleanser", img: "Assets/Cloud cleanser.jpeg" },
    { id: 5, name: "Dewy facial mist", img: "Assets/Dewy facial mist.jpeg" },
    { id: 6, name: "Exfoliator", img: "Assets/Exfoliator.jpeg" },
    { id: 7, name: "Face serum", img: "Assets/Face serum.jpeg" },
    { id: 8, name: "Glow serum", img: "Assets/Glow serum.jpeg" },
    { id: 9, name: "Cloud cleanser", img: "Assets/Cloud cleanser.jpeg" },
    { id: 10, name: "Hydrating gel moisturizer", img: "Assets/Hydrating gel moisturizer.jpeg" },
    { id: 11, name: "Lip & cheek balm", img: "Assets/lip and cheek balm.jpeg" },
    { id: 12, name: "Skin tint", img: "Assets/Skin tint.jpeg" },
   { id: 13, name: "Soft blur concealer", img: "Assets/soft blur concealer.jpg" },
   { id: 14, name: "Sun screen", img: "Assets/sunscreen.jpeg" },
    
  ];

  const container = document.querySelector(".products-container");

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
            <a href="productpage.html?id=${product.id}" class="product-link">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="quantity-container">
                <button onclick="decreaseQuantity(${product.id})">-</button>
                <span id="quantity-${product.id}">1</span>
                <button onclick="increaseQuantity(${product.id})">+</button>
            </div>
            <button class="add-cart"onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    container.appendChild(productElement);
  });
});

function increaseQuantity(id) {
  const quantityElement = document.getElementById(`quantity-${id}`);
  quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
}

function decreaseQuantity(id) {
  const quantityElement = document.getElementById(`quantity-${id}`);
  if (parseInt(quantityElement.textContent) > 1) {
    quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
  }
}

function addToCart(id) {
  alert(`Product ${id} added to cart!`);
}
