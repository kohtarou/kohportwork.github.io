function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}