document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function openModal(item) {
        const imgSrc = item.getAttribute('data-image');
        const price = item.getAttribute('data-price');
        const size = item.getAttribute('data-size');
        const title = item.querySelector('h3').textContent;
        
        document.getElementById('modal-image').src = imgSrc;
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-price').textContent = price;
        document.getElementById('modal-size').textContent = size;
        modal.style.display = 'block';
    }

    function addToCart(item) {
        const id = item.getAttribute('data-id');
        const image = item.getAttribute('data-image');
        const price = item.getAttribute('data-price');
        const size = item.getAttribute('data-size');
        const title = item.querySelector('h3').textContent;
        
        const cartItem = { id, image, price, size, title };
        
        // Add to cart if not already in cart
        if (!cart.find(item => item.id === id)) {
            cart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        }
    }

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Event listener for product items
    document.querySelectorAll('.product-item').forEach(item => {
        item.addEventListener('click', () => {
            openModal(item);
        });
    });

    // Event listener for modal close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Event listener for clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Event listener for 'Add to Cart' button in modal
    document.querySelector('.add-to-cart').addEventListener('click', () => {
        addToCart(document.querySelector('.product-item[data-id="' + document.getElementById('modal-title').textContent + '"]'));
        modal.style.display = 'none';
    });

    // Event listener for 'Add to Cart' button in products
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            const item = btn.closest('.product-item');
            addToCart(item);
        });
    });

    // Initialize cart count
    updateCartCount();
});
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const filterCategory = document.getElementById('filter-category');
    const productItems = document.querySelectorAll('.product-item');

    // Function to filter and search products
    function filterProducts() {
        const searchQuery = searchBar.value.toLowerCase();
        const selectedCategory = filterCategory.value;

        productItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const category = item.getAttribute('data-category');
            
            // Check if item matches search query
            const matchesSearch = title.includes(searchQuery);
            // Check if item matches selected category
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
            
            // Display item if both conditions match
            if (matchesSearch && matchesCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Event listeners for search bar and filter dropdown
    searchBar.addEventListener('input', filterProducts);
    filterCategory.addEventListener('change', filterProducts);
    
    // Initial filter to apply default values
    filterProducts();
});
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const filterCategory = document.getElementById('filter-category');
    const productItems = document.querySelectorAll('.product-item');

    function filterProducts() {
        const searchQuery = searchBar.value.toLowerCase();
        const selectedCategory = filterCategory.value;

        productItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const category = item.getAttribute('data-category');

            // Check if item matches search query
            const matchesSearch = title.includes(searchQuery);
            // Check if item matches selected category
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

            // Display item if both conditions match
            if (matchesSearch && matchesCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Event listeners for search bar and filter dropdown
    searchBar.addEventListener('input', filterProducts);
    filterCategory.addEventListener('change', filterProducts);

    // Initial filter to apply default values
    filterProducts();
});
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close');

    function showModal() {
        modal.style.display = 'block';
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    closeBtn.addEventListener('click', hideModal);

    // Example: Show the modal when a button is clicked
    document.querySelector('.show-modal-btn').addEventListener('click', showModal);
});
 document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const productItems = document.querySelectorAll('.product-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const size = this.getAttribute('data-size');

            productItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                const itemSize = item.getAttribute('data-size');

                if ((category === 'all' || itemCategory === category) &&
                    (size === 'all' || itemSize === size)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close');
    const addToCartBtn = document.getElementById('add-to-cart');
    const cartCount = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function openModal(item) {
        const imgSrc = item.getAttribute('data-image');
        const price = item.getAttribute('data-price');
        const size = item.getAttribute('data-size');
        const title = item.querySelector('h3').textContent;

        document.getElementById('modal-image').src = imgSrc;
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-price').textContent = price;
        document.getElementById('modal-size').textContent = size;
        modal.style.display = 'flex';
    }

    function addToCart(item) {
        const id = item.getAttribute('data-id');
        const image = item.getAttribute('data-image');
        const price = item.getAttribute('data-price');
        const size = item.getAttribute('data-size');
        const title = item.querySelector('h3').textContent;

        const cartItem = { id, image, price, size, title };

        // Add to cart if not already in cart
        if (!cart.find(item => item.id === id)) {
            cart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        }
    }

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Event listener for product items
    document.querySelectorAll('.product-item').forEach(item => {
        item.addEventListener('click', () => {
            openModal(item);
        });
    });

    // Event listener for modal close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Event listener for clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Event listener for 'Add to Cart' button in modal
    addToCartBtn.addEventListener('click', () => {
        const item = document.querySelector('.product-item[data-id="' + document.getElementById('modal-title').textContent + '"]');
        addToCart(item);
        modal.style.display = 'none';
    });

    // Initialize cart count
    updateCartCount();
});


