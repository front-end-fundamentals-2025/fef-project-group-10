document.addEventListener("DOMContentLoaded", function () {
    const products = [
      { id: 1, name: "Acne wash", img: "Assets/Acne wash.jpeg", description: "Glosskin Acne Control Cleanser with 2% salicylic acid is formulated to clear acne, reduce blackheads and improve the appearance of pores, while purifying clay helps absorb excess oil." },
      { id: 2, name: "Blush", img: "Assets/blush.jpeg", description: "Our OEM/ODM blush makeup manufacture comes in the form of wax, sticks, or creams containing safe and natural ingredients with innovative raw materials." },
      { id: 3, name: "Brow & lash gel", img: "Assets/brow & lash gel.jpeg", description: "This versatile transparent gel can be used as a care product or make-up component. It helps you shape your eyelashes and eyebrows and gives them a natural shine. You can use our Brow & Lash Gel as a base for your mascara, or apply the make-up first and then fix it with the transparent gel." },
      { id: 4, name: "Cloud cleanser", img: "Assets/Cloud cleanser.jpeg", description: "A daily facial cleanser with one goal – to make your skin happier, one wash at a time.."},
      { id: 6, name: "Exfoliator", img: "Assets/Exfoliator.jpeg", description: "Gently cleanse and renew with our cleansers and exfoliants. Remove impurities, unclog pores, and reveal radiant, healthy skin—powered by nature." },
      { id: 5, name: "Dewy facial mist", img: "Assets/Dewy facial mist.jpeg", description: "."},
      { id: 7, name: "Eye cream", img: "Assets/Eye cream.jpeg", description: " Glosskin Eye Repair Cream is ophthalmologist-tested and features a non-greasy, fast-absorbing, fragrance-free formula that works to minimize the appearance of dark circles and eye puffiness." },
      { id: 8, name: "Face serum", img: "Assets/Face serum.jpeg", description: "A hyaluronic acid serum that provides volume and fullness."},
      { id: 9, name: "Glow serum", img: "Assets/Glow serum.jpeg", description: "Supercharge your skincare with our clean serums & treatments. Targeted solutions for hydration, radiance, and skin renewal, powered by nature."},
      { id: 10, name: "Hydrating gel moisturizer", img: "Assets/Hydrating gel moisturizer.jpeg", description: "Balance and hydrate with our cruelty-free moisturizers and toners. Designed to restore pH, lock in moisture, and enhance your skincare ritual."},
      { id: 11, name: "Lip and cheek balm", img: "Assets/lip and cheek balm.jpeg", description: "Our lip & cheek glow balm is for those that love a natural flush of color with a radiant, satin finish. this silky, weightless cream instantly melts into the skin while providing buildable color without cakiness or streaks. wear it on your cheeks for a second-skin glow, or on your lips for a hint of color and sheen."},
      { id: 12, name: "Skin tint", img: "Assets/Skin tint.jpeg", description: "Fresh, luminous and light coverage tint in a feel good formula made of 78% skincare ingredients, for replenished, healthy and plumped looking skin.."},
      { id: 13, name: "Soft blur concealer", img: "Assets/soft blur concealer.jpg", description: "Highlighters and color correctors have become increasingly user-friendly options in our skincare routine, brightening shadows and correcting skin imperfections."},
      { id: 14, name: "Sunscreen", img: "Assets/sunscreen.jpeg", description: "Protect your skin with our clean Glosskin sun care products. Clean, safe SPF and after-sun formulas for broad-spectrum protection—because skincare is self-care"},

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
  