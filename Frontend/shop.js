// Let's wait until the entire page content has loaded before we run any code
document.addEventListener("DOMContentLoaded", function () {

  // Here we have our array of products. Each product has an id, name, image, and description.
  const products = [
    {
      id: 1,
      name: "Acne Wash",
      img: "Assets/Acne wash.jpeg",
      description: "Our Acne Wash deeply cleanses pores, helping to reduce acne and prevent future breakouts. Gentle enough for daily use, it leaves your skin feeling fresh and smooth.",
      price: 18
    },
    {
      id: 2,
      name: "Blush",
      img: "Assets/blush.jpeg",
      description: "Add a natural, healthy glow to your cheeks with our lightweight and long-lasting Blush. Perfect for everyday wear with a smooth, blendable finish.",
      price: 22
    },
    {
      id: 3,
      name: "Brow & Lash Gel",
      img: "Assets/brow & lash gel.jpeg",
      description: "Shape and set your brows and lashes with our Brow & Lash Gel. Provides a strong hold without stiffness, leaving a natural, glossy finish.",
      price: 20
    },
    {
      id: 4,
      name: "Cloud Cleanser",
      img: "Assets/Cloud cleanser.jpeg",
      description: "Our Cloud Cleanser gently removes dirt and impurities while keeping your skin hydrated. Perfect for sensitive skin with a soft, foamy texture.",
      price: 19
    },
    {
      id: 5,
      name: "Dewy Facial Mist",
      img: "Assets/Dewy facial mist.jpeg",
      description: "Hydrate and refresh your skin anytime with our Dewy Facial Mist. Infused with botanical extracts to give you a radiant, dewy glow.",
      price: 25
    },
    {
      id: 6,
      name: "Exfoliator",
      img: "Assets/Exfoliator.jpeg",
      description: "Gently exfoliate dead skin cells and reveal smoother skin with our natural Exfoliator. Leaves your skin soft, bright, and ready for hydration.",
      price: 24
    },
    {
      id: 7,
      name: "Face Serum",
      img: "Assets/Face serum.jpeg",
      description: "Our Face Serum targets fine lines and uneven texture, delivering deep hydration and promoting a youthful, glowing complexion.",
      price: 30
    },
    {
      id: 8,
      name: "Glow Serum",
      img: "Assets/Glow serum.jpeg",
      description: "Achieve an all-day glow with our lightweight Glow Serum. Packed with vitamins and antioxidants to brighten and nourish your skin.",
      price: 32
    },
    {
      id: 9,
      name: "Cloud Cleanser",
      img: "Assets/Cloud cleanser.jpeg",
      description: "Reintroducing our Cloud Cleanser: a gentle, hydrating cleanser for everyday use. Perfect for keeping your skin balanced and fresh.",
      price: 19
    },
    {
      id: 10,
      name: "Hydrating Gel Moisturizer",
      img: "Assets/Hydrating gel moisturizer.jpeg",
      description: "Our Hydrating Gel Moisturizer delivers intense hydration with a lightweight feel. Ideal for oily or combination skin types.",
      price: 28
    },
    {
      id: 11,
      name: "Lip & Cheek Balm",
      img: "Assets/lip and cheek balm.jpeg",
      description: "Versatile and moisturizing, our Lip & Cheek Balm adds a pop of color while nourishing your lips and cheeks. Perfect for on-the-go touch-ups!",
      price: 14
    },
    {
      id: 12,
      name: "Skin Tint",
      img: "Assets/Skin tint.jpeg",
      description: "Even out your skin tone with our breathable Skin Tint. Lightweight coverage that enhances your natural complexion for a flawless look.",
      price: 26
    },
    {
      id: 13,
      name: "Soft Blur Concealer",
      img: "Assets/soft blur concealer.jpg",
      description: "Our Soft Blur Concealer covers imperfections effortlessly, offering a smooth, natural finish with buildable coverage.",
      price: 20
    },
    {
      id: 14,
      name: "Sun Screen",
      img: "Assets/sunscreen.jpeg",
      description: "Protect your skin with our lightweight Sunscreen. Offers broad-spectrum SPF 50 protection without clogging pores or leaving a white cast.",
      price: 27
    }
  ];  
    
  const container = document.querySelector(".products-container");
    // ChatGPT showed us how to dynamically create and insert HTML elements with JS

  products.forEach(product => {  
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `  //chatgpt helped create the structure and perse it 
      <div class="product-link" style="cursor: pointer;">
        <img src="${product.img}" alt="${product.name}">
      </div>
      <h3>${product.name}</h3>
      <h3>${product.price} $ </h3>
      <div class="quantity-container">
        <button onclick="decreaseQuantity(${product.id})">-</button>
        <span id="quantity-${product.id}">1</span>
        <button onclick="increaseQuantity(${product.id})">+</button>
      </div>
      <button class="add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    container.appendChild(productElement);

    const productLink = productElement.querySelector(".product-link");
    productLink.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "productpage.html";
    });
  });

  window.increaseQuantity = function (id) {
    const quantityElement = document.getElementById(`quantity-${id}`);
    let quantity = parseInt(quantityElement.textContent);

    if (quantity < 10) {
      quantity++;
      quantityElement.textContent = quantity;
    } else {
      alert("Maximum quantity is 10.");
    }
  };

  window.decreaseQuantity = function (id) {
    const quantityElement = document.getElementById(`quantity-${id}`);
    let quantity = parseInt(quantityElement.textContent);

    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
    }
  };

  window.addToCart = function (id) {
    const quantity = parseInt(document.getElementById(`quantity-${id}`).textContent);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);

    if (!product) {
      alert("Product not found.");
      return;
    }

    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({ ...product, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart)); //chatgpt helped
    alert(`${product.name} added to cart!`);
  };
});