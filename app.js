document.querySelectorAll(".product-card button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Added to cart!");
    });
});
