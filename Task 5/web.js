const products = [
    { id: 1, name: "iPhone 15 Pro", category: "Smartphones", price: "₹1,20,000", image: "https://m.media-amazon.com/images/I/81SigpJN1KL._SL1500_.jpg" },
    { id: 2, name: "Samsung Galaxy S23 Ultra", category: "Smartphones", price: "₹99,999", image: "https://m.media-amazon.com/images/I/71Sa3dqTqzL._SL1500_.jpg" },
    { id: 3, name: "MacBook Air M2", category: "Laptops", price: "₹1,15,000", image: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg" },
    { id: 4, name: "Dell XPS 13", category: "Laptops", price: "₹1,05,000", image: "https://m.media-amazon.com/images/I/71g4t+uLxBL._SL1500_.jpg" },
    { id: 5, name: "Sony WH-1000XM5", category: "Accessories", price: "₹29,990", image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._SL1500_.jpg" },
    { id: 6, name: "Apple Watch Series 9", category: "Accessories", price: "₹41,900", image: "https://m.media-amazon.com/images/I/71qW97dqB-L._SL1500_.jpg" },
    { id: 7, name: "OnePlus 11 5G", category: "Smartphones", price: "₹61,999", image: "https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg" },
    { id: 8, name: "ASUS ROG Strix G15", category: "Laptops", price: "₹89,999", image: "https://m.media-amazon.com/images/I/71S-8j4FDoL._SL1500_.jpg" },
    { id: 9, name: "JBL Flip 6 Speaker", category: "Accessories", price: "₹11,999", image: "https://m.media-amazon.com/images/I/71i+pJwqfKL._SL1500_.jpg" },
    { id: 10, name: "iPad Pro 12.9", category: "Tablets", price: "₹1,20,000", image: "https://m.media-amazon.com/images/I/81gC7frRJyL._SL1500_.jpg" }
];
let cart = [];
const productsGrid = document.getElementById("productsGrid");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
function displayProducts(filter = "All Products") {
    productsGrid.innerHTML = "";
    const filteredProducts = 
        filter === "All Products" ? products : products.filter(p => p.category === filter);
    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsGrid.appendChild(card);
    });
}
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const item = cart.find(p => p.id === id);
    if (item) {
        item.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCart();
}
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0, count = 0;
    cart.forEach(item => {
        const priceNum = parseInt(item.price.replace(/[₹,]/g, ""));
        total += priceNum * item.qty;
        count += item.qty;
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name} (x${item.qty})</p>
            <button onclick="removeFromCart(${item.id})">X</button>
        `;
        cartItems.appendChild(div);
    });
    cartTotal.textContent = `₹${total.toLocaleString("en-IN")}`;
    cartCount.textContent = count;
}
document.getElementById("cartToggle").addEventListener("click", () => {
    cartPanel.classList.toggle("active");
});
document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Checkout successful! 🎉");
        cart = [];
        updateCart();
    }
});
displayProducts();