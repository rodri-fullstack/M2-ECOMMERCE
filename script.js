let cartCount = 0;

function updateCartCount() {
    const badge = document.querySelector('#cart-count');
    if (badge) {
        badge.textContent = cartCount;
    }
}

// Función para aumentar el carrito
function addToCart() {
    cartCount++;
    updateCartCount();
}

// Botones en Home (index.html)
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', addToCart);
});

// Botón en product.html
const detailBtn = document.querySelector('#add-to-cart-detail');
if (detailBtn) {
    detailBtn.addEventListener('click', addToCart);
}

// Mantener el badge correctamente en todas las páginas
updateCartCount();
