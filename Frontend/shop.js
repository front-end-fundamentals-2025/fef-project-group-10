document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { id: 1, name: "Hydrating gel moisturizer", img: "Assets/image.png" },
    { id: 2, name: "Glow serum", img: "Assets/image.png" },
    { id: 3, name: "Cloud cleanser", img: "Assets/image.png" },
    { id: 4, name: "Dewy facial mist", img: "Assets/image.png" },
    { id: 5, name: "Lip & cheek balm", img: "Assets/image.png" },
    { id: 6, name: "Skin tint", img: "Assets/image.png" },
    { id: 7, name: "Brow & lash gel", img: "Assets/image.png" },
    { id: 8, name: "Blush", img: "Assets/image.png" },
    { id: 9, name: "Velvet lip tint", img: "Assets/image.png" },
    { id: 10, name: "Soft blur concealer", img: "Assets/image.png" },
  ];

  const container = document.querySelector(".products-container");

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="quantity-container">
                <button onclick="decreaseQuantity(${product.id})">-</button>
                <span id="quantity-${product.id}">1</span>
                <button onclick="increaseQuantity(${product.id})">+</button>
            </div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
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
