// This file contains the JavaScript code to handle the functionality of the menu icon.
// It toggles the visibility of the menu links when the icon is clicked.

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menuLinks = document.getElementById('menu-links');

    menuIcon.addEventListener('click', function() {
        menuLinks.classList.toggle('active');
    });
});