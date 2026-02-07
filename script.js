let cartCount = 0;

function addToCart(price) {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;

    const popup = document.getElementById("cartPopup");
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 1200);
}
