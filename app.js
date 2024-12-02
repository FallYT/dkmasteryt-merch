// Simple alert for adding to cart
document.querySelectorAll(".product-card .btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});
