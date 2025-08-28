const products = [
            {
                id: 1,
                name: "Wireless Headphones",
                category: "electronics",
                price: 199.99,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
            },
            {
                id: 2,
                name: "Premium T-Shirt",
                category: "clothing",
                price: 29.99,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
            },
            {
                id: 3,
                name: "Best-Selling Novel",
                category: "books",
                price: 14.99,
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500"
            },
            {
                id: 4,
                name: "Smart Watch",
                category: "electronics",
                price: 299.99,
                image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
            },
            {
                id: 5,
                name: "Designer Jeans",
                category: "clothing",
                price: 79.99,
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
            },
            {
                id: 6,
                name: "Programming Guide",
                category: "books",
                price: 49.99,
                image: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?w=500"
            }
        ];
        let cart = [];
        document.addEventListener('DOMContentLoaded', () => {
            displayProducts(products);
            setupEventListeners();
        });
        function setupEventListeners() {
            document.getElementById('category').addEventListener('change', filterProducts);
            const priceRange = document.getElementById('priceRange');
            priceRange.addEventListener('input', (e) => {
                document.getElementById('priceValue').textContent = '$' + e.target.value;
                filterProducts();
            });
            document.getElementById('search').addEventListener('input', filterProducts);
        }
        function filterProducts() {
            const category = document.getElementById('category').value;
            const maxPrice = parseFloat(document.getElementById('priceRange').value);
            const searchQuery = document.getElementById('search').value.toLowerCase();

            const filteredProducts = products.filter(product => {
                const matchesCategory = category === 'all' || product.category === category;
                const matchesPrice = product.price <= maxPrice;
                const matchesSearch = product.name.toLowerCase().includes(searchQuery) ||
                                   product.category.toLowerCase().includes(searchQuery);

                return matchesCategory && matchesPrice && matchesSearch;
            });

            displayProducts(filteredProducts);
        }
        function displayProducts(productsToDisplay) {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = '';

            productsToDisplay.forEach(product => {
                const productCard = createProductCard(product);
                grid.appendChild(productCard);
            });
        }
        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            `;
            return card;
        }
        function addToCart(productId) {
            cart.push(productId);
            updateCartCount();

            const cartCount = document.getElementById('cartCount');
            cartCount.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        }
        function updateCartCount() {
            document.getElementById('cartCount').textContent = cart.length;
        }


/// TO-Do-list
const addbtn = document.getElementById("addbtn");
const textinput = document.getElementById("textinput");
const taskList = document.getElementById("taskList");
function addbtask(){
    const tasktext = textinput.value.trim();
    if(tasktext === ""){
        alert("Enter any name before you submit...");
        return
    }
    const li = document.createElement("li");
    li.textContent = tasktext;
    const delbtn = document.createElement("button");
    delbtn.textContent = "❌";
    delbtn.style.margin = "5px";
    delbtn.style.cursor = "poninter";
    delbtn.onclick=()=>li.remove();
    li.appendChild(delbtn);
    taskList.appendChild(li);
    textinput.value = "";
}
addbtn.addEventListener('click',addbtask);
textinput.addEventListener('keypress',function(e){
    if(e.key == "Enter"){
        addbtask()
    }
})