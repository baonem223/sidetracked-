
const cart = [];

const cartButton = document.getElementById("cart-button");
const cartCount = document.getElementById("cart-count");
const cartDialog = document.getElementById("cart-dialog");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const closeCart = document.getElementById("close-cart");

// Add products to cart
document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const price = Number(button.dataset.price);

    cart.push({ product, price });

    cartCount.textContent = cart.length;

    button.textContent = "ADDED! ✓";

    setTimeout(() => {
      button.textContent = "ADD TO CART";
    }, 1200);
  });
});

// Open cart
cartButton.addEventListener("click", () => {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.textContent = "Your cart is empty!";
  } else {
    cart.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "cart-item";
      row.textContent =
        `${index + 1}. ${item.product} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(row);
    });
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;

  cartDialog.showModal();
});

// Close cart
closeCart.addEventListener("click", () => {
  cartDialog.close();
});

// Close cart when clicking backdrop
cartDialog.addEventListener("click", event => {
  if (event.target === cartDialog) {
    cartDialog.close();
  }
});
