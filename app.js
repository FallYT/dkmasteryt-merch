document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
});
