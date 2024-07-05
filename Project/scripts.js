const cartItems = [];

function addToCart(productName, productPrice) {
    const cartItemsContainer = document.getElementById('cart-items');
    const newItem = document.createElement('div');
    newItem.classList.add('cart-item');
    newItem.innerHTML = `<p>${productName} - $${productPrice.toFixed(2)}</p>`;
    cartItemsContainer.appendChild(newItem);

    cartItems.push({ name: productName, price: productPrice });
    updateCartMessage();
}

function updateCartMessage() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is currently empty.</p>';
    }
}
