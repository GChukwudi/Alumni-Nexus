// Bavu Menu bar script.js

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    if (menuIcon && nav) {
        menuIcon.addEventListener('click', function (event) {
            nav.classList.toggle('active');
            event.stopPropagation();
        });

        // Add event listener to close the nav when the window is clicked outside of it
        document.addEventListener('click', function (event) {
            if (!nav.contains(event.target) && window.innerWidth <= 600) {
                nav.classList.remove('active');
            }
        });

        // Add event listener to close the nav when the window is resized to a larger screen
        window.addEventListener('resize', function () {
            if (window.innerWidth > 600) {
                nav.classList.remove('active');
            }
        });
    }
});
