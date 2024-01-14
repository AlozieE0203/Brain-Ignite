document.querySelector('.check-products-btn').addEventListener('click', function () {
    document.getElementById('products-page').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('a[href="#contact"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('a[href="#products"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('products-page').scrollIntoView({ behavior: 'smooth' });
});