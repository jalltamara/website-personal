let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartMessage();
}

function updateCartMessage() {
    const cartMessage = `Anda memiliki ${cart.length} item dalam keranjang.`;
    document.getElementById('cart-message').innerText = cartMessage;
}
