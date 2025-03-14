<-- The following lines of code was adapted from https://www.youtube.com/watch?v=70vr4MJai90&feature=youtu.be by Eveline -->
document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalItemsElement = document.getElementById("total-items");
    const totalPriceElement = document.getElementById("total-price");
  
    // Get the cart array from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Render the cart items
    function renderCart() {
      cartItemsContainer.innerHTML = "";
  
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalItemsElement.textContent = "0";
        totalPriceElement.textContent = "0.00";
        return;
      }
  
      let totalItems = 0;
      let totalPrice = 0;
  
      cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.quantity * item.price; 
      
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
      
        cartItem.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${item.price}</p>
            <p>Total: $${(item.quantity * item.price).toFixed(2)}</p>
          </div>
          <button class="btn remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
      
        cartItemsContainer.appendChild(cartItem);
      });
      
  
      totalItemsElement.textContent = totalItems;
      totalPriceElement.textContent = totalPrice.toFixed(2);
    }
  
    // Remove item from cart
    window.removeFromCart = function(id) {
      cart = cart.filter(item => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    };
  
    // Checkout function
    window.checkout = function() {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
  
      alert("Thank you for your purchase!");
      localStorage.removeItem("cart");
      renderCart();
    };
  
    // Initial render
    renderCart();
  });
  