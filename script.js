// Bavu Menu bar script.js

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    if (menuIcon && nav) {
        menuIcon.addEventListener('click', function () {
            if (window.innerWidth <= 600) { // Adjust this value based on your media query
                nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
            }
        });
    }
});