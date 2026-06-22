// Sample product data
const products = [
  { id: 1, name: "Wireless Headphones", price: 1499, img: "headphone.png", rating: "⭐⭐⭐⭐☆" },
  { id: 2, name: "Smart Watch", price: 2499, img: "smartwatch.png", rating: "⭐⭐⭐⭐⭐" },
  { id: 3, name: "Bluetooth Speaker", price: 999, img: "Speaker.png", rating: "⭐⭐⭐⭐☆" },
  { id: 4, name: "Laptop Bag", price: 799, img: "Bag.png", rating: "⭐⭐⭐☆☆" },
  { id: 5, name: "Mechanical Keyboard", price: 1199, img: "Keyboard.png", rating: "⭐⭐⭐⭐⭐" },
  { id: 6, name: "Wireless Mouse", price: 499, img: "Mouse.png", rating: "⭐⭐⭐⭐☆" },
];

let cart = [];

// Load products on page load
function loadProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="stars">${product.rating}</div>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// Add item to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCart();
}

// Remove item from cart
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

// Update cart UI
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name} x${item.qty}</span>
      <span>₹${item.price * item.qty}</span>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItems.appendChild(div);
  });

  cartCount.textContent = count;
  cartTotal.textContent = total;
}

// Toggle cart sidebar
function toggleCart() {
  document.getElementById("cart-sidebar").classList.toggle("active");
}

// Checkout button
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Order placed successfully! Total: ₹" + document.getElementById("cart-total").textContent);
  cart = [];
  updateCart();
  toggleCart();
}

// Run on page load
loadProducts();