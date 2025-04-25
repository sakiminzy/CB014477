// Product data
const products = {
    processors: [
        { id: 'i9-13900k', name: 'Intel Core i9-13900K', price: 699.99, image: 'https://www.nexxcom.lk/wp-content/uploads/2023/10/I9-14900.png', specs: '24 cores, 5.8GHz Max' },
        { id: 'r9-7950x', name: 'AMD Ryzen 9 7950X', price: 599.99, image: 'https://www.gamestreet.lk/images/products/4580.jpg', specs: '16 cores, 5.7GHz Max' },
        { id: 'i7-13700k', name: 'Intel Core i7-13700K', price: 409.99, image: 'https://www.barclays.lk/mmBC/Images/CPUI6678.jpg', specs: '16 cores, 5.4GHz Max' },
        { id: 'r7-7700x', name: 'AMD Ryzen 7 7700X', price: 349.99, image: 'https://i0.wp.com/www.redlinetech.lk/wp-content/uploads/2023/03/LD0005997308-removebg-preview.png?fit=500%2C500&ssl=1', specs: '8 cores, 5.4GHz Max' },
        { id: 'i5-13600k', name: 'Intel Core i5-13600K', price: 319.99, image: 'https://redtech.lk/wp-content/uploads/2022/10/Intel-Core-i5-13600K.png', specs: '14 cores, 5.1GHz Max' },
        { id: 'r5-7600x', name: 'AMD Ryzen 5 7600X', price: 299.99, image: 'https://myitem.lk/wp-content/uploads/2024/07/AMD-Ryzen-5-7600X.jpg', specs: '6 cores, 5.3GHz Max' }
    ],
    gpus: [
        { id: 'rtx4090', name: 'NVIDIA RTX 4090', price: 1599.99, image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg', specs: '24GB GDDR6X' },
        { id: 'rx7900xtx', name: 'AMD RX 7900 XTX', price: 999.99, image: 'https://assets-prd.ignimgs.com/2022/12/10/pxl-20221205-200737220-portrait-1670634086080.jpg', specs: '24GB GDDR6' },
        { id: 'rtx4080', name: 'NVIDIA RTX 4080', price: 1199.99, image: 'https://i5.walmartimages.com/seo/NVIDIA-GeForce-RTX-4080-SUPER-16GB-GDDR6X-Graphics-Card-Titanium-Black_da65504f-75b9-4f57-a7b0-ff32904af987.9a7ac467cdb2621dd467a2e6a8acdb02.jpeg', specs: '16GB GDDR6X' },
        { id: 'rx7900xt', name: 'AMD RX 7900 XT', price: 899.99, image: 'https://images-cdn.ubuy.co.in/63d59f4d9332b84bea3d0c19-sapphire-21323-01-20g-amd-radeon-rx-7900.jpg', specs: '20GB GDDR6' },
        { id: 'rtx4070ti', name: 'NVIDIA RTX 4070 Ti', price: 799.99, image: 'https://www.gamestreet.lk/images/products/5637.jpg', specs: '12GB GDDR6X' },
        { id: 'rx6800xt', name: 'AMD RX 6800 XT', price: 649.99, image: 'https://m.media-amazon.com/images/I/41ukBwoPBrL.jpg', specs: '16GB GDDR6' }
    ],
    motherboards: [
        { id: 'maximus-z790', name: 'ASUS ROG Maximus Z790', price: 599.99, image: 'https://www.gamestreet.lk/images/products/6290.jpg', specs: 'Intel Z790, DDR5' },
        { id: 'meg-x670e', name: 'MSI MEG X670E', price: 499.99, image: 'https://storage-asset.msi.com/global/picture/image/feature/mb/X670/meg/MEG-X670E-ACE/meg-kv.png', specs: 'AMD X670E, DDR5' },
        { id: 'aorus-z790', name: 'GIGABYTE Z790 AORUS', price: 449.99, image: 'https://redtech.lk/wp-content/uploads/2022/11/GIGABYTE-Z790-AORUS-ELITE-AX-Intel-Motherboard_0003_REDTECH.LK-copy-11.png', specs: 'Intel Z790, DDR5' },
        { id: 'x670e-taichi', name: 'ASRock X670E Taichi', price: 399.99, image: 'https://images-cdn.ubuy.ae/635fa749f214b6680a312996-asrock-x670e-taichi-support-amd-am5.jpg', specs: 'AMD X670E, DDR5' },
        { id: 'tuf-b650', name: 'ASUS TUF Gaming B650', price: 299.99, image: 'https://dlcdnwebimgs.asus.com/gain/91dc024e-f292-41c6-9e70-db2cdb7def5b/w800', specs: 'AMD B650, DDR5' },
        { id: 'pro-b760', name: 'MSI PRO B760', price: 199.99, image: 'https://storage-asset.msi.com/global/picture/image/feature/mb/PRO-B760/pro-b760-p-ii/kv-pd.png', specs: 'Intel B760, DDR5' }
    ],
    ram: [
        { id: 'trident-z5', name: 'G.SKILL Trident Z5 32GB', price: 199.99, image: 'https://www.gamestreet.lk/images/products/4200.jpg', specs: 'DDR5-6000, CL36' },
        { id: 'dominator-32', name: 'Corsair Dominator 32GB', price: 189.99, image: 'https://www.gamestreet.lk/images/products/4146.jpg', specs: 'DDR5-5600, CL36' },
        { id: 'ballistix-16', name: 'Crucial Ballistix 16GB', price: 89.99, image: 'https://i5.walmartimages.com/seo/Crucial-Ballistix-3200-MHz-DDR4-DRAM-Desktop-Gaming-Memory-Kit-32GB-16GBx2-CL16-BL2K16G32C16U4W-WHITE_540b0d02-8ae1-4fb1-906d-3cfe4d98c28d.cc2eb0e5770ee0d55bea4a5f5aa722ab.jpeg', specs: 'DDR4-3600, CL16' },
        { id: 'fury-16', name: 'Kingston FURY 16GB', price: 79.99, image: 'https://www.tulipcom.lk/public/dbimages/product/1706682100_pdt_1.jpg', specs: 'DDR4-3200, CL16' },
        { id: 'Vengeance-LPX', name: 'Corsair Vengeance LPX', price: 99.99, image: 'https://sltechie.lk/wp-content/uploads/2021/05/1372-20210322120543-1204-20190921140308-1110-20190618115156-791-20190206085934-145-20170303133425-veng_lpx_blk_01-min.png', specs: 'DDR4-3200, CL16' },
        { id: 'Trident-Z5', name: 'G.Skill Trident Z5 Neo Series ', price: 109.99, image: 'https://m.media-amazon.com/images/I/61mydyeMZEL._AC_SL1300_.jpg', specs: 'DDR5-3200, CL16' }
    ],
    storage: [
        { id: '990-pro-2tb', name: 'Samsung 990 PRO 2TB', price: 179.99, image: 'https://www.gamestreet.lk/images/products/6234.jpg', specs: 'NVMe PCIe 4.0, 7450MB/s' },
        { id: 'sn850x-2tb', name: 'WD Black SN850X 2TB', price: 169.99, image: 'https://i5.walmartimages.com/seo/WD-BLACK-SN850X-NVMe-Internal-SSD-2TB-WDBB9G0020BNC-WRSN_5592d348-4886-4dc0-9cb8-a8f4bdf9ca84.6999c8aaeb7d736cf982b1409cce13ae.jpeg', specs: 'NVMe PCIe 4.0, 7300MB/s' },
        { id: 'p5-plus-1tb', name: 'Crucial P5 Plus 1TB', price: 89.99, image: 'https://images-cdn.ubuy.co.in/633c3ffb3e0dce1bfa025677-crucial-p5-plus-2tb-pcie-4-0-3d-nand.jpg', specs: 'NVMe PCIe 4.0, 6600MB/s' },
        { id: '870-evo-1tb', name: 'Samsung 870 EVO 1TB', price: 79.99, image: 'https://raretech.lk/pub/media/catalog/product/cache/0ed79f8b51e2ff6c0bf629cd9df2dacc/1/t/1tb_1_1.jpg', specs: 'SATA III, 560MB/s' },
        { id: 'blue-2tb', name: 'WD Blue 2TB HDD', price: 49.99, image: 'https://www.sense.lk/images/uploads/product/63307_6052_wd-blue.png', specs: '7200RPM, SATA III' },
        { id: 'barracuda-2tb', name: 'Seagate Barracuda 2TB', price: 47.99, image: 'https://techzone.lk/wp-content/uploads/2021/03/seagate-baracuda-2tb.jpg', specs: '7200RPM, SATA III' }
    ]
};

// Cart data structure
let cart = [];

// Create product card
function createProductCard(product, type) {
    return `
        <div class="col">
            <div class="card h-100 product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.specs}</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="h5 mb-0">$${product.price.toFixed(2)}</span>
                        <input type="number" class="form-control quantity-input" min="1" value="1" id="${product.id}-qty">
                    </div>
                    <button class="btn btn-primary btn-add-to-cart" onclick="addToCart('${type}', '${product.id}')">
                        <i class="bi bi-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Initialize product cards
function initializeProductCards() {
    document.getElementById('processorCards').innerHTML = products.processors.map(p => createProductCard(p, 'processors')).join('');
    document.getElementById('gpuCards').innerHTML = products.gpus.map(p => createProductCard(p, 'gpus')).join('');
    document.getElementById('motherboardCards').innerHTML = products.motherboards.map(p => createProductCard(p, 'motherboards')).join('');
    document.getElementById('ramCards').innerHTML = products.ram.map(p => createProductCard(p, 'ram')).join('');
    document.getElementById('storageCards').innerHTML = products.storage.map(p => createProductCard(p, 'storage')).join('');
}

// Add item to cart
function addToCart(type, productId) {
    const product = products[type].find(p => p.id === productId);
    const qtyInput = document.getElementById(`${productId}-qty`);
    const qty = parseInt(qtyInput.value);

    if (product && qty > 0) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.qty += qty;
        } else {
            cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                qty: qty
            });
        }
        
        updateCartTable();
        qtyInput.value = 1;
    }
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartTable();
}

// Update cart table
function updateCartTable() {
    const tbody = document.getElementById('cartBody');
    const totalElement = document.getElementById('cartTotal');
    let total = 0;
    
    tbody.innerHTML = '';
    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">
                <i class="bi bi-trash"></i>
            </button></td>
        `;
        tbody.appendChild(row);
    });
    
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Save cart as favorite
function saveAsFavorite() {
    if (cart.length > 0) {
        localStorage.setItem('favoriteOrder', JSON.stringify(cart));
        alert('Order saved as favorite!');
    } else {
        alert('Cart is empty!');
    }
}

// Apply favorites
function applyFavorites() {
    const favoriteOrder = localStorage.getItem('favoriteOrder');
    if (favoriteOrder) {
        cart = JSON.parse(favoriteOrder);
        updateCartTable();
    } else {
        alert('No favorite order found!');
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length > 0) {
        localStorage.setItem('currentOrder', JSON.stringify(cart));
        window.location.href = 'checkout.html';
    } else {
        alert('Cart is empty!');
    }
}

// Load order summary on checkout page
function loadOrderSummary() {
    if (window.location.pathname.includes('checkout.html')) {
        const orderData = localStorage.getItem('currentOrder');
        if (orderData) {
            cart = JSON.parse(orderData);
            const tbody = document.getElementById('orderSummaryBody');
            const totalElement = document.getElementById('orderTotal');
            let total = 0;
            
            tbody.innerHTML = '';
            cart.forEach(item => {
                const row = document.createElement('tr');
                const itemTotal = item.price * item.qty;
                total += itemTotal;
                
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.qty}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>$${itemTotal.toFixed(2)}</td>
                `;
                tbody.appendChild(row);
            });
            
            totalElement.textContent = `$${total.toFixed(2)}`;
        }
    }
}

// Handle checkout form submission
if (window.location.pathname.includes('checkout.html')) {
    document.getElementById('checkoutForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (this.checkValidity()) {
            const deliveryDate = new Date();
            deliveryDate.setDate(deliveryDate.getDate() + 5); // Delivery in 5 days
            
            alert(`Thank you for your purchase! Your order will be delivered by ${deliveryDate.toLocaleDateString()}.`);
            localStorage.removeItem('currentOrder');
            window.location.href = 'order.html';
        }
        
        this.classList.add('was-validated');
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    if (!window.location.pathname.includes('checkout.html')) {
        initializeProductCards();
    }
    loadOrderSummary();
});
