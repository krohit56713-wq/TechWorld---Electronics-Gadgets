// Expanded Products Array Sourced from Amazon Image CDN
const products = [
  // --- SMARTPHONES ---
  {
    id: 1,
    name: "Apple iPhone 15 Pro (128 GB)",
    brand: "Apple",
    category: "smartphones",
    price: 999.99,
    specs: "6.1-inch Super Retina XDR, A17 Pro, Natural Titanium",
    description: "Forged in titanium with action button, A17 Pro chip, and a pro camera system.",
    rating: 4.9,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/81CgtwSII3L._SL1500_.jpg"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra 5G",
    brand: "Samsung",
    category: "smartphones",
    price: 1199.99,
    specs: "12GB RAM, 512GB Storage, Titanium Gray, S-Pen",
    description: "Galaxy AI search features with 200MP camera and Snapdragon 8 Gen 3.",
    rating: 4.8,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/71RVu39yvUL._SL1500_.jpg"
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "smartphones",
    price: 899.00,
    specs: "12GB RAM, 128GB Storage, Obsidian Black",
    description: "Engineered by Google with Tensor G3 chip and magical AI image editing.",
    rating: 4.7,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/712BOm3vJ8L._SL1500_.jpg"
  },
  {
    id: 4,
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    category: "smartphones",
    price: 799.99,
    specs: "16GB RAM, 512GB Storage, Silky Black",
    description: "Snapdragon 8 Gen 3 with 4th Gen Hasselblad Camera for Mobile.",
    rating: 4.8,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/717Qo4MH97L._SL1500_.jpg"
  },

  // --- LAPTOPS & TABLETS ---
  {
    id: 5,
    name: "Apple MacBook Pro 16\" M3 Max",
    brand: "Apple",
    category: "laptops",
    price: 2499.99,
    specs: "16-core CPU, 40-core GPU, 36GB Unified Memory, 1TB SSD",
    description: "Extreme pro-level workstation performance with Liquid Retina XDR display.",
    rating: 4.9,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/61aUBxvo1AL._SL1500_.jpg"
  },
  {
    id: 6,
    name: "Dell XPS 15 9530 Laptop",
    brand: "Dell",
    category: "laptops",
    price: 1799.00,
    specs: "15.6\" 3.5K OLED Touch, Intel i7-13700H, 32GB RAM, 1TB SSD",
    description: "CNC machined aluminum body with stunning 3.5K OLED touch panel.",
    rating: 4.7,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/71x3I2v-08L._SL1500_.jpg"
  },
  {
    id: 7,
    name: "Apple iPad Air 11\" M2",
    brand: "Apple",
    category: "laptops",
    price: 599.00,
    specs: "Liquid Retina Display, 128GB, Wi-Fi 6E, Space Gray",
    description: "Fresh M2 chip integration for fast multitasking, Apple Pencil Pro support.",
    rating: 4.8,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/61K4a4x8u+L._SL1500_.jpg"
  },
  {
    id: 8,
    name: "HP Spectre x360 2-in-1 Laptop",
    brand: "HP",
    category: "laptops",
    price: 1499.99,
    specs: "14\" 2.8K OLED, Intel Core Ultra 7, 16GB RAM",
    description: "360-degree convertible laptop with integrated Intel Arc graphics.",
    rating: 4.6,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/71f2I13U2vL._SL1500_.jpg"
  },

  // --- AUDIO & WEARABLES ---
  {
    id: 9,
    name: "Sony WH-1000XM5 Wireless Headphones",
    brand: "Sony",
    category: "audio",
    price: 398.00,
    specs: "Auto NC Optimizer, 30h Battery, Hands-Free Calling",
    description: "Industry-leading active noise cancellation with dual noise sensor processors.",
    rating: 4.9,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/51aXvjzcukL._SL1500_.jpg"
  },
  {
    id: 10,
    name: "Apple AirPods Pro (2nd Generation)",
    brand: "Apple",
    category: "audio",
    price: 249.00,
    specs: "H2 Chip, USB-C Charging Case, Active Noise Cancellation",
    description: "Up to 2x more noise cancellation with adaptive audio and spatial sound.",
    rating: 4.8,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg"
  },
  {
    id: 11,
    name: "Apple Watch Series 9 GPS 45mm",
    brand: "Apple",
    category: "audio",
    price: 429.00,
    specs: "S9 SiP Chip, Double Tap Gesture, Midnight Aluminum",
    description: "Brighter display, advanced fitness metrics, and double tap magic gesture.",
    rating: 4.8,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg"
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch 6 Classic",
    brand: "Samsung",
    category: "audio",
    price: 349.99,
    specs: "47mm Bluetooth, Rotating Bezel, Fitness Tracker",
    description: "Iconic rotating physical bezel with detailed sleep coaching metrics.",
    rating: 4.7,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/61S8n42z1dL._SL1500_.jpg"
  },

  // --- MOBILE ACCESSORIES ---
  {
    id: 13,
    name: "Anker 737 Power Bank (PowerCore 24K)",
    brand: "Anker",
    category: "accessories",
    price: 139.99,
    specs: "24,000mAh, 140W Fast Output, Smart Digital Display",
    description: "Ultra-powerful 140W fast portable power bank capable of charging laptops.",
    rating: 4.8,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/61M-kX1n2NL._SL1500_.jpg"
  },
  {
    id: 14,
    name: "Apple MagSafe Wireless Charger",
    brand: "Apple",
    category: "accessories",
    price: 39.00,
    specs: "15W Fast Wireless Charging, USB-C Cable Integrated",
    description: "Perfectly aligned magnetic fast charger for iPhone models.",
    rating: 4.7,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/718C9M4yZpL._SL1500_.jpg"
  },
  {
    id: 15,
    name: "Anker 65W GaN Fast Wall Charger",
    brand: "Anker",
    category: "accessories",
    price: 45.99,
    specs: "3-Port Fast Charger (2 USB-C, 1 USB-A), Foldable",
    description: "Powered by GaN II tech for high-speed multi-device charging.",
    rating: 4.8,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/51wY-d3V+oL._SL1500_.jpg"
  },
  {
    id: 16,
    name: "Spigen Tough Armor Phone Case",
    brand: "Spigen",
    category: "accessories",
    price: 19.99,
    specs: "Dual Layer Drop Protection, Kickstand Integrated",
    description: "Impact foam technology for extreme shock absorption.",
    rating: 4.7,
    stock: "In Stock",
    image: "https://m.media-amazon.com/images/I/61j64+ZfAFL._SL1500_.jpg"
  }
];

let cart = JSON.parse(localStorage.getItem('techworld_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('techworld_wishlist')) || [];
let orders = JSON.parse(localStorage.getItem('techworld_orders')) || [
  { id: "ORD-54812", date: "2026-10-20", total: 1049.99, status: "Delivered" }
];
let activeCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  updateWishlistBadge();
  renderOrderHistory();
});

function showSection(sectionId) {
  const views = ['homeView', 'categoryPageView', 'cartView', 'checkoutView', 'wishlistView', 'accountView', 'aboutView', 'contactView'];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });

  const target = document.getElementById(sectionId + 'View');
  if (target) target.classList.remove('hidden');

  if (sectionId === 'cart') renderCart();
  if (sectionId === 'wishlist') renderWishlist();
  if (sectionId === 'checkout') renderCheckoutSummary();
  if (sectionId === 'account') renderOrderHistory();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToCategory(cat) {
  activeCategory = cat;
  showSection('categoryPage');

  const titleEl = document.getElementById('currentCategoryTitle');
  const breadcrumbEl = document.getElementById('breadcrumbCategoryName');

  const categoryNames = {
    'all': 'All Products & Electronics',
    'smartphones': 'Smartphones Collection',
    'laptops': 'Laptops & Tablets',
    'audio': 'Audio & Smart Wearables',
    'accessories': 'Mobile Accessories & Charging'
  };

  titleEl.innerText = categoryNames[cat] || 'Category Products';
  breadcrumbEl.innerText = cat;

  const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
  renderProducts(filtered);
}

function renderProducts(items = products) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 bg-white rounded-xl border">
        <i class="fa-solid fa-magnifying-glass text-4xl text-gray-300 mb-2"></i>
        <p class="font-bold text-gray-600">No matching items found.</p>
        <button onclick="navigateToCategory('all')" class="mt-3 text-xs bg-darkBlue text-white px-4 py-2 rounded">View All Products</button>
      </div>`;
    return;
  }

  grid.innerHTML = items.map(p => {
    const isWish = wishlist.some(item => item.id === p.id);
    return `
      <div class="product-card bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-lg flex flex-col justify-between">
        <div class="relative bg-gray-100 flex items-center justify-center p-2">
          <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-contain">
          <button onclick="toggleWishlist(${p.id})" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur hover:bg-white flex items-center justify-center text-gray-600 hover:text-red-500 shadow transition">
            <i class="fa-${isWish ? 'solid' : 'regular'} fa-heart ${isWish ? 'text-red-500' : ''}"></i>
          </button>
          <span class="absolute bottom-2 left-2 bg-darkBlue/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur">
            ${p.brand}
          </span>
        </div>

        <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span class="uppercase font-semibold text-darkBlue">${p.category}</span>
              <span class="text-amber-500 font-bold"><i class="fa-solid fa-star mr-1"></i>${p.rating}</span>
            </div>
            <h3 class="font-bold text-gray-800 text-sm leading-snug hover:text-techBlue cursor-pointer line-clamp-2" onclick="openProductModal(${p.id})">
              ${p.name}
            </h3>
            <p class="text-xs text-gray-500 mt-1 line-clamp-2">${p.specs}</p>
          </div>

          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-lg font-black text-darkBlue">$${p.price.toFixed(2)}</span>
              <span class="text-[10px] bg-green-100 text-green-800 font-semibold px-2 py-0.5 rounded">
                ${p.stock}
              </span>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button onclick="openProductModal(${p.id})" class="text-xs font-bold border border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white py-2 rounded-lg transition">
                Details
              </button>
              <button onclick="addToCart(${p.id})" class="text-xs font-bold bg-techBlue hover:bg-cyan-500 text-darkBlue py-2 rounded-lg transition flex items-center justify-center gap-1 shadow-sm">
                <i class="fa-solid fa-cart-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('productCountText').innerText = `Showing ${items.length} item(s)`;
}

function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  filterByQuery(query);
}

function handleSearchMobile() {
  const query = document.getElementById('searchInputMobile').value.toLowerCase();
  filterByQuery(query);
}

function filterByQuery(query) {
  showSection('categoryPage');
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.brand.toLowerCase().includes(query) || 
    p.specs.toLowerCase().includes(query)
  );
  renderProducts(filtered);
}

function sortProducts() {
  const val = document.getElementById('sortSelect').value;
  let sorted = [...products];

  if (activeCategory !== 'all') {
    sorted = sorted.filter(p => p.category === activeCategory);
  }

  if (val === 'low-high') sorted.sort((a, b) => a.price - b.price);
  if (val === 'high-low') sorted.sort((a, b) => b.price - a.price);
  if (val === 'rating') sorted.sort((a, b) => b.rating - a.rating);

  renderProducts(sorted);
}

function addToCart(productId, qty = 1) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    const item = products.find(p => p.id === productId);
    cart.push({ ...item, quantity: qty });
  }

  saveCart();
  updateCartBadge();
  showToast('Added to cart successfully!');
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCount').innerText = count;
}

function updateQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  saveCart();
  renderCart();
  updateCartBadge();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
  updateCartBadge();
  showToast('Item removed from cart');
}

function renderCart() {
  const container = document.getElementById('cartItemsContainer');
  const emptyState = document.getElementById('cartEmptyState');
  const cartContent = document.getElementById('cartContent');

  if (cart.length === 0) {
    emptyState.classList.remove('hidden');
    cartContent.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  cartContent.classList.remove('hidden');

  container.innerHTML = cart.map(item => `
    <div class="bg-white p-4 rounded-xl border flex flex-col sm:flex-row items-center gap-4">
      <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-contain rounded-lg bg-gray-50 p-1">
      <div class="flex-1 text-center sm:text-left">
        <h4 class="font-bold text-gray-800 text-sm">${item.name}</h4>
        <p class="text-xs text-gray-500">${item.specs}</p>
        <span class="text-darkBlue font-extrabold text-sm mt-1 block">$${item.price.toFixed(2)}</span>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="updateQuantity(${item.id}, -1)" class="w-7 h-7 bg-gray-200 rounded font-bold text-gray-700 hover:bg-gray-300">-</button>
        <span class="w-8 text-center font-bold text-sm">${item.quantity}</span>
        <button onclick="updateQuantity(${item.id}, 1)" class="w-7 h-7 bg-gray-200 rounded font-bold text-gray-700 hover:bg-gray-300">+</button>
      </div>

      <div class="text-right">
        <span class="font-black text-darkBlue text-base block">$${(item.price * item.quantity).toFixed(2)}</span>
        <button onclick="removeFromCart(${item.id})" class="text-xs text-gray-400 hover:text-red-500 mt-1">
          <i class="fa-solid fa-trash"></i> Remove
        </button>
      </div>
    </div>
  `).join('');

  updateSummary();
}

function updateSummary() {
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  document.getElementById('summarySubtotal').innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById('summaryTax').innerText = `$${tax.toFixed(2)}`;
  document.getElementById('summaryTotal').innerText = `$${total.toFixed(2)}`;
}

function saveCart() {
  localStorage.setItem('techworld_cart', JSON.stringify(cart));
}

function renderCheckoutSummary() {
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const total = subtotal * 1.05;
  document.getElementById('checkoutTotal').innerText = `$${total.toFixed(2)}`;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }

  const orderId = "ORD-" + Math.floor(10000 + Math.random() * 90000);
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const total = subtotal * 1.05;

  orders.unshift({
    id: orderId,
    date: new Date().toISOString().split('T')[0],
    total: total,
    status: "Processing"
  });

  localStorage.setItem('techworld_orders', JSON.stringify(orders));
  
  cart = [];
  saveCart();
  updateCartBadge();

  showToast(`Order Placed Successfully! (${orderId})`);
  showSection('account');
}

function toggleWishlist(id) {
  const idx = wishlist.findIndex(item => item.id === id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from Wishlist');
  } else {
    const item = products.find(p => p.id === id);
    wishlist.push(item);
    showToast('Added to Wishlist!');
  }

  localStorage.setItem('techworld_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
  renderProducts();
}

function updateWishlistBadge() {
  document.getElementById('wishlistCount').innerText = wishlist.length;
}

function renderWishlist() {
  const container = document.getElementById('wishlistContainer');
  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 bg-white rounded-xl border">
        <i class="fa-solid fa-heart text-4xl text-gray-300 mb-2"></i>
        <p class="font-bold text-gray-600">Your wishlist is empty.</p>
      </div>`;
    return;
  }

  container.innerHTML = wishlist.map(p => `
    <div class="bg-white rounded-xl border p-4 shadow-sm flex flex-col justify-between">
      <img src="${p.image}" class="h-32 object-contain bg-gray-50 rounded-md mb-2 p-1">
      <h4 class="font-bold text-sm text-gray-800 line-clamp-1">${p.name}</h4>
      <p class="text-xs text-gray-500 mb-2">$${p.price.toFixed(2)}</p>
      <button onclick="addToCart(${p.id})" class="w-full bg-techBlue text-darkBlue font-bold text-xs py-2 rounded">Move to Cart</button>
    </div>
  `).join('');
}

function openProductModal(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="bg-gray-100 rounded-lg p-2 flex items-center justify-center">
      <img src="${item.image}" alt="${item.name}" class="w-full h-64 object-contain">
    </div>
    <div class="space-y-4">
      <span class="text-xs font-bold bg-sky-100 text-darkBlue px-2 py-1 rounded uppercase">${item.category}</span>
      <h3 class="text-xl font-extrabold text-darkBlue">${item.name}</h3>
      <p class="text-sm text-gray-600">${item.description}</p>

      <div class="space-y-1 text-xs text-gray-500 border-t border-b py-2">
        <p><strong>Brand:</strong> ${item.brand}</p>
        <p><strong>Specifications:</strong> ${item.specs}</p>
        <p><strong>Stock Status:</strong> <span class="text-green-600 font-bold">${item.stock}</span></p>
        <p><strong>Rating:</strong> ⭐ ${item.rating} / 5.0</p>
      </div>

      <div class="flex items-center justify-between">
        <span class="text-2xl font-black text-darkBlue">$${item.price.toFixed(2)}</span>
        <button onclick="addToCart(${item.id}); closeProductModal();" class="bg-techBlue hover:bg-cyan-500 text-darkBlue font-bold px-5 py-2.5 rounded-lg shadow text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  `;

  document.getElementById('productDetailModal').classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('productDetailModal').classList.add('hidden');
}

function renderOrderHistory() {
  const container = document.getElementById('orderHistoryContainer');
  if (orders.length === 0) {
    container.innerHTML = '<p class="text-xs text-gray-500">No orders placed yet.</p>';
    return;
  }

  container.innerHTML = orders.map(o => `
    <div class="border rounded-lg p-3 flex justify-between items-center bg-gray-50">
      <div>
        <p class="font-bold text-gray-800">${o.id}</p>
        <p class="text-xs text-gray-500">Date: ${o.date}</p>
      </div>
      <div class="text-right">
        <span class="font-black text-darkBlue block">$${o.total.toFixed(2)}</span>
        <span class="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">${o.status}</span>
      </div>
    </div>
  `).join('');
}

function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  const toastIcon = document.getElementById('toastIcon');

  toastMsg.innerText = msg;
  toastIcon.className = type === 'error' ? 'fa-solid fa-circle-xmark text-red-400' : 'fa-solid fa-circle-check text-techBlue';

  toast.classList.remove('translate-y-20', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}