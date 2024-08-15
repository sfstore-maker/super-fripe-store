document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function removeFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCount(); // Update the cart count on the home page
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Size: ${item.size}</p>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                    <button class="cancel-item" data-id="${item.id}">Cancel</button>
                `;
                cartItemsContainer.appendChild(cartItem);

                // Accumulate total price
                totalPrice += parseFloat(item.price.replace('$', ''));
            });

            // Display total price
            const total = document.createElement('div');
            total.className = 'cart-total';
            total.innerHTML = `<h3>Total Price: $${totalPrice.toFixed(2)}</h3>`;
            cartItemsContainer.appendChild(total);

            // Add event listeners for remove and cancel buttons
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (event) => {
                    const itemId = event.target.getAttribute('data-id');
                    removeFromCart(itemId);
                });
            });

            document.querySelectorAll('.cancel-item').forEach(button => {
                button.addEventListener('click', (event) => {
                    const itemId = event.target.getAttribute('data-id');
                    removeFromCart(itemId); // Cancel and remove from cart
                });
            });
        }
    }

    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.length;
    }

    checkoutButton.addEventListener('click', () => {
        // Redirect to checkout page or handle checkout process
        alert('Proceeding to checkout...');
        // For example, you could redirect to a checkout page
        // window.location.href = 'checkout.html';
    });

    renderCart();
    updateCartCount(); // Ensure the cart count on the home page is updated
});
