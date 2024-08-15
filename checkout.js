document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');
    const paymentSection = document.getElementById('payment-method');
    const proceedToPaymentBtn = document.getElementById('proceed-to-payment');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            totalPriceElem.textContent = 'Total Price: $0.00';
        } else {
            let totalPrice = 0;
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Size: ${item.size}</p>
                `;
                cartItemsContainer.appendChild(cartItem);
                totalPrice += parseFloat(item.price.replace('$', ''));
            });
            totalPriceElem.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        }
    }

    proceedToPaymentBtn.addEventListener('click', () => {
        paymentSection.style.display = 'block';
    });

    // Add form submit event listener for payment (example; in real applications, integrate with a payment API)
    document.getElementById('payment-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Payment processed successfully!');
        localStorage.removeItem('cart'); // Clear cart after successful payment
        location.reload(); // Reload page to reset checkout
    });

    // Render cart items and total price on page load
    renderCart();
});
