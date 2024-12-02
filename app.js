// Change header color on scroll (optional)
window.onscroll = function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333';
    } else {
        header.style.backgroundColor = '#7f7fff'; /* Default Growtopia-inspired blue */
    }
};
