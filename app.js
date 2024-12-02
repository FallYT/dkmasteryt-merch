// Change header color on scroll
window.onscroll = function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333';
    } else {
        header.style.backgroundColor = '#111';
    }
};
